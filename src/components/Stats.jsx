import { Award, DollarSign, Star, Users } from "lucide-react";
import React from "react";

const Stats = () => {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Work With Me? A Track Record of Excellence
          </h2>
          <p className="text-xl text-blue-100">
            There are many coaches and consultants. Here is what makes working
            with me different.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-8 h-8 text-yellow-400 fill-current" />
            </div>
            <div className="text-4xl font-bold text-white mb-2">5.0 Stars</div>
            <div className="text-blue-100">Based on 1,800+ Fiverr Reviews</div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <DollarSign className="w-8 h-8 text-green-400" />
            </div>
            <div className="text-4xl font-bold text-white mb-2">
              $2 Billion+
            </div>
            <div className="text-blue-100">Capital Raised for Clients</div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-white mb-2">1,500+</div>
            <div className="text-blue-100">Founders Coached & Supported</div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-orange-400" />
            </div>
            <div className="text-4xl font-bold text-white mb-2">2</div>
            <div className="text-blue-100">Successful Startup Exits</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
