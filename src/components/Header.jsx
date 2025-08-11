import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [dropdowns, setDropdowns] = useState({
    about: false,
    services: false,
    caseStudies: false,
    resources: false,
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (dropdown) => {
    setDropdowns((prev) => ({
      about: false,
      services: false,
      caseStudies: false,
      resources: false,
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

  const DropdownArrow = ({ isOpen }) => (
    <svg
      className={`ml-1 h-4 w-4 transition-all duration-300 ease-out ${
        isOpen ? "rotate-180 text-blue-600" : "rotate-0"
      }`}
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
  );

  const AnimatedDropdown = ({ isOpen, children, width = "w-56" }) => (
    <div
      className={`absolute top-full left-0 mt-2 ${width} bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-xl shadow-2xl z-10 overflow-hidden transition-all duration-300 ease-out transform origin-top ${
        isOpen
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
      }`}
    >
      <div className="py-2">{children}</div>
    </div>
  );

  const DropdownItem = ({ to, href, children, onClick }) => (
    <div className="relative group">
      {to ? (
        <Link
          to={to}
          className="block px-6 py-3 text-gray-700 hover:text-blue-600 transition-all duration-200 ease-out hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 relative overflow-hidden group"
          onClick={onClick}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-[#131e3D]/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
          <span className="relative z-10 font-medium">{children}</span>
        </Link>
      ) : (
        <a
          href={href}
          className="block px-6 py-3 text-gray-700 hover:text-blue-600 transition-all duration-200 ease-out hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
          <span className="relative z-10 font-medium">{children}</span>
        </a>
      )}
    </div>
  );

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200/50"
          : "bg-white shadow-sm"
      }`}
    >
      {/* Animated gradient border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#131e3D]/50 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo with hover effect */}
          <Link
            to="/"
            className="flex items-center group transition-all duration-300 ease-out hover:scale-105"
          >
            <div className="relative">
              <img
                src="/ImpactChange.png"
                alt="Impact Change Logo"
                className="h-8 w-auto transition-all duration-300 ease-out group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-[#131e3D]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out -z-10 blur-xl"></div>
            </div>
          </Link>

          {/* Centered Navigation */}
          <nav className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-8">
              {/* About Link */}
              <div className="relative">
                <Link
                  to="/about"
                  className="relative flex items-center text-[#131e3D] font-medium cursor-pointer transition-all duration-300 ease-out hover:text-blue-600 group py-2"
                  onClick={closeAllDropdowns}
                  onMouseEnter={() => setHoveredItem("about")}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  About
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-[#131e3D] transition-all duration-300 ease-out ${
                      hoveredItem === "about" ? "w-full" : "w-0"
                    }`}
                  ></div>
                </Link>
              </div>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("services")}
                  onMouseEnter={() => setHoveredItem("services")}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="relative flex items-center text-[#131e3D] font-medium cursor-pointer transition-all duration-300 ease-out hover:text-blue-600 group py-2"
                >
                  Services
                  <DropdownArrow isOpen={dropdowns.services} />
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-[#131e3D] transition-all duration-300 ease-out ${
                      hoveredItem === "services" || dropdowns.services
                        ? "w-full"
                        : "w-0"
                    }`}
                  ></div>
                </button>
                <AnimatedDropdown isOpen={dropdowns.services}>
                  <DropdownItem
                    to="/portfolio/pitch-decks"
                    onClick={closeAllDropdowns}
                  >
                    Pitch Decks
                  </DropdownItem>
                  <DropdownItem
                    to="/portfolio/business-plans"
                    onClick={closeAllDropdowns}
                  >
                    Business Plans
                  </DropdownItem>
                  <DropdownItem
                    to="/portfolio/market-research"
                    onClick={closeAllDropdowns}
                  >
                    Market Research
                  </DropdownItem>
                  <DropdownItem to="/consulting" onClick={closeAllDropdowns}>
                    Consulting
                  </DropdownItem>
                </AnimatedDropdown>
              </div>

              {/* Case Studies Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("caseStudies")}
                  onMouseEnter={() => setHoveredItem("caseStudies")}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="relative flex items-center text-[#131e3D] font-medium cursor-pointer transition-all duration-300 ease-out hover:text-blue-600 group py-2"
                >
                  Case Studies
                  <DropdownArrow isOpen={dropdowns.caseStudies} />
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-[#131e3D] transition-all duration-300 ease-out ${
                      hoveredItem === "caseStudies" || dropdowns.caseStudies
                        ? "w-full"
                        : "w-0"
                    }`}
                  ></div>
                </button>
                <AnimatedDropdown isOpen={dropdowns.caseStudies} width="w-48">
                  <DropdownItem href="#portfolio">Portfolio</DropdownItem>
                  <DropdownItem href="#success-stories">
                    Success Stories
                  </DropdownItem>
                  <DropdownItem href="#client-work">Client Work</DropdownItem>
                </AnimatedDropdown>
              </div>

              {/* Resources Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("resources")}
                  onMouseEnter={() => setHoveredItem("resources")}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="relative flex items-center text-[#131e3D] font-medium cursor-pointer transition-all duration-300 ease-out hover:text-blue-600 group py-2"
                >
                  Resources
                  <DropdownArrow isOpen={dropdowns.resources} />
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-[#131e3D] transition-all duration-300 ease-out ${
                      hoveredItem === "resources" || dropdowns.resources
                        ? "w-full"
                        : "w-0"
                    }`}
                  ></div>
                </button>
                <AnimatedDropdown isOpen={dropdowns.resources} width="w-48">
                  <DropdownItem href="#blog">Blog</DropdownItem>
                  <DropdownItem href="#guides">Guides</DropdownItem>
                  <DropdownItem href="#downloads">Downloads</DropdownItem>
                </AnimatedDropdown>
              </div>
            </div>
          </nav>

          {/* Contact Us Button with enhanced animation */}
          <Link
            to="/contact"
            className="relative bg-gradient-to-r from-blue-600 to-[#131e3D] text-white px-6 py-2 rounded-lg font-medium cursor-pointer overflow-hidden group transition-all duration-300 ease-out hover:shadow-lg hover:shadow-[#131e3D]/25 hover:-translate-y-0.5"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-[#131e3D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></div>
            <span className="relative z-10 transition-all duration-300 ease-out group-hover:text-white">
              Contact Us
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-[#131e3D] rounded-lg opacity-0 group-hover:opacity-30 blur transition-all duration-300 ease-out -z-10"></div>
          </Link>

          {/* Click outside to close dropdowns */}
          {(dropdowns.about ||
            dropdowns.services ||
            dropdowns.caseStudies ||
            dropdowns.resources) && (
            <div
              className="fixed inset-0 z-0 backdrop-blur-[1px] bg-black/5"
              onClick={closeAllDropdowns}
            ></div>
          )}
        </div>
      </div>

      {/* Floating particles effect (subtle) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-2 h-2 bg-blue-600/20 rounded-full animate-pulse"
          style={{ top: "20%", left: "10%", animationDelay: "0s" }}
        ></div>
        <div
          className="absolute w-1 h-1 bg-[#131e3D]/20 rounded-full animate-pulse"
          style={{ top: "60%", right: "15%", animationDelay: "1s" }}
        ></div>
        <div
          className="absolute w-1.5 h-1.5 bg-blue-500/20 rounded-full animate-pulse"
          style={{ top: "40%", left: "80%", animationDelay: "2s" }}
        ></div>
      </div>
    </header>
  );
};

export default Header;
