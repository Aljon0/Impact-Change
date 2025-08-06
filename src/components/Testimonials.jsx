import { Building2, Star, UtensilsCrossed } from "lucide-react";
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "A genius at bringing to life the story I wanted to create. Will was exceptional. Understood the ask very quickly, and created a masterpiece of a pitch deck. A genius at bringing to life the story I wanted to create. I now have a tool which will be priceless when pitching to investors and to detail the problem and solution.",
      name: "Zhen Hussain",
      title: "Founder",
      company: "RunTheDish",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      tags: [
        {
          label: "Investor Pitch Deck",
          icon: "/HomePage/PitchDeckDashboard.svg",
          variant: "blue",
        },
        { label: "Recipe App", icon: "spoon-fork", variant: "green" },
      ],
      layout: "large",
    },
    {
      text: "Will truly listened to how and what I need and what I needed from a business plan and made it work for me. Truly exceptional work removing dozens of hours of work from my plate. I highly recommend Will and his team!",
      name: "Dr. Edward Cunningham",
      title: "Wellness Coach",
      company: "Attivo Wellness",
      companyIcon: "/HomePage/BusinessPlanBook.svg",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      tags: [
        {
          label: "Business Plan",
          icon: "/HomePage/BusinessPlanBook.svg",
          variant: "blue",
        },
        { label: "Wellness", icon: "💚", variant: "green" },
      ],
      layout: "small",
    },
    {
      text: "I look forward to working with him again! I can't see enough wonderful things about him he's just absolutely the best when it comes to optimizing linkedin and discussing business plans. I look forward to working with him again!",
      name: "Andrew LeBaron",
      title: "CEO & Founder",
      company: "Parkrise",
      companyIcon: "/HomePage/Linkedin.svg",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      tags: [
        {
          label: "Optimized LinkedIn Profile",
          icon: "/HomePage/Linkedin.svg",
          variant: "blue",
        },
        { label: "Real Estate", icon: "buildings", variant: "green" },
      ],
      layout: "small",
    },
  ];

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

  const CompanyLogo = ({ company, icon, isLarge = false }) => {
    if (isLarge) {
      return null;
    }

    const isEmoji = typeof icon === "string" && !icon.includes(".svg");

    return (
      <div className="flex items-center gap-2 mt-2">
        <div className="w-6 h-6 bg-white bg-opacity-20 rounded flex items-center justify-center">
          {isEmoji ? (
            <span className="text-sm">{icon}</span>
          ) : (
            <img src={icon} alt={company} className="w-4 h-4" />
          )}
        </div>
        <span className="text-white font-medium text-sm">{company}</span>
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            Client Wins
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Founders choose us for the speed,
            <br />
            focus, and traction we bring.
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Large testimonial */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl text-white relative overflow-hidden">
              <div className="relative z-10 flex items-start justify-between">
                {/* Left side - compressed text */}
                <div className="w-full lg:w-2/3 pr-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {testimonials[0].tags.map((tag, i) => (
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
                    <span className="text-xl font-bold block mb-4">
                      A genius at bringing to life the story I wanted to create.
                    </span>
                    <span className="text-lg leading-relaxed">
                      Will was exceptional. Understood the ask very quickly, and
                      created a masterpiece of a pitch deck. I now have a tool
                      which will be priceless when pitching to investors.
                    </span>
                  </p>

                  <button className="border border-white hover:bg-white hover:bg-opacity-10 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                    Read Case Study <span>→</span>
                  </button>
                </div>

                {/* Right side - larger image */}
                <div className="hidden lg:flex flex-col items-start ml-4">
                  <img
                    src={testimonials[0].avatar}
                    alt={testimonials[0].name}
                    className="w-32 h-32 rounded-full border-4 border-white object-cover mb-4"
                  />
                  <div className="text-left">
                    <div className="text-lg">
                      {" "}
                      {/* Removed font-semibold */}
                      {testimonials[0].name}, {testimonials[0].title}
                    </div>
                    <div className="text-white font-bold text-lg mt-1">
                      {testimonials[0].company}
                    </div>
                  </div>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full opacity-10 -translate-y-32 translate-x-32"></div>
            </div>
          </div>

          {/* Two smaller testimonials */}
          {testimonials.slice(1).map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-2xl text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {testimonial.tags.map((tag, i) => (
                    <Badge key={i} tag={tag} />
                  ))}
                </div>

                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="mb-6">
                  <span className="text-lg font-bold block mb-3">
                    {index === 0
                      ? "Will truly listened to how and what I need"
                      : "I look forward to working with him again!"}
                  </span>
                  <span className="text-base leading-relaxed">
                    {index === 0
                      ? "Will truly listened to how and what I needed from a business plan and made it work for me. Truly exceptional work removing dozens of hours of work from my plate."
                      : "I can't see enough wonderful things about him he's just absolutely the best when it comes to optimizing linkedin and discussing business plans."}
                  </span>
                </p>

                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-white object-cover"
                  />
                  <div>
                    <div className="text-sm">
                      {" "}
                      {/* Removed font-semibold */}
                      {testimonial.name}, {testimonial.title}
                    </div>
                    <div className="text-sm font-bold">
                      {" "}
                      {/* Added font-bold */}
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full opacity-10 -translate-y-16 translate-x-16"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
