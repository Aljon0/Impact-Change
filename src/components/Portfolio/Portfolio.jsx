import {
  ArrowRight,
  Building,
  File,
  FileText,
  Search,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

// Main Portfolio Overview Component
export const Portfolio = () => {
  const portfolioStats = [
    { label: "Projects Completed", value: "1,200+", icon: FileText },
    { label: "Funds Raised", value: "$2B+", icon: TrendingUp },
    { label: "Success Rate", value: "94%", icon: Star },
    { label: "Clients Served", value: "1,500+", icon: Users },
  ];

  const services = [
    {
      title: "Pitch Decks",
      description:
        "Investor-ready presentations that tell your story and secure funding",
      count: "400+",
      link: "/portfolio/pitch-decks",
      gradient: "from-blue-600 to-blue-800",
      icon: FileText,
    },
    {
      title: "Business Plans",
      description:
        "Comprehensive business plans with detailed financial projections",
      count: "300+",
      link: "/portfolio/business-plans",
      gradient: "from-blue-700 to-blue-900",
      icon: Building,
    },
    {
      title: "Market Research",
      description:
        "In-depth competitive analysis and market opportunity assessments",
      count: "500+",
      link: "/portfolio/market-research",
      gradient: "from-blue-800 to-blue-950",
      icon: Search,
    },
    {
      title: "One-Pagers",
      description:
        "High-impact investor summaries that capture attention quickly",
      count: "200+",
      link: "/portfolio/one-pagers",
      gradient: "from-blue-500 to-blue-700",
      icon: File,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Our <span className="text-blue-300">Portfolio</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Discover how we've helped founders scale their businesses with
              compelling pitch decks, comprehensive business plans, strategic
              market research, and high-impact one-pagers.
            </p>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-16 sm:w-20 h-16 sm:h-20 bg-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-24 sm:w-32 h-24 sm:h-32 bg-indigo-400/20 rounded-full animate-bounce"></div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 -mt-8 sm:-mt-12">
          {portfolioStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-xl p-4 sm:p-6 text-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Portfolio */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Explore Our Work
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our portfolio by service category to see real examples of our
            work and success stories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Link key={index} to={service.link} className="group">
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl bg-white hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2">
                <div
                  className={`h-40 sm:h-48 bg-gradient-to-br ${service.gradient} relative`}
                >
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative p-6 sm:p-8 h-full flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <service.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      <div className="text-white/80 text-base sm:text-lg font-semibold">
                        {service.count}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Animated elements */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-6 sm:w-8 h-6 sm:h-8 bg-white/10 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-3 sm:w-4 h-3 sm:h-4 bg-white/20 rounded-full"></div>
                </div>

                <div className="p-4 sm:p-6">
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold text-sm sm:text-base group-hover:text-blue-800 transition-colors">
                    View Portfolio{" "}
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-blue-200 text-lg sm:text-xl mb-6 sm:mb-8">
            Let's create something amazing together.
          </p>
          <Link
            to="/pricing"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-900 font-semibold rounded-lg sm:rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
          >
            Start Your Project{" "}
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
