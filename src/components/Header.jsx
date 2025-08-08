import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [dropdowns, setDropdowns] = useState({
    about: false,
    services: false,
    caseStudies: false,
    resources: false,
  });

  const toggleDropdown = (dropdown) => {
    setDropdowns((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
  };

  const closeAllDropdowns = () => {
    setDropdowns({
      about: false,
      services: false,
      caseStudies: false,
      resources: false,
    });
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center hover:opacity-80 transition-opacity duration-200"
          >
            <img
              src="/ImpactChange.png"
              alt="Impact Change Logo"
              className="h-8 w-auto"
            />
          </Link>

          {/* Centered Navigation */}
          <nav className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-8">
              {/* About Link */}
              <div className="relative">
                <Link
                  to="/about"
                  className="flex items-center text-[#131e3D] cursor-pointer hover:text-blue-600 transition-colors"
                  onClick={closeAllDropdowns}
                >
                  About
                </Link>
              </div>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("services")}
                  className="flex items-center text-[#131e3D] cursor-pointer hover:text-blue-600 transition-colors"
                >
                  Services
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {dropdowns.services && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    <a
                      href="#strategic-business-coaching"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Strategic Business & Startup Coaching
                    </a>
                    <a
                      href="#investor-readiness"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Investor Readiness & Fundraising Documents
                    </a>
                    <a
                      href="#professional-branding"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Professional Branding & Career Coaching
                    </a>
                  </div>
                )}
              </div>

              {/* Case Studies Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("caseStudies")}
                  className="flex items-center text-[#131e3D] cursor-pointer hover:text-blue-600 transition-colors"
                >
                  Case Studies
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {dropdowns.caseStudies && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    <a
                      href="#portfolio"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Portfolio
                    </a>
                    <a
                      href="#success-stories"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Success Stories
                    </a>
                    <a
                      href="#client-work"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Client Work
                    </a>
                  </div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("resources")}
                  className="flex items-center text-[#131e3D] cursor-pointer hover:text-blue-600 transition-colors"
                >
                  Resources
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {dropdowns.resources && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    <a
                      href="#blog"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Blog
                    </a>
                    <a
                      href="#guides"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Guides
                    </a>
                    <a
                      href="#downloads"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Downloads
                    </a>
                  </div>
                )}
              </div>
            </div>
          </nav>

          {/* Contact Us Button */}
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Contact Us
          </Link>

          {/* Click outside to close dropdowns */}
          {(dropdowns.about ||
            dropdowns.services ||
            dropdowns.caseStudies ||
            dropdowns.resources) && (
            <div
              className="fixed inset-0 z-0"
              onClick={closeAllDropdowns}
            ></div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
