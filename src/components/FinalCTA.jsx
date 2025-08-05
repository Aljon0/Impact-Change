import { ArrowRight } from "lucide-react";
import React from "react";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to build something remarkable?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Great ideas need great execution. If you're ready to stop spinning
          your wheels and start building real momentum, let's talk.
        </p>
        <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center group cursor-pointer">
          Start Your Project
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;
