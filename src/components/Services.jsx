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
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
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
              <button className="bg-transparent text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors border-2 border-blue-600 cursor-pointer">
                Get Expert Support
              </button>
            </div>

            <div className="order-2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80"
                  alt="Business plan and financial documents"
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
