import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const MarketResearchPortfolio = () => {
  const researchProjects = [
    {
      id: 1,
      title: "Harnessing AI to Unlock the 8.5 Trillion Wellness Economy",
      client: "Wellness Technology Research",
      scope: "Global Wellness Market",
      duration: "8 weeks",
      keyFindings: [
        "Market size: $8.5T by 2027",
        "8.6% annual growth rate",
        "AI-driven personalization key",
      ],
      deliverables: [
        "Economic impact analysis",
        "AI applications mapping",
        "Ethical considerations",
        "Future trend predictions",
      ],
      image: "/HomePage/MarketResearch/AiWellness.png",
      fallbackGradient: "from-purple-500 to-blue-600",
    },
    {
      id: 2,
      title: "PetPal Mobile Spa Market Research",
      client: "Mobile Pet Care Startup",
      scope: "Los Angeles Market",
      duration: "4 weeks",
      keyFindings: [
        "TAM: $450M annually",
        "SAM: $135M target market",
        "5% realistic market share",
      ],
      deliverables: [
        "TAM/SAM/SOM analysis",
        "Competitive landscape",
        "SWOT analysis",
        "Market positioning",
      ],
      image: "/HomePage/MarketResearch/PetPal.png",
      fallbackGradient: "from-green-500 to-blue-600",
    },
    {
      id: 3,
      title: "The Journey of Luxury Chocolate: Cacao to Couture",
      client: "Premium Food & Beverage",
      scope: "Global Luxury Market",
      duration: "6 weeks",
      keyFindings: [
        "54% prefer premium quality",
        "Exotic flavors trending upward",
        "Sustainability drives 73% trust",
      ],
      deliverables: [
        "Historical market analysis",
        "Consumer behavior study",
        "Sustainability framework",
        "Innovation opportunities",
      ],
      image: "/HomePage/MarketResearch/LuxuryChocolate.png",
      fallbackGradient: "from-amber-600 to-orange-700",
    },
  ];

  const handleBackClick = () => {
    // Replace with your navigation logic
    console.log("Navigate back to portfolio");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <button
            onClick={handleBackClick}
            className="inline-flex items-center text-blue-300 hover:text-white mb-4 sm:mb-6 transition-colors text-sm sm:text-base cursor-pointer"
          >
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            <Link to="/portfolio">Back to Portfolio</Link>
          </button>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Market Research Portfolio
          </h1>
          <p className="text-blue-200 text-base sm:text-lg lg:text-xl max-w-3xl">
            In-depth market analyses and competitive intelligence that inform
            strategic business decisions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {researchProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-xl overflow-hidden hover:shadow-lg sm:hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 group"
            >
              {/* Image Section */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.fallbackGradient} opacity-90`}
                >
                  {/* Decorative pattern overlay */}
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute top-4 left-4 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/15 rounded-full blur-lg"></div>
                </div>

                <img
                  src={project.image}
                  alt={project.title}
                  className="relative z-10 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onLoad={(e) => {
                    // Hide fallback when image loads successfully
                    const fallbackDiv = e.target.previousElementSibling;
                    if (fallbackDiv) fallbackDiv.style.display = "none";
                  }}
                  onError={(e) => {
                    // Keep fallback visible if image fails to load
                    e.target.style.display = "none";
                  }}
                />

                {/* Client info overlay */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-20">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {project.client}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-gray-900">
                  {project.title}
                </h3>

                <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm mb-4 sm:mb-6">
                  <div>
                    <span className="text-gray-500">Scope:</span>
                    <div className="font-semibold text-gray-900">
                      {project.scope}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-500">Duration:</span>
                    <div className="font-semibold text-gray-900">
                      {project.duration}
                    </div>
                  </div>
                </div>

                <div className="mb-4 sm:mb-6">
                  <h4 className="font-semibold text-gray-900 text-xs sm:text-sm mb-2 sm:mb-3">
                    Key Findings
                  </h4>
                  <ul className="space-y-1 sm:space-y-2">
                    {project.keyFindings.map((finding, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-gray-600 text-xs sm:text-sm"
                      >
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-600 rounded-full mt-1.5 sm:mt-2 mr-1.5 sm:mr-2 flex-shrink-0"></div>
                        {finding}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4 sm:mb-6">
                  <h4 className="font-semibold text-gray-900 text-xs sm:text-sm mb-2 sm:mb-3">
                    Deliverables
                  </h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.deliverables.map((deliverable, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 sm:px-3 sm:py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {deliverable}
                      </span>
                    ))}
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

export default MarketResearchPortfolio;
