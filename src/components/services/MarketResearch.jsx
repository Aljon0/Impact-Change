import {
  ArrowRight,
  Award,
  ChevronRight,
  Search,
  Star,
  Target,
  TrendingUp,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MarketResearch = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countUp, setCountUp] = useState({
    startups: 0,
    satisfaction: 0,
    funding: 0,
  });

  useEffect(() => {
    setIsVisible(true);

    // Animated counter
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCountUp((prev) => ({
          startups: Math.min(prev.startups + 5, 150),
          satisfaction: Math.min(prev.satisfaction + 3, 95),
          funding: Math.min(prev.funding + 1, 20),
        }));
      }, 50);

      setTimeout(() => clearInterval(interval), 2000);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const highlights = [
    {
      number: countUp.startups,
      suffix: "+",
      text: "Start-ups Guided",
      icon: TrendingUp,
      delay: "delay-100",
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: countUp.satisfaction,
      suffix: "%",
      text: "Client Satisfaction Rate",
      icon: Award,
      delay: "delay-200",
      color: "from-blue-600 to-indigo-600",
    },
    {
      number: countUp.funding,
      prefix: "$",
      suffix: "M+",
      text: "in Early-Stage Funding Influenced",
      icon: Target,
      delay: "delay-300",
      color: "from-indigo-600 to-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-16 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-64 right-24 w-96 h-96 bg-indigo-200/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <section
          className={`text-center mb-24 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center mb-8 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full">
            <Search className="text-blue-600 mr-2" size={20} />
            <span className="text-blue-700 font-semibold text-sm">
              Data-Driven Insights
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">
              Comprehensive Market Research
            </span>
            <span className="block text-gray-700 text-4xl lg:text-5xl mt-4">
              for Start-ups
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            We provide{" "}
            <span className="text-blue-600 font-semibold">
              in-depth market analysis
            </span>{" "}
            and
            <span className="text-indigo-600 font-semibold">
              {" "}
              data-driven insights
            </span>{" "}
            to validate your business idea and build a solid foundation for
            launch.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-900 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300">
              <Link to="/pricing">
                Get Started Today
                <ArrowRight
                  className="inline ml-3 group-hover:translate-x-2 transition-transform"
                  size={22}
                />
              </Link>
            </button>
          </div>
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
                    {/* Gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${highlight.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    ></div>

                    <div className="relative flex flex-col items-center text-center">
                      <div
                        className={`w-20 h-20 bg-gradient-to-br ${highlight.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                      >
                        <IconComponent className="text-white" size={32} />
                      </div>

                      <div className="mb-4">
                        <span className="text-4xl lg:text-5xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                          {highlight.prefix}
                          {highlight.number}
                          {highlight.suffix}
                        </span>
                      </div>

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
          <div className="max-w-4xl mx-auto">
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
                  Market Validation
                </span>
              </div>

              <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-8 leading-tight">
                Validate Your Vision
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  with Data
                </span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                In the critical early stages,{" "}
                <strong className="text-gray-800">
                  assumptions can be costly
                </strong>
                . Our Comprehensive Market Research service is designed to
                replace guesswork with a deep, data-driven understanding of your
                target market, competitors, and industry trends.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                We dive into customer demographics, analyze market size and
                potential, and identify key opportunities and threats. This
                foundational knowledge empowers you to make{" "}
                <span className="text-blue-600 font-semibold">
                  informed decisions
                </span>
                , refine your business strategy, and build a product that truly
                meets market needs, setting you up for a successful launch and
                long-term growth.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="mb-20">
          <div
            className={`max-w-5xl mx-auto transform transition-all duration-1000 delay-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="bg-gradient-to-r from-white/90 to-blue-50/90 backdrop-blur-sm border border-blue-200 rounded-3xl p-10 lg:p-16 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full mb-4">
                  Premium Market Research
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Powerroom.io
                </h3>
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 w-7 h-7 fill-current animate-pulse"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
              </div>

              <blockquote className="text-lg lg:text-xl text-gray-700 italic leading-relaxed mb-8">
                "🌟🌟🌟🌟🌟{" "}
                <strong>Outstanding Service – Highly Recommend!</strong> Will
                went above and beyond in delivering this service. From the
                beginning, he demonstrated a clear understanding of what I
                needed and brought a level of professionalism and depth that
                exceeded my expectations. The market research and competitive
                analysis were{" "}
                <span className="text-blue-600 font-semibold">
                  incredibly thorough, insightful, and tailored specifically
                </span>{" "}
                to my business goals."
              </blockquote>

              <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-8">
                "He didn't just deliver generic information — every section was
                well-researched, up-to-date, and clearly organized. His{" "}
                <span className="text-indigo-600 font-semibold">
                  SWOT and PEST analyses were especially valuable
                </span>
                , helping me see blind spots and opportunities I hadn't
                considered. What really stood out was his responsiveness and
                attention to detail, and made sure every deliverable was
                polished and actionable."
              </blockquote>

              <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-blue-200">
                <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">P</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">
                      Powerroom.io Client
                    </p>
                    <p className="text-blue-600 text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div
            className={`transform transition-all duration-1000 delay-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-block p-1 bg-blue-600 rounded-2xl shadow-2xl">
              <Link
                to="/portfolio"
                className="flex items-center justify-center px-12 py-6 bg-white font-bold text-xl rounded-xl  transition-all duration-300 relative overflow-hidden"
              >
                <span className="text-transparent bg-clip-text bg-blue-600 ">
                  Explore Our Portfolio
                </span>
                <ChevronRight
                  className="ml-3 group-hover:translate-x-2 transition-transform"
                  size={24}
                />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MarketResearch;
