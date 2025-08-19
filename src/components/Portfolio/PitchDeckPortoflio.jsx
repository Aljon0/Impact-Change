import { ArrowLeft, ArrowRight, Link } from "lucide-react";
import { useState } from "react";

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Link
            to="/portfolio"
            className="inline-flex items-center text-blue-300 hover:text-white mb-4 sm:mb-6 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Back to Portfolio
          </Link>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Pitch Deck Portfolio
          </h1>
          <p className="text-blue-200 text-base sm:text-lg lg:text-xl max-w-3xl">
            Compelling presentations that have helped startups raise over $500M
            in funding across various industries.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Category Filter */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-xs sm:text-sm ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white shadow-md sm:shadow-lg"
                    : "bg-white text-blue-600 hover:bg-blue-50 shadow-sm sm:shadow-md"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {filteredDecks.map((deck) => (
            <div key={deck.id} className="group cursor-pointer">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-xl overflow-hidden hover:shadow-lg sm:hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2">
                <div className="relative h-40 sm:h-48 bg-gradient-to-br from-blue-600 to-blue-800">
                  <img
                    src={deck.image}
                    alt={deck.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative p-4 sm:p-6 h-full flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div className="bg-white/20 px-2 py-1 rounded-md sm:rounded-lg text-white text-xs sm:text-sm font-semibold">
                        {deck.industry}
                      </div>
                      <div className="text-right">
                        <div className="text-white font-bold text-sm sm:text-base md:text-lg">
                          {deck.raised}
                        </div>
                        <div className="text-blue-200 text-xs sm:text-sm">
                          {deck.stage}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                        {deck.title}
                      </h3>
                      <p className="text-blue-200 text-sm sm:text-base">
                        {deck.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                    {deck.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold text-xs sm:text-sm">
                    View Case Study{" "}
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
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

export default PitchDecksPortfolio;
