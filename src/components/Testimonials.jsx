import { Star } from "lucide-react";
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Will is the real deal. We were stuck trying to raise our pre-seed round for months. He completely reshaped our pitch deck and narrative. Within 60 days of working with him, we were oversubscribed and closed $1.2M. His guidance was direct, insightful, and absolutely critical to our success.",
      name: "Sarah K.",
      title: "Co-Founder, FinTech Startup",
    },
    {
      text: "Working with Will was like turning the lights on. Our go-to-market strategy was theoretical and confusing. He helped us simplify our approach, define clear KPIs, and execute with focus. Our user acquisition has tripled, and for the first time, our whole team is aligned and moving in the same direction.",
      name: "Ben T.",
      title: "Head of Growth, SaaS Company",
    },
    {
      text: "As a solo consultant, I was struggling to break through the six-figure ceiling. Will's coaching on productivity and value positioning was a game-changer. I've since doubled my revenue, refined my service offerings, and regained my work-life balance. Invaluable.",
      name: "Dr. Alisha R.",
      title: "Management Consultant",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Client Wins: Results That Speak for Themselves
          </h2>
          <p className="text-xl text-gray-600">
            Inspired by 1,800+ 5-star reviews
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="text-sm text-gray-600">
                <div className="font-semibold">{testimonial.name}</div>
                <div>{testimonial.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
