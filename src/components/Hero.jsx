import React, { useEffect, useRef, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
          y: ((e.clientY - rect.top) / rect.height) * 2 - 1,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-16 md:py-20 overflow-hidden min-h-screen flex items-center"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="HomePage/HeroBackground.mp4" type="video/mp4" />
          {/* Fallback gradient background if video fails to load */}
        </video>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Fallback background in case video doesn't load */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 -z-10"></div>

      {/* Main Content */}
      <div className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-4xl mx-auto mt-36">
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={() => (window.location.href = "/pricing")}
              className="w-full sm:w-auto group relative overflow-hidden"
            >
              <div
                className="relative text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold inline-flex items-center justify-center cursor-pointer transition-all duration-300 transform-gpu shadow-2xl border-2"
                style={{
                  background: `linear-gradient(135deg, #3b82f6, #1e40af)`,
                  borderColor: "#3b82f6",
                  backdropFilter: "blur(15px)",
                  transform: `translateZ(30px) rotateX(${
                    mousePosition.y * 2
                  }deg) rotateY(${mousePosition.x * 2}deg)`,
                  boxShadow: `
                    0 25px 50px -12px rgba(0, 0, 0, 0.5),
                    0 0 0 1px rgba(255, 255, 255, 0.1),
                    inset 0 1px 0 rgba(255, 255, 255, 0.2)
                  `,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform +=
                    " scale(1.05) translateY(-2px)";
                  e.currentTarget.style.boxShadow = `
                    0 35px 60px -12px rgba(0, 0, 0, 0.6),
                    0 0 0 1px rgba(255, 255, 255, 0.2),
                    inset 0 1px 0 rgba(255, 255, 255, 0.3)
                  `;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `translateZ(30px) rotateX(${
                    mousePosition.y * 2
                  }deg) rotateY(${mousePosition.x * 2}deg)`;
                  e.currentTarget.style.boxShadow = `
                    0 25px 50px -12px rgba(0, 0, 0, 0.5),
                    0 0 0 1px rgba(255, 255, 255, 0.1),
                    inset 0 1px 0 rgba(255, 255, 255, 0.2)
                  `;
                }}
              >
                Start Your Project
                <svg
                  className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
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
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </div>
            </button>

            <button
              onClick={() => (window.location.href = "/portfolio")}
              className="w-full sm:w-auto group relative overflow-hidden"
            >
              <div
                className="relative text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold inline-flex items-center justify-center cursor-pointer backdrop-blur-sm transition-all duration-300 transform-gpu shadow-2xl border-2"
                style={{
                  background: "rgba(0, 0, 0, 0.4)",
                  borderColor: "rgba(255, 255, 255, 0.6)",
                  backdropFilter: "blur(15px)",
                  transform: `translateZ(30px) rotateX(${
                    mousePosition.y * 2
                  }deg) rotateY(${mousePosition.x * 2}deg)`,
                  boxShadow: `
                    0 25px 50px -12px rgba(0, 0, 0, 0.5),
                    0 0 0 1px rgba(255, 255, 255, 0.1),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform +=
                    " scale(1.05) translateY(-2px)";
                  e.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.15)";
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.8)";
                  e.currentTarget.style.boxShadow = `
                    0 35px 60px -12px rgba(0, 0, 0, 0.6),
                    0 0 0 1px rgba(255, 255, 255, 0.2),
                    inset 0 1px 0 rgba(255, 255, 255, 0.2)
                  `;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `translateZ(30px) rotateX(${
                    mousePosition.y * 2
                  }deg) rotateY(${mousePosition.x * 2}deg)`;
                  e.currentTarget.style.background = "rgba(0, 0, 0, 0.4)";
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.6)";
                  e.currentTarget.style.boxShadow = `
                    0 25px 50px -12px rgba(0, 0, 0, 0.5),
                    0 0 0 1px rgba(255, 255, 255, 0.1),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `;
                }}
              >
                View Portfolio
                <svg
                  className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        .transform-gpu {
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }

        video {
          filter: brightness(0.8) contrast(1.1);
        }
      `}</style>
    </section>
  );
};

export default Hero;
