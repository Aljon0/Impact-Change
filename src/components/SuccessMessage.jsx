import { AlertCircle, Calendar, CheckCircle, Mail } from "lucide-react";
import React, { useEffect, useState } from "react";
import emailService from "./EmailService";

const SuccessMessage = ({
  paymentData,
  selectedService,
  paymentIntentId,
  setCurrentStep,
  orderNumber = null, // Optional prop for order number
  orderDate = null, // Optional prop for order date
}) => {
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(null);
  const [isEmailSending, setIsEmailSending] = useState(false);
  const [finalOrderNumber, setFinalOrderNumber] = useState(orderNumber);
  const [apiConnected, setApiConnected] = useState(null);

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

  // Test API connection first
  useEffect(() => {
    const testConnection = async () => {
      try {
        await emailService.testApiConnection();
        setApiConnected(true);
        console.log("API connection successful");
      } catch (error) {
        console.error("API connection failed:", error);
        setApiConnected(false);
        setEmailError(`Unable to connect to server: ${error.message}`);
      }
    };

    testConnection();
  }, []);

  // Send invoice email when component mounts and API is connected
  useEffect(() => {
    const sendInvoiceEmail = async () => {
      // Don't send if already sent, API not connected, or if required data is missing
      if (
        emailSent ||
        apiConnected !== true ||
        !selectedService ||
        !paymentData?.email
      ) {
        console.log("Skipping email send:", {
          emailSent,
          apiConnected,
          selectedService: !!selectedService,
          email: paymentData?.email,
        });
        return;
      }

      setIsEmailSending(true);
      setEmailError(null);

      try {
        // Format email data
        const emailData = emailService.formatEmailData({
          selectedService,
          paymentData,
          paymentIntentId,
          orderNumber,
          orderDate,
        });

        // Store the order number for display
        setFinalOrderNumber(emailData.orderNumber);

        // Send the email
        const result = await emailService.sendInvoiceEmail(emailData);

        console.log("Invoice email sent successfully:", result);
        setEmailSent(true);
      } catch (error) {
        console.error("Failed to send invoice email:", error);
        setEmailError(error.message);
      } finally {
        setIsEmailSending(false);
      }
    };

    sendInvoiceEmail();
  }, [
    selectedService,
    paymentData,
    paymentIntentId,
    orderNumber,
    orderDate,
    emailSent,
    apiConnected, // Add apiConnected as dependency
  ]);

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

            {/* Order Number Display */}
            {finalOrderNumber && (
              <div className="bg-blue-50 p-3 rounded-md mb-4 text-center">
                <p className="text-sm text-blue-600">Order Number</p>
                <p className="text-lg font-semibold text-blue-800">
                  {finalOrderNumber}
                </p>
              </div>
            )}

            {/* Payment ID */}
            {paymentIntentId && (
              <div className="bg-gray-50 p-3 rounded-md mb-4 text-center">
                <p className="text-sm text-gray-600">Payment Reference</p>
                <p className="text-xs font-mono text-gray-800">
                  {paymentIntentId}
                </p>
              </div>
            )}

            {/* API Connection Status */}
            {apiConnected === false && (
              <div className="border-l-4 p-4 mb-4 bg-red-50 border-red-400">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0 text-red-400" />
                  <div>
                    <p className="text-red-800 font-medium">Connection Issue</p>
                    <p className="text-red-700 text-sm mt-1">
                      Unable to connect to our email service. Your order was
                      processed successfully, but we couldn't send the
                      confirmation email automatically.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Email Status Notice */}
            {apiConnected === true && (
              <div
                className={`border-l-4 p-4 mb-8 ${
                  emailError
                    ? "bg-red-50 border-red-400"
                    : emailSent
                    ? "bg-green-50 border-green-400"
                    : "bg-blue-50 border-blue-400"
                }`}
              >
                <div className="flex items-start">
                  <Mail
                    className={`w-5 h-5 mt-0.5 mr-3 flex-shrink-0 ${
                      emailError
                        ? "text-red-400"
                        : emailSent
                        ? "text-green-400"
                        : "text-blue-400"
                    }`}
                  />
                  <div>
                    {isEmailSending ? (
                      <>
                        <p className="text-blue-800 font-medium">
                          Sending invoice email...
                        </p>
                        <p className="text-blue-700 text-sm mt-1">
                          Please wait while we send your order details to{" "}
                          <strong>{paymentData.email}</strong>
                        </p>
                      </>
                    ) : emailError ? (
                      <>
                        <p className="text-red-800 font-medium">
                          Email delivery issue
                        </p>
                        <p className="text-red-700 text-sm mt-1">
                          We couldn't send the invoice to{" "}
                          <strong>{paymentData.email}</strong>. Please contact
                          support for your invoice copy.
                        </p>
                        <p className="text-red-600 text-xs mt-2">
                          Error: {emailError}
                        </p>
                      </>
                    ) : emailSent ? (
                      <>
                        <p className="text-green-800 font-medium">
                          Invoice email sent successfully!
                        </p>
                        <p className="text-green-700 text-sm mt-1">
                          Your order details and invoice have been sent to{" "}
                          <strong>{paymentData.email}</strong>. Check your spam
                          folder if you don't see it.
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="text-blue-800 font-medium">
                          Please check your email
                        </p>
                        <p className="text-blue-700 text-sm mt-1">
                          We're sending an invoice and all your order details to{" "}
                          <strong>{paymentData.email}</strong>. Be sure to check
                          your spam folder just in case!
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}

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
