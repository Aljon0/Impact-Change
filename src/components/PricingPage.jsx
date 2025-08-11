import React, { useState } from "react";

const PricingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("pitch-decks");

  const pricingData = {
    "pitch-decks": [
      {
        name: "Essential Deck",
        slides: "12 slides",
        price: "$650",
        features: [
          "Professional design & layout",
          "Compelling storytelling structure",
          "Market & competitor analysis",
          "Financial highlights",
          "Investor-ready format",
          "Standard delivery: 7 days",
        ],
        gradient: "from-blue-400 via-blue-600 to-blue-800",
        popular: false,
      },
      {
        name: "Growth Deck",
        slides: "18 slides",
        price: "$975",
        features: [
          "Everything in Essential",
          "Detailed market research",
          "Go-to-market strategy",
          "Team & advisory slides",
          "Funding ask breakdown",
          "2 revision rounds included",
        ],
        gradient: "from-blue-500 via-blue-700 to-blue-900",
        popular: true,
      },
      {
        name: "Complete Deck",
        slides: "24 slides",
        price: "$1,300",
        features: [
          "Everything in Growth",
          "Comprehensive financials",
          "Risk analysis & mitigation",
          "Appendix with detailed data",
          "Executive summary",
          "Unlimited revisions",
        ],
        gradient: "from-blue-600 via-blue-800 to-blue-900",
        popular: false,
      },
    ],
    "business-plans": [
      {
        name: "Without Financials",
        slides: "Strategic Focus",
        price: "$750",
        features: [
          "Executive summary",
          "Market analysis",
          "Business model canvas",
          "Marketing strategy",
          "Operational plan",
          "Standard delivery: 7 days",
        ],
        gradient: "from-blue-400 via-blue-600 to-blue-800",
        popular: false,
      },
      {
        name: "With Financials",
        slides: "Investment Ready",
        price: "$850",
        features: [
          "Everything in Strategic",
          "5-year financial projections",
          "Cash flow statements",
          "Break-even analysis",
          "Funding requirements",
          "ROI calculations",
        ],
        gradient: "from-blue-500 via-blue-700 to-blue-900",
        popular: true,
      },
    ],
    "market-research": [
      {
        name: "Essential Research",
        slides: "Core Analysis",
        price: "$500",
        features: [
          "Market size & opportunity",
          "Competitor landscape",
          "Target customer analysis",
          "Key market trends",
          "Executive summary",
          "Standard delivery: 7 days",
        ],
        gradient: "from-blue-300 via-blue-500 to-blue-700",
        popular: false,
      },
      {
        name: "Comprehensive Research",
        slides: "In-Depth Analysis",
        price: "$900",
        features: [
          "Everything in Essential",
          "SWOT analysis",
          "Pricing strategy research",
          "Market entry strategies",
          "Customer interviews",
          "Detailed recommendations",
        ],
        gradient: "from-blue-500 via-blue-700 to-blue-900",
        popular: true,
      },
    ],
    linkedin: [
      {
        name: "Personal Profile",
        slides: "Individual",
        price: "$750",
        features: [
          "Profile optimization",
          "Professional headline",
          "About section rewrite",
          "Experience descriptions",
          "Skills & endorsements",
          "Content strategy guide",
        ],
        gradient: "from-blue-400 via-blue-600 to-blue-800",
        popular: true,
      },
      {
        name: "Company Page",
        slides: "Business",
        price: "$500",
        features: [
          "Company page setup",
          "Professional branding",
          "About section",
          "Service descriptions",
          "Content calendar",
          "Engagement strategy",
        ],
        gradient: "from-blue-300 via-blue-500 to-blue-700",
        popular: false,
      },
    ],
    consulting: [
      {
        name: "Quick Session",
        slides: "30 minutes",
        price: "$125",
        features: [
          "Strategic consultation",
          "Problem identification",
          "Initial recommendations",
          "Action plan outline",
          "Follow-up summary",
          "Same-day scheduling",
        ],
        gradient: "from-blue-300 via-blue-500 to-blue-700",
        popular: false,
      },
      {
        name: "Standard Session",
        slides: "45 minutes",
        price: "$155",
        features: [
          "Everything in Quick",
          "Detailed strategy review",
          "Market analysis",
          "Competitive positioning",
          "Resource recommendations",
          "Priority next steps",
        ],
        gradient: "from-blue-500 via-blue-700 to-blue-900",
        popular: true,
      },
      {
        name: "Deep Dive",
        slides: "60 minutes",
        price: "$185",
        features: [
          "Everything in Standard",
          "Comprehensive review",
          "Financial planning",
          "Growth strategy",
          "Implementation roadmap",
          "30-day follow-up",
        ],
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
      {/* Animated Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 pt-20 pb-32">
        <div className="absolute inset-0 bg-black/10"></div>
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float-reverse translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse-slow"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-title-glow">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-blue-100 mb-8 animate-fade-in-delay">
            Professional services designed to accelerate your success. Standard
            delivery within one week.
          </p>
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white animate-badge-glow">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium">7-day standard delivery</span>
          </div>
        </div>
      </div>

      {/* Animated Category Selector */}
      <div className="relative z-20 -mt-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl p-6 mb-12 animate-slide-up">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-500 transform hover:scale-105 animate-category-item ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white shadow-xl scale-105"
                    : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-700"
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <span className="text-lg animate-bounce-subtle">
                  {category.icon}
                </span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingData[selectedCategory].map((plan, index) => (
            <div
              key={plan.name}
              className={`relative group transform transition-all duration-700 hover:scale-105 animate-card-entrance ${
                plan.popular ? "lg:scale-110 z-10" : ""
              }`}
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Animated Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20 animate-badge-bounce">
                  <div className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-xl animate-badge-glow">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Card with Enhanced Animations */}
              <div className="relative h-full bg-white rounded-3xl shadow-xl overflow-hidden group-hover:shadow-3xl transition-all duration-500 animate-card-glow">
                {/* Animated Gradient Header */}
                <div
                  className={`h-32 bg-gradient-to-r ${plan.gradient} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full blur-xl animate-float"></div>
                  <div className="absolute bottom-2 left-4 w-16 h-16 bg-white/10 rounded-full blur-lg animate-float-reverse"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-white/0 via-white/60 to-white/0 animate-shimmer"></div>
                </div>

                {/* Content with Animations */}
                <div className="p-8 relative z-10 -mt-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg mb-6 group-hover:shadow-xl transition-all duration-300 animate-content-float">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{plan.slides}</p>
                    <div className="flex items-baseline">
                      <span
                        className={`text-4xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent animate-price-glow`}
                      >
                        {plan.price}
                      </span>
                    </div>
                  </div>

                  {/* Animated Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start space-x-3 animate-feature-slide"
                        style={{ animationDelay: `${i * 50}ms` }}
                      >
                        <div
                          className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center mt-0.5 animate-check-bounce`}
                        >
                          <svg
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Animated CTA Button */}
                  <button
                    className={`w-full bg-gradient-to-r ${plan.gradient} text-white py-4 rounded-xl font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden group/btn animate-button-glow`}
                  >
                    <span className="relative z-10">Get Started</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-300/20 to-blue-400/0 animate-shimmer"></div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animated Contact CTA */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float-reverse"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-title-glow">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-blue-100 mb-8 animate-fade-in-delay">
            Let's discuss your specific needs and create a tailored package for
            your project.
          </p>
          <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:-translate-y-2 animate-cta-glow">
            Contact Us Today
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delay {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(3deg);
          }
        }

        @keyframes float-reverse {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(15px) rotate(-3deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }

        @keyframes title-glow {
          0%,
          100% {
            filter: brightness(1);
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
          }
          50% {
            filter: brightness(1.1);
            text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
          }
        }

        @keyframes badge-glow {
          0%,
          100% {
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
          }
          50% {
            box-shadow: 0 0 25px rgba(255, 255, 255, 0.5);
          }
        }

        @keyframes badge-bounce {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-3px) scale(1.05);
          }
        }

        @keyframes card-entrance {
          from {
            opacity: 0;
            transform: translateY(50px) rotateY(10deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateY(0deg);
          }
        }

        @keyframes card-glow {
          0%,
          100% {
            box-shadow: 0 10px 40px rgba(59, 130, 246, 0.1);
          }
          50% {
            box-shadow: 0 20px 60px rgba(59, 130, 246, 0.2);
          }
        }

        @keyframes content-float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-2px);
          }
        }

        @keyframes price-glow {
          0%,
          100% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.1);
          }
        }

        @keyframes feature-slide {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes check-bounce {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @keyframes button-glow {
          0%,
          100% {
            box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4);
          }
          50% {
            box-shadow: 0 8px 40px rgba(59, 130, 246, 0.6);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes bounce-subtle {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-2px);
          }
        }

        @keyframes category-item {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cta-glow {
          0%,
          100% {
            box-shadow: 0 4px 20px rgba(255, 255, 255, 0.3);
          }
          50% {
            box-shadow: 0 8px 40px rgba(255, 255, 255, 0.5);
          }
        }

        .animate-fade-in-delay {
          animation: fade-in-delay 0.8s ease-out 0.3s forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-reverse {
          animation: float-reverse 8s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-title-glow {
          animation: title-glow 3s ease-in-out infinite;
        }

        .animate-badge-glow {
          animation: badge-glow 2s ease-in-out infinite;
        }

        .animate-badge-bounce {
          animation: badge-bounce 3s ease-in-out infinite;
        }

        .animate-slide-up {
          animation: slideInUp 0.8s ease-out forwards;
        }

        .animate-category-item {
          animation: category-item 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .animate-card-entrance {
          animation: card-entrance 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-card-glow {
          animation: card-glow 3s ease-in-out infinite;
        }

        .animate-content-float {
          animation: content-float 4s ease-in-out infinite;
        }

        .animate-price-glow {
          animation: price-glow 2s ease-in-out infinite;
        }

        .animate-feature-slide {
          animation: feature-slide 0.5s ease-out forwards;
          opacity: 0;
        }

        .animate-check-bounce {
          animation: check-bounce 2s ease-in-out infinite;
        }

        .animate-button-glow {
          animation: button-glow 2s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .animate-cta-glow {
          animation: cta-glow 2s ease-in-out infinite;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(59, 130, 246, 0.4);
        }
      `}</style>
    </div>
  );
};
export default PricingPage;
