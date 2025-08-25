import { Lock } from "lucide-react";
import React from "react";

const OrderSummary = ({ selectedService, selectedAddOns, calculateTotal }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4 h-fit max-h-screen overflow-y-auto">
      <h3 className="text-xl font-semibold text-gray-900 mb-6 border-b pb-3">
        Order Summary
      </h3>

      <div className="space-y-4 mb-6">
        {/* Main Service */}
        <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 text-base">
                {selectedService.name}
              </h4>
              <p className="text-sm text-blue-700 font-medium mt-1">
                {selectedService.category} • Main Service
              </p>
            </div>
            <div className="ml-4 text-right">
              <span className="font-bold text-lg text-gray-900">
                ${selectedService.price}
              </span>
            </div>
          </div>
        </div>

        {/* Add-ons */}
        {selectedAddOns.length > 0 && (
          <div className="mt-6">
            <h4 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">
              Add-on Services
            </h4>
            <div className="space-y-3">
              {selectedAddOns.map((addOn, index) => (
                <div
                  key={addOn.id}
                  className={`bg-gray-50 rounded-lg p-3 border-l-4 border-gray-300 ${
                    index !== selectedAddOns.length - 1 ? "mb-2" : ""
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800 text-sm">
                        {addOn.name}
                      </h4>
                      <p className="text-xs text-gray-600 mt-1">
                        {addOn.category}
                      </p>
                    </div>
                    <div className="ml-3 text-right">
                      <span className="font-semibold text-gray-800">
                        ${addOn.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Pricing Breakdown */}
      <div className="border-t border-gray-200 pt-4">
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium text-gray-900">
              ${calculateTotal()}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Tax</span>
            <span className="font-medium text-gray-900">$0</span>
          </div>
          <div className="border-t border-gray-200 pt-3">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-900">Total</span>
              <span className="text-2xl font-bold text-blue-600">
                ${calculateTotal()}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Security Notice */}
      <div className="mt-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 border border-green-200">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <Lock className="w-5 h-5 text-green-600 mt-0.5" />
          </div>
          <div className="ml-3">
            <p className="text-sm font-semibold text-green-800">
              Secure Payment
            </p>
            <p className="text-xs text-green-700 mt-1 leading-relaxed">
              Your payment information is encrypted and secure. We use
              industry-standard SSL encryption.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Trust Indicators */}
      <div className="mt-4 text-center">
        <div className="flex justify-center items-center space-x-2 text-xs text-gray-500">
          <span>Powered by</span>
          <span className="font-semibold text-blue-600">Stripe</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
