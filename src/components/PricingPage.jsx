import React, { useState } from "react";
import { Link } from "react-router-dom";

const PricingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("pitch-decks");

  const pricingData = {
    "pitch-decks": [
      {
        name: "12 slides",
        price: "$650",
        gradient: "from-blue-400 via-blue-600 to-blue-800",
        popular: false,
      },
      {
        name: "18 slides",
        price: "$975",
        gradient: "from-blue-500 via-blue-700 to-blue-900",
        popular: true,
      },
      {
        name: "24 slides",
        price: "$1,300",
        gradient: "from-blue-600 via-blue-800 to-blue-900",
        popular: false,
      },
    ],
    "business-plans": [
      {
        name: "Without Financials",
        price: "$750",
        gradient: "from-blue-400 via-blue-600 to-blue-800",
        popular: false,
      },
      {
        name: "With Financials",
        price: "$850",
        gradient: "from-blue-500 via-blue-700 to-blue-900",
        popular: true,
      },
    ],
    "market-research": [
      {
        name: "Essential",
        price: "$500",
        gradient: "from-blue-300 via-blue-500 to-blue-700",
        popular: false,
      },
      {
        name: "Comprehensive",
        price: "$900",
        gradient: "from-blue-500 via-blue-700 to-blue-900",
        popular: true,
      },
    ],
    linkedin: [
      {
        name: "Personal Page",
        price: "$750",
        gradient: "from-blue-400 via-blue-600 to-blue-800",
        popular: true,
      },
      {
        name: "Company Page",
        price: "$500",
        gradient: "from-blue-300 via-blue-500 to-blue-700",
        popular: false,
      },
    ],
    consulting: [
      {
        name: "30 minutes",
        price: "$125",
        gradient: "from-blue-300 via-blue-500 to-blue-700",
        popular: false,
      },
      {
        name: "45 minutes",
        price: "$155",
        gradient: "from-blue-500 via-blue-700 to-blue-900",
        popular: true,
      },
      {
        name: "60 minutes",
        price: "$185",
        gradient: "from-blue-600 via-blue-800 to-blue-900",
        popular: false,
      },
    ],
  };

  const categories = [
    { id: "pitch-decks", name: "Pitch Decks", icon: "📊" },
    { id: "business-plans", name: "Business Plans", icon: "📋" },
    { id: "market-research", name: "Market Research", icon: "🔍" },
    { id: "linkedin", name: "LinkedIn Optimization", icon: "💼" },
    { id: "consulting", name: "Consulting", icon: "🎯" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100/50 to-blue-200/30">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 pt-20 pb-32">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Professional services designed to accelerate your success.
          </p>
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium">
              Standard delivery within one week
            </span>
          </div>
        </div>
      </div>

      {/* Category Selector */}
      <div className="relative z-20 -mt-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl p-6 mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl cursor-pointer font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white shadow-xl scale-105"
                    : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingData[selectedCategory].map((plan, index) => (
            <div
              key={plan.name}
              className={`relative group transform transition-all duration-500 hover:scale-105 ${
                plan.popular ? "lg:scale-110 z-10" : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-xl">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Card */}
              <div className="relative h-full bg-white rounded-3xl shadow-xl overflow-hidden group-hover:shadow-2xl transition-all duration-500">
                {/* Gradient Header */}
                <div
                  className={`h-32 bg-gradient-to-r ${plan.gradient} relative`}
                >
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full blur-xl opacity-50"></div>
                </div>

                {/* Content */}
                <div className="p-8 relative z-10 -mt-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg mb-6 group-hover:shadow-xl transition-all duration-300">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline">
                      <span
                        className={`text-4xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}
                      >
                        {plan.price}
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full bg-gradient-to-r ${plan.gradient} text-white py-4 rounded-xl font-semibold transition-all cursor-pointer duration-500 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden group/btn`}
                  >
                    <span className="relative z-10">Get Started</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl opacity-30"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your specific needs and create a tailored package for
            your project.
          </p>
          <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold cursor-pointer transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:-translate-y-2 animate-cta-glow">
            <Link to="/contact">Contact Us Today</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
