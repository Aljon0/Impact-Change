import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [dropdowns, setDropdowns] = useState({
    resources: false,
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
      resources: false,
      services: false,
      [dropdown]: !prev[dropdown],
    }));
  };

  const closeAllDropdowns = () => {
    setDropdowns({
      resources: false,
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

  const DropdownItem = ({ to, href, children, onClick, description }) => (
    <div className="relative group">
      {to ? (
        <Link
          to={to}
          className="block px-6 py-3 text-gray-700 hover:text-blue-600 transition-all duration-200 ease-out hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 relative overflow-hidden group"
          onClick={onClick}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-[#131e3D]/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
          <div className="relative z-10">
            <div className="font-medium">{children}</div>
            {description && (
              <div className="text-xs text-gray-500 mt-1">{description}</div>
            )}
          </div>
        </Link>
      ) : (
        <a
          href={href}
          className="block px-6 py-3 text-gray-700 hover:text-blue-600 transition-all duration-200 ease-out hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
          <div className="relative z-10">
            <div className="font-medium">{children}</div>
            {description && (
              <div className="text-xs text-gray-500 mt-1">{description}</div>
            )}
          </div>
        </a>
      )}
    </div>
  );

  const DropdownSection = ({ title, children }) => (
    <div className="px-6 py-2 border-b border-gray-100 last:border-b-0">
      <h3 className="text-sm font-semibold text-gray-900 mb-2">{title}</h3>
      <div className="space-y-1">{children}</div>
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
                  <AnimatedDropdown isOpen={dropdowns.services} width="w-80">
                    <DropdownItem
                      to="/services/market-research"
                      onClick={closeAllDropdowns}
                      description="In-depth analysis & insights"
                    >
                      Market Research
                    </DropdownItem>
                    <DropdownItem
                      to="/services/pitch-decks"
                      onClick={closeAllDropdowns}
                      description="Compelling investor presentations"
                    >
                      Pitch Deck Writing
                    </DropdownItem>
                    <DropdownItem
                      to="/services/linkedin-profile"
                      onClick={closeAllDropdowns}
                      description="Professional brand building"
                    >
                      LinkedIn Profile Optimization
                    </DropdownItem>
                    <DropdownItem
                      to="/services/one-pager"
                      onClick={closeAllDropdowns}
                      description="Concise investor summary"
                    >
                      Investor One-Pager
                    </DropdownItem>
                    <DropdownItem
                      to="/services/business-plan"
                      onClick={closeAllDropdowns}
                      description="Complete 5-year forecast"
                    >
                      Business Plan Writing
                    </DropdownItem>
                    <DropdownItem
                      to="/services/advisor-equity"
                      onClick={closeAllDropdowns}
                      description="Fundraising & scaling support"
                    >
                      Investor Equity
                    </DropdownItem>
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
                  <AnimatedDropdown isOpen={dropdowns.resources} width="w-80">
                    <DropdownSection title="Work">
                      <DropdownItem to="/portfolio" onClick={closeAllDropdowns}>
                        Portfolio
                      </DropdownItem>
                    </DropdownSection>

                    <DropdownSection title="Reviews">
                      <DropdownItem to="/reviews" onClick={closeAllDropdowns}>
                        Testimonials
                      </DropdownItem>
                    </DropdownSection>

                    <DropdownSection title="Process & Pricing">
                      <DropdownItem to="/Process" onClick={closeAllDropdowns}>
                        Process
                      </DropdownItem>
                      <DropdownItem to="/pricing" onClick={closeAllDropdowns}>
                        Pricing
                      </DropdownItem>
                    </DropdownSection>

                    <DropdownSection title="Investment">
                      <DropdownItem to="/investing" onClick={closeAllDropdowns}>
                        Investing
                      </DropdownItem>
                    </DropdownSection>
                  </AnimatedDropdown>
                </div>
              </div>
            </nav>

            {/* Start Your Project Button */}
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
            {(dropdowns.resources || dropdowns.services) && !mobileMenuOpen && (
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
                to="/who-we-are"
                className="text-2xl font-medium text-gray-800 hover:text-blue-600 py-3 border-b border-gray-100"
                onClick={closeAllDropdowns}
              >
                Who we are
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
                      to="/services/market-research"
                      className="block text-xl text-gray-700 hover:text-blue-600"
                      onClick={closeAllDropdowns}
                    >
                      Market Research
                    </Link>
                    <Link
                      to="/services/pitch-decks"
                      className="block text-xl text-gray-700 hover:text-blue-600"
                      onClick={closeAllDropdowns}
                    >
                      Pitch Deck Writing
                    </Link>
                    <Link
                      to="/services/linkedin-profile"
                      className="block text-xl text-gray-700 hover:text-blue-600"
                      onClick={closeAllDropdowns}
                    >
                      LinkedIn Profile Optimization
                    </Link>
                    <Link
                      to="/services/one-pager"
                      className="block text-xl text-gray-700 hover:text-blue-600"
                      onClick={closeAllDropdowns}
                    >
                      Investor One-Pager
                    </Link>
                    <Link
                      to="/services/business-plan"
                      className="block text-xl text-gray-700 hover:text-blue-600"
                      onClick={closeAllDropdowns}
                    >
                      Business Plan Writing
                    </Link>
                    <Link
                      to="/services/advisor-equity"
                      className="block text-xl text-gray-700 hover:text-blue-600"
                      onClick={closeAllDropdowns}
                    >
                      Investor Equity
                    </Link>
                  </div>
                )}
              </div>

              <div className="border-b border-gray-100 pb-3">
                <button
                  onClick={() => toggleDropdown("resources")}
                  className="flex items-center justify-between w-full text-2xl font-medium text-gray-800 hover:text-blue-600 py-3"
                >
                  Resources
                  <DropdownArrow isOpen={dropdowns.resources} />
                </button>
                {dropdowns.resources && (
                  <div className="pl-4 mt-2 space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        Work
                      </h4>
                      <div className="space-y-2 pl-2">
                        <Link
                          to="/portfolio"
                          className="block text-lg text-gray-700 hover:text-blue-600"
                          onClick={closeAllDropdowns}
                        >
                          Portfolio
                        </Link>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        Reviews
                      </h4>
                      <div className="pl-2">
                        <Link
                          to="/reviews"
                          className="block text-lg text-gray-700 hover:text-blue-600"
                          onClick={closeAllDropdowns}
                        >
                          Testimonials
                        </Link>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        Process & Pricing
                      </h4>
                      <div className="space-y-2 pl-2">
                        <Link
                          to="/Process"
                          className="block text-lg text-gray-700 hover:text-blue-600"
                          onClick={closeAllDropdowns}
                        >
                          Process
                        </Link>
                        <Link
                          to="/pricing"
                          className="block text-lg text-gray-700 hover:text-blue-600"
                          onClick={closeAllDropdowns}
                        >
                          Pricing
                        </Link>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        Investment
                      </h4>
                      <div className="pl-2">
                        <Link
                          to="/investing"
                          className="block text-lg text-gray-700 hover:text-blue-600"
                          onClick={closeAllDropdowns}
                        >
                          Investing
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
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
