import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#eeecec]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <img
              src="/Will.png"
              alt="Will Bryant"
              className="w-auto h-auto object-contain"
            />
          </div>

          {/* Content Section */}
          <div className="flex-1 text-left max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#131e3D] mb-6">
              About Will Bryant
            </h2>
            <p className="text-lg text-[#4a4949] mb-6 leading-relaxed">
              <span>
                You have the <span className="font-bold">ambition</span>. I have
                the <span className="font-bold">roadmap</span>.
              </span>
            </p>
            <p className="text-lg text-[#4a4949] mb-8 leading-relaxed">
              As a founder who has built, scaled, and sold companies, I
              understand the challenges you face. I've gone from leading global
              teams at American Express to launching startups from the ground
              up. Through my consultancy, Impact Change, I've helped over{" "}
              <span className="font-bold">
                1,500 founders raise more than $2 billion in capital.
              </span>{" "}
              Now, I bring that same high-level expertise directly to you
              through Fiverr.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer">
              Learn More About My Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
