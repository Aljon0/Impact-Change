import React from "react";
import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/HomePage/CTABackground.png')",
      }}
    >
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to build something remarkable?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Join hundreds of startups and entrepreneurs driving change and
          creating impact with Story.
        </p>
        <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center group cursor-pointer">
          <Link to="/pricing">Start Your Project</Link>
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;
