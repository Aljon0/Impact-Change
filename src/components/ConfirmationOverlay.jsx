import { CreditCard } from "lucide-react";
import React from "react";

const ConfirmationOverlay = ({
  selectedService,
  selectedAddOns,
  calculateTotal,
  handleConfirmOrder,
  setCurrentStep,
}) => {
  return (
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
              <div className="flex justify-between items-center border-b pb-3">
                <div>
                  <span className="font-medium text-gray-900">
                    {selectedService.name}
                  </span>
                  <p className="text-sm text-gray-500">
                    {selectedService.category} • Main Service
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
                  className="flex justify-between items-center pl-3"
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
              Confirm & Pay ${calculateTotal()}
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
};

export default ConfirmationOverlay;
