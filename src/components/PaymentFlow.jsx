import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ConfirmationOverlay from "./ConfirmationOverlay";
import OrderSummary from "./OrderSummary";
import PaymentForm from "./PaymentForm";
import SuccessMessage from "./SuccessMessage";

const PaymentFlow = () => {
  const [currentStep, setCurrentStep] = useState("payment"); // payment, confirmation, success

  // Get selected plan from memory instead of localStorage
  const getInitialSelectedService = () => {
    // Since we can't use localStorage in artifacts, we'll use a default service
    // In a real app, this would come from localStorage or props
    return {
      id: "pd1",
      name: "Pitch Deck - 12 slides",
      price: 650,
      category: "Pitch Decks",
      displayPrice: "$650",
    };
  };

  const [selectedService] = useState(getInitialSelectedService());

  const [paymentData, setPaymentData] = useState({
    email: "",
    fullName: "",
    company: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    billingAddress: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    },
  });

  const calculateTotal = () => {
    return selectedService.price;
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

  const formatCardNumber = (value) => {
    return value
      .replace(/\s/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
  };

  const formatExpiryDate = (value) => {
    return value.replace(/\D/g, "").replace(/(\d{2})(\d)/, "$1/$2");
  };

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value);
    if (formatted.replace(/\s/g, "").length <= 16) {
      handleInputChange("cardNumber", formatted);
    }
  };

  const handleExpiryChange = (e) => {
    const formatted = formatExpiryDate(e.target.value);
    if (formatted.length <= 5) {
      handleInputChange("expiryDate", formatted);
    }
  };

  const handleCvvChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 4) {
      handleInputChange("cvv", value);
    }
  };

  const handleSubmitPayment = () => {
    setCurrentStep("confirmation");
  };

  const handleConfirmOrder = () => {
    // Here you would integrate with Stripe
    setCurrentStep("success");
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
    </div>
  );

  return (
    <div>
      {currentStep === "payment" && (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <PaymentHeader />

            {/* Single Column Layout */}
            <div className="space-y-8">
              {/* Payment Form */}
              <PaymentForm
                paymentData={paymentData}
                handleInputChange={handleInputChange}
                handleCardNumberChange={handleCardNumberChange}
                handleExpiryChange={handleExpiryChange}
                handleCvvChange={handleCvvChange}
                handleSubmitPayment={handleSubmitPayment}
              />

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
                <PaymentForm
                  paymentData={paymentData}
                  handleInputChange={handleInputChange}
                  handleCardNumberChange={handleCardNumberChange}
                  handleExpiryChange={handleExpiryChange}
                  handleCvvChange={handleCvvChange}
                  handleSubmitPayment={handleSubmitPayment}
                />

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
          setCurrentStep={setCurrentStep}
        />
      )}
    </div>
  );
};

export default PaymentFlow;
