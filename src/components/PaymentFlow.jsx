import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import ConfirmationOverlay from "./ConfirmationOverlay";
import OrderSummary from "./OrderSummary";
import PaymentForm from "./PaymentForm";
import SuccessMessage from "./SuccessMessage";

// Initialize Stripe
const stripePromise = loadStripe(
  "pk_test_51OOZHSF4dh0KVw2foDKI0RukSl7emwQelRAt4r6uGAnRenzD3yUnezd71F9E9eBPsTpws89HbBYeH625ljXt81Pi008S4Jif56"
);

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
    // Get service from localStorage or use default
    const service = {
      id: "pd1",
      name: "Pitch Deck - 12 slides",
      price: 650,
      category: "Pitch Decks",
      displayPrice: "$650",
    };

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

  const handleSubmitPayment = () => {
    setCurrentStep("confirmation");
  };

  // Payment confirmation
  const handleConfirmOrder = async (stripe, elements) => {
    if (!stripe || !elements || !clientSecret) {
      setStripeError("Payment not ready");
      return;
    }

    setIsLoading(true);
    setStripeError(null);

    try {
      // Get the CardNumberElement specifically
      const cardElement = elements.getElement("cardNumber");

      if (!cardElement) {
        throw new Error("Card element not found");
      }

      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: paymentData.fullName,
              email: paymentData.email,
              address: {
                line1: paymentData.billingAddress.street,
                city: paymentData.billingAddress.city,
                state: paymentData.billingAddress.state,
                postal_code: paymentData.billingAddress.zipCode,
                country: paymentData.billingAddress.country,
              },
            },
          },
        }
      );

      if (error) {
        console.error("Payment error:", error);
        setStripeError(error.message);
        setCurrentStep("payment");
      } else {
        console.log("Payment successful:", paymentIntent);
        setPaymentIntentId(paymentIntent.id);
        setCurrentStep("success");
      }
    } catch (error) {
      console.error("Confirmation error:", error);
      setStripeError(error.message || "Payment failed");
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
            <div className="max-w-4xl mx-auto">
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

              <div className="grid lg:grid-cols-2 gap-8">
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
