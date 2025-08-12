import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Investor-Ready Pitch Decks",
      description:
        "Compelling pitch decks that tell your story and get investors to pay attention.",
      icon: "/HomePage/PitchDeckDashboard.svg",
      image: "/HomePage/PitchDeck.gif",
      gradient: "from-blue-400 via-blue-600 to-blue-800",
      buttonText: "View Portfolio",
      link: "/portfolio/pitch-decks",
    },
    {
      id: 2,
      title: "Business Plans & Financial Forecasts",
      description:
        "Professionally written business plans with detailed financial projections for investors and lenders.",
      icon: "/HomePage/BusinessPlanBook.svg",
      image: "/HomePage/BusinessPlan.gif",
      gradient: "from-blue-500 via-blue-700 to-blue-900",
      buttonText: "View Portfolio",
      link: "/portfolio/business-plans",
    },
    {
      id: 3,
      title: "Comprehensive Market Research",
      description:
        "In-depth competitive landscape analysis and market opportunity assessments.",
      icon: "/HomePage/CMR.png",
      image: "/HomePage/MarketResearch.gif",
      gradient: "from-blue-300 via-blue-500 to-blue-700",
      buttonText: "View Portfolio",
      link: "/portfolio/market-research",
    },
    {
      id: 4,
      title: "Strategic Business Consulting",
      description:
        "Expert guidance for startups and growing businesses to accelerate growth and success.",
      icon: "/HomePage/HII.png",
      image: "/HomePage/HighImpact.gif",
      gradient: "from-blue-600 via-blue-800 to-blue-900",
      buttonText: "Book Consultation",
      link: "/consulting",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-blue-50 via-blue-100/50 to-blue-200/30 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-blue-400/20 rounded-full blur-3xl animate-float -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-300/30 to-blue-500/20 rounded-full blur-3xl animate-float-reverse translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-blue-600/10 rounded-full blur-2xl animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent mb-6 animate-title-glow">
            Your Strategic Partner for Growth
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            I offer sharp, hands-on services for founders, professionals, and
            growing teams. Whether you're validating an idea, raising capital,
            or building momentum, I deliver expert guidance that drives real
            progress.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 hover:scale-[1.02] animate-slide-up ${
                index % 2 === 0 ? "" : "lg:flex-row-reverse"
              }`}
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              {/* Image Section */}
              <div
                className={`${
                  index % 2 === 0 ? "order-2 lg:order-1" : "order-2"
                } relative`}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:-translate-y-2 group-hover:rotate-1">
                  {/* Animated gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-15 group-hover:opacity-25 transition-opacity duration-500 z-10 animate-gradient-shift`}
                  ></div>

                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Floating animated orbs */}
                  <div
                    className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r ${service.gradient} rounded-full opacity-70 blur-xl animate-pulse-glow`}
                  ></div>
                  <div
                    className={`absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-full opacity-50 blur-lg animate-bounce-slow`}
                  ></div>
                </div>
              </div>

              {/* Content Section */}
              <div
                className={`${
                  index % 2 === 0 ? "order-1 lg:order-2" : "order-1"
                } space-y-6`}
              >
                {/* Animated Icon */}
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r ${service.gradient} shadow-xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 animate-icon-float`}
                >
                  <img
                    src={service.icon}
                    alt={`${service.title} Icon`}
                    className="w-8 h-8 brightness-0 invert transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <h3 className="text-3xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-blue-800 group-hover:bg-clip-text transition-all duration-500 animate-text-shimmer">
                  {service.title}
                </h3>

                <p className="text-lg text-gray-600 leading-relaxed transition-all duration-300 group-hover:text-gray-700">
                  {service.description}
                </p>

                <button
                  className={`relative overflow-hidden bg-gradient-to-r ${service.gradient} text-white px-8 py-4 rounded-xl font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:-translate-y-1 group/btn animate-button-glow`}
                  onClick={() => (window.location.href = service.link)}
                >
                  <span className="relative z-10 transition-all duration-300">
                    {service.buttonText}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-300/20 to-blue-400/0 animate-shimmer"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
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
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float-reverse {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(20px) rotate(-5deg);
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

        @keyframes pulse-glow {
          0%,
          100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes title-glow {
          0%,
          100% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.1);
          }
        }

        @keyframes icon-float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
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

        @keyframes text-shimmer {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.9;
          }
        }

        @keyframes button-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.8);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-slide-up {
          animation: slideInUp 0.8s ease-out forwards;
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

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }

        .animate-title-glow {
          animation: title-glow 3s ease-in-out infinite;
        }

        .animate-icon-float {
          animation: icon-float 3s ease-in-out infinite;
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .animate-text-shimmer {
          animation: text-shimmer 2s ease-in-out infinite;
        }

        .animate-button-glow {
          animation: button-glow 2s ease-in-out infinite;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(59, 130, 246, 0.4);
        }
      `}</style>
    </section>
  );
};

export default Services;
