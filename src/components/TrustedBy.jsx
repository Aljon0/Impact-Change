import React from "react";

const TrustedBy = () => {
  return (
    <section className="py-16" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-[#131e3D] text-4xl font-bold tracking-wide mb-8">
          As Seen In & Trusted By
        </h3>

        {/* Moving logos container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-8">
            {/* First set of logos */}
            <div className="flex-shrink-0 flex items-center justify-center w-64 h-32">
              <img
                src="/HomePage/AmericanExpress.png"
                alt="American Express"
                className="w-56 h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            <div className="flex-shrink-0 flex items-center justify-center w-64 h-32">
              <img
                src="/HomePage/Fresha.png"
                alt="Fresha"
                className="w-56 h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            <div className="flex-shrink-0 flex items-center justify-center w-64 h-32">
              <img
                src="/HomePage/Quandoo.png"
                alt="Quandoo"
                className="w-56 h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            <div className="flex-shrink-0 flex items-center justify-center w-64 h-32">
              <img
                src="/HomePage/Reztorer.png"
                alt="REZTORER"
                className="w-56 h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            <div className="flex-shrink-0 flex items-center justify-center w-64 h-32">
              <img
                src="/HomePage/cake.png"
                alt="Cake"
                className="w-56 h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex-shrink-0 flex items-center justify-center w-64 h-32">
              <img
                src="/HomePage/AmericanExpress.png"
                alt="American Express"
                className="w-56 h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            <div className="flex-shrink-0 flex items-center justify-center w-64 h-32">
              <img
                src="/HomePage/Fresha.png"
                alt="Fresha"
                className="w-56 h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            <div className="flex-shrink-0 flex items-center justify-center w-64 h-32">
              <img
                src="/HomePage/Quandoo.png"
                alt="Quandoo"
                className="w-56 h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            <div className="flex-shrink-0 flex items-center justify-center w-64 h-32">
              <img
                src="/HomePage/Reztorer.png"
                alt="REZTORER"
                className="w-56 h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            <div className="flex-shrink-0 flex items-center justify-center w-64 h-32">
              <img
                src="/HomePage/cake.png"
                alt="Cake"
                className="w-56 h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        /* Pause animation on hover */
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TrustedBy;
