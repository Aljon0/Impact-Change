import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src="/Logo2.png"
              alt="Impact Change Logo"
              className="h-10 w-auto"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold italic text-gray-900">
                IMPACT
              </span>
              <span className="text-xl font-bold italic text-gray-900">
                CHANGE
              </span>
            </div>
          </div>
          <div className="text-gray-500 text-sm">
            © 2025 Impact Change. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
