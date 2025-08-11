import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#eeecec] via-[#f5f5f5] to-[#e8e6e6] animate-pulse"></div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-[#131e3D] to-blue-600 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute top-32 right-16 w-16 h-16 bg-gradient-to-r from-blue-600 to-[#131e3D] rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-blue-500 to-[#131e3D] rounded-full opacity-25 animate-bounce delay-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image Section with animation */}
          <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-500 ease-in-out">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#131e3D] to-blue-600 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
              <img
                src="/Will.png"
                alt="Impact Change Team"
                className="w-auto h-auto object-contain relative z-10 rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Content Section with staggered animations */}
          <div className="flex-1 text-left max-w-2xl space-y-6">
            {/* Header with gradient text */}
            <div className="transform animate-fade-in-up">
              <h3 className="text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-blue-600 to-[#131e3D] bg-clip-text text-transparent mb-2 animate-pulse">
                About Impact Change - Message from the Founder
              </h3>
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#131e3D] via-blue-600 to-[#131e3D] bg-clip-text text-transparent mb-6 leading-tight">
                Start. Scale. Succeed.
              </h2>
            </div>

            {/* Animated content blocks */}
            <div className="space-y-6 transform animate-fade-in-up delay-200">
              <p className="text-lg text-[#4a4949] leading-relaxed relative">
                <span className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#131e3D] to-blue-600 rounded-full"></span>
                Impact Change was created over a decade ago to give
                entrepreneurs the high‑level strategy, research and design that
                big companies get, without the inflated price tags. After
                building and selling other ventures, as well as working with
                teams at Wells Fargo and American Express, I saw too many
                founders paying a lot and getting very little. We decided to
                change that.
              </p>

              <p className="text-lg text-[#4a4949] leading-relaxed relative">
                <span className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-[#131e3D] rounded-full"></span>
                Today, Impact Change is a collective of researchers, writers,
                designers and financial modellers who partner with founders to
                craft investor‑ready pitch decks, robust business plans and
                comprehensive market analyses. We combine operator experience
                with investor insight to deliver clarity, credibility and clean
                design, helping more than{" "}
                <span className="font-bold bg-gradient-to-r from-[#131e3D] to-blue-600 bg-clip-text text-transparent">
                  1,500 founders raise over $2 billion
                </span>
                .
              </p>

              <p className="text-lg text-[#4a4949] leading-relaxed">
                Want to meet the team? Learn more on our{" "}
                <a
                  href="/who-we-are"
                  className="font-bold bg-gradient-to-r from-blue-600 to-[#131e3D] bg-clip-text text-transparent hover:from-[#131e3D] hover:to-blue-600 transition-all duration-300 underline decoration-blue-500 hover:decoration-[#131e3D]"
                >
                  Who we are
                </a>{" "}
                page.
              </p>
            </div>

            {/* Animated CTA button */}
            <div className="transform animate-fade-in-up delay-400">
              <a
                href="/who-we-are"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-out hover:from-indigo-600 hover:via-blue-600 hover:to-indigo-700 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center gap-2">
                  Meet Our Team
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
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
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </section>
  );
};

export default About;
