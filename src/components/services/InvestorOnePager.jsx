import { ArrowRight, FileText, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const InvestorOnePager = () => {
  const highlights = [
    { number: "300+", label: "One-Pagers Delivered" },
    { number: "60-Second", label: "Read Time for Maximum Impact" },
    { number: "99%", label: "Positive Investor Feedback" },
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
            Write and Design
            <br />
            Investor One-Pager
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            We create a concise and impactful one-page summary of your business
            to quickly grab investor attention and spark interest.
          </p>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-3">
                  {highlight.number}
                </div>
                <div className="text-gray-700 text-lg font-medium">
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
              Make a Powerful First Impression, Fast
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="text-gray-700 text-lg leading-relaxed space-y-6">
              <p>
                Investors are busy. A one-pager is the perfect tool to deliver a
                high-impact summary of your business in a format that's quick
                and easy to digest.
              </p>
              <p>
                We distill your entire business—problem, solution, market size,
                team, and financials—into a single, visually compelling page.
              </p>
              <p>
                Our expertly written and designed one-pagers are crafted to be
                scanned in under a minute, ensuring you communicate your key
                strengths and capture investor interest immediately, making it
                the perfect leave-behind or email attachment.
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
                <span className="text-white font-bold text-xl">DC</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">
                  David Chen
                </h3>
                <p className="text-blue-700 font-medium">
                  Founder of QuickServe
                </p>
                <div className="flex space-x-1 mt-2">
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
              "The one-pager is brilliant. It's the perfect tool for networking
              events and has been instrumental in getting those crucial first
              meetings."
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

export default InvestorOnePager;
