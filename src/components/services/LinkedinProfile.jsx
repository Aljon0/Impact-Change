import { ArrowRight, Award, Star, Users } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const LinkedinProfile = () => {
  const highlights = [
    { number: "500+", label: "Personal Profiles Optimized" },
    { number: "180+", label: "Company Pages Enhanced" },
    { number: "3x", label: "Average Increase in Profile Views" },
    { number: "250%", label: "Rise in Follower Engagement" },
    { number: "100%", label: "Keyword Optimized" },
    { number: "No. 1", label: "for B2B Brand Building" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-10"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full opacity-5"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-300 rounded-full opacity-10"></div>

        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            LinkedIn Profile &<br />
            Company Page Optimization
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Whether it's your personal profile or your company page, we craft a
            powerful LinkedIn presence that strengthens your brand, expands your
            network, attracts key opportunities, and engages your target
            audience with authority.
          </p>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-3">
                  {highlight.number}
                </div>
                <div className="text-gray-700 text-sm md:text-base font-medium">
                  {highlight.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Service Section */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Build Influence, Trust & Opportunities on LinkedIn
            </h2>
            <p className="text-xl text-blue-800 max-w-4xl mx-auto">
              Your LinkedIn presence is more than just a digital resume or
              placeholder, it's your professional brand headquarters and your
              company's stage for authority.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Personal Profiles */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Personal Profiles
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We create a compelling headline and summary, strategically
                integrate keywords to boost visibility, and structure your
                experience to showcase expertise and accomplishments,
                positioning you as a leader in your field to attract investors,
                partners, and top talent.
              </p>
            </div>

            {/* Company Pages */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Company Pages
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We optimize every detail, from the "About" section to visuals
                and call-to-action buttons. We ensure your company's story,
                mission, and values shine, helping you build credibility, engage
                followers, and drive B2B opportunities.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-blue-900 text-white rounded-2xl p-8 max-w-4xl mx-auto">
              <p className="text-xl leading-relaxed">
                Together, these optimizations turn LinkedIn into your most
                powerful tool for networking, lead generation, and brand growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Testimonials & Portfolio
            </h2>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">SG</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">
                  Sebastian G.
                </h3>
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>

            <blockquote className="text-gray-700 text-lg leading-relaxed italic">
              "As a newcomer to the linkedin game i am very happy with the "Will
              experience" great understanding, amazing attention to detail,
              clear and timely communication and a man of his word. Will went
              well beyond just optimizing the profile page, going to great
              lengths finding and joining potentially beneficial groups,
              following leaders in the topics i want to develop towards,
              remaking the banner, picking the best out of a selection of Fotos
              for the profile, warned about platform specific pitfalls and
              opportunities and filling in the gaps in the skill list i had. I
              am positive that I could not have had a better launchpad to
              restart with than the profile overhauled by Will. He has my full
              endorsement."
            </blockquote>
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center mx-auto">
              <Link to="/portfolio" className="relative">
                Explore Our Portfolio
                <ArrowRight
                  className="inline ml-3 group-hover:translate-x-2 transition-transform"
                  size={24}
                />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedinProfile;
