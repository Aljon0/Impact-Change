import { Calendar, CheckCircle, Mail } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const SuccessMessage = ({ paymentData, selectedService, setCurrentStep }) => {
  const calculateTotal = () => {
    return selectedService.price;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-lg w-full space-y-6">
        {/* Main Success Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Success Icon */}
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">
            Thank You For Your Order!
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            Your purchase has been successfully processed.
          </p>

          {/* Email Notice */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
            <div className="flex items-start">
              <Mail className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <p className="text-blue-800 font-medium">
                  Please check your email
                </p>
                <p className="text-blue-700 text-sm mt-1">
                  We've just sent an invoice and all your order details to the
                  email address you provided. Be sure to check your spam folder
                  just in case!
                </p>
              </div>
            </div>
          </div>

          {/* What Happens Next Section */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              What Happens Next?
            </h2>

            {/* Standard Service Steps */}
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-sm font-medium text-gray-700">1</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">
                    We Get to Work
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Our team has received your order and will begin working on
                    your project right away.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-sm font-medium text-gray-700">2</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">
                    Mid-Point Update
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We'll send you a progress update in about 3-4 days.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-sm font-medium text-gray-700">3</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">
                    Final Delivery
                  </h3>
                  <p className="text-gray-600 text-sm">
                    You can expect the final delivery within one week.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Continue Browsing Button */}
          <div className="text-center">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors mb-4">
              <Link to="/">Continue Browsing</Link>
            </button>

            <p className="text-sm text-gray-500">
              Need help?{" "}
              <a href="/contact" className="text-blue-600 hover:underline">
                Contact Us
              </a>
            </p>
          </div>
        </div>

        {/* Consultation Booking Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-orange-400">
          <div className="flex items-start">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Calendar className="w-6 h-6 text-orange-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Want to Discuss Your Project Further?
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Book a personalized consultation to discuss your project
                requirements, ask questions, or explore additional services that
                could benefit your business.
              </p>

              <div className="space-y-3">
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-lg transition-colors cursor-pointer">
                  Schedule Consultation
                </button>
                <p className="text-xs text-gray-500 text-center">
                  Expert guidance • Personalized recommendations • Professional
                  insights
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
