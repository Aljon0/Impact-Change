import React from "react";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#131e3D] mb-6">
            Your Strategic Partner for Growth
          </h2>
          <p className="text-lg md:text-xl text-[#4a4949] max-w-4xl mx-auto leading-relaxed">
            I offer sharp, hands-on services for founders, professionals, and
            growing teams. Whether you're validating an idea, raising capital,
            or building a strong personal brand, I deliver expert guidance and
            investor-ready assets that drive real progress.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {/* Service 1: Pitch Decks */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src="/HomePage/PitchDeck.gif"
                  alt="Professional pitch deck designs"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-8">
                <img
                  src="/HomePage/PitchDeckDashboard.svg"
                  alt="Pitch Deck Icon"
                  className="w-8 h-8 brightness-0 invert"
                />
              </div>
              <h3 className="text-3xl font-bold text-[#131e3D] mb-6">
                Investor-Ready Pitch Decks
              </h3>
              <p className="text-lg text-[#4a4949] leading-relaxed mb-8">
                I'll write and design a compelling pitch deck that tells your
                story, highlights your strengths, and gets investors to pay
                attention. Clean, strategic, and visually on point.
              </p>
              <button className="bg-transparent text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors border-2 border-blue-600 cursor-pointer">
                Start Your Project
              </button>
            </div>
          </div>

          {/* Service 2: Business Plan */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-1">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-8">
                <img
                  src="/HomePage/BusinessPlanBook.svg"
                  alt="Business Plan Icon"
                  className="w-8 h-8 brightness-0 invert"
                />
              </div>
              <h3 className="text-3xl font-bold text-[#131e3D] mb-6">
                Business Plan & 5-Year Financial Forecast
              </h3>
              <p className="text-lg text-[#4a4949] leading-relaxed mb-8">
                Get a professionally written and designed business plan paired
                with a detailed 5-year financial forecast, perfect for
                investors, lenders, or internal strategy. Clear, compelling, and
                built to impress.
              </p>
              <button className="bg-transparent text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 cursor-pointer">
                Get Expert Support
              </button>
            </div>

            <div className="order-2">
              <div className="relative">
                <img
                  src="/HomePage/BusinessPlan.gif"
                  alt="Business plan and financial documents"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Service 3: Comprehensive Market Research */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src="/HomePage/MarketResearch.gif"
                  alt="Market research and data analysis"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-8">
                <img
                  src="/HomePage/CMR.png"
                  alt="Comprehensive Market Research Icon"
                  className="w-8 h-8 brightness-0 invert"
                />
              </div>
              <h3 className="text-3xl font-bold text-[#131e3D] mb-6">
                Comprehensive Market Research
              </h3>
              <p className="text-lg text-[#4a4949] leading-relaxed mb-8">
                We will do an in-depth analysis of your competitive landscape,
                market opportunity, and ideal customer segments in a
                professionally written and designed report.
              </p>
              <button className="bg-transparent text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 cursor-pointer">
                Explore Services
              </button>
            </div>
          </div>

          {/* Service 4: High Impact Investor One-Pager */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-1">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-8">
                <img src="/HomePage/HII.png" alt="" className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-[#131e3D] mb-6">
                High Impact Investor One-Pager
              </h3>
              <p className="text-lg text-[#4a4949] leading-relaxed mb-8">
                A concise, powerful, and professionally designed one-page
                summary of your business. We distill your entire venture into a
                single, compelling document created to capture investor interest
                quickly and make a powerful first impression.
              </p>
              <button className="bg-transparent text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 cursor-pointer">
                Explore Services
              </button>
            </div>

            <div className="order-2">
              <div className="relative">
                <img
                  src="/HomePage/HighImpact.gif"
                  alt="Professional one-pager document"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
