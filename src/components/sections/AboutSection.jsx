import React from "react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
              About Impact Change
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We are a forward-thinking company dedicated to creating meaningful
              change in the business world. Our team of experts combines
              strategic insight with innovative solutions to help organizations
              achieve their goals.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Founded on the principle that every business has the potential for
              transformation, we work closely with our clients to identify
              opportunities, overcome challenges, and implement sustainable
              growth strategies.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-800">50+</div>
                <div className="text-slate-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-800">100%</div>
                <div className="text-slate-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-slate-100 to-stone-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-slate-400 text-6xl">🎯</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
