import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Start", "Scale", "Succeed"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Mountain silhouette */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-900/80 to-transparent">
          <svg
            className="absolute bottom-0 w-full h-full"
            viewBox="0 0 1200 400"
            fill="none"
          >
            <path
              d="M0 400 L200 250 L400 180 L600 220 L800 160 L1000 200 L1200 140 L1200 400 Z"
              fill="rgba(30, 58, 138, 0.6)"
            />
            <path
              d="M0 400 L150 280 L350 220 L550 260 L750 200 L950 240 L1200 180 L1200 400 Z"
              fill="rgba(30, 64, 175, 0.4)"
            />
          </svg>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          <div className="animate-float-slow absolute top-1/4 left-1/4 w-3 h-3 bg-white/20 rounded-full"></div>
          <div className="animate-float-medium absolute top-1/3 right-1/3 w-2 h-2 bg-white/30 rounded-full"></div>
          <div className="animate-float-fast absolute bottom-1/3 left-1/5 w-4 h-4 bg-white/10 rounded-full"></div>
          <div className="animate-float-slow absolute top-1/2 right-1/4 w-2 h-2 bg-white/25 rounded-full"></div>
          <div className="animate-float-medium absolute bottom-1/4 right-1/5 w-3 h-3 bg-white/15 rounded-full"></div>
        </div>

        {/* Ripple effect */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2">
          <div className="animate-ripple w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="animate-ripple-delayed w-32 h-32 border border-white/10 rounded-full absolute top-0 left-0"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Rotating Text */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-none">
            <span className="inline-block transition-all duration-500 ease-in-out transform">
              {words[currentWord]}.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            Pitch decks and business plans that investors take seriously
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              to="/pricing"
              className="w-full sm:w-auto bg-white text-blue-900 px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold inline-flex items-center justify-center group cursor-pointer hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
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
            </Link>

            <Link
              to="/portfolio"
              className="w-full sm:w-auto border-2 border-white/30 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold inline-flex items-center justify-center group cursor-pointer hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 shadow-lg"
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
            </Link>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes float-medium {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(90deg);
          }
        }

        @keyframes float-fast {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(270deg);
          }
        }

        @keyframes ripple {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes ripple-delayed {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float-fast 3s ease-in-out infinite;
        }

        .animate-ripple {
          animation: ripple 3s ease-out infinite;
        }

        .animate-ripple-delayed {
          animation: ripple-delayed 3s ease-out infinite 1.5s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
