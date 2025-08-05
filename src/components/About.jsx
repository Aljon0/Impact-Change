import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            You have the <span className="text-blue-600">AMBITION.</span> I have
            the <span className="text-blue-600">ROADMAP.</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            As a founder who has built, scaled, and sold companies, I understand
            the challenges you face. I've gone from leading global teams at
            American Express to launching startups from the ground up. Through
            my consultancy, Impact Change, I've helped over 1,500 founders raise
            more than $2 billion in capital. Now, I bring that same high-level
            expertise directly to you through Fiverr.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
            Learn More About My Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
