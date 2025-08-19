import { ArrowLeft, ArrowRight, Link } from "lucide-react";

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Link
            to="/portfolio"
            className="inline-flex items-center text-blue-300 hover:text-white mb-4 sm:mb-6 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Back to Portfolio
          </Link>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Business Plans Portfolio
          </h1>
          <p className="text-blue-200 text-base sm:text-lg lg:text-xl max-w-3xl">
            Comprehensive business plans with detailed financial projections
            that have secured over $800M in funding.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Portfolio Items */}
        <div className="space-y-5 sm:space-y-6 md:space-y-8">
          {businessPlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-xl overflow-hidden hover:shadow-lg sm:hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 bg-gradient-to-br from-blue-600 to-blue-800 p-4 sm:p-6 md:p-8 text-white">
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">
                      {plan.title}
                    </h3>
                    <p className="text-blue-200 text-sm sm:text-base">
                      {plan.industry}
                    </p>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-blue-200">Funding Raised:</span>
                      <span className="font-semibold">{plan.funding}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-blue-200">Document Length:</span>
                      <span className="font-semibold">{plan.pages}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-blue-200">Timeline:</span>
                      <span className="font-semibold">{plan.timeline}</span>
                    </div>
                  </div>
                </div>
                <div className="lg:w-2/3 p-4 sm:p-6 md:p-8">
                  <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6">
                    {plan.description}
                  </p>
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                      Key Highlights:
                    </h4>
                    <ul className="space-y-1 sm:space-y-2">
                      {plan.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-600 text-xs sm:text-sm"
                        >
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full mr-2 sm:mr-3"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white font-semibold rounded-lg sm:rounded-xl hover:bg-blue-700 transition-all duration-300 text-xs sm:text-sm">
                    View Case Study{" "}
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
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

export default BusinessPlansPortfolio;
