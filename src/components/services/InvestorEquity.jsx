import {
  ArrowRight,
  Award,
  Building2,
  DollarSign,
  Handshake,
  LineChart,
  Star,
  Target,
  TrendingUp,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const InvestorEquity = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [countUp, setCountUp] = useState({ rounds: 0, equity: 0, meetings: 0 });

  useEffect(() => {
    setIsVisible(true);

    // Animated counter
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCountUp((prev) => ({
          rounds: Math.min(prev.rounds + 2, 75),
          equity: Math.min(prev.equity + 5, 100),
          meetings: Math.min(prev.meetings + 1, 50),
        }));
      }, 80);

      setTimeout(() => clearInterval(interval), 3000);
    }, 500);

    // Step rotation for process visualization
    const stepInterval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(stepInterval);
    };
  }, []);

  const highlights = [
    {
      number: countUp.rounds,
      suffix: "+",
      text: "Funding Rounds Supported",
      icon: TrendingUp,
      delay: "delay-100",
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: countUp.equity,
      prefix: "$",
      suffix: "M+",
      text: "in Total Equity Raised",
      icon: DollarSign,
      delay: "delay-200",
      color: "from-blue-600 to-indigo-600",
    },
    {
      text: "Expert Negotiation & Strategy",
      icon: Handshake,
      delay: "delay-300",
      color: "from-indigo-600 to-purple-600",
      isText: true,
    },
  ];

  const fundraisingSteps = [
    {
      title: "Investor Targeting",
      description: "Identify strategic partners",
      icon: Target,
      active: activeStep === 0,
    },
    {
      title: "Pitch Preparation",
      description: "Craft compelling presentations",
      icon: Building2,
      active: activeStep === 1,
    },
    {
      title: "Term Sheet Analysis",
      description: "Negotiate favorable terms",
      icon: LineChart,
      active: activeStep === 2,
    },
    {
      title: "Deal Closing",
      description: "Secure final agreements",
      icon: Award,
      active: activeStep === 3,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 left-20 w-80 h-80 bg-blue-200/25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-48 right-16 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-24 left-1/3 w-72 h-72 bg-purple-200/25 rounded-full blur-3xl animate-pulse delay-2000"></div>

        {/* Financial elements */}
        <div className="absolute top-32 right-1/3 text-blue-300/15 animate-float">
          <DollarSign size={140} />
        </div>
        <div className="absolute bottom-32 right-20 text-indigo-300/15 animate-float delay-1500">
          <TrendingUp size={120} />
        </div>
        <div className="absolute top-2/3 left-16 text-purple-300/15 animate-float delay-3000">
          <Handshake size={100} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <section
          className={`text-center mb-24 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center mb-8 px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-full shadow-lg">
            <DollarSign className="text-blue-600 mr-2" size={22} />
            <span className="text-blue-700 font-bold text-sm">
              Strategic Fundraising
            </span>
          </div>

          <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">
              Investor Equity
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            We help you navigate the{" "}
            <span className="text-blue-600 font-semibold">
              fundraising process
            </span>{" "}
            to secure the vital
            <span className="text-indigo-600 font-semibold">
              {" "}
              investor equity
            </span>{" "}
            needed to scale your business.
          </p>

          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center mx-auto">
            <Link to="/pricing" className="relative">
              Get Started Today
              <ArrowRight
                className="inline ml-3 group-hover:translate-x-2 transition-transform"
                size={24}
              />
            </Link>
          </button>
        </section>

        {/* Highlights Section */}
        <section className="mb-24">
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div
                  key={index}
                  className={`${
                    highlight.delay
                  } transform transition-all duration-700 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  <div className="group relative p-8 bg-white/80 backdrop-blur-sm border border-blue-100 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${highlight.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    ></div>

                    <div className="relative flex flex-col items-center text-center">
                      <div
                        className={`w-20 h-20 bg-gradient-to-br ${highlight.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                      >
                        <IconComponent className="text-white" size={32} />
                      </div>

                      {!highlight.isText ? (
                        <div className="mb-4">
                          <span className="text-4xl lg:text-5xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                            {highlight.prefix}
                            {highlight.number}
                            {highlight.suffix}
                          </span>
                        </div>
                      ) : (
                        <div className="mb-4">
                          <span className="text-2xl lg:text-3xl font-bold text-blue-600 group-hover:text-indigo-600 transition-colors">
                            Expert
                          </span>
                        </div>
                      )}

                      <p className="text-gray-600 font-medium text-lg leading-relaxed">
                        {highlight.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* About Service Section */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="mb-8">
                <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 font-semibold rounded-full mb-6">
                  <Target className="mr-2" size={18} />
                  Strategic Guidance
                </span>
              </div>

              <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-8 leading-tight">
                Secure the Capital
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  to Scale
                </span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Raising capital is one of the most{" "}
                <strong className="text-gray-800">challenging aspects</strong>{" "}
                of the start-up journey. Our Investor Equity service provides
                the strategic guidance and support you need to navigate the
                complexities of fundraising.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                We help you{" "}
                <span className="text-blue-600 font-semibold">
                  identify the right investors
                </span>
                , prepare for meetings, and understand term sheets and
                valuation. Our goal is to empower you to not only secure the
                funding you need but to find the{" "}
                <span className="text-indigo-600 font-semibold">
                  right partners
                </span>{" "}
                who will help you scale your business and achieve your long-term
                vision.
              </p>

              <div className="space-y-4 mb-8">
                {fundraisingSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div
                      key={index}
                      className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-500 ${
                        step.active
                          ? "bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 scale-105"
                          : "hover:bg-blue-50/50"
                      }`}
                    >
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          step.active
                            ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg"
                            : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        <IconComponent size={20} />
                      </div>
                      <div>
                        <h4
                          className={`font-semibold transition-colors ${
                            step.active ? "text-blue-700" : "text-gray-800"
                          }`}
                        >
                          {step.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {step.description}
                        </p>
                      </div>
                      {step.active && (
                        <div className="ml-auto">
                          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              className={`transform transition-all duration-1000 delay-500 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="relative">
                {/* Funding Stages Visualization */}
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-blue-100 hover:shadow-3xl transition-all duration-300">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Funding Journey
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Average funding progression we've supported
                    </p>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        stage: "Pre-Seed",
                        amount: "$250K",
                        investors: 8,
                        color: "bg-gradient-to-r from-green-400 to-emerald-500",
                      },
                      {
                        stage: "Seed",
                        amount: "$2M",
                        investors: 15,
                        color: "bg-gradient-to-r from-blue-500 to-cyan-500",
                      },
                      {
                        stage: "Series A",
                        amount: "$10M",
                        investors: 22,
                        color: "bg-gradient-to-r from-indigo-500 to-purple-500",
                      },
                      {
                        stage: "Series B+",
                        amount: "$25M+",
                        investors: 30,
                        color: "bg-gradient-to-r from-purple-500 to-pink-500",
                      },
                    ].map((stage, index) => (
                      <div key={index} className="group">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-gray-800">
                            {stage.stage}
                          </span>
                          <span className="text-sm text-gray-600">
                            {stage.investors} investors
                          </span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="flex-1">
                            <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className={`h-full ${stage.color} rounded-full transition-all duration-1000 ease-out group-hover:scale-x-105`}
                                style={{
                                  width: isVisible ? "100%" : "0%",
                                  transitionDelay: `${index * 200}ms`,
                                }}
                              ></div>
                            </div>
                          </div>
                          <div className="text-lg font-bold text-gray-800 min-w-[80px] text-right">
                            {stage.amount}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                    <div className="flex items-center justify-center space-x-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">
                          6-12
                        </div>
                        <div className="text-xs text-gray-600">
                          Months Timeline
                        </div>
                      </div>
                      <div className="w-px h-8 bg-blue-200"></div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-indigo-600">
                          85%
                        </div>
                        <div className="text-xs text-gray-600">
                          Success Rate
                        </div>
                      </div>
                      <div className="w-px h-8 bg-blue-200"></div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">
                          3.2x
                        </div>
                        <div className="text-xs text-gray-600">
                          Avg. Multiple
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Success Indicators */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl animate-bounce">
                  <TrendingUp className="text-white" size={24} />
                </div>

                <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                  <DollarSign className="text-white" size={20} />
                </div>

                <div
                  className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-spin"
                  style={{ animationDuration: "8s" }}
                >
                  <Handshake className="text-white" size={16} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <div
            className={`grid lg:grid-cols-2 gap-12 transform transition-all duration-1000 delay-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* First Testimonial */}
            <div className="bg-gradient-to-br from-white/90 to-blue-50/90 backdrop-blur-sm border border-blue-200 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-yellow-400 w-5 h-5 fill-current"
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    Series A Success
                  </span>
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">
                  DataSphere
                </h4>
              </div>

              <blockquote className="text-gray-700 italic leading-relaxed mb-6">
                "Their{" "}
                <span className="text-blue-600 font-semibold">
                  strategic advice during our Series A was invaluable
                </span>
                . They helped us navigate the entire process and secure a
                fantastic deal with the right partners."
              </blockquote>

              <div className="flex items-center space-x-3 pt-4 border-t border-blue-200">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TW</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">
                    Tom Williams
                  </p>
                  <p className="text-blue-600 text-xs">CEO of DataSphere</p>
                </div>
              </div>
            </div>

            {/* Second Testimonial */}
            <div className="bg-gradient-to-br from-white/90 to-indigo-50/90 backdrop-blur-sm border border-indigo-200 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <div className="mb-6">
                <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 font-semibold rounded-full text-sm mb-4">
                  Business Plan Success
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">
                  Lamimiland
                </h4>
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-yellow-400 w-5 h-5 fill-current"
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm font-semibold text-indigo-600">
                    $2,000-$3,000
                  </span>
                </div>
              </div>

              <blockquote className="text-gray-700 italic leading-relaxed mb-6">
                "Will did an{" "}
                <span className="text-indigo-600 font-semibold">
                  outstanding job writing the business plan
                </span>{" "}
                for my brand. His thorough research, strategic insights, and
                clear, concise writing made the plan both comprehensive and easy
                to understand. He truly{" "}
                <span className="text-purple-600 font-semibold">
                  captured my vision
                </span>{" "}
                for the brand and provided a solid foundation for our growth."
              </blockquote>

              <div className="flex items-center space-x-3 pt-4 border-t border-indigo-200">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">HL</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">
                    Helen S. Li
                  </p>
                  <p className="text-indigo-600 text-xs">
                    Founder & Creative Director
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study Section */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">
                  Fundraising Strategy Case Study
                </h3>
                <p className="text-blue-100">
                  Learn how we guided a fintech start-up through their seed
                  funding round, from initial outreach to closing the deal.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default InvestorEquity;
