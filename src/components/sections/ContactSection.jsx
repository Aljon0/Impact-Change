import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ready to start your transformation journey? We'd love to hear from
            you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-200 rounded-lg">
                <Mail className="text-slate-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-2">Email Us</h3>
                <p className="text-slate-600">hello@impactchange.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-200 rounded-lg">
                <Phone className="text-slate-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-2">Call Us</h3>
                <p className="text-slate-600">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-200 rounded-lg">
                <MapPin className="text-slate-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-2">Visit Us</h3>
                <p className="text-slate-600">
                  123 Business District
                  <br />
                  New York, NY 10001
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none transition-all duration-200"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none transition-all duration-200"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none transition-all duration-200 resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button className="w-full px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-all duration-200">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
