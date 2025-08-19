import React, { useState } from "react";
import { testimonials } from "../data/testimonials";

const Reviews = () => {
  const [visibleReviews, setVisibleReviews] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreReviews = () => {
    setIsLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      setVisibleReviews((prev) => Math.min(prev + 6, testimonials.length));
      setIsLoading(false);
    }, 800);
  };

  const renderAvatar = (testimonial) => {
    if (testimonial.avatar) {
      return (
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-blue-200 flex-shrink-0"
        />
      );
    }

    const initials = testimonial.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

    return (
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-sm border-2 border-blue-200 flex-shrink-0">
        {initials}
      </div>
    );
  };

  const renderTags = (tags) => {
    return tags.map((tag, index) => (
      <span
        key={index}
        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
          tag.variant === "blue"
            ? "bg-blue-100 text-blue-800 border border-blue-200"
            : "bg-green-100 text-green-800 border border-green-200"
        }`}
      >
        {tag.icon ? (
          // Check if icon is an emoji (1-2 characters) or an image path
          typeof tag.icon === "string" && tag.icon.length <= 2 ? (
            <span className="mr-1">{tag.icon}</span>
          ) : tag.icon.includes("/") || tag.icon.includes(".") ? (
            <img src={tag.icon} alt="" className="w-3 h-3 mr-1" />
          ) : (
            <div className="w-3 h-3 mr-1 bg-current rounded-sm opacity-70"></div>
          )
        ) : (
          <div className="w-3 h-3 mr-1 bg-current rounded-sm opacity-70"></div>
        )}
        {tag.label}
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute top-60 right-20 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-blue-600 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30 backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Real Client Reviews
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Client
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 ml-4">
                Success
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Discover why over 1,500 founders trust Impact Change to bring
              their visions to life. Every testimonial represents a success
              story and a partnership built on excellence.
            </p>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">1,500+</div>
                <div className="text-blue-200">Happy Founders</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">$2B+</div>
                <div className="text-blue-200">Raised by Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-blue-200">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {testimonials.slice(0, visibleReviews).map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 flex flex-col"
              >
                {/* Review Text */}
                <div className="mb-8 flex-grow">
                  <p className="text-white leading-relaxed text-base">
                    "{testimonial.text}"
                  </p>
                </div>

                {/* Tags */}
                {testimonial.tags && (
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {renderTags(testimonial.tags)}
                    </div>
                  </div>
                )}

                {/* Author Info - Always at bottom */}
                <div className="flex items-center space-x-4 mt-auto">
                  {renderAvatar(testimonial)}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold text-base mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-blue-200 text-sm leading-tight">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleReviews < testimonials.length && (
            <div className="text-center mt-12">
              <button
                onClick={loadMoreReviews}
                disabled={isLoading}
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin -ml-1 mr-3 h-5 w-5 text-white">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    </div>
                    Loading More...
                  </>
                ) : (
                  <>
                    Load More Reviews
                    <svg
                      className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </>
                )}
              </button>
              <p className="text-blue-300 text-sm mt-4">
                Showing {visibleReviews} of {testimonials.length} reviews
              </p>
            </div>
          )}

          {/* All Reviews Loaded Message */}
          {visibleReviews >= testimonials.length && (
            <div className="text-center mt-12">
              <div className="inline-flex items-center px-6 py-3 bg-green-500/20 text-green-300 rounded-2xl border border-green-500/30">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                You've seen all our amazing reviews!
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
