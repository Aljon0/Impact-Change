import React from "react";

const Stats = () => {
  return (
    <section className="py-8 bg-[#0054ac]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center mb-2">
              <img
                src="/HomePage/Star.png"
                alt="Star icon"
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </div>
            <div className="text-xl md:text-2xl font-bold text-white mb-1">
              5.0 Stars
            </div>
            <div className="text-xs md:text-sm text-blue-100">
              1,800+ Reviews
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center mb-2">
              <img
                src="/HomePage/Dollar.png"
                alt="Dollar icon"
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </div>
            <div className="text-xl md:text-2xl font-bold text-white mb-1">
              $2B+ Raised
            </div>
            <div className="text-xs md:text-sm text-blue-100">For Clients</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center mb-2">
              <img
                src="/HomePage/User.png"
                alt="User"
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </div>
            <div className="text-xl md:text-2xl font-bold text-white mb-1">
              1,500+
            </div>
            <div className="text-xs md:text-sm text-blue-100">
              Founders Supported
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center mb-2">
              <img
                src="/HomePage/Achievement.png"
                alt="Achievement icon"
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </div>
            <div className="text-xl md:text-2xl font-bold text-white mb-1">
              2 Exits
            </div>
            <div className="text-xs md:text-sm text-blue-100">Successful</div>
          </div>
        </div>

        {/* Enhanced link explaining calculations */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-400/20 backdrop-blur-sm border border-blue-300/30 hover:from-blue-500/30 hover:to-blue-400/30 hover:border-blue-300/50 transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-xl">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors duration-300">
              <svg
                className="w-3 h-3 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-sm font-medium text-white group-hover:text-blue-100 transition-colors duration-300">
              Learn about our methodology
            </span>
            <div className="flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
