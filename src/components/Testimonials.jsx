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
import ClientLogos from "./ClientLogos";

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
    {
      text: "Beyond satisfied with the time we shared with William! Whom ever is considering purchasing his services needs not to hesitate and go straight ahead and booked a date and time. We will put the work in to move forward with our projects and set a new meeting with William to receive valuable insight on how to keep going! Thanks again William, Anna & Alejandro.",
      name: "Anna",
      title: "Business Owner",
      company: null,
      companyIcon: null,
      avatar: null,
      tags: [
        {
          label: "Expert Business Consultant",
          icon: "briefcase",
          variant: "blue",
        },
        { label: "Startup", icon: "🚀", variant: "green" },
      ],
    },
    {
      text: "Will went above and beyond to understand my specific situation, who I was and what I have done. But beyond that helped me see what I could achieve which I was not aware of with a specific action plan not just advice. I would highly recommend Will, it was incredibly valuable working with him.",
      name: "Phillip Trevilli",
      title: "Professional",
      company: null,
      companyIcon: null,
      avatar: null,
      tags: [
        {
          label: "Career Consulting",
          icon: "user",
          variant: "blue",
        },
        { label: "Entrepreneurship", icon: "🚀", variant: "green" },
      ],
    },
    {
      text: "Working with Will Bryant was an absolute delight! His keen attention to detail and exceptional data interpretation skills surpassed all expectations. His DEEP UNDERSTANDING and cooperative spirit, coupled with his strategic insights, made our short 30-minute session incredibly productive—I'm walking away with BRILLIANT ideas for immediate implementation. 🙌 Highly recommend! ",
      name: "nitzanco",
      title: "Business Analyst",
      company: null,
      companyIcon: null,
      avatar: null,
      tags: [
        {
          label: "Business Strategy & Innovation",
          icon: "search",
          variant: "blue",
        },
        { label: "Business", icon: "💼", variant: "green" },
      ],
    },
    {
      text: "This is my second experience with this incredible service, and I must say, it feels like a dream come true for any startup. The ability to transform my concepts into a professional presentation, complete with clear and realistic visuals, is truly invaluable. I can already envision returning to this service...",
      name: "Anna Martinez",
      title: "Startup Founder",
      company: null,
      companyIcon: null,
      avatar: null,
      tags: [
        {
          label: "Funding Pitch Presentation",
          icon: "presentation",
          variant: "blue",
        },
        { label: "Startup", icon: "🚀", variant: "green" },
      ],
    },
    {
      text: "Will was absolutely fantastic to work with. I had the opportunity to speak with Will before he started my project so that he knew exactly what I wanted. His work was of very high quality, and his communication was excellent; I strongly recommend Will.",
      name: "Jamm",
      title: "Professional",
      company: null,
      companyIcon: null,
      avatar: null,
      tags: [
        {
          label: "Linkedin Profile",
          icon: "linkedin",
          variant: "blue",
        },
        { label: "Professional Branding", icon: "💼", variant: "green" },
      ],
    },
    {
      text: "Working with Will Bryant in Career Counseling was an outstanding experience! His attention to detail and PROFESSIONALISM exceeded my expectations, and his quick responsiveness and deep understanding truly made a difference. Will went above and beyond in every aspect—highly recommended! 👏",
      name: "Kaufman JJ",
      title: "Job Seeker",
      company: null,
      companyIcon: null,
      avatar: null,
      tags: [
        {
          label: "Interview Prep",
          icon: "user",
          variant: "blue",
        },
        { label: "Career Counseling", icon: "💼", variant: "green" },
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
      "inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-medium";
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
          return <UtensilsCrossed className="w-3 h-3 text-white" />;
        case "buildings":
          return <Building2 className="w-3 h-3 text-white" />;
        case "briefcase":
          return <Briefcase className="w-3 h-3 text-white" />;
        case "user":
          return <User className="w-3 h-3 text-white" />;
        case "search":
          return <Search className="w-3 h-3 text-white" />;
        case "presentation":
          return <Presentation className="w-3 h-3 text-white" />;
        case "linkedin":
          return <Linkedin className="w-3 h-3 text-white" />;
        default:
          if (isEmoji) {
            return <span>{tag.icon}</span>;
          } else if (tag.icon) {
            return <img src={tag.icon} alt={tag.label} className="w-3 h-3" />;
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

  const currentTestimonial = testimonials[currentIndex];
  const isShortTitle =
    currentTestimonial.title && currentTestimonial.title.split(" ").length <= 1;
  const { firstSentence, remainingText } = getFormattedText(
    currentTestimonial.text
  );

  // Avatar component that handles both image and initials
  const Avatar = ({ testimonial, size = "large" }) => {
    const sizeClasses = {
      large: "w-32 h-32 text-2xl",
      small: "w-12 h-12 text-sm",
    };

    if (testimonial.avatar) {
      return (
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className={`${sizeClasses[size]} rounded-full border-4 border-white object-cover transition-all duration-500`}
        />
      );
    }

    return (
      <div
        className={`${sizeClasses[size]} ${getAvatarColor(
          testimonial.name
        )} rounded-full border-4 border-white flex items-center justify-center font-bold text-white transition-all duration-500`}
      >
        {getInitials(testimonial.name)}
      </div>
    );
  };

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
          </div>

          {/* Single Testimonial Container with Navigation */}
          <div className="relative">
            {/* Navigation Buttons - Outside the container */}
            <button
              onClick={goToPrevious}
              className="absolute -left-16 top-1/2 -translate-y-1/2 z-20 bg-blue-600 text-white p-3 rounded-full shadow-lg border border-gray-200 cursor-pointer"
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

                {/* Right side - image and info */}
                <div className="hidden lg:flex flex-col items-center ml-2">
                  <Avatar testimonial={currentTestimonial} size="large" />
                  <div className="text-center mt-4">
                    <h3 className="text-lg font-semibold">
                      {currentTestimonial.name}
                      {isShortTitle ? `, ${currentTestimonial.title}` : ""}
                    </h3>
                    {!isShortTitle && currentTestimonial.title && (
                      <p className="text-sm opacity-90">
                        {currentTestimonial.title}
                      </p>
                    )}
                    {currentTestimonial.company && (
                      <div className="flex justify-center mt-2">
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
                  <Avatar testimonial={currentTestimonial} size="small" />
                  <div>
                    <div className="text-sm">
                      {currentTestimonial.name}
                      {isShortTitle ? `, ${currentTestimonial.title}` : ""}
                    </div>
                    {!isShortTitle && currentTestimonial.title && (
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
