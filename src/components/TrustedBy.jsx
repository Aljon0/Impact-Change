import React from "react";
// Import all logo images
import AmericanExpressLogo from "/public/Homepage/AmericanExpress.png";
import FreshaLogo from "/public/Homepage/Fresha.png";
import QuandooLogo from "/public/Homepage/Quandoo.png";
import ReztorerLogo from "/public/Homepage/Reztorer.png";
import CakeLogo from "/public/Homepage/cake.png";

const TrustedBy = () => {
  const logos = [
    { name: "American Express", src: AmericanExpressLogo },
    { name: "Fresha", src: FreshaLogo },
    { name: "Quandoo", src: QuandooLogo },
    { name: "REZTORER", src: ReztorerLogo },
    { name: "Cake", src: CakeLogo },
  ];

  // Debug function to check if image loads
  const handleImageError = (e, logoName) => {
    console.error(`Failed to load image: ${logoName}`, e.target.src);
  };

  const handleImageLoad = (logoName) => {
    console.log(`Successfully loaded: ${logoName}`);
  };

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
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-64 h-32"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="w-56 h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                  onError={(e) => handleImageError(e, logo.name)}
                  onLoad={() => handleImageLoad(logo.name)}
                />
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-64 h-32"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="w-56 h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                  onError={(e) => handleImageError(e, logo.name)}
                  onLoad={() => handleImageLoad(logo.name)}
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
