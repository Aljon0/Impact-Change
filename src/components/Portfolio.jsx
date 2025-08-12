import {
  ArrowLeft,
  ArrowRight,
  Building,
  FileText,
  Search,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import React, { useState } from "react";
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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-blue-300">Portfolio</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Discover how we've helped founders scale their businesses with
              compelling pitch decks, comprehensive business plans, and
              strategic market research.
            </p>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-400/20 rounded-full animate-bounce"></div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-12">
          {portfolioStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl p-6 text-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Portfolio */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our portfolio by service category to see real examples of our
            work and success stories.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} to={service.link} className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div
                  className={`h-48 bg-gradient-to-br ${service.gradient} relative`}
                >
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative p-8 h-full flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <service.icon className="w-10 h-10 text-white" />
                      <div className="text-white/80 text-lg font-semibold">
                        {service.count}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Animated elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-4 h-4 bg-white/20 rounded-full"></div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors">
                    View Portfolio{" "}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-blue-200 text-xl mb-8">
            Let's create something amazing together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
          >
            Start Your Project <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

// Pitch Decks Portfolio Component
export const PitchDecksPortfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "saas", label: "SaaS" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "fintech", label: "FinTech" },
    { id: "healthtech", label: "HealthTech" },
  ];

  const pitchDecks = [
    {
      id: 1,
      title: "BaselineLabs",
      subtitle: "AI-Powered Basketball Experience",
      category: "saas",
      raised: "$2.5M",
      stage: "Seed Round",
      industry: "Sports Tech",
      image:
        "https://via.placeholder.com/400x300/1e3a8a/ffffff?text=BaselineLabs",
      description:
        "Interactive AI-powered basketball training platform with real-time analytics.",
    },
    {
      id: 2,
      title: "BeautyBot",
      subtitle: "Salon Booking Software",
      category: "saas",
      raised: "$1.8M",
      stage: "Pre-Series A",
      industry: "Beauty Tech",
      image: "https://via.placeholder.com/400x300/1e40af/ffffff?text=BeautyBot",
      description:
        "Comprehensive salon management and booking platform for beauty professionals.",
    },
    {
      id: 3,
      title: "ChromaShift",
      subtitle: "Color Management Solutions",
      category: "saas",
      raised: "$3.2M",
      stage: "Series A",
      industry: "Design Tech",
      image:
        "https://via.placeholder.com/400x300/1d4ed8/ffffff?text=ChromaShift",
      description:
        "Advanced color management and workflow solutions for creative professionals.",
    },
    {
      id: 4,
      title: "FinanceFlow",
      subtitle: "SMB Financial Platform",
      category: "fintech",
      raised: "$5.1M",
      stage: "Series A",
      industry: "FinTech",
      image:
        "https://via.placeholder.com/400x300/2563eb/ffffff?text=FinanceFlow",
      description:
        "All-in-one financial management platform for small and medium businesses.",
    },
    {
      id: 5,
      title: "HealthTrack Pro",
      subtitle: "Patient Management System",
      category: "healthtech",
      raised: "$4.3M",
      stage: "Series A",
      industry: "HealthTech",
      image:
        "https://via.placeholder.com/400x300/3b82f6/ffffff?text=HealthTrack",
      description:
        "Comprehensive patient management and telehealth platform for clinics.",
    },
    {
      id: 6,
      title: "ShopSmart AI",
      subtitle: "E-commerce Optimization",
      category: "ecommerce",
      raised: "$2.9M",
      stage: "Seed Round",
      industry: "E-commerce",
      image: "https://via.placeholder.com/400x300/60a5fa/ffffff?text=ShopSmart",
      description:
        "AI-powered e-commerce optimization platform for online retailers.",
    },
  ];

  const filteredDecks =
    selectedCategory === "all"
      ? pitchDecks
      : pitchDecks.filter((deck) => deck.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link
            to="/portfolio"
            className="inline-flex items-center text-blue-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pitch Deck Portfolio
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl">
            Compelling presentations that have helped startups raise over $500M
            in funding across various industries.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-blue-600 hover:bg-blue-50 shadow-md"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDecks.map((deck) => (
            <div key={deck.id} className="group cursor-pointer">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-48 bg-gradient-to-br from-blue-600 to-blue-800">
                  <img
                    src={deck.image}
                    alt={deck.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative p-6 h-full flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div className="bg-white/20 px-3 py-1 rounded-lg text-white text-sm font-semibold">
                        {deck.industry}
                      </div>
                      <div className="text-right">
                        <div className="text-white font-bold text-lg">
                          {deck.raised}
                        </div>
                        <div className="text-blue-200 text-sm">
                          {deck.stage}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {deck.title}
                      </h3>
                      <p className="text-blue-200">{deck.subtitle}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{deck.description}</p>
                  <div className="flex items-center text-blue-600 font-semibold">
                    View Case Study <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Business Plans Portfolio Component
export const BusinessPlansPortfolio = () => {
  const businessPlans = [
    {
      id: 1,
      title: "TechStart Solutions",
      industry: "SaaS Platform",
      funding: "$3.5M Series A",
      pages: "45 pages",
      timeline: "3 weeks",
      description:
        "Comprehensive business plan for a B2B SaaS platform specializing in workflow automation.",
      highlights: [
        "5-year financial projections",
        "Market analysis",
        "Go-to-market strategy",
      ],
    },
    {
      id: 2,
      title: "GreenTech Innovations",
      industry: "Clean Energy",
      funding: "$8.2M Series B",
      pages: "62 pages",
      timeline: "4 weeks",
      description:
        "Detailed business plan for renewable energy storage solutions targeting commercial markets.",
      highlights: [
        "Regulatory compliance framework",
        "Technology roadmap",
        "Partnership strategy",
      ],
    },
    {
      id: 3,
      title: "HealthCare Connect",
      industry: "HealthTech",
      funding: "$12M Series C",
      pages: "78 pages",
      timeline: "6 weeks",
      description:
        "Strategic business plan for telemedicine platform expanding to international markets.",
      highlights: [
        "International expansion plan",
        "Competitive analysis",
        "Revenue projections",
      ],
    },
    {
      id: 4,
      title: "EduTech Future",
      industry: "EdTech",
      funding: "$2.1M Seed",
      pages: "38 pages",
      timeline: "2 weeks",
      description:
        "Business plan for AI-powered educational platform targeting K-12 schools.",
      highlights: [
        "Market sizing",
        "Customer acquisition",
        "Product development roadmap",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link
            to="/portfolio"
            className="inline-flex items-center text-blue-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Business Plans Portfolio
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl">
            Comprehensive business plans with detailed financial projections
            that have secured over $800M in funding.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Portfolio Items */}
        <div className="space-y-8">
          {businessPlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                    <p className="text-blue-200">{plan.industry}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-blue-200">Funding Raised:</span>
                      <span className="font-semibold">{plan.funding}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-200">Document Length:</span>
                      <span className="font-semibold">{plan.pages}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-200">Timeline:</span>
                      <span className="font-semibold">{plan.timeline}</span>
                    </div>
                  </div>
                </div>
                <div className="lg:w-2/3 p-8">
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Key Highlights:
                    </h4>
                    <ul className="space-y-2">
                      {plan.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-600"
                        >
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300">
                    View Case Study <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Market Research Portfolio Component
export const MarketResearchPortfolio = () => {
  const researchProjects = [
    {
      id: 1,
      title: "FinTech Market Analysis 2024",
      client: "Digital Banking Startup",
      scope: "Global Market Research",
      duration: "6 weeks",
      pages: "127 pages",
      keyFindings: [
        "Market size: $245B by 2026",
        "42% growth in mobile banking",
        "Key opportunity in Gen Z segment",
      ],
      deliverables: [
        "Market size analysis",
        "Competitive landscape",
        "Customer segmentation",
        "Growth opportunities",
      ],
    },
    {
      id: 2,
      title: "Sustainable Fashion Industry Report",
      client: "E-commerce Platform",
      scope: "North American Market",
      duration: "4 weeks",
      pages: "89 pages",
      keyFindings: [
        "73% of consumers prefer sustainable brands",
        "$15B market opportunity",
        "Premium pricing accepted by 68%",
      ],
      deliverables: [
        "Consumer behavior analysis",
        "Brand positioning",
        "Pricing strategy",
        "Market entry plan",
      ],
    },
    {
      id: 3,
      title: "AI in Healthcare Market Study",
      client: "MedTech Startup",
      scope: "US Healthcare Market",
      duration: "8 weeks",
      pages: "156 pages",
      keyFindings: [
        "$148B market by 2030",
        "Diagnostic AI leading growth",
        "Regulatory landscape evolving",
      ],
      deliverables: [
        "Regulatory analysis",
        "Technology trends",
        "Investment patterns",
        "Partnership opportunities",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link
            to="/portfolio"
            className="inline-flex items-center text-blue-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Market Research Portfolio
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl">
            In-depth market analyses and competitive intelligence that inform
            strategic business decisions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {researchProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-blue-200 mb-4">{project.client}</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-blue-300">Scope:</span>
                    <div className="font-semibold">{project.scope}</div>
                  </div>
                  <div>
                    <span className="text-blue-300">Duration:</span>
                    <div className="font-semibold">{project.duration}</div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">
                      Report Length
                    </h4>
                    <span className="text-blue-600 font-semibold">
                      {project.pages}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Key Findings
                  </h4>
                  <ul className="space-y-2">
                    {project.keyFindings.map((finding, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        {finding}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Deliverables
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.deliverables.map((deliverable, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {deliverable}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full flex items-center justify-center px-4 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300">
                  View Full Report <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
