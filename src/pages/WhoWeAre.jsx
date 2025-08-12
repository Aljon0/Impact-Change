import React, { useEffect, useState } from "react";
import TrustBar from "../components/TrustBar";

const WhoWeAre = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      role: "Researchers",
      icon: "🔬",
      description:
        "Deep market analysis and competitive intelligence specialists with experience across multiple industries and verticals.",
      skills: [
        "Market Research",
        "Competitive Analysis",
        "Data Analytics",
        "Industry Intelligence",
      ],
      background: "Corporate Strategy & Consulting",
    },
    {
      role: "Designers",
      icon: "🎨",
      description:
        "Creative professionals who craft compelling visual narratives that resonate with investors and stakeholders.",
      skills: [
        "UI/UX Design",
        "Visual Storytelling",
        "Brand Identity",
        "Pitch Deck Design",
      ],
      background: "Agency & In-house Design",
    },
    {
      role: "Writers",
      icon: "✍️",
      description:
        "Strategic storytellers who transform complex business concepts into clear, persuasive investment narratives.",
      skills: [
        "Business Writing",
        "Content Strategy",
        "Copywriting",
        "Technical Documentation",
      ],
      background: "Corporate Communications & Journalism",
    },
    {
      role: "Accountants",
      icon: "📊",
      description:
        "Financial experts who build robust models and ensure accuracy in all financial projections and valuations.",
      skills: [
        "Financial Modeling",
        "Valuation",
        "Due Diligence",
        "Financial Analysis",
      ],
      background: "Big 4 & Corporate Finance",
    },
    {
      role: "Modellers",
      icon: "📈",
      description:
        "Quantitative specialists who create sophisticated financial models that withstand investor scrutiny.",
      skills: [
        "Excel Modeling",
        "Scenario Planning",
        "Risk Analysis",
        "Monte Carlo Simulations",
      ],
      background: "Investment Banking & Private Equity",
    },
  ];

  const coreValues = [
    {
      title: "Operator Experience",
      description:
        "We've been in the trenches. Our team has built, scaled, and exited companies across multiple industries.",
      icon: "⚡",
    },
    {
      title: "Corporate Finance Background",
      description:
        "Deep expertise from Wells Fargo, American Express, and other leading financial institutions.",
      icon: "🏛️",
    },
    {
      title: "Hands-on Approach",
      description:
        "We don't just consult - we roll up our sleeves and work alongside founders to deliver results.",
      icon: "🤝",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#eeecec] via-[#f5f5f5] to-[#e8e6e6] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-20 w-24 h-24 bg-[#131e3D] rounded-full"></div>
          <div className="absolute top-40 right-32 w-20 h-20 bg-blue-500 rounded-full"></div>
          <div className="absolute bottom-32 left-1/3 w-16 h-16 bg-[#131e3D] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`text-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-10"
            }`}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-[#131e3D] mb-6">
              Who We Are
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl lg:text-2xl text-[#4a4949] leading-relaxed mb-8">
                A multidisciplinary team of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#131e3D] font-semibold">
                  researchers, designers, writers, accountants, and modellers
                </span>{" "}
                who combine operator experience with corporate finance
                expertise.
              </p>
              <p className="text-lg text-[#4a4949] leading-relaxed">
                We've helped{" "}
                <span className="font-bold text-[#131e3D]">
                  1,500+ founders
                </span>{" "}
                raise over{" "}
                <span className="font-bold text-[#131e3D]">$2 billion</span> by
                delivering the high-level strategy, research and design that big
                companies get, without the inflated price tags.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#131e3D] mb-6">
              Our Multidisciplinary Team
            </h2>
            <p className="text-lg text-[#4a4949] max-w-3xl mx-auto">
              Each team member brings deep expertise from their respective
              fields, creating a collaborative force that delivers exceptional
              results for our clients.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 cursor-pointer ${
                  activeCard === index
                    ? "border-[#131e3D] shadow-2xl transform scale-105"
                    : "border-gray-200 hover:border-blue-300 hover:shadow-xl hover:-translate-y-2"
                }`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-[#eeecec] rounded-xl flex items-center justify-center text-3xl mb-4 mx-auto">
                    {member.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#131e3D] mb-3">
                    {member.role}
                  </h3>
                  <p className="text-[#4a4949] leading-relaxed mb-6">
                    {member.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#131e3D] mb-2">
                      Key Skills:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm text-[#4a4949]">
                      <span className="font-medium">Background:</span>{" "}
                      {member.background}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gradient-to-r from-[#eeecec] to-[#e0dede]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#131e3D] mb-6">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-[#4a4949] max-w-3xl mx-auto">
              Our unique combination of experience gives us the insight to
              deliver results that matter.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#131e3D] to-blue-600 rounded-xl flex items-center justify-center text-3xl mb-6 mx-auto text-white">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#131e3D] mb-4">
                  {value.title}
                </h3>
                <p className="text-[#4a4949] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Note Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-[#eeecec] rounded-3xl transform rotate-1"></div>

            <div className="relative bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[#131e3D] to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">👨‍💼</span>
                </div>
                <h2 className="text-3xl font-bold text-[#131e3D] mb-2">
                  A Note from Our Founder
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-[#131e3D] rounded-full mx-auto"></div>
              </div>

              <div className="prose prose-lg max-w-none">
                <div className="absolute top-16 left-12 text-8xl text-blue-100 font-serif leading-none">
                  "
                </div>
                <p className="text-lg text-[#4a4949] leading-relaxed mb-6 pt-8">
                  After building and selling other ventures, as well as working
                  with teams at Wells Fargo and American Express, I saw too many
                  founders paying a lot and getting very little. We decided to
                  change that.
                </p>
                <p className="text-lg text-[#4a4949] leading-relaxed mb-6">
                  Impact Change was created over a decade ago to give
                  entrepreneurs the high-level strategy, research and design
                  that big companies get, without the inflated price tags.
                  Today, we're a collective of researchers, writers, designers
                  and financial modellers who partner with founders to craft
                  investor-ready pitch decks, robust business plans and
                  comprehensive market analyses.
                </p>
                <p className="text-lg text-[#4a4949] leading-relaxed mb-8">
                  We combine operator experience with investor insight to
                  deliver clarity, credibility and clean design, helping more
                  than{" "}
                  <span className="font-bold text-[#131e3D]">
                    1,500 founders raise over $2 billion
                  </span>
                  .
                </p>

                <div className="flex items-center justify-between pt-8 border-t border-gray-200">
                  <div>
                    <p className="font-bold text-[#131e3D] text-lg">Will</p>
                    <p className="text-[#4a4949]">
                      Founder & CEO, Impact Change
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-sm text-[#4a4949]">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      <span>Building the future of entrepreneurship</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-[#131e3D] via-blue-900 to-[#131e3D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Work with Our Team?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let's discuss how our multidisciplinary approach can help accelerate
            your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center bg-white text-[#131e3D] px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <span className="mr-2">Meet Our Team</span>
              <span className="text-xl">🤝</span>
            </button>
            <button className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#131e3D] transition-all duration-300">
              <span className="mr-2">Start Your Project</span>
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>
      </section>

      <TrustBar />
    </div>
  );
};

export default WhoWeAre;
