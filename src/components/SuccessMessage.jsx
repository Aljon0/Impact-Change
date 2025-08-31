import { Calendar, CheckCircle, Mail } from "lucide-react";
import React from "react";

const SuccessMessage = ({
  paymentData,
  selectedService,
  paymentIntentId,
  setCurrentStep,
}) => {
  const calculateTotal = () => {
    return selectedService ? selectedService.price : 0;
  };

  // Get the category display name
  const getCategoryDisplayName = () => {
    if (!selectedService) return "Service";

    if (selectedService.categoryName) {
      return selectedService.categoryName;
    }

    // Fallback to formatted category ID if categoryName is not available
    const categoryMap = {
      "pitch-decks": "Pitch Decks",
      "business-plans": "Business Plans",
      "market-research": "Market Research",
      "one-pager": "One Pager",
      linkedin: "LinkedIn Optimization",
      consulting: "Consulting",
    };

    return categoryMap[selectedService.category] || selectedService.category;
  };

  // Make sure we have a selectedService
  if (!selectedService) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p>Loading order details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Success Section */}
      <div className="flex items-center justify-center py-12 px-4">
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

            {/* Payment ID */}
            {paymentIntentId && (
              <div className="bg-gray-50 p-3 rounded-md mb-4 text-center">
                <p className="text-sm text-gray-600">Payment Reference</p>
                <p className="text-xs font-mono text-gray-800">
                  {paymentIntentId}
                </p>
              </div>
            )}

            {/* Email Notice */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-blue-800 font-medium">
                    Please check your email
                  </p>
                  <p className="text-blue-700 text-sm mt-1">
                    We've just sent an invoice and all your order details to{" "}
                    <strong>{paymentData.email}</strong>. Be sure to check your
                    spam folder just in case!
                  </p>
                </div>
              </div>
            </div>

            {/* What Happens Next Section */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                What happens next?
              </h2>

              {/* Updated Service Steps */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm">
                    Our team will review your submission within 24 hours
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm">
                    We'll create your {getCategoryDisplayName().toLowerCase()}
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm">
                    Standard delivery within one week
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="/"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors mb-4 inline-block text-center"
              >
                Continue Browsing
              </a>

              <p className="text-sm text-gray-500">
                Need help?{" "}
                <a href="/contact" className="text-blue-600 hover:underline">
                  Contact Us
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Consultation Booking Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20 px-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute top-32 right-20 w-20 h-20 bg-white rounded-full"></div>
          <div className="absolute bottom-20 left-32 w-24 h-24 bg-white rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-slate-200 relative overflow-hidden">
            {/* Subtle gradient accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"></div>

            <div className="flex items-start">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mr-5 flex-shrink-0 shadow-sm">
                <Calendar className="w-7 h-7 text-blue-600" />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-800 mb-3 leading-tight">
                  Ready to Discuss Your Project?
                </h3>
                <p className="text-slate-600 text-base mb-6 leading-relaxed">
                  Schedule a strategic consultation to explore your project
                  requirements, receive expert guidance, and discover tailored
                  solutions for your business objectives.
                </p>

                <div className="space-y-4">
                  <a
                    href="https://calendly.com/will-startscaleandsucceed/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3.5 px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 block text-center"
                  >
                    Schedule Professional Consultation
                  </a>

                  <div className="flex items-center justify-center space-x-6 text-xs text-slate-500">
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                      Expert Analysis
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                      Strategic Planning
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                      Custom Solutions
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
