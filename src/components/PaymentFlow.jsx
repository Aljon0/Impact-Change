import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import ConfirmationOverlay from "./ConfirmationOverlay";
import OrderSummary from "./OrderSummary";
import PaymentForm from "./PaymentForm";
import SuccessMessage from "./SuccessMessage";

// Initialize Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const PaymentFlow = () => {
  const [currentStep, setCurrentStep] = useState("payment");
  const [selectedService, setSelectedService] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const [stripeError, setStripeError] = useState(null);
  const [paymentIntentId, setPaymentIntentId] = useState("");

  const [paymentData, setPaymentData] = useState({
    email: "",
    fullName: "",
    company: "",
    billingAddress: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    },
  });

  useEffect(() => {
    // Get service from localStorage
    const storedPlan = localStorage.getItem("selectedPlan");
    let service = null;

    if (storedPlan) {
      try {
        service = JSON.parse(storedPlan);
      } catch (error) {
        console.error("Error parsing stored plan:", error);
        // Fallback to default if parsing fails
        service = {
          id: "pd1",
          name: "Pitch Deck - 12 slides",
          price: 650,
          category: "Pitch Decks",
          displayPrice: "$650",
        };
      }
    } else {
      // Fallback to default if no stored plan
      service = {
        id: "pd1",
        name: "Pitch Deck - 12 slides",
        price: 650,
        category: "Pitch Decks",
        displayPrice: "$650",
      };
    }

    setSelectedService(service);

    // Create payment intent
    fetch("http://localhost:4242/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: service.price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setStripeError("Failed to initialize payment");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const calculateTotal = () => (selectedService ? selectedService.price : 0);

  const handleInputChange = (field, value) => {
    if (field.includes(".")) {
      const [parent, child] = field.split(".");
      setPaymentData((prev) => ({
        ...prev,
        [parent]: { ...prev[parent], [child]: value },
      }));
    } else {
      setPaymentData((prev) => ({ ...prev, [field]: value }));
    }
  };

  // Validate form before proceeding to confirmation
  const validateForm = (elements) => {
    const cardElement = elements.getElement("cardNumber");
    const expiryElement = elements.getElement("cardExpiry");
    const cvcElement = elements.getElement("cardCvc");

    // Check if required fields are filled
    if (!paymentData.email || !paymentData.fullName) {
      setStripeError("Please fill in all required fields");
      return false;
    }

    // Note: Stripe elements don't provide direct access to check if they're complete
    // We'll handle validation in the payment confirmation step
    return true;
  };

  const handleSubmitPayment = (elements) => {
    // Clear any previous errors
    setStripeError(null);

    if (validateForm(elements)) {
      setCurrentStep("confirmation");
    }
  };

  // Payment confirmation with better validation
  const handleConfirmOrder = async (stripe, elements) => {
    console.log("Starting payment confirmation...");

    if (!stripe || !elements || !clientSecret) {
      console.error("Missing required items:", {
        stripe: !!stripe,
        elements: !!elements,
        clientSecret: !!clientSecret,
      });
      setStripeError("Payment not ready");
      return;
    }

    setIsLoading(true);
    setStripeError(null);

    try {
      // Get all card elements
      const cardNumberElement = elements.getElement("cardNumber");
      const cardExpiryElement = elements.getElement("cardExpiry");
      const cardCvcElement = elements.getElement("cardCvc");

      console.log("Card elements found:", {
        cardNumber: !!cardNumberElement,
        cardExpiry: !!cardExpiryElement,
        cardCvc: !!cardCvcElement,
      });

      if (!cardNumberElement) {
        throw new Error("Card number element not found");
      }

      // Validate that all required payment fields are filled
      if (!paymentData.email || !paymentData.fullName) {
        throw new Error("Please fill in all required fields");
      }

      console.log(
        "Attempting payment with client secret:",
        clientSecret.substring(0, 20) + "..."
      );

      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardNumberElement,
            billing_details: {
              name: paymentData.fullName,
              email: paymentData.email,
              address: {
                line1: paymentData.billingAddress.street || undefined,
                city: paymentData.billingAddress.city || undefined,
                state: paymentData.billingAddress.state || undefined,
                postal_code: paymentData.billingAddress.zipCode || undefined,
                country: paymentData.billingAddress.country || undefined,
              },
            },
          },
        }
      );

      if (error) {
        console.error("Payment error details:", error);

        // Enhanced error message handling
        let errorMessage = error.message || "Payment failed";

        switch (error.type) {
          case "card_error":
            errorMessage = error.message;
            break;
          case "validation_error":
            if (error.code === "incomplete_number") {
              errorMessage = "Please enter a complete card number";
            } else if (error.code === "incomplete_cvc") {
              errorMessage = "Please enter a valid security code (CVC)";
            } else if (error.code === "incomplete_expiry") {
              errorMessage = "Please enter a valid expiry date";
            } else if (error.code === "incomplete_zip") {
              errorMessage = "Please enter a valid zip code";
            } else {
              errorMessage = "Please check your card details and try again";
            }
            break;
          case "authentication_required":
            errorMessage =
              "Your bank requires additional authentication. Please try again.";
            break;
          case "api_connection_error":
            errorMessage =
              "Network error. Please check your connection and try again.";
            break;
          default:
            errorMessage = error.message || "Payment failed - please try again";
        }

        setStripeError(errorMessage);
        setCurrentStep("payment");
      } else {
        console.log("Payment successful:", paymentIntent);
        setPaymentIntentId(paymentIntent.id);
        setCurrentStep("success");
      }
    } catch (error) {
      console.error("Confirmation error:", error);
      setStripeError(error.message || "Payment failed - please try again");
      setCurrentStep("payment");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading && currentStep === "payment") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4">Loading...</p>
        </div>
      </div>
    );
  }

  if (!clientSecret) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">
            Failed to initialize payment. Please refresh.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Elements stripe={stripePromise} options={{ clientSecret }}>
        {/* Always render the payment form when not on success */}
        {currentStep !== "success" && (
          <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-2xl mx-auto">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">
                  Complete Your Order
                </h1>
                {stripeError && (
                  <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
                    {stripeError}
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <PaymentForm
                  paymentData={paymentData}
                  handleInputChange={handleInputChange}
                  handleSubmitPayment={handleSubmitPayment}
                  isDisabled={currentStep === "confirmation"}
                />
                <OrderSummary
                  selectedService={selectedService}
                  calculateTotal={calculateTotal}
                />
              </div>
            </div>
          </div>
        )}

        {/* Confirmation overlay */}
        {currentStep === "confirmation" && (
          <ConfirmationOverlay
            selectedService={selectedService}
            calculateTotal={calculateTotal}
            handleConfirmOrder={handleConfirmOrder}
            setCurrentStep={setCurrentStep}
            isLoading={isLoading}
          />
        )}

        {/* Success page */}
        {currentStep === "success" && (
          <SuccessMessage
            paymentData={paymentData}
            selectedService={selectedService}
            paymentIntentId={paymentIntentId}
            setCurrentStep={setCurrentStep}
          />
        )}
      </Elements>
    </div>
  );
};

export default PaymentFlow;
