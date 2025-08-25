import { CreditCard, Lock, Shield } from "lucide-react";
import React from "react";

const OrderSummary = ({ selectedService, calculateTotal }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-xl">
        <h3 className="text-xl font-semibold flex items-center">
          <CreditCard className="w-6 h-6 mr-3" />
          Order Summary
        </h3>
        <p className="text-blue-100 text-sm mt-1">Review your order details</p>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Service Details */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
              Service Details
            </h4>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h5 className="font-semibold text-gray-900 text-base mb-2">
                {selectedService.name}
              </h5>
              <p className="text-sm text-blue-700 font-medium">
                {selectedService.category}
              </p>
              <div className="mt-3 pt-3 border-t border-blue-200">
                <span className="text-2xl font-bold text-gray-900">
                  ${selectedService.price}
                </span>
              </div>
            </div>
          </div>

          {/* Pricing Breakdown */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
              Pricing Breakdown
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold text-gray-900">
                  ${calculateTotal()}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Tax</span>
                <span className="font-semibold text-gray-900">$0</span>
              </div>
              <div className="flex justify-between items-center py-3 bg-gray-50 rounded-lg px-4">
                <span className="text-lg font-bold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-blue-600">
                  ${calculateTotal()}
                </span>
              </div>
            </div>
          </div>

          {/* Security & Trust */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
              Security & Trust
            </h4>
            <div className="space-y-4">
              {/* SSL Security */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Lock className="w-5 h-5 text-green-600 mt-0.5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    SSL Encrypted
                  </p>
                  <p className="text-xs text-gray-600">256-bit encryption</p>
                </div>
              </div>

              {/* Payment Security */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Secure Payments
                  </p>
                  <p className="text-xs text-gray-600">PCI DSS compliant</p>
                </div>
              </div>

              {/* Stripe Badge */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-3 border border-green-200">
                <div className="text-center">
                  <p className="text-xs text-gray-600 mb-1">Powered by</p>
                  <p className="font-bold text-blue-600 text-sm">Stripe</p>
                  <p className="text-xs text-green-700 mt-1">
                    Trusted by millions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-gray-500">
            <div className="flex items-center">
              <Lock className="w-4 h-4 mr-1" />
              <span>Secure Checkout</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-1" />
              <span>Data Protection</span>
            </div>
            <div className="flex items-center">
              <CreditCard className="w-4 h-4 mr-1" />
              <span>Safe Payments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
