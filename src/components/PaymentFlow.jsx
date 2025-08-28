import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { ArrowLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ConfirmationOverlay from "./ConfirmationOverlay";
import OrderSummary from "./OrderSummary";
import PaymentForm from "./PaymentForm";
import SuccessMessage from "./SuccessMessage";

// Initialize Stripe with your publishable key
const stripePromise = loadStripe(
  "pk_test_51OOZHSF4dh0KVw2foDKI0RukSl7emwQelRAt4r6uGAnRenzD3yUnezd71F9E9eBPsTpws89HbBYeH625ljXt81Pi008S4Jif56"
);

const PaymentFlow = () => {
  const [currentStep, setCurrentStep] = useState("payment"); // payment, confirmation, success
  const [selectedService, setSelectedService] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const [stripeError, setStripeError] = useState(null);
  const [paymentIntentId, setPaymentIntentId] = useState("");

  // Get selected plan from localStorage
  useEffect(() => {
    const getSelectedService = () => {
      try {
        const storedPlan = localStorage.getItem("selectedPlan");
        if (storedPlan) {
          return JSON.parse(storedPlan);
        }
      } catch (error) {
        console.error("Error retrieving selected plan:", error);
      }

      // Fallback to a default service if nothing is found
      return {
        id: "pd1",
        name: "Pitch Deck - 12 slides",
        price: 650,
        category: "Pitch Decks",
        displayPrice: "$650",
      };
    };

    const service = getSelectedService();
    setSelectedService(service);
    setIsLoading(false);

    // Create PaymentIntent as soon as the page loads
    if (service.price > 0) {
      fetch("http://localhost:4242/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: service.price }),
      })
        .then((res) => res.json())
        .then((data) => {
          setClientSecret(data.clientSecret);
        })
        .catch((error) => {
          console.error("Error creating payment intent:", error);
          setStripeError("Failed to initialize payment system");
        });
    }
  }, []);

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

  const calculateTotal = () => {
    return selectedService ? selectedService.price : 0;
  };

  const handleInputChange = (field, value) => {
    if (field.includes(".")) {
      const [parent, child] = field.split(".");
      setPaymentData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setPaymentData((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const handleSubmitPayment = () => {
    setCurrentStep("confirmation");
  };

  const handleConfirmOrder = async (stripe, elements) => {
    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.origin + "/success",
        payment_method_data: {
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
      },
      redirect: "if_required",
    });

    if (error) {
      setStripeError(error.message);
      setIsLoading(false);
      setCurrentStep("payment");
    } else if (paymentIntent.status === "succeeded") {
      setPaymentIntentId(paymentIntent.id);
      setCurrentStep("success");
      setIsLoading(false);
    }
  };

  const PaymentHeader = () => (
    <div className="mb-8">
      <Link
        to="/intake-form"
        className="flex items-center text-blue-600 hover:text-blue-700 cursor-pointer mb-4"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        <span>Back to Form</span>
      </Link>

      <h1 className="text-3xl font-bold text-gray-900">Complete Your Order</h1>
      <p className="text-gray-600 mt-2">Secure checkout powered by Stripe</p>

      {stripeError && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
          {stripeError}
        </div>
      )}
    </div>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your order details...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {currentStep === "payment" && (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <PaymentHeader />

            {/* Single Column Layout */}
            <div className="space-y-8">
              {/* Payment Form */}
              {clientSecret && (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                  <PaymentForm
                    paymentData={paymentData}
                    handleInputChange={handleInputChange}
                    handleSubmitPayment={handleSubmitPayment}
                  />
                </Elements>
              )}

              {/* Order Summary Below */}
              <OrderSummary
                selectedService={selectedService}
                calculateTotal={calculateTotal}
              />
            </div>
          </div>
        </div>
      )}

      {currentStep === "confirmation" && (
        <>
          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-8 px-4">
            <div className="max-w-4xl mx-auto">
              <PaymentHeader />

              <div className="space-y-8">
                {clientSecret && (
                  <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <PaymentForm
                      paymentData={paymentData}
                      handleInputChange={handleInputChange}
                      handleSubmitPayment={handleSubmitPayment}
                    />
                  </Elements>
                )}

                <OrderSummary
                  selectedService={selectedService}
                  calculateTotal={calculateTotal}
                />
              </div>
            </div>
          </div>

          <ConfirmationOverlay
            selectedService={selectedService}
            calculateTotal={calculateTotal}
            handleConfirmOrder={handleConfirmOrder}
            setCurrentStep={setCurrentStep}
          />
        </>
      )}

      {currentStep === "success" && (
        <SuccessMessage
          paymentData={paymentData}
          selectedService={selectedService}
          paymentIntentId={paymentIntentId}
          setCurrentStep={setCurrentStep}
        />
      )}
    </div>
  );
};

export default PaymentFlow;
