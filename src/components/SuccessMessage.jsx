// SuccessMessage.js - Modified to check for consultation add-ons
import { CheckCircle, Mail } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const SuccessMessage = ({
  paymentData,
  selectedService,
  selectedAddOns,
  setCurrentStep,
}) => {
  const calculateTotal = () => {
    const addOnsTotal = selectedAddOns.reduce(
      (sum, addOn) => sum + addOn.price,
      0
    );
    return selectedService.price + addOnsTotal;
  };

  // Determine if this is a consulting service or has consulting add-ons
  const hasConsultationService = () => {
    // Check if main service is consulting
    const isMainServiceConsulting =
      selectedService.name.toLowerCase().includes("consulting") ||
      selectedService.name.toLowerCase().includes("consultation");

    // Check if any add-ons are consulting services
    const hasConsultingAddOns = selectedAddOns.some(
      (addOn) =>
        addOn.category === "Consulting" ||
        addOn.name.toLowerCase().includes("consulting") ||
        addOn.name.toLowerCase().includes("consultation")
    );

    return isMainServiceConsulting || hasConsultingAddOns;
  };

  const isConsultingService = hasConsultationService();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-8">
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

          {/* Service Type Toggle */}
          <div className="flex mb-6">
            <button
              className={`flex-1 py-2 px-4 text-sm font-medium rounded-l-lg border ${
                !isConsultingService
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              Standard Service
            </button>
            <button
              className={`flex-1 py-2 px-4 text-sm font-medium rounded-r-lg border ${
                isConsultingService
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              With Consulting Service
            </button>
          </div>

          {/* Steps based on service type */}
          {!isConsultingService ? (
            // Standard Service Steps
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
          ) : (
            // Consulting Service Steps
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-sm font-medium text-gray-700">1</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">
                    Book Your Session
                  </h3>
                  <p className="text-gray-600 text-sm">
                    The most important next step is to book your consulting
                    session. Please find the booking link in the confirmation
                    email we just sent you.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-sm font-medium text-gray-700">2</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">
                    We'll Prepare
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Once your session is booked, our team will prepare based on
                    your order details.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-sm font-medium text-gray-700">3</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">
                    We'll Talk Soon
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We look forward to speaking with you at the scheduled time!
                  </p>
                </div>
              </div>
            </div>
          )}
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
    </div>
  );
};

export default SuccessMessage;
