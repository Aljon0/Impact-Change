import { ArrowLeft, ArrowRight, Link } from "lucide-react";

export const OnePagerPortfolio = () => {
  const onePagers = [
    {
      id: 1,
      title: "Cuddle & Co.",
      industry: "Consumer Products",
      funding: "$750K Seed",
      pages: "1 page",
      timeline: "1 week",
      description:
        "High-impact investor one-pager for a premium baby products startup focusing on sustainable materials.",
      highlights: [
        "Market opportunity analysis",
        "Financial projections summary",
        "Competitive differentiation",
      ],
    },
    {
      id: 2,
      title: "FinanceFlow",
      industry: "FinTech",
      funding: "$2.3M Pre-Series A",
      pages: "1 page",
      timeline: "3 days",
      description:
        "Compelling one-pager for a digital banking platform targeting SME businesses.",
      highlights: [
        "Revenue model visualization",
        "User growth metrics",
        "Investment ask breakdown",
      ],
    },
    {
      id: 3,
      title: "AgroTech Solutions",
      industry: "AgriTech",
      funding: "$4.1M Series A",
      pages: "1 page",
      timeline: "5 days",
      description:
        "Professional one-pager for precision agriculture platform using IoT and AI technologies.",
      highlights: [
        "Technology roadmap",
        "Market size analysis",
        "Go-to-market strategy",
      ],
    },
    {
      id: 4,
      title: "MediConnect",
      industry: "HealthTech",
      funding: "$1.8M Seed",
      pages: "1 page",
      timeline: "4 days",
      description:
        "Concise investor summary for telemedicine platform connecting rural patients with specialists.",
      highlights: [
        "Problem-solution fit",
        "Traction metrics",
        "Team credentials",
      ],
    },
    {
      id: 5,
      title: "EcoLogistics",
      industry: "Supply Chain",
      funding: "$3.7M Series A",
      pages: "1 page",
      timeline: "1 week",
      description:
        "Strategic one-pager for sustainable logistics platform reducing carbon footprint in shipping.",
      highlights: [
        "Environmental impact",
        "Cost savings analysis",
        "Partnership opportunities",
      ],
    },
    {
      id: 6,
      title: "CloudSecure",
      industry: "Cybersecurity",
      funding: "$5.2M Series A",
      pages: "1 page",
      timeline: "3 days",
      description:
        "Technical one-pager for enterprise cybersecurity solution targeting mid-market companies.",
      highlights: [
        "Security architecture",
        "Customer acquisition",
        "Competitive analysis",
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
            One-Pager Portfolio
          </h1>
          <p className="text-blue-200 text-base sm:text-lg lg:text-xl max-w-3xl">
            High-impact investor one-pagers that capture attention and secure
            meetings. Over 200+ one-pagers have helped startups raise $500M+.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Portfolio Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {onePagers.map((onePager) => (
            <div
              key={onePager.id}
              className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-xl overflow-hidden hover:shadow-lg sm:hover:shadow-2xl transition-all duration-500"
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-4 sm:p-6 text-white">
                <div className="mb-4">
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                    {onePager.title}
                  </h3>
                  <p className="text-blue-200 text-sm sm:text-base">
                    {onePager.industry}
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
                  <div>
                    <span className="text-blue-200 block">Funding:</span>
                    <span className="font-semibold">{onePager.funding}</span>
                  </div>
                  <div>
                    <span className="text-blue-200 block">Format:</span>
                    <span className="font-semibold">{onePager.pages}</span>
                  </div>
                  <div>
                    <span className="text-blue-200 block">Timeline:</span>
                    <span className="font-semibold">{onePager.timeline}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6">
                  {onePager.description}
                </p>
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2 sm:mb-3">
                    Key Elements:
                  </h4>
                  <ul className="space-y-1 sm:space-y-2">
                    {onePager.highlights.map((highlight, idx) => (
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
                  View Example{" "}
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

export default OnePagerPortfolio;
