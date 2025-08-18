import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [dropdowns, setDropdowns] = useState({
    work: false,
    reviews: false,
    process: false,
    services: false,
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  // Enhanced scroll effect with direction detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setIsScrolled(currentScrollY > 10);
      setLastScrollY(currentScrollY);
    };

    // Use passive listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
    };
  }, [mobileMenuOpen]);

  const toggleDropdown = (dropdown) => {
    setDropdowns((prev) => ({
      work: false,
      reviews: false,
      process: false,
      services: false,
      [dropdown]: !prev[dropdown],
    }));
  };

  const closeAllDropdowns = () => {
    setDropdowns({
      work: false,
      reviews: false,
      process: false,
      services: false,
    });
    setMobileMenuOpen(false);
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
    <>
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

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none transition-colors duration-200"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Centered Navigation */}
            <nav className="hidden md:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center space-x-8">
                {/* Home Link */}
                <div className="relative">
                  <Link
                    to="/"
                    className="relative flex items-center text-[#131e3D] font-medium cursor-pointer transition-all duration-300 ease-out hover:text-blue-600 group py-2"
                    onClick={closeAllDropdowns}
                    onMouseEnter={() => setHoveredItem("home")}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    Home
                    <div
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-[#131e3D] transition-all duration-300 ease-out ${
                        hoveredItem === "home" ? "w-full" : "w-0"
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
                  <AnimatedDropdown isOpen={dropdowns.services} width="w-64">
                    <DropdownItem
                      to="/services/advisor-equity"
                      onClick={closeAllDropdowns}
                    >
                      Advisor Equity
                    </DropdownItem>
                  </AnimatedDropdown>
                </div>

                {/* Work Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown("work")}
                    onMouseEnter={() => setHoveredItem("work")}
                    onMouseLeave={() => setHoveredItem(null)}
                    className="relative flex items-center text-[#131e3D] font-medium cursor-pointer transition-all duration-300 ease-out hover:text-blue-600 group py-2"
                  >
                    Work
                    <DropdownArrow isOpen={dropdowns.work} />
                    <div
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-[#131e3D] transition-all duration-300 ease-out ${
                        hoveredItem === "work" || dropdowns.work
                          ? "w-full"
                          : "w-0"
                      }`}
                    ></div>
                  </button>
                  <AnimatedDropdown isOpen={dropdowns.work} width="w-48">
                    <DropdownItem to="/portfolio" onClick={closeAllDropdowns}>
                      Portfolio
                    </DropdownItem>
                    <DropdownItem
                      to="/work/case-studies"
                      onClick={closeAllDropdowns}
                    >
                      Case Studies
                    </DropdownItem>
                  </AnimatedDropdown>
                </div>

                {/* Reviews Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown("reviews")}
                    onMouseEnter={() => setHoveredItem("reviews")}
                    onMouseLeave={() => setHoveredItem(null)}
                    className="relative flex items-center text-[#131e3D] font-medium cursor-pointer transition-all duration-300 ease-out hover:text-blue-600 group py-2"
                  >
                    Reviews
                    <DropdownArrow isOpen={dropdowns.reviews} />
                    <div
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-[#131e3D] transition-all duration-300 ease-out ${
                        hoveredItem === "reviews" || dropdowns.reviews
                          ? "w-full"
                          : "w-0"
                      }`}
                    ></div>
                  </button>
                  <AnimatedDropdown isOpen={dropdowns.reviews} width="w-48">
                    <DropdownItem to="/reviews" onClick={closeAllDropdowns}>
                      Testimonials
                    </DropdownItem>
                  </AnimatedDropdown>
                </div>

                {/* Process Dropdown */}
                <div className="relative">
                  <Link
                    to="/process"
                    className="relative flex items-center text-[#131e3D] font-medium cursor-pointer transition-all duration-300 ease-out hover:text-blue-600 group py-2"
                    onClick={closeAllDropdowns}
                    onMouseEnter={() => setHoveredItem("process")}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    Process
                    <div
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-[#131e3D] transition-all duration-300 ease-out ${
                        hoveredItem === "process" ? "w-full" : "w-0"
                      }`}
                    ></div>
                  </Link>
                </div>

                {/* Investing Link */}
                <div className="relative">
                  <Link
                    to="/investing"
                    className="relative flex items-center text-[#131e3D] font-medium cursor-pointer transition-all duration-300 ease-out hover:text-blue-600 group py-2"
                    onClick={closeAllDropdowns}
                    onMouseEnter={() => setHoveredItem("investing")}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    Investing
                    <div
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-[#131e3D] transition-all duration-300 ease-out ${
                        hoveredItem === "investing" ? "w-full" : "w-0"
                      }`}
                    ></div>
                  </Link>
                </div>

                {/* Pricing Link */}
                <div className="relative">
                  <Link
                    to="/pricing"
                    className="relative flex items-center text-[#131e3D] font-medium cursor-pointer transition-all duration-300 ease-out hover:text-blue-600 group py-2"
                    onClick={closeAllDropdowns}
                    onMouseEnter={() => setHoveredItem("pricing")}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    Pricing
                    <div
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-[#131e3D] transition-all duration-300 ease-out ${
                        hoveredItem === "pricing" ? "w-full" : "w-0"
                      }`}
                    ></div>
                  </Link>
                </div>

                {/* Who we are Link */}
                <div className="relative">
                  <Link
                    to="/who-we-are"
                    className="relative flex items-center text-[#131e3D] font-medium cursor-pointer transition-all duration-300 ease-out hover:text-blue-600 group py-2"
                    onClick={closeAllDropdowns}
                    onMouseEnter={() => setHoveredItem("about")}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    Who we are
                    <div
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-[#131e3D] transition-all duration-300 ease-out ${
                        hoveredItem === "about" ? "w-full" : "w-0"
                      }`}
                    ></div>
                  </Link>
                </div>
              </div>
            </nav>

            {/* Start Your Project Button - Hidden on mobile */}
            <Link
              to="/contact"
              className="hidden md:block relative bg-gradient-to-r from-blue-600 to-[#131e3D] text-white px-6 py-2 rounded-lg font-medium cursor-pointer overflow-hidden group transition-all duration-300 ease-out hover:shadow-lg hover:shadow-[#131e3D]/25 hover:-translate-y-0.5"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-[#131e3D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></div>
              <span className="relative z-10 transition-all duration-300 ease-out group-hover:text-white">
                Start Your Project
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-[#131e3D] rounded-lg opacity-0 group-hover:opacity-30 blur transition-all duration-300 ease-out -z-10"></div>
            </Link>

            {/* Click outside to close dropdowns - Only for desktop dropdowns */}
            {(dropdowns.work ||
              dropdowns.reviews ||
              dropdowns.process ||
              dropdowns.services) &&
              !mobileMenuOpen && (
                <div
                  className="fixed inset-0 z-0"
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

      {/* Mobile Menu - Fixed positioning */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white">
          {/* Mobile Menu Header with Logo and Close Button */}
          <div className="bg-white shadow-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between py-4">
                {/* Logo in mobile menu */}
                <Link
                  to="/"
                  className="flex items-center group transition-all duration-300 ease-out hover:scale-105"
                  onClick={closeAllDropdowns}
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

                {/* Close button */}
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 focus:outline-none transition-colors duration-200 p-2"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Content - With proper spacing */}
          <div className="px-4 py-8 h-full overflow-y-auto">
            <div className="flex flex-col space-y-6 pb-32">
              <Link
                to="/"
                className="text-2xl font-medium text-gray-800 hover:text-blue-600 py-3 border-b border-gray-100"
                onClick={closeAllDropdowns}
              >
                Home
              </Link>

              <div className="border-b border-gray-100 pb-3">
                <button
                  onClick={() => toggleDropdown("services")}
                  className="flex items-center justify-between w-full text-2xl font-medium text-gray-800 hover:text-blue-600 py-3"
                >
                  Services
                  <DropdownArrow isOpen={dropdowns.services} />
                </button>
                {dropdowns.services && (
                  <div className="pl-4 mt-2 space-y-3">
                    <Link
                      to="/services/advisor-equity"
                      className="block text-xl text-gray-700 hover:text-blue-600"
                      onClick={closeAllDropdowns}
                    >
                      Advisor Equity
                    </Link>
                  </div>
                )}
              </div>

              <div className="border-b border-gray-100 pb-3">
                <button
                  onClick={() => toggleDropdown("work")}
                  className="flex items-center justify-between w-full text-2xl font-medium text-gray-800 hover:text-blue-600 py-3"
                >
                  Work
                  <DropdownArrow isOpen={dropdowns.work} />
                </button>
                {dropdowns.work && (
                  <div className="pl-4 mt-2 space-y-3">
                    <Link
                      to="/portfolio"
                      className="block text-xl text-gray-700 hover:text-blue-600"
                      onClick={closeAllDropdowns}
                    >
                      Portfolio
                    </Link>
                    <Link
                      to="/work/case-studies"
                      className="block text-xl text-gray-700 hover:text-blue-600"
                      onClick={closeAllDropdowns}
                    >
                      Case Studies
                    </Link>
                  </div>
                )}
              </div>

              <div className="border-b border-gray-100 pb-3">
                <button
                  onClick={() => toggleDropdown("reviews")}
                  className="flex items-center justify-between w-full text-2xl font-medium text-gray-800 hover:text-blue-600 py-3"
                >
                  Reviews
                  <DropdownArrow isOpen={dropdowns.reviews} />
                </button>
                {dropdowns.reviews && (
                  <div className="pl-4 mt-2 space-y-3">
                    <Link
                      to="/reviews"
                      className="block text-xl text-gray-700 hover:text-blue-600"
                      onClick={closeAllDropdowns}
                    >
                      Testimonials
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/process"
                className="text-2xl font-medium text-gray-800 hover:text-blue-600 py-3 border-b border-gray-100"
                onClick={closeAllDropdowns}
              >
                Process
              </Link>

              <Link
                to="/investing"
                className="text-2xl font-medium text-gray-800 hover:text-blue-600 py-3 border-b border-gray-100"
                onClick={closeAllDropdowns}
              >
                Investing
              </Link>

              <Link
                to="/pricing"
                className="text-2xl font-medium text-gray-800 hover:text-blue-600 py-3 border-b border-gray-100"
                onClick={closeAllDropdowns}
              >
                Pricing
              </Link>

              <Link
                to="/who-we-are"
                className="text-2xl font-medium text-gray-800 hover:text-blue-600 py-3 border-b border-gray-100"
                onClick={closeAllDropdowns}
              >
                Who we are
              </Link>
            </div>
          </div>

          {/* Mobile Menu CTA - Fixed at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
            <Link
              to="/contact"
              className="block w-full bg-gradient-to-r from-blue-600 to-[#131e3D] text-white text-center py-4 rounded-lg font-medium text-lg shadow-lg"
              onClick={closeAllDropdowns}
            >
              Start Your Project
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
