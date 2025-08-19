import { ArrowLeft, ArrowRight, Link } from "lucide-react";

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Link
            to="/portfolio"
            className="inline-flex items-center text-blue-300 hover:text-white mb-4 sm:mb-6 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Back to Portfolio
          </Link>
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
              className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-xl overflow-hidden hover:shadow-lg sm:hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-4 sm:p-6 text-white">
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                  {project.title}
                </h3>
                <p className="text-blue-200 text-xs sm:text-sm mb-3 sm:mb-4">
                  {project.client}
                </p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
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

              <div className="p-4 sm:p-6">
                <div className="mb-4 sm:mb-6">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <h4 className="font-semibold text-gray-900 text-xs sm:text-sm">
                      Report Length
                    </h4>
                    <span className="text-blue-600 font-semibold text-xs sm:text-sm">
                      {project.pages}
                    </span>
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
                        className="px-2 py-0.5 sm:px-3 sm:py-1 bg-blue-100 text-blue-800 text-xxs sm:text-xs rounded-full"
                      >
                        {deliverable}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full flex items-center justify-center px-3 py-2 sm:px-4 sm:py-3 bg-blue-600 text-white font-semibold rounded-lg sm:rounded-xl hover:bg-blue-700 transition-all duration-300 text-xs sm:text-sm">
                  View Full Report{" "}
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketResearchPortfolio;
