import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4">
            Impact<span className="text-slate-400">Change</span>
          </div>
          <p className="text-slate-400 mb-8">
            Transforming businesses through innovative solutions.
          </p>
          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-400 text-sm">
              © 2024 Impact Change. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
