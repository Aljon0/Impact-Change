import {
  AlertTriangle,
  Award,
  Calendar,
  CheckCircle,
  DollarSign,
  Handshake,
  Target,
  TrendingUp,
  Users,
  XCircle,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const StrategicFundraisingAdvisory = () => {
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
          <div className="text-center text-white">
            <div className="inline-flex items-center bg-red-500/20 text-red-200 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-red-400/30">
              <XCircle className="h-4 w-4 mr-2" />
              Not Available in 2025
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Strategic Fundraising &
              <span className="block text-transparent bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text">
                Advisory for Equity
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto mb-8">
              Our core offerings, such as pitch decks, business plans, and
              market research, already equip founders with the materials they
              need to approach investors.
            </p>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-2xl mx-auto border border-white/20">
              <div className="flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-cyan-400 mr-2" />
                <span className="text-white font-semibold">Service Status</span>
              </div>
              <p className="text-blue-100 text-center">
                This service is{" "}
                <strong className="text-white">closed for 2025</strong> and will
                be reviewed again in{" "}
                <strong className="text-cyan-300">2026</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Introduction */}
        <div className="mb-16 sm:mb-20 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Two <span className="text-blue-600">Selective Models</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            For founders who want a closer, ongoing relationship, we offer two
            selective models. These are resource intensive, highly personal, and
            always considered case by case.
          </p>
        </div>

        {/* Advisory for Equity Section */}
        <div className="mb-16 sm:mb-20">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-700 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                <Handshake className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                Partnership Model
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Advisory for <span className="text-blue-600">Equity</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
                In this model, we step in as a strategic advisor in exchange for
                a small, time-bound equity stake. Rather than paying fees, you
                grant a modest share of equity (typically 1% or less on a 2 to 4
                year term) in return for our active involvement.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                How it works:
              </h3>
              <div className="space-y-3 sm:space-y-4 mb-8">
                {[
                  "We agree an equity stake and a defined advisory term",
                  "We provide ongoing input into investor strategy, business planning, and growth priorities",
                  "You get a trusted partner who brings investor insight and operator experience without high retainers",
                  "Advisory clients benefit from bespoke pricing on all other services",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-base sm:text-lg">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <p className="text-blue-800 font-medium">
                  <strong>Best suited for:</strong> Early-stage founders who
                  value deep strategic input but want to preserve cash.
                </p>
              </div>
            </div>

            <div className="relative mt-10 lg:mt-0">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-white/10 rounded-full -mr-10 sm:-mr-16 -mt-10 sm:-mt-16"></div>
                <div className="absolute bottom-0 left-0 w-16 sm:w-24 h-16 sm:h-24 bg-white/10 rounded-full -ml-8 sm:-ml-12 -mb-8 sm:-mb-12"></div>

                <div className="relative z-10">
                  <TrendingUp className="h-12 sm:h-16 w-12 sm:w-16 text-cyan-300 mb-4 sm:mb-6" />
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                    Equity Partnership
                  </h3>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">≤1%</div>
                      <div className="text-sm text-blue-200">Equity Stake</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">2-4</div>
                      <div className="text-sm text-blue-200">Year Term</div>
                    </div>
                  </div>

                  <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
                    Your success becomes our success. We're not just
                    consultants—we're partners invested in your long-term
                    growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fundraising Support Section */}
        <div className="mb-16 sm:mb-20">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-white/10 rounded-full -mr-10 sm:-mr-16 -mt-10 sm:-mt-16"></div>
                <div className="absolute bottom-0 left-0 w-16 sm:w-24 h-16 sm:h-24 bg-white/10 rounded-full -ml-8 sm:-ml-12 -mb-8 sm:-mb-12"></div>

                <div className="relative z-10">
                  <DollarSign className="h-12 sm:h-16 w-12 sm:w-16 text-green-200 mb-4 sm:mb-6" />
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                    Fee-Based Model
                  </h3>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">100%</div>
                      <div className="text-sm text-green-200">
                        Equity Retained
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">
                        Expert
                      </div>
                      <div className="text-sm text-green-200">Guidance</div>
                    </div>
                  </div>

                  <p className="text-green-100 text-base sm:text-lg leading-relaxed">
                    Professional fundraising support while you retain full
                    ownership of your company.
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                <DollarSign className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                Professional Service
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Fundraising Support{" "}
                <span className="text-green-600">(Fee Based)</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
                For founders who prefer to retain full equity, we can take a
                more hands-on role in the fundraising journey for a professional
                fee.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                How it works:
              </h3>
              <div className="space-y-3 sm:space-y-4 mb-8">
                {[
                  "We help you identify and prioritise suitable investors",
                  "We refine pitch materials specifically for investor meetings",
                  "We review and explain term sheets, highlighting key risks and opportunities",
                  "We act as a sounding board throughout the process, from first contact to deal close",
                  "Fundraising clients receive bespoke pricing on all other services during the engagement",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <Target className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-base sm:text-lg">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <p className="text-green-800 font-medium">
                  <strong>Best suited for:</strong> Founders who already have
                  some traction but want expert guidance to navigate investor
                  conversations with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why It Is Limited Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 sm:p-12 lg:p-16 xl:p-20 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Limited Availability
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
              Why It Is <span className="text-amber-600">Limited</span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 sm:mb-12">
              Both of these services require close personal involvement. To keep
              our pricing competitive and ensure every founder can access
              high-quality materials, we limit equity and fundraising support to
              a handful of select cases.
            </p>

            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 sm:p-8 mb-8">
              <div className="flex items-center justify-center mb-4">
                <XCircle className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-xl sm:text-2xl font-bold text-red-800">
                  Service Closed for 2025
                </h3>
              </div>
              <p className="text-red-700 text-lg leading-relaxed">
                That is why the service is <strong>closed for 2025</strong> and
                will be
                <strong> reviewed again in 2026</strong>.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <Users className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">
                  Personal Involvement
                </h4>
                <p className="text-gray-600 text-sm">
                  Resource intensive, highly personal approach
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <Award className="h-10 w-10 text-green-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">
                  Competitive Pricing
                </h4>
                <p className="text-gray-600 text-sm">
                  Maintaining affordable core services
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <CheckCircle className="h-10 w-10 text-purple-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">
                  Quality Assurance
                </h4>
                <p className="text-gray-600 text-sm">
                  Every founder gets high-quality materials
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Alternative Services Section */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 lg:p-16 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
              Our <span className="text-cyan-300">Core Services</span> Are
              Available
            </h2>

            <p className="text-lg sm:text-xl text-blue-100 leading-relaxed mb-8 sm:mb-12">
              While strategic fundraising and advisory services are limited, our
              core offerings remain available to equip you with everything
              needed to approach investors successfully.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="text-lg font-bold text-white mb-2">
                  Pitch Decks
                </h4>
                <p className="text-blue-100 text-sm">
                  Professional presentations that capture investor attention
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="text-lg font-bold text-white mb-2">
                  Business Plans
                </h4>
                <p className="text-blue-100 text-sm">
                  Comprehensive strategic documents for growth
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="text-lg font-bold text-white mb-2">
                  Market Research
                </h4>
                <p className="text-blue-100 text-sm">
                  In-depth analysis to support your strategy
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <button className="group bg-white text-blue-700 px-8 sm:px-10 py-3 sm:py-4 lg:py-5 rounded-full font-semibold text-base sm:text-lg hover:bg-blue-50 transition-all duration-300 flex items-center justify-center transform hover:scale-105">
                <Link to="/portfolio">View Portfolio</Link>
              </button>
              <button className="border-2 border-white/30 text-white px-8 sm:px-10 py-3 sm:py-4 lg:py-5 rounded-full font-semibold text-base cursor-pointer sm:text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                <Link to="/Contact">Contact Us</Link>
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
            financial advice. Strategic fundraising and advisory services are
            not available in 2025. Always consult a lawyer and tax advisor
            before issuing shares.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StrategicFundraisingAdvisory;
