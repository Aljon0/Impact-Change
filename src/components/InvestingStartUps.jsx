import {
  ArrowRight,
  Building,
  Calendar,
  Lightbulb,
  Mail,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import React, { useState } from "react";

const InvestingStartupsPage = () => {
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, you'd send this data to your backend
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900">
        <div className="absolute inset-0">
          <div className="absolute top-32 left-0 sm:left-32 w-40 sm:w-80 h-40 sm:h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-0 sm:right-32 w-48 sm:w-96 h-48 sm:h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-cyan-500/15 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center bg-red-500/20 text-red-300 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 md:mb-6 border border-red-400/30">
                <Calendar className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                Applications Closed
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                Investing in
                <span className="block text-transparent bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text">
                  Startups
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 leading-relaxed mb-6 md:mb-8">
                Backing bold founders—next application window opens in{" "}
                <span className="font-bold text-cyan-300">2026</span>.
              </p>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20 mb-6 md:mb-10">
                <div className="flex items-center mb-2 md:mb-3">
                  <Calendar className="h-5 w-5 md:h-6 md:w-6 text-cyan-400 mr-2 md:mr-3" />
                  <span className="font-semibold text-base md:text-lg">
                    Next Application Window
                  </span>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-cyan-300 mb-1 md:mb-2">
                  2026
                </div>
                <p className="text-blue-200 text-sm md:text-base">
                  We'll notify you when applications reopen and share detailed
                  criteria.
                </p>
              </div>

              <button className="group bg-gradient-to-r from-blue-500 to-indigo-600 text-white cursor-pointer px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg hover:shadow-lg transition-all duration-300 flex items-center transform hover:scale-105">
                Join the Waitlist
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="relative mt-8 md:mt-0">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20 transform hover:scale-105 transition-all duration-300">
                  <Target className="h-8 w-8 md:h-12 md:w-12 text-green-400 mb-2 md:mb-4" />
                  <div className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2">
                    Problem-Solution Fit
                  </div>
                  <div className="text-blue-200 text-xs md:text-sm">
                    Clear market validation
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20 transform hover:scale-105 transition-all duration-300 mt-4 md:mt-8">
                  <TrendingUp className="h-8 w-8 md:h-12 md:w-12 text-blue-400 mb-2 md:mb-4" />
                  <div className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2">
                    Scalable Models
                  </div>
                  <div className="text-blue-200 text-xs md:text-sm">
                    Growth potential
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20 transform hover:scale-105 transition-all duration-300 -mt-4 md:-mt-8">
                  <Users className="h-8 w-8 md:h-12 md:w-12 text-purple-400 mb-2 md:mb-4" />
                  <div className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2">
                    Aligned Values
                  </div>
                  <div className="text-blue-200 text-xs md:text-sm">
                    Shared mission
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20 transform hover:scale-105 transition-all duration-300">
                  <Building className="h-8 w-8 md:h-12 md:w-12 text-cyan-400 mb-2 md:mb-4" />
                  <div className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2">
                    Exceptional Teams
                  </div>
                  <div className="text-blue-200 text-xs md:text-sm">
                    Strong execution
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Investment Thesis Section */}
        <div className="mb-12 md:mb-20">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative order-last lg:order-first">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl md:rounded-3xl p-6 md:p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 md:w-40 md:h-40 bg-white/10 rounded-full -mr-10 md:-mr-20 -mt-10 md:-mt-20"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 md:w-32 md:h-32 bg-white/10 rounded-full -ml-8 md:-ml-16 -mb-8 md:-mb-16"></div>

                <div className="relative z-10">
                  <Lightbulb className="h-12 w-12 md:h-20 md:w-20 text-yellow-300 mb-4 md:mb-8" />
                  <h3 className="text-xl md:text-3xl font-bold mb-4 md:mb-6">
                    Beyond Consulting
                  </h3>
                  <p className="text-blue-100 text-base md:text-lg leading-relaxed mb-4 md:mb-8">
                    We don't just advise—we invest our own capital in
                    exceptional startups that align with our vision for the
                    future.
                  </p>

                  <div className="space-y-2 md:space-y-4">
                    {[
                      "Personal capital investment",
                      "Separate from consultancy work",
                      "Long-term partnership focus",
                      "Strategic value addition",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-cyan-300 rounded-full mr-2 md:mr-3"></div>
                        <span className="text-blue-100 text-sm md:text-base">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="order-first lg:order-last">
              <div className="inline-flex items-center bg-blue-100 text-blue-700 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 md:mb-6">
                <TrendingUp className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                Investment Focus
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                Our Investment <span className="text-blue-600">Thesis</span>
              </h2>
              <p className="text-base md:text-xl text-gray-600 leading-relaxed mb-6 md:mb-8">
                Beyond advising founders, we occasionally invest our own capital
                in startups with clear problem–solution fit, scalable business
                models and values that align with ours. These investments are
                separate from our consultancy work and allow us to partner with
                exceptional teams.
              </p>

              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="bg-green-50 rounded-lg md:rounded-xl p-4 md:p-6 border border-green-100">
                  <div className="text-xl md:text-3xl font-bold text-green-600 mb-1 md:mb-2">
                    $2B+
                  </div>
                  <div className="text-green-700 text-sm md:text-base">
                    Client Funds Raised
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg md:rounded-xl p-4 md:p-6 border border-blue-100">
                  <div className="text-xl md:text-3xl font-bold text-blue-600 mb-1 md:mb-2">
                    94%
                  </div>
                  <div className="text-blue-700 text-sm md:text-base">
                    Success Rate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Closed Applications Section */}
        <div className="mb-12 md:mb-20">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center bg-red-100 text-red-700 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 md:mb-6">
              <Calendar className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
              Currently Closed
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Closed to New <span className="text-blue-600">Applications</span>
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Due to our current portfolio commitments, we are not reviewing new
              investment opportunities until 2026. We'll reopen applications and
              publicly share criteria when the next window opens.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl md:rounded-3xl p-6 md:p-12 border border-red-100">
            <div className="max-w-3xl mx-auto text-center">
              <Calendar className="h-16 w-16 md:h-24 md:w-24 text-red-500 mx-auto mb-4 md:mb-8" />
              <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                Next Window: 2026
              </h3>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                We're currently focused on supporting our existing portfolio
                companies. Our next investment window will open in 2026 with
                clear application criteria and processes.
              </p>

              <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 inline-block shadow-lg">
                <div className="text-4xl md:text-6xl font-bold text-red-500 mb-1 md:mb-2">
                  2026
                </div>
                <div className="text-gray-600 text-sm md:text-base font-semibold">
                  Applications Reopen
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prepare for 2026 & Waitlist Section */}
        <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 rounded-2xl md:rounded-3xl p-6 md:p-12 lg:p-20 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-4 md:top-10 right-4 md:right-10 w-36 md:w-72 h-36 md:h-72 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-4 md:bottom-10 left-4 md:left-10 w-40 md:w-80 h-40 md:h-80 bg-white/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                Prepare for <span className="text-cyan-300">2026</span>
              </h2>
              <p className="text-base md:text-xl text-blue-100 leading-relaxed">
                If you believe Impact Change would be a good fit for your
                company, you can join our waitlist. We'll notify you when
                applications reopen and outline how to submit your deck,
                financials, and team video.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
                  What to Expect in 2026:
                </h3>
                <div className="space-y-2 md:space-y-4">
                  {[
                    "Clear application criteria",
                    "Streamlined submission process",
                    "Team video requirements",
                    "Financial documentation guidelines",
                    "Timeline and next steps",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-cyan-400 rounded-full mr-2 md:mr-4 flex-shrink-0"></div>
                      <span className="text-blue-100 text-sm md:text-lg">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/20 cursor-pointer">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center cursor-pointer">
                  Join the Waitlist
                </h3>

                {isSubmitted ? (
                  <div className="text-center py-6 md:py-8">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                      <ArrowRight className="h-5 w-5 md:h-8 md:w-8 text-white transform rotate-45" />
                    </div>
                    <h4 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">
                      You're on the list!
                    </h4>
                    <p className="text-blue-200 text-sm md:text-base">
                      We'll notify you when applications open in 2026.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 md:space-y-6"
                  >
                    <div>
                      <label className="block text-xs md:text-sm font-medium text-blue-200 mb-1 md:mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full pl-10 md:pl-12 pr-4 py-2 md:py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm text-sm md:text-base"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs md:text-sm font-medium text-blue-200 mb-1 md:mb-2">
                        Company Name (Optional)
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                        <input
                          type="text"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          className="w-full pl-10 md:pl-12 pr-4 py-2 md:py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm text-sm md:text-base"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white cursor-pointer py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                    >
                      Join the Waitlist
                      <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <p className="text-xs text-blue-200 text-center mt-2 md:mt-4">
                      Please do not send unsolicited materials until 2026.
                    </p>
                  </form>
                )}

                <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-white/20">
                  <p className="text-center text-blue-200 text-xs md:text-sm">
                    Want to work with us in the meantime?
                  </p>
                  <button className="w-full mt-2 md:mt-3 border-2 border-white/30 text-white py-2 md:py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-white/10 transition-all duration-300">
                    Explore Core Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 md:mt-20 grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6">
              <Target className="h-5 w-5 md:h-8 md:w-8 text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-4">
              Investment Focus
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              We invest in startups with clear problem-solution fit, scalable
              business models, and values aligned with ours.
            </p>
          </div>

          <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6">
              <Calendar className="h-5 w-5 md:h-8 md:w-8 text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-4">
              Timeline
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Applications will reopen in 2026. Join our waitlist to be notified
              when the window opens.
            </p>
          </div>

          <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 sm:col-span-2 md:col-span-1">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6">
              <Users className="h-5 w-5 md:h-8 md:w-8 text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-4">
              Partnership
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              These investments are separate from our consultancy work, allowing
              us to partner with exceptional teams.
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-gray-100 py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs md:text-sm text-gray-500 text-center">
            This is not an offer to buy or sell securities. Any investment
            decisions will follow appropriate due diligence and legal processes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvestingStartupsPage;
