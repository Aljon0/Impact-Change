import { Star } from "lucide-react";
import React from "react";
import { testimonials } from "../../data/testimonials";

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-semibold text-slate-800">
                  {testimonial.name}
                </div>
                <div className="text-slate-500 text-sm">
                  {testimonial.position}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
