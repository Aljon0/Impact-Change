import { ArrowLeft } from "lucide-react";

export const BusinessPlansPortfolio = () => {
  const businessPlans = [
    {
      id: 1,
      title: "Momentum Labs",
      industry: "Brand Strategy Consulting",
      funding: "$10M ARR Target",
      pages: "24 pages",
      timeline: "3 years",
      image: "/HomePage/BusinessPlan/MomentumLabs.png",
      description:
        "Strategic transformation plan for a 25-year creative boutique evolving into a scalable brand strategy powerhouse for technology companies.",
      highlights: [
        "Tiered product ecosystem",
        "Momentum Labs Flywheel model",
        "Applied narrative thinking focus",
      ],
    },
    {
      id: 2,
      title: "LEMME",
      industry: "Fashion & Streetwear",
      funding: "$500K Seed Round",
      pages: "24 pages",
      timeline: "15% equity",
      image: "/HomePage/BusinessPlan/Lemme.png",
      description:
        "Direct-to-consumer fashion brand creating collectible streetwear with playful nostalgia and sensory engagement for Gen Z consumers.",
      highlights: [
        "Limited-drop scarcity model",
        "Signature 'Drip Drop' scent branding",
        "20K+ TikTok followers organically",
      ],
    },
    {
      id: 3,
      title: "Chroma Shift",
      industry: "Interactive Footwear",
      funding: "$1.5M Seed Investment",
      pages: "14 pages",
      timeline: "3-5 years",
      image: "/HomePage/BusinessPlan/ChromaShift.png",
      description:
        "Revolutionary footwear brand with proprietary Chroma-Ink™ technology that changes color and patterns based on body heat and environment.",
      highlights: [
        "4.5M organic video views",
        "40K+ email sign-ups pre-launch",
        "Heat-reactive ink technology",
      ],
    },
    {
      id: 4,
      title: "Axiom Structures",
      industry: "Modular Construction",
      funding: "AUD $250K Seed",
      pages: "29 pages",
      timeline: "5 years",
      image: "/HomePage/BusinessPlan/AxiomStructures.png",
      description:
        "Intelligent deployable infrastructure company providing rapid, high-quality modular construction for humanitarian, tourism, and remote operations.",
      highlights: [
        "40% faster deployment technology",
        "80% reduction in construction waste",
        "$5M+ early commercial interest",
      ],
    },
    {
      id: 5,
      title: "BeautyBot",
      industry: "Beauty Tech SaaS",
      funding: "€3M Series A",
      pages: "22 pages",
      timeline: "€25M valuation",
      image: "/HomePage/BusinessPlan/BeautyBot.png",
      description:
        "AI-powered platform integrating salon management, product marketplace, and social community for beauty professionals worldwide.",
      highlights: [
        "250+ active salons",
        "8K+ active end-users",
        "Six-figure ARR achieved",
      ],
    },
    {
      id: 6,
      title: "Sentio Hotel",
      industry: "Eco-Luxury Wellness Resort",
      funding: "$65M Total Investment",
      pages: "14 pages",
      timeline: "15-18% IRR",
      image: "/HomePage/BusinessPlan/SentioHotel.png",
      description:
        "Premier eco-luxury wellness resort on a private 70-acre coastal site with exclusive access to protected natural reserve, targeting high-net-worth individuals seeking transformative wellness experiences.",
      highlights: [
        "$35M equity raise with $30M secured green-tech loan",
        "120-suite destination with 75% projected occupancy",
        "Integrated holistic wellness ecosystem",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <button className="inline-flex items-center text-blue-300 hover:text-white mb-4 sm:mb-6 transition-colors text-sm sm:text-base">
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Back to Portfolio
          </button>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Business Plans Portfolio
          </h1>
          <p className="text-blue-200 text-base sm:text-lg lg:text-xl max-w-3xl">
            Comprehensive business plans with detailed financial projections
            that have secured over $80M in funding across diverse industries.
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
                {/* Image Section - Left Side */}
                <div className="lg:w-1/3 relative overflow-hidden">
                  <div className="h-64 lg:h-full relative">
                    <img
                      src={plan.image}
                      alt={`${plan.title} Business Plan`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to gradient background if image fails to load
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "block";
                      }}
                    />
                    {/* Fallback gradient background */}
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 hidden"
                      style={{ display: "none" }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white p-6">
                          <h3 className="text-2xl font-bold mb-2">
                            {plan.title}
                          </h3>
                          <p className="text-blue-200">{plan.industry}</p>
                        </div>
                      </div>
                    </div>

                    {/* Overlay with basic info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-lg sm:text-xl font-bold mb-1">
                        {plan.title}
                      </h3>
                      <p className="text-blue-200 text-sm">{plan.industry}</p>
                    </div>
                  </div>
                </div>

                {/* Content Section - Right Side */}
                <div className="lg:w-2/3 p-4 sm:p-6 md:p-8 bg-white">
                  <div className="mb-4 sm:mb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="bg-blue-50 rounded-lg p-3 text-center">
                        <div className="text-xs sm:text-sm text-blue-600 font-medium mb-1">
                          Funding Target
                        </div>
                        <div className="text-sm sm:text-base font-bold text-gray-900">
                          {plan.funding}
                        </div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-3 text-center">
                        <div className="text-xs sm:text-sm text-green-600 font-medium mb-1">
                          Document Length
                        </div>
                        <div className="text-sm sm:text-base font-bold text-gray-900">
                          {plan.pages}
                        </div>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-3 text-center">
                        <div className="text-xs sm:text-sm text-purple-600 font-medium mb-1">
                          Timeline/ROI
                        </div>
                        <div className="text-sm sm:text-base font-bold text-gray-900">
                          {plan.timeline}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  <div>
                    <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                      Key Highlights:
                    </h4>
                    <div className="space-y-2 sm:space-y-3">
                      {plan.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-start text-gray-700 text-sm sm:text-base"
                        >
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{highlight}</span>
                        </div>
                      ))}
                    </div>
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

export default BusinessPlansPortfolio;
