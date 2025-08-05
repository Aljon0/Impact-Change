import { ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { faqs } from "../../data/faqs";

const FAQsSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600">
            Get answers to the most common questions about our services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 transition-colors duration-200"
              >
                <span className="font-semibold text-slate-800">
                  {faq.question}
                </span>
                <ChevronRight
                  className={`transform transition-transform duration-200 ${
                    openFAQ === index ? "rotate-90" : ""
                  }`}
                  size={20}
                />
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
