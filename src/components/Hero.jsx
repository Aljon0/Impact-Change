import React from "react";

const Hero = () => {
  return (
    <section
      className="py-38 bg-cover bg-center"
      style={{ backgroundImage: "url('/HomePage/Background.png')" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-5xl font-bold text-white mb-6 leading-none whitespace-nowrap">
            Build Faster. Raise Smarter. Lead Better.
          </h1>
          <p className="text-md text-white mb-8 max-w-3xl mx-auto leading-relaxed text-center">
            Impact Change is a consultancy dedicated to helping ambitious
            founders and leaders build, <br /> fund, and scale remarkable
            businesses. We provide strategic guidance rooted in real-world
            experience from leading global corporations to achieving multiple
            startup exits.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-lg text-xl font-semibold inline-flex items-center group cursor-pointer hover:bg-blue-50 transition-colors">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
