import { ArrowLeft } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const PaymentHeader = () => {
  return (
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
};

export default PaymentHeader;
