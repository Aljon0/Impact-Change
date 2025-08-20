import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
export const OnePagerPortfolio = () => {
  const onePagers = [
    {
      id: 1,
      title: "BaseLineLabs",
      industry: "Sports Tech",
      funding: "Seeking Investment",
      pages: "1 page",
      timeline: "Interactive AI-Powered Basketball Experience",
      description:
        "The first interactive AI-powered basketball experience targeting 18-34 demographic who prefer activity-led social outings.",
      highlights: [
        "Multiple revenue streams business model",
        "Industry-leading team with proven track record",
        "Premium venue blending gamified basketball with advanced technology",
      ],
      image: "/HomePage/OnePager/BaseLineLabs.jpg",
    },
    {
      id: 2,
      title: "ChromaShift",
      industry: "Fashion Tech",
      funding: "$1.5M Seed Round",
      pages: "1 page",
      timeline: "Dynamic Sneakers That Come To Life",
      description:
        "Revolutionary sneakers with proprietary heat-reactive Chroma-Ink™ technology that transforms with body heat and environment.",
      highlights: [
        "Shovel-ready project with permits approved",
        "Strong returns: 15% IRR with early dividends",
        "De-risked investment with secured funding",
      ],
      image: "/HomePage/OnePager/ChromaShift.jpg",
    },
    {
      id: 3,
      title: "Cuddle & Co.",
      industry: "Consumer Products",
      funding: "$750K Seed",
      pages: "1 page",
      timeline: "Premium Sustainable Children's Sleepwear",
      description:
        "Premium, sustainable children's pajamas using TENCEL, Smartcel, and Seacell fabrics for luxury comfort and sustainability.",
      highlights: [
        "Market opportunity: $5.2B kids' pajamas market",
        "Ethical craftsmanship with high-quality materials",
        "DTC model for higher margins and customer retention",
      ],
      image: "/HomePage/OnePager/Cuddle.jpg",
    },
    {
      id: 4,
      title: "ElevateX",
      industry: "Event Tech",
      funding: "€2 Million",
      pages: "1 page",
      timeline: "Blockchain-Driven Event Management",
      description:
        "Comprehensive blockchain-driven event management platform integrating ticketing, catering, payments, and analytics.",
      highlights: [
        "100,000+ transactions processed",
        "All-in-one platform for seamless event experience",
        "Real-time data dashboards for optimization",
      ],
      image: "/HomePage/OnePager/Elevatex.jpg",
    },
    {
      id: 5,
      title: "FutureMind",
      industry: "EdTech",
      funding: "Seeking Investment",
      pages: "1 page",
      timeline: "AI Education Platform for Students",
      description:
        "Educational platform equipping students aged 12-17 with essential AI skills through comprehensive curriculum and hands-on learning.",
      highlights: [
        "Complete AI literacy curriculum",
        "Successfully implemented in multiple schools globally",
        "Tiered pricing model: $89-$199 per student",
      ],
      image: "/HomePage/OnePager/FutureMind.jpg",
    },
    {
      id: 6,
      title: "NorthStar Pathways",
      industry: "Mental Health Tech",
      funding: "$1 Million SAFE",
      pages: "1 page",
      timeline: "Virtual Resilience Programs for Teens",
      description:
        "Accessible virtual resilience programs helping teens navigate modern-day academic and social pressures through skill-based modules.",
      highlights: [
        "1,800+ live coaching sessions delivered",
        "$750K annual recurring revenue",
        "40% average month-over-month user growth",
      ],
      image: "/HomePage/OnePager/NorthStar.jpg",
    },
    {
      id: 7,
      title: "Sentio Hotel",
      industry: "Hospitality & Real Estate",
      funding: "Premier Investment Opportunity",
      pages: "1 page",
      timeline: "High-End Wellness Tourism",
      description:
        "Premier investment in high-end wellness tourism with 70-acre private coastline site and exclusive beach access.",
      highlights: [
        "Prime location with protected natural reserve",
        "$65M total project cost with strong returns",
        "Global wellness tourism market: $1.3T by 2027",
      ],
      image: "/HomePage/OnePager/SentioHotel.jpg",
    },
    {
      id: 8,
      title: "Solara Spirits",
      industry: "Premium Beverages",
      funding: "$450,000",
      pages: "1 page",
      timeline: "Single-Origin Fruit Liqueurs",
      description:
        "World's first single-origin fruit liqueurs pioneering the premium 'farm-to-bottle' spirits category with award-winning recognition.",
      highlights: [
        "21% ABV super-premium liqueurs in untapped $210B market",
        "Proven traction: $320K total sales, 75% bar/restaurant sales",
        "Award-winning brand recognition across multiple countries",
      ],
      image: "/HomePage/OnePager/SolaraSpirits.jpg",
    },
    {
      id: 9,
      title: "VertexOS",
      industry: "Sports Venue Tech",
      funding: "$750K",
      pages: "1 page",
      timeline: "Automated Sports Venues Operating System",
      description:
        "Purpose-built software for sports venues with unified platform for booking, management & automation, plus proprietary access control hardware.",
      highlights: [
        "2.6M bookings processed across 400K users",
        "650% yearly revenue growth with $400K+ platform revenue",
        "Ready-to-hire engineering talent and hardware team",
      ],
      image: "/HomePage/OnePager/VertexOS.jpg",
    },
    {
      id: 10,
      title: "Axiom",
      industry: "Technology",
      funding: "Seeking Investment",
      pages: "1 page",
      timeline: "Next-Generation Platform",
      description:
        "Innovative technology platform focusing on next-generation solutions for modern business challenges.",
      highlights: [
        "Cutting-edge technology stack",
        "Scalable business model",
        "Strong market positioning",
      ],
      image: "/HomePage/OnePager/Axiom.jpg",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {onePagers.map((onePager) => (
            <div
              key={onePager.id}
              className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-xl overflow-hidden hover:shadow-lg sm:hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Background Section */}
              <div
                className="relative h-48 sm:h-56 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${onePager.image})`,
                }}
              >
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                    {onePager.title}
                  </h3>
                  <p className="text-gray-200 text-sm sm:text-base mb-2">
                    {onePager.industry}
                  </p>
                  <p className="text-gray-300 text-xs sm:text-sm font-medium">
                    {onePager.timeline}
                  </p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm mb-4">
                  <div>
                    <span className="text-gray-500 block">Funding:</span>
                    <span className="font-semibold text-gray-900">
                      {onePager.funding}
                    </span>
                  </div>
                  <div></div>
                </div>

                <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
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
                        className="flex items-start text-gray-600 text-xs sm:text-sm"
                      >
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full mr-2 sm:mr-3 mt-1.5 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnePagerPortfolio;
