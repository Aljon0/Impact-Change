import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img
              src="/Logo2.png"
              alt="Impact Change Logo"
              className="h-16 w-auto"
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
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Services
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Testimonials
            </a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
              Start Your Project
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
