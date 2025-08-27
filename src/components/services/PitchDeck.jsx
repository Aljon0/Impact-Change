import { ArrowRight, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PitchDeck = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToPortfolio = () => {
    // Scroll to portfolio section
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <section
          className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600  to-blue-800 bg-clip-text text-transparent mb-6 leading-tight">
            Pitch Deck Writing
            <span className="block">& Designing</span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-10 leading-relaxed">
            Our team crafts{" "}
            <span className="text-blue-600 font-semibold">
              compelling, visually stunning
            </span>{" "}
            pitch decks that tell your unique story and{" "}
            <span className="text-indigo-600 font-semibold">
              captivate potential investors
            </span>
            .
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
              <Link
                to="/pricing?category=pitch-decks"
                className="relative flex items-center"
              >
                Get Started
                <ArrowRight
                  className="inline ml-3 group-hover:translate-x-2 transition-transform"
                  size={24}
                />
              </Link>
            </button>

            <button
              onClick={scrollToPortfolio}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold cursor-pointer text-lg rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 relative overflow-hidden flex items-center justify-center"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              <Link to="/portfolio" className="relative flex items-center">
                View Portfolio
                <ArrowRight
                  className="inline ml-3 group-hover:translate-x-2 transition-transform"
                  size={24}
                />
              </Link>
            </button>
          </div>
        </section>

        {/* About Service Section - Now with 2 columns */}
        <section className="mb-20">
          <div className="max-w-6xl mx-auto">
            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-12 leading-tight text-center">
                Crafting Your
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Investment-Winning Story
                </span>
              </h2>

              {/* 2-Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - GIF Image */}
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl group-hover:shadow-2xl sm:group-hover:shadow-3xl transition-all duration-500 transform group-hover:-translate-y-1 lg:group-hover:-translate-y-2 group-hover:rotate-1">
                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 opacity-15 group-hover:opacity-25 transition-opacity duration-500 z-10 animate-gradient-shift"></div>

                    <img
                      src="/HomePage/PitchDeck.gif"
                      alt="Pitch Deck Animation"
                      className="w-full h-auto transition-transform duration-700 group-hover:scale-105 lg:group-hover:scale-110"
                    />

                    {/* Floating animated orbs */}
                    <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 rounded-full opacity-70 blur-lg sm:blur-xl animate-pulse-glow"></div>
                    <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-14 sm:w-16 lg:w-20 h-14 sm:h-16 lg:h-20 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 rounded-full opacity-50 blur-md sm:blur-lg animate-bounce-slow"></div>
                  </div>
                </div>

                {/* Right Column - Content */}
                <div className="space-y-6">
                  <div className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      Your pitch deck is often the{" "}
                      <strong>first impression</strong> you make on an investor.
                      We specialize in turning your complex business idea into a
                      clear, compelling, and visually engaging narrative. Our
                      team of expert writers and designers works with you to
                      structure your story, highlight your unique value
                      proposition, and present your financial projections with
                      clarity.
                    </p>

                    <p className="text-lg text-gray-600 leading-relaxed">
                      The result is a{" "}
                      <span className="text-blue-600 font-semibold">
                        professional, persuasive pitch deck
                      </span>{" "}
                      that not only looks stunning but is strategically designed
                      to capture attention and secure the meetings that matter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials & Portfolio Section */}
        <section className="mb-16" id="portfolio">
          <div
            className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 delay-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-8">
              Testimonials & Portfolio
            </h2>

            <div className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-3xl p-8 lg:p-12 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400 w-6 h-6 fill-current animate-pulse"
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>

              <blockquote className="text-lg lg:text-xl text-gray-700 mb-8 italic leading-relaxed">
                "The Pitch Deck that Will created and curated for my business is
                simply{" "}
                <span className="text-blue-600 font-bold">
                  OUT OF THIS WORLD
                </span>
                . I'm hoping the work he did will be attached as part of my
                review to show the shear magnitude of talent and explicit 5 star
                work put into this document and quite frankly ALL of Will's work
                he puts together! I'm not a speechless individual but this has
                me so!"
              </blockquote>

              <div className="border-t border-blue-100 pt-6 mb-6">
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">LW</span>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-800">Lucas Welper</p>
                    <p className="text-blue-600 text-sm">
                      Founder of Jet Collean
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PitchDeck;
