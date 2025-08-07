import {
  Building2,
  ChevronLeft,
  ChevronRight,
  Star,
  UtensilsCrossed,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import ClientLogos from "./ClientLogos"; // Import the ClientLogos component

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "A genius at bringing to life the story I wanted to create. Will was exceptional. Understood the ask very quickly, and created a masterpiece of a pitch deck. A genius at bringing to life the story I wanted to create. I now have a tool which will be priceless when pitching to investors and to detail the problem and solution.",
      name: "Zhen Hussain",
      title: "Founder",
      company: "/HomePage/RunTheDish.png",
      avatar: "/HomePage/ZhenHussain.png",
      tags: [
        {
          label: "Investor Pitch Deck",
          icon: "/HomePage/PitchDeckDashboard.svg",
          variant: "blue",
        },
        { label: "Recipe App", icon: "spoon-fork", variant: "green" },
      ],
    },
    {
      text: "Will truly listened to how and what I need and what I needed from a business plan and made it work for me. Truly exceptional work removing dozens of hours of work from my plate. I highly recommend Will and his team!",
      name: "Dr. Edward Cunningham",
      title: "Wellness Coach",
      company: "/HomePage/AttivoWellness.png",
      companyIcon: "/HomePage/BusinessPlanBook.svg",
      avatar: "/HomePage/EdwardCunningham.png",
      tags: [
        {
          label: "Business Plan",
          icon: "/HomePage/BusinessPlanBook.svg",
          variant: "blue",
        },
        { label: "Wellness", icon: "💚", variant: "green" },
      ],
      // Add custom formatting for this testimonial
      customFormatting: {
        boldText: "Will truly listened to how and what I need",
        normalText:
          "Will truly listened to how and what I need and what I needed from a business plan and made it work for me. Truly exceptional work removing dozens of hours of work from my plate. I highly recommend Will and his team!",
      },
    },
    {
      text: "I look forward to working with him again! I can't see enough wonderful things about him he's just absolutely the best when it comes to optimizing linkedin and discussing business plans. I look forward to working with him again!",
      name: "Andrew LeBaron",
      title: "CEO & Founder",
      company: "/HomePage/Parkrise.png",
      companyIcon: "/HomePage/Linkedin.svg",
      avatar: "/HomePage/AndrewLebaron.png",
      tags: [
        {
          label: "Optimized LinkedIn Profile",
          icon: "/HomePage/Linkedin.svg",
          variant: "blue",
        },
        { label: "Real Estate", icon: "buildings", variant: "green" },
      ],
    },
  ];

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    );
  };

  const Badge = ({ tag }) => {
    const baseClasses =
      "inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-medium";
    const variants = {
      blue: "bg-white bg-opacity-20 text-[#0269d5]",
      green: "bg-[#38a37f] bg-opacity-100 text-white",
    };

    const isEmoji =
      typeof tag.icon === "string" &&
      !tag.icon.includes(".svg") &&
      tag.icon !== "spoon-fork" &&
      tag.icon !== "buildings";

    const renderIcon = () => {
      if (tag.icon === "spoon-fork") {
        return <UtensilsCrossed className="w-3 h-3 text-white" />;
      } else if (tag.icon === "buildings") {
        return <Building2 className="w-3 h-3 text-white" />;
      } else if (isEmoji) {
        return <span>{tag.icon}</span>;
      } else {
        return <img src={tag.icon} alt={tag.label} className="w-3 h-3" />;
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

  const currentTestimonial = testimonials[currentIndex];
  const isShortTitle = currentTestimonial.title.split(" ").length <= 1;
  const { firstSentence, remainingText } = getFormattedText(
    currentTestimonial.text
  );

  return (
    <>
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-4 py-2 mb-6">
              <img
                src="/HomePage/ClientWins.png"
                alt="Client Wins"
                className="h-16"
              />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Founders choose us for the speed,
              <br />
              focus, and traction we bring.
            </h2>
          </div>

          {/* Single Testimonial Container with Navigation */}
          <div className="relative">
            {/* Navigation Buttons - Outside the container */}
            <button
              onClick={goToPrevious}
              className="absolute -left-16 top-1/2 -translate-y-1/2 z-20 bg-blue-600  text-white p-3 rounded-full shadow-lg border border-gray-200 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={goToNext}
              className="absolute -right-16 top-1/2 -translate-y-1/2 z-20 bg-blue-600 text-white p-3 rounded-full shadow-lg border border-gray-200 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Testimonial Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl text-white relative overflow-hidden min-h-[400px] transition-all duration-500">
              <div className="relative z-10 flex items-start justify-between h-full">
                {/* Left side - content */}
                <div className="w-full lg:w-2/3 pr-8 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
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

                    <p className="mb-8">
                      {currentTestimonial.customFormatting ? (
                        <>
                          <span className="text-xl font-bold block mb-4">
                            {currentTestimonial.customFormatting.boldText}
                          </span>
                          <span className="text-lg leading-relaxed">
                            {currentTestimonial.customFormatting.normalText}
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="text-xl font-bold block mb-4">
                            {firstSentence}
                          </span>
                          {remainingText && (
                            <span className="text-lg leading-relaxed">
                              {remainingText}
                            </span>
                          )}
                        </>
                      )}
                    </p>
                  </div>

                  <button className="border border-white text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 w-fit cursor-pointer">
                    Read Case Study <span>→</span>
                  </button>
                </div>

                {/* Right side - image and info - moved slightly left */}
                <div className="hidden lg:flex flex-col items-center ml-2">
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-32 h-32 rounded-full border-4 border-white object-cover mb-4 transition-all duration-500"
                  />
                  <div className="text-center">
                    <h3 className="text-lg font-semibold">
                      {currentTestimonial.name}
                      {isShortTitle ? `, ${currentTestimonial.title}` : ""}
                    </h3>
                    {!isShortTitle && (
                      <p className="text-sm opacity-90">
                        {currentTestimonial.title}
                      </p>
                    )}
                    {currentTestimonial.company && (
                      <div className="flex justify-center">
                        <img
                          src={currentTestimonial.company}
                          alt="Company logo"
                          className="h-32 w-auto object-contain flex-shrink-0"
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Mobile view - bottom info */}
                <div className="lg:hidden absolute bottom-8 left-8 flex items-center gap-3">
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-white object-cover"
                  />
                  <div>
                    <div className="text-sm">
                      {currentTestimonial.name}
                      {isShortTitle ? `, ${currentTestimonial.title}` : ""}
                    </div>
                    {!isShortTitle && (
                      <div className="text-sm opacity-90">
                        {currentTestimonial.title}
                      </div>
                    )}
                    {currentTestimonial.company && (
                      <div className="mt-1">
                        <img
                          src={currentTestimonial.company}
                          alt="Company logo"
                          className="h-6 object-contain"
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full opacity-10 -translate-y-32 translate-x-32"></div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? "bg-blue-600 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <ClientLogos />
    </>
  );
};

export default Testimonials;
