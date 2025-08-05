import { ChevronRight } from "lucide-react";
import React from "react";

const HomeSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 leading-tight">
            Impact<span className="text-slate-600">Change</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Transforming businesses through innovative solutions and strategic
            thinking. We create meaningful change that drives lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button className="px-8 py-4 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-all duration-200 flex items-center gap-2">
              Get Started
              <ChevronRight size={20} />
            </button>
            <button className="px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
