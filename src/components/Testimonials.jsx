import {
  Briefcase,
  Building2,
  ChevronLeft,
  ChevronRight,
  Linkedin,
  Presentation,
  Search,
  Star,
  User,
  UtensilsCrossed,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { testimonials } from "../data/testimonials"; // Import the testimonials data
import TrustBar from "./TrustBar";

const Testimonials = () => {
  // Filter testimonials to only include pitch decks, business plans, and market research
  const filteredTestimonials = testimonials.filter((testimonial) => {
    const relevantTags = testimonial.tags.some((tag) => {
      const label = tag.label.toLowerCase();
      return (
        label.includes("pitch deck") ||
        label.includes("business plan") ||
        label.includes("market research") ||
        label.includes("presentation") ||
        label.includes("strategy") ||
        label.includes("business") ||
        label.includes("funding")
      );
    });
    return relevantTags;
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === filteredTestimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [filteredTestimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? filteredTestimonials.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === filteredTestimonials.length - 1 ? 0 : currentIndex + 1
    );
  };

  // Function to generate initials from name
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase())
      .join("")
      .slice(0, 2); // Limit to 2 characters
  };

  // Function to generate avatar background color based on name
  const getAvatarColor = (name) => {
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-purple-500",
      "bg-red-500",
      "bg-yellow-500",
      "bg-pink-500",
      "bg-indigo-500",
      "bg-teal-500",
    ];
    const index = name.length % colors.length;
    return colors[index];
  };

  const Badge = ({ tag }) => {
    const baseClasses =
      "inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-medium";
    const variants = {
      blue: "bg-white bg-opacity-20 text-[#0269d5]",
      green: "bg-[#38a37f] bg-opacity-100 text-white",
    };

    const isEmoji =
      typeof tag.icon === "string" &&
      !tag.icon.includes(".svg") &&
      ![
        "spoon-fork",
        "buildings",
        "briefcase",
        "user",
        "search",
        "presentation",
        "linkedin",
      ].includes(tag.icon);

    const renderIcon = () => {
      switch (tag.icon) {
        case "spoon-fork":
          return <UtensilsCrossed className="w-5 h-5 text-white" />;
        case "buildings":
          return <Building2 className="w-5 h-5 text-white" />;
        case "briefcase":
          return <Briefcase className="w-5 h-5 text-white" />;
        case "user":
          return <User className="w-5 h-5 text-white" />;
        case "search":
          return <Search className="w-5 h-5 text-white" />;
        case "presentation":
          return <Presentation className="w-5 h-5 text-white" />;
        case "linkedin":
          return <Linkedin className="w-5 h-5 text-white" />;
        default:
          if (isEmoji) {
            return <span className="text-lg">{tag.icon}</span>;
          } else if (tag.icon) {
            return <img src={tag.icon} alt={tag.label} className="w-5 h-5" />;
          }
          return null;
      }
    };

    return (
      <span className={`${baseClasses} ${variants[tag.variant]}`}>
        {renderIcon()}
        <span>{tag.label}</span>
      </span>
    );
  };

  // Function to get the first sentence and remaining text
  const getFormattedText = (text) => {
    const sentences = text.match(/[^\.!?]*[\.!?]+/g) || [text];
    const firstSentence = sentences[0]?.trim() || "";
    const remainingText = sentences.slice(1).join(" ").trim();

    return { firstSentence, remainingText };
  };

  const currentTestimonial = filteredTestimonials[currentIndex];
  const isShortTitle =
    currentTestimonial?.title &&
    currentTestimonial.title.split(" ").length <= 1;
  const { firstSentence, remainingText } = getFormattedText(
    currentTestimonial?.text || ""
  );

  // Avatar component that handles both image and initials
  const Avatar = ({ testimonial, size = "medium" }) => {
    const sizeClasses = {
      medium: "w-16 h-16 text-lg",
      small: "w-12 h-12 text-sm",
    };

    if (testimonial.avatar) {
      return (
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className={`${sizeClasses[size]} rounded-full border-3 border-white object-cover transition-all duration-500`}
        />
      );
    }

    return (
      <div
        className={`${sizeClasses[size]} ${getAvatarColor(
          testimonial.name
        )} rounded-full border-3 border-white flex items-center justify-center font-bold text-white transition-all duration-500`}
      >
        {getInitials(testimonial.name)}
      </div>
    );
  };

  // If no filtered testimonials, show message
  if (filteredTestimonials.length === 0) {
    return (
      <>
        <section id="testimonials" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>Loading testimonials...</p>
          </div>
        </section>
        <TrustBar />
      </>
    );
  }

  return (
    <>
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-6 py-3 mb-6">
              <div className="relative">
                {/* Main badge container */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-full px-6 py-2 shadow-sm">
                  <div className="flex items-center space-x-3">
                    {/* Trophy/Star icon */}
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-md">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>

                    {/* Text */}
                    <span className="text-blue-700 font-semibold text-lg tracking-wide">
                      Client Wins
                    </span>

                    {/* Decorative element */}
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur-lg opacity-20 -z-10 scale-110"></div>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Founders choose us for the speed,
              <br />
              focus, and traction we bring.
            </h2>

            {/* Link to full reviews page */}
            <div className="mt-6">
              <a
                href="/reviews"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
              >
                View all client reviews
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Single Testimonial Container with Navigation */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute -left-16 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-900 hover:to-blue-950 text-white p-4 rounded-full shadow-2xl border-2 border-blue-300 transition-all duration-200 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={goToNext}
              className="absolute -right-16 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-900 hover:to-blue-950 text-white p-4 rounded-full shadow-2xl border-2 border-blue-300 transition-all duration-200 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Testimonial Card - New Creative Layout */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl text-white relative overflow-hidden transition-all duration-500 shadow-xl">
              {/* Top Section - Client Info Bar */}
              <div className="bg-gradient-to-r from-blue-800 to-blue-900 backdrop-blur-sm px-8 py-6 flex items-center justify-between border-b border-blue-400 border-opacity-30">
                <div className="flex items-center gap-4">
                  <Avatar testimonial={currentTestimonial} size="medium" />
                  <div>
                    <h3 className="text-xl font-bold text-white drop-shadow-lg">
                      {currentTestimonial.name}
                    </h3>
                    <p className="text-base text-blue-100 font-medium">
                      {currentTestimonial.title}
                    </p>
                  </div>
                </div>

                {/* Company Logo - Fixed Position */}
                {currentTestimonial.company && (
                  <div className="flex-shrink-0">
                    <img
                      src={currentTestimonial.company}
                      alt="Company logo"
                      className="h-24 w-auto object-contain"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Main Content Section */}
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {currentTestimonial.tags.map((tag, i) => (
                    <Badge key={i} tag={tag} />
                  ))}
                </div>

                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <div className="mb-8">
                  {currentTestimonial.customFormatting ? (
                    <>
                      <p className="text-xl font-bold mb-4 leading-relaxed">
                        {currentTestimonial.customFormatting.boldText}
                      </p>
                      <p className="text-lg leading-relaxed opacity-95">
                        {currentTestimonial.customFormatting.normalText}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-xl font-bold mb-4 leading-relaxed">
                        {firstSentence}
                      </p>
                      {remainingText && (
                        <p className="text-lg leading-relaxed opacity-95">
                          {remainingText}
                        </p>
                      )}
                    </>
                  )}
                </div>

                {/* Bottom Action Bar */}
                <div className="flex items-center justify-between">
                  <button className="bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-900 hover:to-blue-950 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-xl border border-blue-400 border-opacity-50">
                    Read Case Study
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>

                  {/* Dots Indicator - Moved to bottom right */}
                  <div className="flex space-x-3">
                    {filteredTestimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-3 rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? "bg-gradient-to-r from-blue-300 to-blue-200 w-10 shadow-lg"
                            : "bg-blue-300 bg-opacity-60 hover:bg-opacity-90 w-3 hover:scale-110"
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-5 -translate-y-48 translate-x-48"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full opacity-5 translate-y-32 -translate-x-32"></div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />
    </>
  );
};

export default Testimonials;
