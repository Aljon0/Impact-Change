import React from "react";

const TrustBar = () => {
  // All logos will now be the same size ("large")
  const allLogos = [
    {
      src: "/HomePage/AmericanExpress.png",
      alt: "American Express",
    },
    { src: "/HomePage/Fresha.png", alt: "Fresha" },
    { src: "/HomePage/Quandoo.png", alt: "Quandoo" },
    { src: "/HomePage/Reztorer.png", alt: "REZTORER" },
    { src: "/HomePage/cake.png", alt: "Cake" },
    { src: "/HomePage/Birrdi.png", alt: "Birrdi" },
    { src: "/HomePage/WS.png", alt: "WS" },
    { src: "/HomePage/TSS.png", alt: "TSS" },
    { src: "/HomePage/BDA.png", alt: "BDA" },
    { src: "/HomePage/AR.png", alt: "AR" },
    { src: "/HomePage/CANCS.png", alt: "CANCS" },
    { src: "/HomePage/DETELIO.png", alt: "DETELIO" },
    { src: "/HomePage/LLC.png", alt: "LLC" },
    { src: "/HomePage/LISTRA.png", alt: "LISTRA" },
    {
      src: "/HomePage/AttivoWellness.png",
      alt: "Attivo Wellness",
    },
    { src: "/HomePage/BIRD.png", alt: "BIRD" },
    { src: "/HomePage/BEAUTIFY.png", alt: "BEAUTIFY" },
    { src: "/HomePage/OOM.png", alt: "OOM" },
    { src: "/HomePage/LOGIX.png", alt: "LOGIX" },
    { src: "/HomePage/BONSAI.png", alt: "BONSAI" },
    { src: "/HomePage/UP.png", alt: "UP" },
    { src: "/HomePage/TANOIA.png", alt: "TANOIA" },
    { src: "/HomePage/HF.png", alt: "HF" },
  ];

  const totalLogos = allLogos.length;

  return (
    <>
      {/* Trust Bar - Single continuous marquee */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Moving logos container */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              {allLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 h-20 sm:h-24 md:h-28 lg:h-32"
                >
                  <div className="flex items-center justify-center w-full h-full">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-12 sm:max-h-14 md:max-h-16 lg:max-h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                      onError={(e) => {
                        console.log(`Failed to load image: ${logo.src}`);
                        e.target.style.display = "none";
                      }}
                    />
                  </div>
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {allLogos.map((logo, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex-shrink-0 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 h-20 sm:h-24 md:h-28 lg:h-32"
                >
                  <div className="flex items-center justify-center w-full h-full">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-12 sm:max-h-14 md:max-h-16 lg:max-h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                      onError={(e) => {
                        console.log(`Failed to load image: ${logo.src}`);
                        e.target.style.display = "none";
                      }}
                    />
                  </div>
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

          /* Adjust animation speed for mobile */
          @media (max-width: 640px) {
            .animate-scroll {
              animation-duration: ${totalLogos * 1.5}s;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default TrustBar;
