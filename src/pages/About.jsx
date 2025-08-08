import React, { useEffect, useState } from "react";
import ClientLogos from "../components/ClientLogos";
import Footer from "../components/Footer";
import TrustedBy from "../components/TrustedBy";
const About = () => {
  const [activeTimelineItem, setActiveTimelineItem] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const timelineData = [
    {
      year: "Present",
      title: "CEO & Founder, Impact Change",
      description:
        "Advised 1,500+ founders on strategy and growth, with clients raising over $2B to date.",
      icon: "🚀",
    },
    {
      year: "2025",
      title: "Co-Founder & CEO, Reztorer",
      description:
        "Built and exited a tech marketplace in a private cash deal.",
      icon: "💰",
    },
    {
      year: "2019-2021",
      title: "Head of Operations, CAKE Technologies",
      description:
        "Played a core role in scaling the business from pre-launch to a successful acquisition by American Express.",
      icon: "📈",
    },
    {
      year: "2015-2019",
      title: "Corporate Leadership",
      description:
        "Held senior strategy and commercial roles at American Express, Fresha, Quandoo, and Wells Fargo.",
      icon: "🏢",
    },
    {
      year: "Education",
      title: "Certifications",
      description:
        "Harvard Certificate in Leadership Excellence, Scrum Fundamentals Certified.",
      icon: "🎓",
    },
  ];

  return (
    <>
      {/* Hero Section with Enhanced Design */}
      <section className="py-16 bg-gradient-to-br from-[#eeecec] via-[#f5f5f5] to-[#e8e6e6] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 bg-[#131e3D] rounded-full"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-blue-500 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-[#131e3D] rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`flex flex-col lg:flex-row items-center justify-center gap-16 mb-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-10"
            }`}
          >
            {/* Left side - Picture with creative styling */}
            <div className="flex-shrink-0 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#131e3D] to-blue-600 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-xl">
                <img
                  src="/Will.png"
                  alt="Will"
                  className="w-48 h-48 lg:w-56 lg:h-56 object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                <div className="w-6 h-6 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Right side - Logo with animation */}
            <div className="flex-shrink-0 relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="/ImpactChange.png"
                  alt="Impact Change Logo"
                  className="w-48 h-auto lg:w-56 hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Floating stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-3xl font-bold text-[#131e3D]">1,500+</div>
              <div className="text-sm text-gray-600">Founders Advised</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-3xl font-bold text-[#131e3D]">$2B+</div>
              <div className="text-sm text-gray-600">Capital Raised</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-3xl font-bold text-[#131e3D]">2</div>
              <div className="text-sm text-gray-600">Successful Exits</div>
            </div>
          </div>
        </div>
      </section>

      <TrustedBy />

      {/* Story Section with Creative Layout */}
      <section id="journey" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#131e3D] mb-16 text-center">
              My Story: From Corporate Strategy to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#131e3D]">
                Startup Exits
              </span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* First Paragraph - Special Container */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-[#eeecec] rounded-3xl transform rotate-1"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                  <div className="absolute top-6 left-6 text-6xl text-blue-100 font-serif">
                    "
                  </div>
                  <p className="text-lg text-[#4a4949] leading-relaxed pt-8">
                    It dawned on me several years ago how lucky I have been, and
                    it's because of the incredible people I've had the chance to
                    work with, learn from, and lead. After starting my career in
                    asset management and investor relations at firms like{" "}
                    <span className="font-semibold text-[#131e3D] bg-yellow-100 px-1 rounded">
                      Wells Fargo
                    </span>
                    , I supported fundraising efforts with major institutions
                    across North America and EMEA. I had strong leaders and a
                    patient CEO who taught me a great deal.
                  </p>
                  <div className="flex items-center mt-6 pt-6 border-t border-gray-100">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-500 font-medium">
                      The Beginning
                    </span>
                  </div>
                </div>
              </div>

              {/* Second Paragraph - Modern Card */}
              <div className="relative">
                <div className="bg-gradient-to-br from-[#131e3D] to-blue-900 rounded-3xl p-8 text-white shadow-2xl">
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <p className="text-lg leading-relaxed">
                    But I realized that the world of technology and apps was far
                    more exciting. I made the jump and joined the co-founders of{" "}
                    <span className="font-semibold text-yellow-300">
                      CAKE Technologies
                    </span>{" "}
                    before the app had even launched. The founders were
                    brilliant, tireless, and humble, and they showed me what it
                    truly meant to be an effective leader. I played a core role
                    in scaling the business, leading everything from sales to
                    operations, and under four years later, we sold the company
                    to{" "}
                    <span className="font-semibold text-yellow-300">
                      American Express
                    </span>
                    .
                  </p>
                  <div className="flex items-center mt-6 pt-6 border-t border-white/20">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-300 font-medium">
                      The Breakthrough
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Perspective Section with Split Design */}
      <section className="py-20 bg-gradient-to-r from-[#eeecec] to-[#e0dede]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#131e3D] mb-12 text-center">
              A Global Perspective & A Founder's Mindset
            </h2>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Global Experience */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-2xl">🌍</span>
                    </div>
                    <p className="text-[#4a4949] leading-relaxed">
                      My journey continued within major corporations, leading
                      strategy for high-growth projects at{" "}
                      <span className="font-semibold text-[#131e3D]">
                        Quandoo
                      </span>{" "}
                      across APAC and heading up Partner Success for a $400M+
                      GMV platform at{" "}
                      <span className="font-semibold text-[#131e3D]">
                        Fresha
                      </span>{" "}
                      in EMEA.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <p className="text-[#4a4949] leading-relaxed">
                      Alongside my corporate roles, I founded{" "}
                      <span className="font-semibold text-[#131e3D]">
                        Impact Change
                      </span>{" "}
                      to manage a growing number of advisory board positions. It
                      quickly evolved into a mission: to help ambitious founders
                      by cutting through the bad advice and overcomplicated
                      nonsense so often sold to entrepreneurs.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-2xl">💡</span>
                    </div>
                    <p className="text-[#4a4949] leading-relaxed">
                      In 2021, I co-founded another venture,{" "}
                      <span className="font-semibold text-[#131e3D]">
                        Reztorer
                      </span>
                      , a marketplace for the circular economy, which was
                      acquired in a private cash deal in early 2025.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Philosophy */}
              <div className="bg-gradient-to-br from-[#131e3D] to-blue-900 rounded-3xl p-8 text-white flex flex-col justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-6">⚡</div>
                  <h3 className="text-xl font-bold mb-6">My Philosophy</h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      <span>Lead with honesty</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      <span>Do the right thing</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      <span>Stay focused</span>
                    </div>
                  </div>
                  <p className="mt-6 text-yellow-200 italic">
                    "Success comes from helping others succeed."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline for Credentials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#131e3D] mb-16 text-center">
              Credentials & Achievements Timeline
            </h2>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#131e3D] to-blue-500"></div>

              <div className="space-y-12">
                {timelineData.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center transition-all duration-500 ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                    onMouseEnter={() => setActiveTimelineItem(index)}
                  >
                    {/* Content */}
                    <div
                      className={`w-5/12 ${
                        index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                      }`}
                    >
                      <div
                        className={`bg-white rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 ${
                          activeTimelineItem === index
                            ? "border-[#131e3D] shadow-2xl transform scale-105"
                            : "border-gray-200 hover:border-blue-300"
                        }`}
                      >
                        <div className="text-sm text-blue-600 font-semibold mb-2">
                          {item.year}
                        </div>
                        <h3 className="text-lg font-bold text-[#131e3D] mb-3">
                          {item.title}
                        </h3>
                        <p className="text-[#4a4949] text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 relative z-10">
                      <div
                        className={`w-16 h-16 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-2xl transition-all duration-300 ${
                          activeTimelineItem === index
                            ? "bg-[#131e3D] transform scale-125"
                            : "bg-white hover:bg-blue-50"
                        }`}
                      >
                        {item.icon}
                      </div>
                    </div>

                    {/* Empty space */}
                    <div className="w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center bg-gradient-to-r from-[#131e3D] to-blue-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="mr-2">Ready to work together?</span>
                <span className="text-xl">🤝</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClientLogos />
      <Footer />
    </>
  );
};

export default About;
