import { useElements, useStripe } from "@stripe/react-stripe-js";
import { CreditCard } from "lucide-react";
import React from "react";

const ConfirmationOverlay = ({
  selectedService,
  calculateTotal,
  handleConfirmOrder,
  setCurrentStep,
  isLoading = false,
}) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleConfirm = () => {
    handleConfirmOrder(stripe, elements);
  };

  return (
    <div className="fixed inset-0 backdrop-blur-xs bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CreditCard className="w-8 h-8 text-blue-600" />
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Confirm Your Order
          </h3>
          <p className="text-gray-600 mb-6">Ready to process your payment?</p>

          <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
            <div className="flex justify-between items-center">
              <div>
                <span className="font-medium">{selectedService.name}</span>
                <p className="text-sm text-gray-500">
                  {selectedService.category}
                </p>
              </div>
              <span className="font-semibold text-blue-600">
                ${selectedService.price}
              </span>
            </div>

            <div className="mt-4 pt-3 border-t flex justify-between font-semibold">
              <span>Total</span>
              <span className="text-blue-600">${calculateTotal()}</span>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleConfirm}
              disabled={!stripe || !elements || isLoading}
              className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                isLoading
                  ? "bg-gray-400 text-gray-600"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Processing...
                </div>
              ) : (
                `Pay $${calculateTotal()}`
              )}
            </button>

            <button
              onClick={() => setCurrentStep("payment")}
              disabled={isLoading}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationOverlay;
