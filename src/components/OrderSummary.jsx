import { CreditCard, Lock, Shield } from "lucide-react";
import React from "react";

const OrderSummary = ({ selectedService, calculateTotal }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-lg">
        <h3 className="text-lg font-semibold flex items-center">
          <CreditCard className="w-5 h-5 mr-2" />
          Order Summary
        </h3>
        <p className="text-blue-100 text-sm mt-1">Review your order details</p>
      </div>

      {/* Content - Horizontal Layout */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Service Details */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
              Service Details
            </h4>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h5 className="font-semibold text-gray-900 text-base mb-1">
                {selectedService.name}
              </h5>
              <p className="text-sm text-blue-700 font-medium mb-2">
                {selectedService.category}
              </p>
              <div className="pt-2 border-t border-blue-200">
                <span className="text-xl font-bold text-gray-900">
                  ${selectedService.price}
                </span>
              </div>
            </div>
          </div>

          {/* Pricing Breakdown */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
              Pricing
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 text-sm">Subtotal</span>
                <span className="font-semibold text-gray-900">
                  ${calculateTotal()}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 text-sm">Tax</span>
                <span className="font-semibold text-gray-900">$0</span>
              </div>
              <div className="flex justify-between items-center py-2 bg-gray-50 rounded-lg px-3">
                <span className="font-bold text-gray-900">Total</span>
                <span className="text-xl font-bold text-blue-600">
                  ${calculateTotal()}
                </span>
              </div>
            </div>
          </div>

          {/* Security & Trust */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
              Security
            </h4>
            <div className="space-y-3">
              {/* SSL Security */}
              <div className="flex items-center space-x-2">
                <Lock className="w-4 h-4 text-green-600" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    SSL Encrypted
                  </p>
                  <p className="text-xs text-gray-600">256-bit encryption</p>
                </div>
              </div>

              {/* Payment Security */}
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-blue-600" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Secure Payments
                  </p>
                  <p className="text-xs text-gray-600">PCI DSS compliant</p>
                </div>
              </div>

              {/* Stripe Badge */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-2 border border-green-200 text-center">
                <p className="text-xs text-gray-600">Powered by</p>
                <p className="font-bold text-blue-600 text-sm">Stripe</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-gray-500">
            <div className="flex items-center">
              <Lock className="w-3 h-3 mr-1" />
              <span>Secure Checkout</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-3 h-3 mr-1" />
              <span>Data Protection</span>
            </div>
            <div className="flex items-center">
              <CreditCard className="w-3 h-3 mr-1" />
              <span>Safe Payments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
