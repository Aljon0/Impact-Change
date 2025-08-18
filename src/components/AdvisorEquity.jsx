import {
  ArrowRight,
  CheckCircle,
  Clock,
  TrendingUp,
  Users,
} from "lucide-react";
import React from "react";

const AdvisorEquity = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-80 h-48 sm:h-80 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24 xl:py-32">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Advisor
                <span className="block text-transparent bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text">
                  Equity
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 leading-relaxed">
                When a partnership makes sense, we sometimes invest our time for
                a small stake.
              </p>

              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="group bg-white text-blue-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-blue-50 transition-all duration-300 flex items-center justify-center transform hover:scale-105">
                  Let's talk about equity
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  Learn More
                </button>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="text-center">
                    <TrendingUp className="h-10 sm:h-12 w-10 sm:w-12 text-cyan-400 mx-auto mb-2 sm:mb-3" />
                    <div className="text-xl sm:text-2xl font-bold text-white">
                      0.25-1%
                    </div>
                    <div className="text-sm sm:text-base text-blue-200">
                      Equity Range
                    </div>
                  </div>
                  <div className="text-center">
                    <Clock className="h-10 sm:h-12 w-10 sm:w-12 text-blue-300 mx-auto mb-2 sm:mb-3" />
                    <div className="text-xl sm:text-2xl font-bold text-white">
                      2-4 Years
                    </div>
                    <div className="text-sm sm:text-base text-blue-200">
                      Vesting
                    </div>
                  </div>
                  <div className="text-center">
                    <Users className="h-10 sm:h-12 w-10 sm:w-12 text-indigo-300 mx-auto mb-2 sm:mb-3" />
                    <div className="text-xl sm:text-2xl font-bold text-white">
                      Select
                    </div>
                    <div className="text-sm sm:text-base text-blue-200">
                      Founders
                    </div>
                  </div>
                  <div className="text-center">
                    <CheckCircle className="h-10 sm:h-12 w-10 sm:w-12 text-green-400 mx-auto mb-2 sm:mb-3" />
                    <div className="text-xl sm:text-2xl font-bold text-white">
                      Optional
                    </div>
                    <div className="text-sm sm:text-base text-blue-200">
                      Always
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Why Equity Section */}
        <div className="mb-16 sm:mb-20">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-700 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                Partnership Approach
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Why <span className="text-blue-600">Equity</span>?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
                We pride ourselves on delivering high-value, fairly priced
                services. For a select group of founders, we sometimes go a step
                further and align our interests through advisor equity. This
                means we'll invest our time and expertise for a small ownership
                stake, forging a longer-term partnership.
              </p>

              <div className="space-y-3 sm:space-y-4">
                {[
                  "Long-term partnership alignment",
                  "Shared success and growth",
                  "Deeper commitment to your vision",
                  "Industry-standard terms",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-base sm:text-lg">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-10 lg:mt-0">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-white/10 rounded-full -mr-10 sm:-mr-16 -mt-10 sm:-mt-16"></div>
                <div className="absolute bottom-0 left-0 w-16 sm:w-24 h-16 sm:h-24 bg-white/10 rounded-full -ml-8 sm:-ml-12 -mb-8 sm:-mb-12"></div>

                <div className="relative z-10">
                  <TrendingUp className="h-12 sm:h-16 w-12 sm:w-16 text-cyan-300 mb-4 sm:mb-6" />
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                    Mutual Growth
                  </h3>
                  <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
                    When we take equity, your success becomes our success. We're
                    not just consultants—we're partners invested in your
                    long-term growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How Much Equity Section */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              How Much <span className="text-blue-600">Equity</span>?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Advisor equity is not a fixed "package"; it's a conversation.
              Industry guidelines, such as the Founder Institute's FAST
              framework, suggest ranges between 0.25% and 1% at the idea stage,
              typically vesting over a two-year term with a cliff.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-white font-bold text-lg sm:text-xl">
                  1%
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Starting Point
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Our typical starting point is 1% for idea-stage companies, with
                vesting over two to four years.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <TrendingUp className="h-6 sm:h-8 w-6 sm:w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Value Based
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                The exact amount depends on your stage, how much value we can
                add, and our mutual goals.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <Users className="h-6 sm:h-8 w-6 sm:w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Industry Standard
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We follow established industry norms and frameworks to ensure
                fair and transparent terms.
              </p>
            </div>
          </div>
        </div>

        {/* Next Steps Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 sm:p-12 lg:p-16 xl:p-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
              Next <span className="text-blue-600">Steps</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 sm:mb-12">
              Advisor equity is considered after we've worked together on a
              project (for example, a pitch deck or business plan) and built
              trust. If you think a deeper partnership might make sense, start
              by engaging us through our core services. Once we see traction,
              we'll discuss whether equity makes sense for both sides.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <button className="group bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 sm:px-10 py-3 sm:py-4 lg:py-5 rounded-full font-semibold text-base sm:text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center transform hover:scale-105">
                Let's talk about equity
                <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 sm:px-10 py-3 sm:py-4 lg:py-5 rounded-full font-semibold text-base sm:text-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                View Core Services
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-gray-100 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs sm:text-sm text-gray-500 text-center">
            This page is for information only and does not constitute legal or
            financial advice. Always consult a lawyer and tax advisor before
            issuing shares.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvisorEquity;
