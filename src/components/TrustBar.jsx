import React from "react";

const TrustBar = () => {
  // Combine all logos into a single continuous marquee
  // TrustedBy logos (larger, more prominent)
  const trustedByLogos = [
    {
      src: "/HomePage/AmericanExpress.png",
      alt: "American Express",
      size: "large",
    },
    { src: "/HomePage/Fresha.png", alt: "Fresha", size: "large" },
    { src: "/HomePage/Quandoo.png", alt: "Quandoo", size: "large" },
    { src: "/HomePage/Reztorer.png", alt: "REZTORER", size: "large" },
    { src: "/HomePage/cake.png", alt: "Cake", size: "large" },
  ];

  // ClientLogos (smaller)
  const clientLogos = [
    { src: "/HomePage/Birrdi.png", alt: "Birrdi", size: "small" },
    { src: "/HomePage/WS.png", alt: "WS", size: "small" },
    { src: "/HomePage/TSS.png", alt: "TSS", size: "small" },
    { src: "/HomePage/BDA.png", alt: "BDA", size: "small" },
    { src: "/HomePage/AR.png", alt: "AR", size: "small" },
    { src: "/HomePage/CANCS.png", alt: "CANCS", size: "small" },
    { src: "/HomePage/DETELIO.png", alt: "DETELIO", size: "small" },
    { src: "/HomePage/LLC.png", alt: "LLC", size: "small" },
    { src: "/HomePage/LISTRA.png", alt: "LISTRA", size: "small" },
    {
      src: "/HomePage/AttivoWellness.png",
      alt: "Attivo Wellness",
      size: "small",
    },
    { src: "/HomePage/BIRD.png", alt: "BIRD", size: "small" },
    { src: "/HomePage/BEAUTIFY.png", alt: "BEAUTIFY", size: "small" },
    { src: "/HomePage/OOM.png", alt: "OOM", size: "small" },
    { src: "/HomePage/LOGIX.png", alt: "LOGIX", size: "small" },
    { src: "/HomePage/BONSAI.png", alt: "BONSAI", size: "small" },
    { src: "/HomePage/UP.png", alt: "UP", size: "small" },
    { src: "/HomePage/TANOIA.png", alt: "TANOIA", size: "small" },
    { src: "/HomePage/HF.png", alt: "HF", size: "small" },
  ];

  // Combine all logos for the continuous marquee
  const allLogos = [...trustedByLogos, ...clientLogos];
  const totalLogos = allLogos.length;

  return (
    <>
      {/* Trust Bar - Single continuous marquee */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Moving logos container */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              {allLogos.map((logo, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 flex items-center justify-center px-8 ${
                    logo.size === "large" ? "w-64 h-32" : "w-48 h-24"
                  }`}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`${
                      logo.size === "large" ? "w-56" : "max-w-full max-h-full"
                    } h-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300`}
                    onError={(e) => {
                      console.log(`Failed to load image: ${logo.src}`);
                      e.target.style.display = "none";
                    }}
                  />
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {allLogos.map((logo, index) => (
                <div
                  key={`duplicate-${index}`}
                  className={`flex-shrink-0 flex items-center justify-center px-8 ${
                    logo.size === "large" ? "w-64 h-32" : "w-48 h-24"
                  }`}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`${
                      logo.size === "large" ? "w-56" : "max-w-full max-h-full"
                    } h-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300`}
                    onError={(e) => {
                      console.log(`Failed to load image: ${logo.src}`);
                      e.target.style.display = "none";
                    }}
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
            display: flex;
            width: max-content;
            animation: scroll ${totalLogos * 2.5}s linear infinite;
          }

          /* Pause animation on hover */
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>
    </>
  );
};

export default TrustBar;
