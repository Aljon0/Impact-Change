import React from "react";

const TrustedBy = () => {
  const logos = [
    { name: "American Express", file: "AE.png" },
    { name: "Fresha", file: "F.png" },
    { name: "Quandoo", file: "Q.png" },
    { name: "REZTORER", file: "R.png" },
    { name: "Wells Fargo", file: "WF.png" },
  ];

  return (
    <section className="py-16" style={{ backgroundColor: "#016FD0" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-white text-sm font-semibold uppercase tracking-wide mb-8">
          As Seen In & Trusted By
        </h3>

        {/* Moving logos container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-16">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-32 h-16"
              >
                <img
                  src={`/CompanyLogo/${logo.file}`}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-32 h-16"
              >
                <img
                  src={`/CompanyLogo/${logo.file}`}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
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
