import React from "react";

const Stats = () => {
  return (
    <section className="py-20 bg-[#0054ac]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            A Track Record of Excellence
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <img
                src="/HomePage/Star.png"
                alt="Star icon"
                className="w-16 h-16"
              />
            </div>
            <div className="text-4xl font-bold text-white mb-2">5.0 Stars</div>
            <div className="text-blue-100">Based on 1,800+ Fiverr Reviews</div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <img
                src="/HomePage/Dollar.png"
                alt="Dollar icon"
                className="w-16 h-16"
              />
            </div>
            <div className="text-4xl font-bold text-white mb-2">
              $2 Billion+
            </div>
            <div className="text-blue-100">Capital Raised for Clients</div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <img src="/HomePage/User.png" alt="User" className="w-16 h-16" />
            </div>
            <div className="text-4xl font-bold text-white mb-2">1,500+</div>
            <div className="text-blue-100">Founders Coached & Supported</div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <img
                src="/HomePage/Achievement.png"
                alt="Achievement icon"
                className="w-16 h-16"
              />
            </div>
            <div className="text-4xl font-bold text-white mb-2">2</div>
            <div className="text-blue-100">Successful Startup Exits</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
