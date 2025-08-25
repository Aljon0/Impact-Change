import React, { useEffect, useRef, useState } from "react";

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const stages = [
    {
      word: "Start",
      title: "Launch Your Vision",
      description: "From concept to creation",
      icon: "🚀",
      color: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-900/20 to-teal-800/20",
    },
    {
      word: "Scale",
      title: "Accelerate Growth",
      description: "Expand your reach globally",
      icon: "📈",
      color: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-900/20 to-indigo-800/20",
    },
    {
      word: "Succeed",
      title: "Achieve Excellence",
      description: "Dominate your market",
      icon: "🏆",
      color: "from-amber-500 to-orange-600",
      bgGradient: "from-amber-900/20 to-orange-800/20",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % stages.length);
    }, 3000); // Slower transition for better card sync
    return () => clearInterval(interval);
  }, []);

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
      className="relative py-16 md:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden min-h-screen flex items-center"
      style={{
        background: `
          radial-gradient(circle at ${50 + mousePosition.x * 15}% ${
          50 + mousePosition.y * 15
        }%, ${
          stages[currentWord].bgGradient.split(" ")[1]
        } 0%, transparent 50%),
          linear-gradient(135deg, #1e3a8a 0%, #1e40af 25%, #3730a3 50%, #312e81 75%, #1e1b4b 100%)
        `,
      }}
    >
      {/* 3D Carousel Cards Background */}
      <div className="absolute inset-0 perspective-2000">
        <div className="relative w-full h-full transform-style-3d">
          {stages.map((stage, index) => {
            const offset = index - currentWord;
            const isActive = index === currentWord;
            const isPrev =
              index === (currentWord - 1 + stages.length) % stages.length;
            const isNext = index === (currentWord + 1) % stages.length;

            return (
              <div
                key={index}
                className={`absolute top-1/2 left-1/2 w-80 h-96 transform-gpu transition-all duration-1000 ease-out ${
                  isActive ? "z-30" : isPrev || isNext ? "z-20" : "z-10"
                }`}
                style={{
                  transform: `
                    translate(-50%, -50%)
                    translateX(${offset * 200}px)
                    translateZ(${isActive ? 100 : offset === 0 ? 0 : -100}px)
                    rotateY(${offset * 25}deg)
                    scale(${isActive ? 1.1 : 0.8})
                  `,
                  opacity: isActive ? 0.9 : isPrev || isNext ? 0.6 : 0.3,
                }}
              >
                {/* Card Container */}
                <div
                  className={`w-full h-full rounded-2xl backdrop-blur-lg border border-white/20 overflow-hidden transform-gpu transition-all duration-1000 shadow-2xl bg-gradient-to-br ${stage.color} p-1`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-8 flex flex-col justify-between">
                    {/* Stage Icon */}
                    <div className="text-center">
                      <div className="text-6xl mb-4 animate-bounce-gentle">
                        {stage.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {stage.title}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {stage.description}
                      </p>
                    </div>

                    {/* Visual Elements for Each Stage */}
                    <div className="flex-1 flex items-center justify-center my-6">
                      {/* START - Rocket Launch Visualization */}
                      {index === 0 && (
                        <div className="relative w-full h-32">
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                            <div className="w-4 h-16 bg-gradient-to-t from-orange-400 to-yellow-300 rounded-t-full animate-pulse"></div>
                            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-8">
                              <div className="w-full h-full bg-gradient-to-br from-orange-500 to-red-600 rounded animate-pulse"></div>
                            </div>
                          </div>
                          {/* Particles */}
                          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                            {[...Array(6)].map((_, i) => (
                              <div
                                key={i}
                                className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-particle-burst"
                                style={{
                                  animationDelay: `${i * 0.2}s`,
                                  transform: `rotate(${
                                    i * 60
                                  }deg) translateY(-20px)`,
                                }}
                              ></div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* SCALE - Growth Chart */}
                      {index === 1 && (
                        <div className="w-full h-32 flex items-end justify-center space-x-2">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className="bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t animate-scale-bars"
                              style={{
                                width: "12px",
                                height: `${20 + i * 15}px`,
                                animationDelay: `${i * 0.3}s`,
                              }}
                            ></div>
                          ))}
                          <div className="absolute top-8 right-8 text-cyan-300 animate-float">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                            </svg>
                          </div>
                        </div>
                      )}

                      {/* SUCCEED - Trophy with Celebration */}
                      {index === 2 && (
                        <div className="relative w-full h-32 flex items-center justify-center">
                          <div className="relative">
                            {/* Trophy Base */}
                            <div className="w-16 h-20 bg-gradient-to-b from-yellow-400 to-amber-600 rounded-lg flex items-center justify-center animate-trophy-glow">
                              <div className="w-8 h-8 bg-gradient-to-br from-yellow-200 to-yellow-500 rounded-full"></div>
                            </div>
                            {/* Celebration Particles */}
                            {[...Array(8)].map((_, i) => (
                              <div
                                key={i}
                                className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-celebrate"
                                style={{
                                  top: "50%",
                                  left: "50%",
                                  animationDelay: `${i * 0.2}s`,
                                  transform: `rotate(${
                                    i * 45
                                  }deg) translateY(-30px)`,
                                }}
                              ></div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Progress Indicator */}
                    <div className="flex justify-center space-x-2">
                      {stages.map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            i === index ? "bg-white" : "bg-white/30"
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        {/* Particle System */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-particle-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
              }}
            >
              <div
                className="w-1 h-1 bg-white rounded-full opacity-40"
                style={{
                  boxShadow: `0 0 ${
                    2 + Math.random() * 4
                  }px rgba(255,255,255,0.6)`,
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* 3D Mountain Layers */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 opacity-30">
          <svg
            className="absolute bottom-0 w-full h-full"
            viewBox="0 0 1200 300"
            fill="none"
            style={{
              transform: `translateX(${mousePosition.x * 5}px)`,
            }}
          >
            <path
              d="M0 300 L200 150 L400 100 L600 130 L800 80 L1000 110 L1200 60 L1200 300 Z"
              fill="rgba(255,255,255,0.1)"
            />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Dynamic 3D Text */}
          <div className="perspective-1000 mb-6">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none transform-gpu transition-all duration-1000"
              style={{
                textShadow: `0 0 40px ${
                  stages[currentWord].color.includes("emerald")
                    ? "rgba(16, 185, 129, 0.5)"
                    : stages[currentWord].color.includes("blue")
                    ? "rgba(59, 130, 246, 0.5)"
                    : "rgba(245, 158, 11, 0.5)"
                }, 0 0 80px rgba(255,255,255,0.2)`,
                transform: `rotateX(${mousePosition.y * 3}deg) rotateY(${
                  mousePosition.x * 3
                }deg) translateZ(50px)`,
              }}
            >
              <span className="inline-block transition-all duration-1000 ease-out transform">
                <span
                  className="relative bg-gradient-to-r bg-clip-text text-transparent animate-shimmer"
                  style={{
                    backgroundImage: `linear-gradient(90deg, transparent, white, ${
                      stages[currentWord].color.includes("emerald")
                        ? "#10b981"
                        : stages[currentWord].color.includes("blue")
                        ? "#3b82f6"
                        : "#f59e0b"
                    }, white, transparent)`,
                    backgroundSize: "200% 100%",
                  }}
                >
                  {stages[currentWord].word}.
                </span>
              </span>
            </h1>
          </div>

          {/* Dynamic Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-1000">
            <span className="relative">
              Pitch decks and business plans that help you{" "}
              <span
                className="font-semibold bg-gradient-to-r bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(45deg, ${
                    stages[currentWord].color.includes("emerald")
                      ? "#10b981, #06d6a0"
                      : stages[currentWord].color.includes("blue")
                      ? "#3b82f6, #06b6d4"
                      : "#f59e0b, #f97316"
                  })`,
                }}
              >
                {stages[currentWord].word.toLowerCase()}
              </span>{" "}
              with confidence
            </span>
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={() => (window.location.href = "/pricing")}
              className="w-full sm:w-auto group relative overflow-hidden"
            >
              <div
                className="relative text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold inline-flex items-center justify-center cursor-pointer transition-all duration-300 transform-gpu shadow-2xl border-2"
                style={{
                  background: `linear-gradient(135deg, ${stages[
                    currentWord
                  ].color
                    .split(" to ")[0]
                    .replace("from-", "")}40, ${
                    stages[currentWord].color.split(" to ")[1]
                  }60)`,
                  borderColor: stages[currentWord].color.includes("emerald")
                    ? "#10b981"
                    : stages[currentWord].color.includes("blue")
                    ? "#3b82f6"
                    : "#f59e0b",
                  backdropFilter: "blur(10px)",
                  transform: `translateZ(30px) rotateX(${
                    mousePosition.y * 2
                  }deg) rotateY(${mousePosition.x * 2}deg)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform +=
                    " scale(1.05) translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `translateZ(30px) rotateX(${
                    mousePosition.y * 2
                  }deg) rotateY(${mousePosition.x * 2}deg)`;
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
                className="relative border-2 border-white/40 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold inline-flex items-center justify-center cursor-pointer backdrop-blur-sm transition-all duration-300 transform-gpu shadow-2xl"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  transform: `translateZ(30px) rotateX(${
                    mousePosition.y * 2
                  }deg) rotateY(${mousePosition.x * 2}deg)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform +=
                    " scale(1.05) translateY(-2px)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.7)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `translateZ(30px) rotateX(${
                    mousePosition.y * 2
                  }deg) rotateY(${mousePosition.x * 2}deg)`;
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
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
        .perspective-1000 {
          perspective: 1000px;
        }
        .perspective-2000 {
          perspective: 2000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .transform-gpu {
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }

        @keyframes bounce-gentle {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes particle-burst {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-30px) scale(0.5);
          }
        }

        @keyframes scale-bars {
          0% {
            transform: scaleY(0.2);
            opacity: 0.6;
          }
          50% {
            transform: scaleY(1.1);
            opacity: 1;
          }
          100% {
            transform: scaleY(1);
            opacity: 0.8;
          }
        }

        @keyframes trophy-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(245, 158, 11, 0.6);
          }
          50% {
            box-shadow: 0 0 40px rgba(245, 158, 11, 0.9);
          }
        }

        @keyframes celebrate {
          0% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
          100% {
            opacity: 0;
            transform: scale(0.5) translateY(-40px);
          }
        }

        @keyframes particle-float {
          0% {
            transform: translateY(0px) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: scale(1);
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) scale(0);
            opacity: 0;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 3s ease-in-out infinite;
        }
        .animate-particle-burst {
          animation: particle-burst 2s ease-out infinite;
        }
        .animate-scale-bars {
          animation: scale-bars 2s ease-in-out infinite;
        }
        .animate-trophy-glow {
          animation: trophy-glow 2s ease-in-out infinite;
        }
        .animate-celebrate {
          animation: celebrate 3s ease-out infinite;
        }
        .animate-particle-float {
          animation: particle-float linear infinite;
        }
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
        .animate-float {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
