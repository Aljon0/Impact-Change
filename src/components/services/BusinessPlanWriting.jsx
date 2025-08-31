import { ArrowRight, FileText, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const BusinessPlanWriting = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-10"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full opacity-5"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-300 rounded-full opacity-10"></div>

        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Business Plan Writing and Designing
            <br />
            with 5-Year Financial Forecast
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Secure your future with a professionally written business plan,
            complete with a detailed five-year financial forecast to guide your
            growth and attract investment.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
              <Link
                to="/pricing?category=business-plans"
                className="flex items-center"
              >
                Get Started Today
                <ArrowRight
                  className="inline ml-3 group-hover:translate-x-2 transition-transform"
                  size={24}
                />
              </Link>
            </button>

            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center">
              <Link
                to="/portfolio/business-plans"
                className="flex items-center"
              >
                View Portfolio
                <ArrowRight
                  className="inline ml-3 group-hover:translate-x-2 transition-transform"
                  size={24}
                />
              </Link>
            </button>
          </div>
        </div>
      </div>

      {/* About Service Section - Now with 2 columns */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Your Roadmap to Success
            </h2>
          </div>

          {/* 2-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Column - GIF Image */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl group-hover:shadow-2xl sm:group-hover:shadow-3xl transition-all duration-500 transform group-hover:-translate-y-1 lg:group-hover:-translate-y-2 group-hover:rotate-1">
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 opacity-15 group-hover:opacity-25 transition-opacity duration-500 z-10 animate-gradient-shift"></div>

                <img
                  src="/HomePage/BusinessPlan.gif"
                  alt="Business Plan Animation"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105 lg:group-hover:scale-110"
                />

                {/* Floating animated orbs */}
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 rounded-full opacity-70 blur-lg sm:blur-xl animate-pulse-glow"></div>
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-14 sm:w-16 lg:w-20 h-14 sm:h-16 lg:h-20 bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 rounded-full opacity-50 blur-md sm:blur-lg animate-bounce-slow"></div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="text-gray-700 text-lg leading-relaxed space-y-6">
                  <p>
                    A professional business plan is the ultimate roadmap for
                    your start-up. It's an essential tool for securing loans,
                    attracting investors, and guiding your strategic decisions.
                  </p>
                  <p>
                    Our team develops a comprehensive, well-researched business
                    plan that covers every aspect of your operations, from
                    marketing and sales strategies to your management team.
                  </p>
                  <p>
                    Crucially, we include a detailed 5-year financial forecast,
                    providing a realistic and compelling projection of your
                    company's future potential and giving investors the
                    confidence to back your vision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials & Portfolio Section */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Testimonials & Portfolio
            </h2>
          </div>

          {/* Testimonial */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 mb-12">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">MR</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">
                  Maria Rodriguez
                </h3>
                <p className="text-blue-700 font-medium">Owner of EcoGoods</p>
                <div className="flex space-x-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>

            <blockquote className="text-gray-700 text-lg leading-relaxed italic">
              "The business plan was instrumental in securing our first business
              loan. The financial forecast was detailed, professional, and gave
              the bank complete confidence in our vision."
            </blockquote>
          </div>

          {/* Portfolio Section */}
          <div className="bg-blue-900 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Review a Business Plan Summary:
            </h3>
            <p className="text-blue-100 text-lg leading-relaxed mb-6">
              Get a glimpse into the comprehensive structure and detailed
              financial forecasting of our professional business plans.
            </p>
            <Link
              to="/portfolio/business-plans"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              View Business Plan Portfolio
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPlanWriting;
