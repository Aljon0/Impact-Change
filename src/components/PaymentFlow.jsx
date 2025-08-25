import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddOnsSection from "./AddOnsSection";
import ConfirmationOverlay from "./ConfirmationOverlay";
import OrderSummary from "./OrderSUmmary";
import PaymentForm from "./PaymentForm";
import SuccessMessage from "./SuccessMessage";

const PaymentFlow = () => {
  const [currentStep, setCurrentStep] = useState("payment"); // payment, confirmation, success

  // Get selected plan from localStorage
  const getInitialSelectedService = () => {
    const storedPlan = localStorage.getItem("selectedPlan");
    if (storedPlan) {
      const plan = JSON.parse(storedPlan);
      return {
        id: plan.id,
        name: `${
          plan.category === "pitch-decks"
            ? "Pitch Deck"
            : plan.category === "business-plans"
            ? "Business Plan"
            : plan.category === "market-research"
            ? "Market Research"
            : plan.category === "linkedin"
            ? "LinkedIn Optimization"
            : "Consulting"
        } - ${plan.name}`,
        price: plan.price,
        category:
          plan.category === "pitch-decks"
            ? "Pitch Decks"
            : plan.category === "business-plans"
            ? "Business Plans"
            : plan.category === "market-research"
            ? "Market Research"
            : plan.category === "linkedin"
            ? "LinkedIn Optimization"
            : "Consulting",
        displayPrice: plan.displayPrice,
      };
    }

    // Fallback if no plan is selected
    return {
      id: "pd1",
      name: "Pitch Deck - 12 slides",
      price: 650,
      category: "Pitch Decks",
      displayPrice: "$650",
    };
  };

  const [selectedService, setSelectedService] = useState(
    getInitialSelectedService()
  );
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  // Available add-ons based on service categories (excluding the already selected service)
  const availableAddOns = {
    "Pitch Decks": [
      {
        id: "bp1",
        name: "Business Plan - Without Financials",
        price: 750,
        category: "Business Plans",
      },
      {
        id: "bp2",
        name: "Business Plan - With Financials",
        price: 850,
        category: "Business Plans",
      },
      {
        id: "mr1",
        name: "Market Research - Essential",
        price: 500,
        category: "Market Research",
      },
      {
        id: "mr2",
        name: "Market Research - Comprehensive",
        price: 900,
        category: "Market Research",
      },
      {
        id: "lo1",
        name: "LinkedIn Optimization - Personal Page",
        price: 750,
        category: "LinkedIn Optimization",
      },
      {
        id: "lo2",
        name: "LinkedIn Optimization - Company Page",
        price: 500,
        category: "LinkedIn Optimization",
      },
      {
        id: "c1",
        name: "Consulting - 30 minutes",
        price: 125,
        category: "Consulting",
      },
      {
        id: "c2",
        name: "Consulting - 45 minutes",
        price: 155,
        category: "Consulting",
      },
      {
        id: "c3",
        name: "Consulting - 60 minutes",
        price: 185,
        category: "Consulting",
      },
    ],
    "Business Plans": [
      {
        id: "pd1",
        name: "Pitch Deck - 12 slides",
        price: 650,
        category: "Pitch Decks",
      },
      {
        id: "pd2",
        name: "Pitch Deck - 18 slides",
        price: 975,
        category: "Pitch Decks",
      },
      {
        id: "pd3",
        name: "Pitch Deck - 24 slides",
        price: 1300,
        category: "Pitch Decks",
      },
      {
        id: "mr1",
        name: "Market Research - Essential",
        price: 500,
        category: "Market Research",
      },
      {
        id: "mr2",
        name: "Market Research - Comprehensive",
        price: 900,
        category: "Market Research",
      },
      {
        id: "lo1",
        name: "LinkedIn Optimization - Personal Page",
        price: 750,
        category: "LinkedIn Optimization",
      },
      {
        id: "lo2",
        name: "LinkedIn Optimization - Company Page",
        price: 500,
        category: "LinkedIn Optimization",
      },
      {
        id: "c1",
        name: "Consulting - 30 minutes",
        price: 125,
        category: "Consulting",
      },
      {
        id: "c2",
        name: "Consulting - 45 minutes",
        price: 155,
        category: "Consulting",
      },
      {
        id: "c3",
        name: "Consulting - 60 minutes",
        price: 185,
        category: "Consulting",
      },
    ],
    "Market Research": [
      {
        id: "pd1",
        name: "Pitch Deck - 12 slides",
        price: 650,
        category: "Pitch Decks",
      },
      {
        id: "pd2",
        name: "Pitch Deck - 18 slides",
        price: 975,
        category: "Pitch Decks",
      },
      {
        id: "pd3",
        name: "Pitch Deck - 24 slides",
        price: 1300,
        category: "Pitch Decks",
      },
      {
        id: "bp1",
        name: "Business Plan - Without Financials",
        price: 750,
        category: "Business Plans",
      },
      {
        id: "bp2",
        name: "Business Plan - With Financials",
        price: 850,
        category: "Business Plans",
      },
      {
        id: "lo1",
        name: "LinkedIn Optimization - Personal Page",
        price: 750,
        category: "LinkedIn Optimization",
      },
      {
        id: "lo2",
        name: "LinkedIn Optimization - Company Page",
        price: 500,
        category: "LinkedIn Optimization",
      },
      {
        id: "c1",
        name: "Consulting - 30 minutes",
        price: 125,
        category: "Consulting",
      },
      {
        id: "c2",
        name: "Consulting - 45 minutes",
        price: 155,
        category: "Consulting",
      },
      {
        id: "c3",
        name: "Consulting - 60 minutes",
        price: 185,
        category: "Consulting",
      },
    ],
    "LinkedIn Optimization": [
      {
        id: "pd1",
        name: "Pitch Deck - 12 slides",
        price: 650,
        category: "Pitch Decks",
      },
      {
        id: "pd2",
        name: "Pitch Deck - 18 slides",
        price: 975,
        category: "Pitch Decks",
      },
      {
        id: "pd3",
        name: "Pitch Deck - 24 slides",
        price: 1300,
        category: "Pitch Decks",
      },
      {
        id: "bp1",
        name: "Business Plan - Without Financials",
        price: 750,
        category: "Business Plans",
      },
      {
        id: "bp2",
        name: "Business Plan - With Financials",
        price: 850,
        category: "Business Plans",
      },
      {
        id: "mr1",
        name: "Market Research - Essential",
        price: 500,
        category: "Market Research",
      },
      {
        id: "mr2",
        name: "Market Research - Comprehensive",
        price: 900,
        category: "Market Research",
      },
      {
        id: "c1",
        name: "Consulting - 30 minutes",
        price: 125,
        category: "Consulting",
      },
      {
        id: "c2",
        name: "Consulting - 45 minutes",
        price: 155,
        category: "Consulting",
      },
      {
        id: "c3",
        name: "Consulting - 60 minutes",
        price: 185,
        category: "Consulting",
      },
    ],
    Consulting: [
      {
        id: "pd1",
        name: "Pitch Deck - 12 slides",
        price: 650,
        category: "Pitch Decks",
      },
      {
        id: "pd2",
        name: "Pitch Deck - 18 slides",
        price: 975,
        category: "Pitch Decks",
      },
      {
        id: "pd3",
        name: "Pitch Deck - 24 slides",
        price: 1300,
        category: "Pitch Decks",
      },
      {
        id: "bp1",
        name: "Business Plan - Without Financials",
        price: 750,
        category: "Business Plans",
      },
      {
        id: "bp2",
        name: "Business Plan - With Financials",
        price: 850,
        category: "Business Plans",
      },
      {
        id: "mr1",
        name: "Market Research - Essential",
        price: 500,
        category: "Market Research",
      },
      {
        id: "mr2",
        name: "Market Research - Comprehensive",
        price: 900,
        category: "Market Research",
      },
      {
        id: "lo1",
        name: "LinkedIn Optimization - Personal Page",
        price: 750,
        category: "LinkedIn Optimization",
      },
      {
        id: "lo2",
        name: "LinkedIn Optimization - Company Page",
        price: 500,
        category: "LinkedIn Optimization",
      },
    ],
  };

  // Filter out the selected service from available add-ons
  const getFilteredAddOns = () => {
    const baseAddOns = availableAddOns[selectedService.category] || [];

    // Filter out the selected service from add-ons
    return baseAddOns.filter((addOn) => {
      // For consulting, we need a different approach since the names are different
      if (selectedService.category === "Consulting") {
        return !addOn.name.includes(selectedService.name.split(" - ")[1]);
      }

      return !addOn.name.includes(selectedService.name.split(" - ")[1]);
    });
  };

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

  const handleAddOnToggle = (addOn) => {
    setSelectedAddOns((prev) => {
      const isSelected = prev.some((item) => item.id === addOn.id);
      if (isSelected) {
        return prev.filter((item) => item.id !== addOn.id);
      } else {
        return [...prev, addOn];
      }
    });
  };

  const calculateTotal = () => {
    const addOnsTotal = selectedAddOns.reduce(
      (sum, addOn) => sum + addOn.price,
      0
    );
    return selectedService.price + addOnsTotal;
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
          <div className="max-w-6xl mx-auto">
            <PaymentHeader />

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Add-ons and Payment Form */}
              <div className="lg:col-span-2 space-y-6">
                {/* Add-ons Section - This was likely missing */}
                <AddOnsSection
                  availableAddOns={getFilteredAddOns()}
                  selectedService={selectedService}
                  selectedAddOns={selectedAddOns}
                  onAddOnToggle={handleAddOnToggle}
                />

                <PaymentForm
                  paymentData={paymentData}
                  handleInputChange={handleInputChange}
                  handleCardNumberChange={handleCardNumberChange}
                  handleExpiryChange={handleExpiryChange}
                  handleCvvChange={handleCvvChange}
                  handleSubmitPayment={handleSubmitPayment}
                />
              </div>

              {/* Right Column - Order Summary */}
              <div className="lg:col-span-1">
                <OrderSummary
                  selectedService={selectedService}
                  selectedAddOns={selectedAddOns}
                  calculateTotal={calculateTotal}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {currentStep === "confirmation" && (
        <>
          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-8 px-4">
            <div className="max-w-6xl mx-auto">
              <PaymentHeader />

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Column - Add-ons and Payment Form */}
                <div className="lg:col-span-2 space-y-6">
                  <AddOnsSection
                    availableAddOns={getFilteredAddOns()}
                    selectedService={selectedService}
                    selectedAddOns={selectedAddOns}
                    onAddOnToggle={handleAddOnToggle}
                  />

                  <PaymentForm
                    paymentData={paymentData}
                    handleInputChange={handleInputChange}
                    handleCardNumberChange={handleCardNumberChange}
                    handleExpiryChange={handleExpiryChange}
                    handleCvvChange={handleCvvChange}
                    handleSubmitPayment={handleSubmitPayment}
                  />
                </div>

                {/* Right Column - Order Summary */}
                <div className="lg:col-span-1">
                  <OrderSummary
                    selectedService={selectedService}
                    selectedAddOns={selectedAddOns}
                    calculateTotal={calculateTotal}
                  />
                </div>
              </div>
            </div>
          </div>

          <ConfirmationOverlay
            selectedService={selectedService}
            selectedAddOns={selectedAddOns}
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
          selectedAddOns={selectedAddOns}
          setCurrentStep={setCurrentStep}
        />
      )}
    </div>
  );
};

export default PaymentFlow;
