import {
  ArrowLeft,
  Building,
  Check,
  CreditCard,
  Lock,
  Mail,
  User,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddOnsSection from "./AddOnsSection";

const PaymentFlow = () => {
  const [currentStep, setCurrentStep] = useState("payment"); // payment, confirmation, success
  const [selectedService, setSelectedService] = useState({
    name: "Pitch Deck - 18 slides",
    price: 975,
    category: "Pitch Decks",
  });
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  // Available add-ons based on service categories
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

  const PaymentForm = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/intake-form"
            className="flex items-center text-blue-600 hover:text-blue-700 cursor-pointer mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>Back to Form</span>
          </Link>

          <h1 className="text-3xl font-bold text-gray-900">
            Complete Your Order
          </h1>
          <p className="text-gray-600 mt-2">
            Secure checkout powered by Stripe
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Add-ons Section - Now using the separate component */}
            <AddOnsSection
              availableAddOns={availableAddOns}
              selectedService={selectedService}
              selectedAddOns={selectedAddOns}
              onAddOnToggle={handleAddOnToggle}
            />

            {/* Payment Information Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Lock className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-sm text-gray-600">
                  Secure SSL encrypted payment
                </span>
              </div>

              {/* Contact Information */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Contact Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={paymentData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={paymentData.fullName}
                      onChange={(e) =>
                        handleInputChange("fullName", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={paymentData.company}
                    onChange={(e) =>
                      handleInputChange("company", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              {/* Payment Information */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Payment Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Card Number *
                    </label>
                    <input
                      type="text"
                      required
                      value={paymentData.cardNumber}
                      onChange={handleCardNumberChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expiry Date *
                      </label>
                      <input
                        type="text"
                        required
                        value={paymentData.expiryDate}
                        onChange={handleExpiryChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVV *
                      </label>
                      <input
                        type="text"
                        required
                        value={paymentData.cvv}
                        onChange={handleCvvChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Billing Address */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Building className="w-5 h-5 mr-2" />
                  Billing Address
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      required
                      value={paymentData.billingAddress.street}
                      onChange={(e) =>
                        handleInputChange(
                          "billingAddress.street",
                          e.target.value
                        )
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="123 Main Street"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        required
                        value={paymentData.billingAddress.city}
                        onChange={(e) =>
                          handleInputChange(
                            "billingAddress.city",
                            e.target.value
                          )
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="New York"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        State *
                      </label>
                      <input
                        type="text"
                        required
                        value={paymentData.billingAddress.state}
                        onChange={(e) =>
                          handleInputChange(
                            "billingAddress.state",
                            e.target.value
                          )
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="NY"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        ZIP Code *
                      </label>
                      <input
                        type="text"
                        required
                        value={paymentData.billingAddress.zipCode}
                        onChange={(e) =>
                          handleInputChange(
                            "billingAddress.zipCode",
                            e.target.value
                          )
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="10001"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country *
                      </label>
                      <select
                        required
                        value={paymentData.billingAddress.country}
                        onChange={(e) =>
                          handleInputChange(
                            "billingAddress.country",
                            e.target.value
                          )
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Select Country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                        <option value="AU">Australia</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={handleSubmitPayment}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white cursor-pointer font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Review Order
              </button>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1 mt-8">
          <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Order Summary
            </h3>

            <div className="space-y-4 mb-6">
              {/* Main Service */}
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-gray-900">
                    {selectedService.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {selectedService.category}
                  </p>
                </div>
                <span className="font-semibold text-gray-900">
                  ${selectedService.price}
                </span>
              </div>

              {/* Add-ons */}
              {selectedAddOns.map((addOn) => (
                <div
                  key={addOn.id}
                  className="flex justify-between items-start border-l-2 border-blue-200 pl-3"
                >
                  <div>
                    <h4 className="font-medium text-gray-700 text-sm">
                      {addOn.name}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {addOn.category} • Add-on
                    </p>
                  </div>
                  <span className="font-medium text-gray-700 text-sm">
                    ${addOn.price}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-gray-900">${calculateTotal()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Tax</span>
                <span className="text-gray-900">$0</span>
              </div>
              <div className="border-t pt-2">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span className="text-blue-600">${calculateTotal()}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-start">
                <Lock className="w-5 h-5 text-blue-600 mt-0.5 mr-3" />
                <div>
                  <p className="text-sm font-medium text-blue-900">
                    Secure Payment
                  </p>
                  <p className="text-xs text-blue-700 mt-1">
                    Your payment information is encrypted and secure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ConfirmationOverlay = () => (
    <div className="fixed inset-0 backdrop-blur-xs bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 transform scale-100 transition-all">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CreditCard className="w-8 h-8 text-blue-600" />
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Confirm Your Order
          </h3>
          <p className="text-gray-600 mb-6">
            Please review your order details before proceeding with payment.
          </p>

          <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
            <div className="space-y-3">
              {/* Main Service */}
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-medium text-gray-900">
                    {selectedService.name}
                  </span>
                  <p className="text-sm text-gray-500">
                    {selectedService.category}
                  </p>
                </div>
                <span className="font-semibold text-blue-600">
                  ${selectedService.price}
                </span>
              </div>

              {/* Add-ons */}
              {selectedAddOns.map((addOn) => (
                <div
                  key={addOn.id}
                  className="flex justify-between items-center border-l-2 border-blue-200 pl-3"
                >
                  <div>
                    <span className="font-medium text-gray-700 text-sm">
                      {addOn.name}
                    </span>
                    <p className="text-xs text-gray-500">
                      {addOn.category} • Add-on
                    </p>
                  </div>
                  <span className="font-medium text-gray-700">
                    ${addOn.price}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t">
              <div className="flex justify-between font-semibold">
                <span>Total Amount</span>
                <span className="text-blue-600">${calculateTotal()}</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleConfirmOrder}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold cursor-pointer py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Confirm & Pay ${selectedService.price}
            </button>
            <button
              onClick={() => setCurrentStep("payment")}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium cursor-pointer py-3 px-6 rounded-lg transition-all duration-200"
            >
              Back to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const SuccessMessage = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-8 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-green-600" />
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Payment Successful!
        </h2>
        <p className="text-gray-600 mb-6">
          Thank you for your order. We've received your payment and will begin
          working on your project shortly.
        </p>

        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-center mb-2">
            <Mail className="w-5 h-5 text-blue-600 mr-2" />
            <span className="font-medium text-blue-900">Check Your Email</span>
          </div>
          <p className="text-sm text-blue-700">
            We've sent a confirmation email with your order details and next
            steps to {paymentData.email || "your email address"}.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
          <h4 className="font-medium text-gray-900 mb-2">Order Details:</h4>
          <div className="space-y-1 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Service:</span>
              <span className="font-medium">{selectedService.name}</span>
            </div>
            <div className="flex justify-between">
              <span>Amount Paid:</span>
              <span className="font-medium text-green-600">
                ${selectedService.price}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Order ID:</span>
              <span className="font-medium">
                IC-{Math.random().toString(36).substr(2, 9).toUpperCase()}
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => setCurrentStep("payment")}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
          >
            Start New Order
          </button>
          <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg transition-all duration-200">
            View Order Status
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {currentStep === "payment" && <PaymentForm />}
      {currentStep === "confirmation" && (
        <>
          <PaymentForm />
          <ConfirmationOverlay />
        </>
      )}
      {currentStep === "success" && <SuccessMessage />}
    </div>
  );
};

export default PaymentFlow;
