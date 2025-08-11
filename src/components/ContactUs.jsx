import React, { useEffect, useState } from "react";
import TrustBar from "./TrustBar";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState("");
  const [formProgress, setFormProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Calculate form progress
    const filledFields = Object.values(formData).filter(
      (value) => value.trim() !== ""
    ).length;
    setFormProgress((filledFields / Object.keys(formData).length) * 100);
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        projectType: "",
        message: "",
      });
    }, 3000);
  };

  const getFieldIcon = (fieldName) => {
    const icons = {
      firstName: "👤",
      lastName: "👤",
      email: "📧",
      company: "🏢",
      phone: "📞",
      projectType: "🎯",
      message: "💬",
    };
    return icons[fieldName] || "✨";
  };

  const projectTypeOptions = [
    { value: "", label: "Select your adventure...", icon: "🚀" },
    { value: "pitch-deck", label: "Pitch Deck Creation", icon: "📊" },
    { value: "business-plan", label: "Business Plan Writing", icon: "📝" },
    { value: "fundraising", label: "Fundraising Support", icon: "💰" },
    { value: "market-research", label: "Market Research", icon: "📈" },
    { value: "strategy", label: "Strategic Consulting", icon: "🧠" },
    { value: "other", label: "Something Amazing", icon: "✨" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eeecec] via-[#f5f5f5] to-[#e8e6e6] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#131e3D] rounded-full"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-blue-500 rounded-full"></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-[#131e3D] rounded-full"></div>
      </div>

      {/* Enhanced Back Button */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center text-gray-600 hover:text-[#131e3D] transition-all duration-300 group bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/80"
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
            <span className="text-2xl mr-2">🚀</span>
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

      {/* Enhanced Contact Form Section - White background like About page */}
      <section className="py-20 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-600">
                  Form Progress
                </span>
                <span className="text-sm font-medium text-[#131e3D]">
                  {Math.round(formProgress)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-[#131e3D] to-blue-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${formProgress}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#131e3D] to-blue-600 rounded-full mb-6">
                  <span className="text-2xl text-white">🤝</span>
                </div>
                <h2 className="text-3xl font-bold text-[#131e3D] mb-4">
                  Let's Build Something Remarkable Together
                </h2>
                <p className="text-[#4a4949] text-lg">
                  Fill out the form below and I'll get back to you within 24
                  hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                      <svg
                        className="w-10 h-10 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 border-4 border-green-200 rounded-full animate-ping"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#131e3D] mb-4">
                    🎉 Thank You!
                  </h3>
                  <p className="text-[#4a4949] text-lg">
                    Your message has been sent successfully. I'll be in touch
                    soon!
                  </p>
                </div>
              ) : (
                <div onSubmit={handleSubmit} className="space-y-8">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative group">
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-[#4a4949] mb-2"
                      >
                        <span className="mr-2">
                          {getFieldIcon("firstName")}
                        </span>
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("firstName")}
                        onBlur={() => setFocusedField("")}
                        className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 ${
                          focusedField === "firstName" || formData.firstName
                            ? "border-[#131e3D] bg-white shadow-lg transform scale-105"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        placeholder="Your first name..."
                      />
                      {formData.firstName && (
                        <div className="absolute right-3 top-12 text-green-500">
                          ✓
                        </div>
                      )}
                    </div>

                    <div className="relative group">
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-[#4a4949] mb-2"
                      >
                        <span className="mr-2">{getFieldIcon("lastName")}</span>
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("lastName")}
                        onBlur={() => setFocusedField("")}
                        className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 ${
                          focusedField === "lastName" || formData.lastName
                            ? "border-[#131e3D] bg-white shadow-lg transform scale-105"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        placeholder="Your last name..."
                      />
                      {formData.lastName && (
                        <div className="absolute right-3 top-12 text-green-500">
                          ✓
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Email and Company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative group">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#4a4949] mb-2"
                      >
                        <span className="mr-2">{getFieldIcon("email")}</span>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField("")}
                        className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 ${
                          focusedField === "email" || formData.email
                            ? "border-[#131e3D] bg-white shadow-lg transform scale-105"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        placeholder="your@email.com"
                      />
                      {formData.email && (
                        <div className="absolute right-3 top-12 text-green-500">
                          ✓
                        </div>
                      )}
                    </div>

                    <div className="relative group">
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-[#4a4949] mb-2"
                      >
                        <span className="mr-2">{getFieldIcon("company")}</span>
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("company")}
                        onBlur={() => setFocusedField("")}
                        className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 ${
                          focusedField === "company" || formData.company
                            ? "border-[#131e3D] bg-white shadow-lg transform scale-105"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        placeholder="Your amazing company..."
                      />
                      {formData.company && (
                        <div className="absolute right-3 top-12 text-green-500">
                          ✓
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Phone and Project Type */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative group">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-[#4a4949] mb-2"
                      >
                        <span className="mr-2">{getFieldIcon("phone")}</span>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField("")}
                        className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 ${
                          focusedField === "phone" || formData.phone
                            ? "border-[#131e3D] bg-white shadow-lg transform scale-105"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        placeholder="+1 (555) 123-4567"
                      />
                      {formData.phone && (
                        <div className="absolute right-3 top-12 text-green-500">
                          ✓
                        </div>
                      )}
                    </div>

                    <div className="relative group">
                      <label
                        htmlFor="projectType"
                        className="block text-sm font-medium text-[#4a4949] mb-2"
                      >
                        <span className="mr-2">
                          {getFieldIcon("projectType")}
                        </span>
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("projectType")}
                        onBlur={() => setFocusedField("")}
                        className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 ${
                          focusedField === "projectType" || formData.projectType
                            ? "border-[#131e3D] bg-white shadow-lg transform scale-105"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        {projectTypeOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.icon} {option.label}
                          </option>
                        ))}
                      </select>
                      {formData.projectType && (
                        <div className="absolute right-8 top-12 text-green-500">
                          ✓
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative group">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#4a4949] mb-2"
                    >
                      <span className="mr-2">{getFieldIcon("message")}</span>
                      Tell me about your project *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField("")}
                      className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 resize-none ${
                        focusedField === "message" || formData.message
                          ? "border-[#131e3D] bg-white shadow-lg"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      placeholder="Tell me about your vision, goals, timeline, and how I can help you build something remarkable..."
                    />
                    {formData.message && (
                      <div className="absolute right-3 top-12 text-green-500">
                        ✓
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      className="relative overflow-hidden bg-gradient-to-r from-[#131e3D] to-blue-600 text-white px-12 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        <span className="mr-2">🚀</span>
                        Start Your Project
                        <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">
                          →
                        </span>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </div>
              )}
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
                <a
                  href="mailto:hello@impactchange.com"
                  className="inline-flex items-center bg-gradient-to-r from-[#131e3D] to-blue-600 text-white px-6 py-2 rounded-full transition-all duration-200 hover:scale-105"
                >
                  <span className="mr-2">📧</span>
                  hello@impactchange.com
                </a>
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
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center bg-gradient-to-r from-[#131e3D] to-blue-600 text-white px-6 py-2 rounded-full transition-all duration-200 hover:scale-105"
                >
                  <span className="mr-2">📞</span>
                  +1 (555) 123-4567
                </a>
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
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#131e3D] mb-2">
                  Connect on LinkedIn
                </h3>
                <p className="text-[#4a4949] mb-6">Professional networking</p>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-[#131e3D] to-blue-600 text-white px-6 py-2 rounded-full transition-all duration-200 hover:scale-105"
                >
                  <span className="mr-2">👔</span>
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
              <span className="text-2xl">🎯</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
