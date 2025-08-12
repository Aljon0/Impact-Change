import React from "react";

const Stats = () => {
  return (
    <section className="py-16 bg-[#0054ac]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First row - Main stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center mb-16">
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <img
                src="/HomePage/Star.png"
                alt="Star icon"
                className="w-12 h-12 md:w-14 md:h-14 mx-auto"
              />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">
              5.0 Stars
            </div>
            <div className="text-sm md:text-base text-blue-100">
              1,800+ Reviews
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-4">
              <img
                src="/HomePage/Dollar.png"
                alt="Dollar icon"
                className="w-12 h-12 md:w-14 md:h-14 mx-auto"
              />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">
              $2B+ Raised
            </div>
            <div className="text-sm md:text-base text-blue-100">
              For Clients
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-4">
              <img
                src="/HomePage/User.png"
                alt="User"
                className="w-12 h-12 md:w-14 md:h-14 mx-auto"
              />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">
              1,500+
            </div>
            <div className="text-sm md:text-base text-blue-100">
              Founders Supported
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-4">
              <img
                src="/HomePage/Achievement.png"
                alt="Achievement icon"
                className="w-12 h-12 md:w-14 md:h-14 mx-auto"
              />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">
              2 Exits
            </div>
            <div className="text-sm md:text-base text-blue-100">Successful</div>
          </div>
        </div>

        {/* Second row - Additional stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center mb-12">
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <svg
                className="w-12 h-12 md:w-14 md:h-14 text-purple-400 mx-auto"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2.5 2.5 0 01-2.5 2.5h-7A2.5 2.5 0 014 16V4zm3 1h6v4H7V5zm8 8v2a1 1 0 11-2 0v-2a1 1 0 112 0zm-3 2v2a1 1 0 11-2 0v-2a1 1 0 112 0zm-3 2v2a1 1 0 11-2 0v-2a1 1 0 112 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">
              1,200+
            </div>
            <div className="text-sm md:text-base text-blue-100">
              Pitch Decks
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-4">
              <svg
                className="w-12 h-12 md:w-14 md:h-14 text-indigo-400 mx-auto"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">
              1,000+
            </div>
            <div className="text-sm md:text-base text-blue-100">
              Business Plans
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-4">
              <svg
                className="w-12 h-12 md:w-14 md:h-14 text-teal-400 mx-auto"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">
              10,000+
            </div>
            <div className="text-sm md:text-base text-blue-100">
              Consulting Hours
            </div>
          </div>
        </div>

        {/* Enhanced methodology link */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-400/20 backdrop-blur-sm border border-blue-300/30 hover:from-blue-500/30 hover:to-blue-400/30 hover:border-blue-300/50 transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-xl">
            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors duration-300">
              <svg
                className="w-4 h-4 text-white"
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
            <span className="text-base font-medium text-white group-hover:text-blue-100 transition-colors duration-300">
              Learn about our methodology
            </span>
            <div className="flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
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
