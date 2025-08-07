import React from "react";

const ClientLogos = () => {
  // Reorganize logos into 3 layers of exactly 6 images each
  const logoLayers = [
    [
      { src: "/HomePage/Birrdi.png", alt: "Birrdi" },
      { src: "/HomePage/WS.png", alt: "WS" },
      { src: "/HomePage/TSS.png", alt: "TSS" },
      { src: "/HomePage/BDA.png", alt: "BDA" },
      { src: "/HomePage/AR.png", alt: "AR" },
      { src: "/HomePage/CANCS.png", alt: "CANCS" },
    ],
    [
      { src: "/HomePage/DETELIO.png", alt: "DETELIO" },
      { src: "/HomePage/LLC.png", alt: "LLC" },
      { src: "/HomePage/LISTRA.png", alt: "LISTRA" },
      { src: "/HomePage/AttivoWellness.png", alt: "Attivo Wellness" },
      { src: "/HomePage/BIRD.png", alt: "BIRD" },
      { src: "/HomePage/BEAUTIFY.png", alt: "BEAUTIFY" },
    ],
    [
      { src: "/HomePage/OOM.png", alt: "OOM" },
      { src: "/HomePage/LOGIX.png", alt: "LOGIX" },
      { src: "/HomePage/BONSAI.png", alt: "BONSAI" },
      { src: "/HomePage/UP.png", alt: "UP" },
      { src: "/HomePage/TANOIA.png", alt: "TANOIA" },
      { src: "/HomePage/HF.png", alt: "HF" },
    ],
  ];

  const LogoRow = ({ logos, direction = "right" }) => (
    <div className="relative overflow-hidden mb-4">
      <div
        className={`flex space-x-8 ${
          direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
        }`}
      >
        {/* First set of logos */}
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center w-48 h-24"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              onError={(e) => {
                console.log(`Failed to load image: ${logo.src}`);
                e.target.style.display = "none";
              }}
            />
          </div>
        ))}

        {/* Duplicate set for seamless loop */}
        {logos.map((logo, index) => (
          <div
            key={`duplicate-${index}`}
            className="flex-shrink-0 flex items-center justify-center w-48 h-24"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              onError={(e) => {
                console.log(`Failed to load image: ${logo.src}`);
                e.target.style.display = "none";
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-2">
          <LogoRow logos={logoLayers[0]} direction="right" />
          <LogoRow logos={logoLayers[1]} direction="left" />
          <LogoRow logos={logoLayers[2]} direction="right" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        /* Pause animation on hover */
        .animate-scroll-right:hover,
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientLogos;
