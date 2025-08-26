import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TrustBar from "./TrustBar";

const ContactUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScheduleCall = () => {
    navigate("/pricing?category=consulting");
  };

  const handleEmailClick = () => {
    const email = "will@startscaleandsucceed.com";
    const subject = "Inquiry from Contact Page";
    const body = "Hello, I would like to discuss...";

    // Open default email client with pre-filled email
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eeecec] via-[#f5f5f5] to-[#e8e6e6] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#131e3D] rounded-full"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-blue-500 rounded-full"></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-[#131e3D] rounded-full"></div>
      </div>

      {/* Enhanced Back Button */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center text-gray-600 hover:text-[#131e3D] transition-all cursor-pointer duration-300 group bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/80"
          >
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-[#131e3D] group-hover:text-white transition-all duration-300">
              <svg
                className="w-4 h-4 transform group-hover:-translate-x-0.5 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
            <span className="font-medium">Back to Home</span>
          </button>
        </div>
      </div>

      {/* Hero Section with About page styling */}
      <section className="py-16 bg-gradient-to-br from-[#eeecec] via-[#f5f5f5] to-[#e8e6e6] relative overflow-hidden">
        {/* Background decorative elements matching About page */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-40 right-20 w-16 h-16 bg-blue-500 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-[#131e3D] rounded-full"></div>
        </div>

        <div
          className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-10"
          }`}
        >
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-gray-200/50">
            <span className="text-[#4a4949] font-medium">
              Let's Build Something Amazing
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-[#131e3D] mb-6">
            Ready to Start Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#131e3D]">
              Next Big Thing?
            </span>
          </h1>

          <p className="text-xl text-[#4a4949] max-w-3xl mx-auto leading-relaxed">
            Join the ranks of successful founders who've raised over
            <span className="font-bold text-[#131e3D]"> $2+ billion </span>
            with expert guidance that actually works.
          </p>

          {/* Stats Row - matching About page style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-3xl font-bold text-[#131e3D]">1,500+</div>
              <div className="text-sm text-gray-600">Founders Helped</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-3xl font-bold text-[#131e3D]">$2B+</div>
              <div className="text-sm text-gray-600">Capital Raised</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-3xl font-bold text-[#131e3D]">24hr</div>
              <div className="text-sm text-gray-600">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Contact Information Section - Replaced the form section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#131e3D] to-blue-600 rounded-full mb-6">
                  <span className="text-2xl text-white">🤝</span>
                </div>
                <h2 className="text-3xl font-bold text-[#131e3D] mb-4">
                  Let's Build Something Remarkable Together
                </h2>
                <p className="text-[#4a4949] text-lg">
                  Choose your preferred method to get in touch
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Email Option */}
                <div className="group relative">
                  <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 h-full">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-8 h-8 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-[#131e3D] mb-2">
                      Email Us
                    </h3>
                    <p className="text-[#4a4949] mb-6">
                      Get a response within 24 hours
                    </p>
                    <button
                      onClick={handleEmailClick}
                      className="inline-flex items-center bg-gradient-to-r from-[#131e3D] to-blue-600 text-white px-6 py-3 rounded-full transition-all duration-200 hover:scale-105 cursor-pointer"
                    >
                      Send an Email
                    </button>
                  </div>
                </div>

                {/* Schedule Call Option */}
                <div className="group relative">
                  <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 h-full">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-8 h-8 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-[#131e3D] mb-2">
                      Schedule a Call
                    </h3>
                    <p className="text-[#4a4949] mb-6">
                      Book a free consultation
                    </p>
                    <button
                      onClick={handleScheduleCall}
                      className="inline-flex items-center bg-gradient-to-r from-[#131e3D] to-blue-600 text-white px-6 py-3 rounded-full transition-all duration-200 hover:scale-105 cursor-pointer"
                    >
                      Schedule Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Information - matching About page gradient background */}
      <section className="py-20 bg-gradient-to-r from-[#eeecec] to-[#e0dede] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-gray-200/50">
              <span className="text-[#4a4949] font-medium">
                Multiple Ways to Connect
              </span>
            </div>
            <h2 className="text-3xl font-bold text-[#131e3D] mb-4">
              Other Ways to Connect
            </h2>
            <p className="text-[#4a4949] text-lg">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email Card */}
            <div className="group relative">
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#131e3D] mb-2">
                  Email Me
                </h3>
                <p className="text-[#4a4949] mb-6">
                  Get a response within 24 hours
                </p>
                <button
                  onClick={handleEmailClick}
                  className="inline-flex items-center bg-gradient-to-r from-[#131e3D] to-blue-600 text-white px-6 py-2 rounded-full transition-all duration-200 hover:scale-105 cursor-pointer"
                >
                  will@startscaleandsucceed.com
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group relative">
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#131e3D] mb-2">
                  Schedule a Call
                </h3>
                <p className="text-[#4a4949] mb-6">Book a free consultation</p>
                <button
                  onClick={handleScheduleCall}
                  className="inline-flex items-center bg-gradient-to-r from-[#131e3D] to-blue-600 text-white px-6 cursor-pointer py-2 rounded-full transition-all duration-200 hover:scale-105"
                >
                  Click Here
                </button>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="group relative">
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.920-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#131e3D] mb-2">
                  Connect on LinkedIn
                </h3>
                <p className="text-[#4a4949] mb-6">Professional networking</p>
                <a
                  href="https://www.linkedin.com/company/impact-change/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-[#131e3D] to-blue-600 text-white px-6 py-2 rounded-full transition-all duration-200 hover:scale-105"
                >
                  Will Bryant
                </a>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 border border-gray-200/50">
              <span className="text-[#4a4949] mr-3">
                Ready to join 1,500+ successful founders?
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
