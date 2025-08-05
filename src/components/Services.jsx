import { DollarSign, TrendingUp, Users } from "lucide-react";
import React from "react";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your Strategic Partner for Growth
          </h2>
          <p className="text-xl text-gray-600">
            Achieve your most ambitious goals with proven, actionable support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Investor-Ready Pitch Decks
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I'll write and design a compelling pitch deck that tells your
              story, highlights your strengths, and gets investors to pay
              attention. Clean, strategic, and visually on point.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Business Plan & 5-Year Financial Forecast
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Get a professionally written and designed business plan paired
              with a detailed 5-year financial forecast, perfect for investors,
              lenders, or internal strategy. Clear, compelling, and built to
              impress.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              LinkedIn Profile Optimization
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Stand out to recruiters, clients, or investors with a profile
              that's clear, strategic, and aligned with your goals.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer">
            Explore More Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
