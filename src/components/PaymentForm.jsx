import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { Lock, User } from "lucide-react";
import React from "react";

const PaymentForm = ({
  paymentData,
  handleInputChange,
  handleSubmitPayment,
  isDisabled = false,
}) => {
  const stripe = useStripe();
  const elements = useElements();

  const cardStyle = {
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
    },
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      alert("Payment form is not ready. Please wait a moment and try again.");
      return;
    }

    if (isDisabled) {
      return;
    }

    // Basic validation
    if (!paymentData.email || !paymentData.fullName) {
      alert("Please fill in all required fields (Email and Full Name)");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(paymentData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Pass elements to the parent component
    handleSubmitPayment(elements);
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-lg p-6 ${
        isDisabled ? "opacity-50 pointer-events-none" : ""
      }`}
    >
      <div className="flex items-center mb-6">
        <Lock className="w-5 h-5 text-green-500 mr-2" />
        <span className="text-sm text-gray-600">Secure Payment</span>
      </div>

      <form onSubmit={handleFormSubmit}>
        {/* Contact Info */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <User className="w-5 h-5 mr-2" />
            Contact Information
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                required
                value={paymentData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="your@email.com"
                disabled={isDisabled}
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
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="John Doe"
                disabled={isDisabled}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company (Optional)
              </label>
              <input
                type="text"
                value={paymentData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Company"
                disabled={isDisabled}
              />
            </div>
          </div>
        </div>

        {/* Payment Info */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Payment Information</h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Card Number *
              </label>
              <div className="px-3 py-2 border border-gray-300 rounded-md">
                <CardNumberElement
                  options={{
                    ...cardStyle,
                    disabled: isDisabled,
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expiry Date *
                </label>
                <div className="px-3 py-2 border border-gray-300 rounded-md">
                  <CardExpiryElement
                    options={{
                      ...cardStyle,
                      disabled: isDisabled,
                    }}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CVC *
                </label>
                <div className="px-3 py-2 border border-gray-300 rounded-md">
                  <CardCvcElement
                    options={{
                      ...cardStyle,
                      disabled: isDisabled,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Billing Address */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Billing Address</h3>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Street Address"
              value={paymentData.billingAddress.street}
              onChange={(e) =>
                handleInputChange("billingAddress.street", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              disabled={isDisabled}
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="City"
                value={paymentData.billingAddress.city}
                onChange={(e) =>
                  handleInputChange("billingAddress.city", e.target.value)
                }
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                disabled={isDisabled}
              />
              <input
                type="text"
                placeholder="ZIP"
                value={paymentData.billingAddress.zipCode}
                onChange={(e) =>
                  handleInputChange("billingAddress.zipCode", e.target.value)
                }
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                disabled={isDisabled}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="State/Province"
                value={paymentData.billingAddress.state}
                onChange={(e) =>
                  handleInputChange("billingAddress.state", e.target.value)
                }
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                disabled={isDisabled}
              />

              <select
                value={paymentData.billingAddress.country}
                onChange={(e) =>
                  handleInputChange("billingAddress.country", e.target.value)
                }
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                disabled={isDisabled}
              >
                <option value="">Select Country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="GB">United Kingdom</option>
                <option value="AU">Australia</option>
                <option value="DE">Germany</option>
                <option value="FR">France</option>
                <option value="PH">Philippines</option>
              </select>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={!stripe || !elements || isDisabled}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Review Order
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
