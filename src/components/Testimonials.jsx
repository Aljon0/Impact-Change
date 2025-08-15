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
import { Link } from "react-router-dom";
import { testimonials } from "../data/testimonials";
import TrustBar from "./TrustBar";

const Testimonials = () => {
  // Filter testimonials to only include relevant ones
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
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    if (!isAutoRotating) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === filteredTestimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [filteredTestimonials.length, isAutoRotating]);

  const goToPrevious = () => {
    setIsAutoRotating(false);
    setCurrentIndex(
      currentIndex === 0 ? filteredTestimonials.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setIsAutoRotating(false);
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
      .slice(0, 2);
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
      "inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-medium";
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
          return (
            <UtensilsCrossed className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          );
        case "buildings":
          return <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />;
        case "briefcase":
          return <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-white" />;
        case "user":
          return <User className="w-4 h-4 sm:w-5 sm:h-5 text-white" />;
        case "search":
          return <Search className="w-4 h-4 sm:w-5 sm:h-5 text-white" />;
        case "presentation":
          return <Presentation className="w-4 h-4 sm:w-5 sm:h-5 text-white" />;
        case "linkedin":
          return <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />;
        default:
          if (isEmoji) {
            return <span className="text-sm sm:text-lg">{tag.icon}</span>;
          } else if (tag.icon) {
            return (
              <img
                src={tag.icon}
                alt={tag.label}
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
            );
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
  const { firstSentence, remainingText } = getFormattedText(
    currentTestimonial?.text || ""
  );

  // Avatar component that handles both image and initials
  const Avatar = ({ testimonial, size = "medium" }) => {
    const sizeClasses = {
      medium: "w-12 h-12 sm:w-16 sm:h-16 text-sm sm:text-lg",
      small: "w-10 h-10 sm:w-12 sm:h-12 text-xs sm:text-sm",
    };

    if (testimonial.avatar) {
      return (
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className={`${sizeClasses[size]} rounded-full border-2 sm:border-3 border-white object-cover transition-all duration-500`}
          loading="lazy"
        />
      );
    }

    return (
      <div
        className={`${sizeClasses[size]} ${getAvatarColor(
          testimonial.name
        )} rounded-full border-2 sm:border-3 border-white flex items-center justify-center font-bold text-white transition-all duration-500`}
      >
        {getInitials(testimonial.name)}
      </div>
    );
  };

  if (filteredTestimonials.length === 0) {
    return (
      <>
        <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-white">
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
      <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
              <div className="relative">
                {/* Main badge container */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full px-4 sm:px-6 py-1 sm:py-2 shadow-sm">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    {/* Trophy/Star icon */}
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-md">
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>

                    {/* Text */}
                    <span className="text-blue-700 font-semibold text-sm sm:text-lg tracking-wide">
                      Client Wins
                    </span>

                    {/* Decorative element */}
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur-lg opacity-20 -z-10 scale-110"></div>
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Founders choose us for the speed,
              <br className="hidden sm:block" /> focus, and traction we bring.
            </h2>

            {/* Link to full reviews page */}
            <div className="mt-4 sm:mt-6">
              <Link
                to="/reviews"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 text-sm sm:text-base"
              >
                View all client reviews
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 ml-1"
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
              </Link>
            </div>
          </div>

          {/* Single Testimonial Container with Navigation */}
          <div className="relative">
            {/* Navigation Buttons - Hidden on mobile, shown on md+ */}
            <button
              onClick={goToPrevious}
              className="hidden md:block absolute -left-12 sm:-left-16 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-900 hover:to-blue-950 text-white p-3 sm:p-4 rounded-full shadow-xl sm:shadow-2xl border border-blue-300 transition-all duration-200 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={goToNext}
              className="hidden md:block absolute -right-12 sm:-right-16 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-900 hover:to-blue-950 text-white p-3 sm:p-4 rounded-full shadow-xl sm:shadow-2xl border border-blue-300 transition-all duration-200 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Testimonial Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl sm:rounded-2xl text-white relative overflow-hidden transition-all duration-500 shadow-lg sm:shadow-xl">
              {/* Top Section - Client Info Bar */}
              <div className="bg-gradient-to-r from-blue-800 to-blue-900 backdrop-blur-sm px-4 sm:px-6 md:px-8 py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 border-b border-blue-400 border-opacity-30">
                <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
                  <Avatar testimonial={currentTestimonial} size="medium" />
                  <div className="flex-1 sm:flex-none">
                    <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-lg">
                      {currentTestimonial.name}
                    </h3>
                    <p className="text-sm sm:text-base text-blue-100 font-medium">
                      {currentTestimonial.title}
                    </p>
                  </div>
                </div>

                {/* Company Logo */}
                {currentTestimonial.company && (
                  <div className="flex-shrink-0 max-w-[120px] sm:max-w-none">
                    <img
                      src={currentTestimonial.company}
                      alt="Company logo"
                      className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                      loading="lazy"
                    />
                  </div>
                )}
              </div>

              {/* Main Content Section */}
              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {currentTestimonial.tags.map((tag, i) => (
                    <Badge key={i} tag={tag} />
                  ))}
                </div>

                <div className="flex mb-4 sm:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <div className="mb-6 sm:mb-8">
                  {currentTestimonial.customFormatting ? (
                    <>
                      <p className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 leading-relaxed">
                        {currentTestimonial.customFormatting.boldText}
                      </p>
                      <p className="text-base sm:text-lg leading-relaxed opacity-95">
                        {currentTestimonial.customFormatting.normalText}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 leading-relaxed">
                        {firstSentence}
                      </p>
                      {remainingText && (
                        <p className="text-base sm:text-lg leading-relaxed opacity-95">
                          {remainingText}
                        </p>
                      )}
                    </>
                  )}
                </div>

                {/* Bottom Action Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
                  <Link
                    to={`/case-studies/${currentTestimonial.id}`}
                    className="w-full sm:w-auto bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-900 hover:to-blue-950 text-white font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg sm:shadow-xl border border-blue-400 border-opacity-50"
                  >
                    Read Case Study
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
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
                  </Link>

                  {/* Mobile Navigation - Show on mobile, hide on md+ */}
                  <div className="md:hidden flex items-center gap-4 w-full justify-center sm:justify-end">
                    <button
                      onClick={goToPrevious}
                      className="bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-900 hover:to-blue-950 text-white p-2 rounded-full shadow-md border border-blue-300 transition-all duration-200 cursor-pointer"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex space-x-2">
                      {filteredTestimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setIsAutoRotating(false);
                            setCurrentIndex(index);
                          }}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            index === currentIndex
                              ? "bg-gradient-to-r from-blue-300 to-blue-200 w-6 shadow-md"
                              : "bg-blue-300 bg-opacity-60 hover:bg-opacity-90 w-2 hover:scale-110"
                          }`}
                          aria-label={`Go to testimonial ${index + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={goToNext}
                      className="bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-900 hover:to-blue-950 text-white p-2 rounded-full shadow-md border border-blue-300 transition-all duration-200 cursor-pointer"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Dots Indicator - Desktop */}
                  <div className="hidden md:flex space-x-2 sm:space-x-3">
                    {filteredTestimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setIsAutoRotating(false);
                          setCurrentIndex(index);
                        }}
                        className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? "bg-gradient-to-r from-blue-300 to-blue-200 w-8 sm:w-10 shadow-lg"
                            : "bg-blue-300 bg-opacity-60 hover:bg-opacity-90 w-2 sm:w-3 hover:scale-110"
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-blue-500 rounded-full opacity-5 -translate-y-1/4 translate-x-1/4"></div>
              <div className="absolute bottom-0 left-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-blue-400 rounded-full opacity-5 translate-y-1/4 -translate-x-1/4"></div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />
    </>
  );
};

export default Testimonials;
