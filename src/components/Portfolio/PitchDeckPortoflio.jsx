import { ArrowLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Enhanced LazyImage component with better loading states and intersection observer
const LazyImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px", // Start loading 50px before coming into view
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div ref={imgRef} className={`${className} relative overflow-hidden`}>
      {/* Skeleton loader */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer"></div>
        </div>
      )}

      {/* Actual image */}
      {isInView && (
        <>
          {hasError ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
              <div className="text-center">
                <div className="text-2xl mb-2">📷</div>
                <div className="text-sm">Image unavailable</div>
              </div>
            </div>
          ) : (
            <img
              src={src}
              alt={alt}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
              onLoad={handleLoad}
              onError={handleError}
              loading="lazy"
            />
          )}
        </>
      )}
    </div>
  );
};

export const PitchDecksPortfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isFiltering, setIsFiltering] = useState(false);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "saas", label: "SaaS" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "fintech", label: "FinTech" },
    { id: "healthtech", label: "HealthTech" },
    { id: "hospitality", label: "Hospitality" },
    { id: "fashion", label: "Fashion" },
    { id: "food", label: "Food & Beverage" },
  ];

  const pitchDecks = [
    {
      id: 1,
      title: "BeautyBot",
      subtitle: "Salon Booking Software",
      category: "saas",
      raised: "$1.8M",
      stage: "Pre-Series A",
      industry: "Beauty Tech",
      image: "/HomePage/PitchDeck_1/BeautyBot.webp",
      description:
        "AI-powered salon management platform revolutionizing beauty industry operations with smart booking and customer insights.",
    },
    {
      id: 2,
      title: "Royal Shisha Co.",
      subtitle: "Premium Hookah Experience",
      category: "hospitality",
      raised: "$2.2M",
      stage: "Seed Round",
      industry: "Hospitality",
      image: "/HomePage/PitchDeck_1/RoyalShisha.webp",
      description:
        "Luxury shisha lounge chain delivering authentic Middle Eastern hospitality with modern social experiences.",
    },
    {
      id: 3,
      title: "Sentio Hotel",
      subtitle: "Boutique Hospitality",
      category: "hospitality",
      raised: "$5.8M",
      stage: "Series A",
      industry: "Hospitality",
      image: "/HomePage/PitchDeck_1/SentioHotel.webp",
      description:
        "Eco-luxury hotel brand combining sustainable practices with premium guest experiences in prime locations.",
    },
    {
      id: 4,
      title: "Lokalist",
      subtitle: "Community Investment Platform",
      category: "fintech",
      raised: "$3.4M",
      stage: "Series A",
      industry: "PropTech",
      image: "/HomePage/PitchDeck_1/Lokalist.webp",
      description:
        "Democratizing real estate investment through community-driven development and transparent funding mechanisms.",
    },
    {
      id: 5,
      title: "Sartoria",
      subtitle: "Food Innovation Platform",
      category: "food",
      raised: "$4.1M",
      stage: "Series A",
      industry: "Food Tech",
      image: "/HomePage/PitchDeck_1/Sartoria.webp",
      description:
        "Farm-to-table platform connecting sustainable producers with conscious consumers through innovative supply chain solutions.",
    },
    {
      id: 6,
      title: "Noir",
      subtitle: "Luxury Fashion Brand",
      category: "fashion",
      raised: "$6.2M",
      stage: "Series B",
      industry: "Fashion",
      image: "/HomePage/PitchDeck_1/Noir.webp",
      description:
        "High-end fashion house redefining luxury through sustainable materials and exclusive designer collaborations.",
    },
    {
      id: 7,
      title: "Lemme",
      subtitle: "Fashion E-commerce",
      category: "ecommerce",
      raised: "$2.9M",
      stage: "Seed Round",
      industry: "Fashion Tech",
      image: "/HomePage/PitchDeck_1/Lemme.webp",
      description:
        "AI-powered fashion marketplace offering personalized styling and sustainable fashion choices for Gen Z consumers.",
    },
    {
      id: 8,
      title: "ChromaShift",
      subtitle: "Color Management Solutions",
      category: "saas",
      raised: "$3.2M",
      stage: "Series A",
      industry: "Design Tech",
      image: "/HomePage/PitchDeck_1/ChromaShift.webp",
      description:
        "Professional color management software enabling consistent brand experiences across digital and print media.",
    },
    {
      id: 9,
      title: "Cuddle",
      subtitle: "Comfort & Wellness Platform",
      category: "healthtech",
      raised: "$2.1M",
      stage: "Seed Round",
      industry: "HealthTech",
      image: "/HomePage/PitchDeck_2/Cuddle.webp",
      description:
        "Innovative wellness platform focused on comfort solutions and mental health support through technology-driven experiences.",
    },
    {
      id: 10,
      title: "NexusForge",
      subtitle: "Gaming Development Studio",
      category: "saas",
      raised: "$4.5M",
      stage: "Series A",
      industry: "Gaming Tech",
      image: "/HomePage/PitchDeck_2/NexusForge.webp",
      description:
        "Next-generation game development platform empowering creators with advanced tools and collaborative workflows.",
    },
    {
      id: 11,
      title: "Zenscape",
      subtitle: "Meditation & Mindfulness",
      category: "healthtech",
      raised: "$1.9M",
      stage: "Seed Round",
      industry: "HealthTech",
      image: "/HomePage/PitchDeck_2/Zenscape.webp",
      description:
        "Digital meditation platform combining ancient mindfulness practices with modern technology for stress reduction and mental clarity.",
    },
    {
      id: 12,
      title: "SunHarvest Innovations",
      subtitle: "Renewable Energy Solutions",
      category: "saas",
      raised: "$7.3M",
      stage: "Series B",
      industry: "CleanTech",
      image: "/HomePage/PitchDeck_2/SunharvestInnovations.webp",
      description:
        "Solar energy technology platform advancing sustainable power solutions with smart grid integration and energy optimization.",
    },
    {
      id: 13,
      title: "FutureMind",
      subtitle: "AI Learning Platform",
      category: "saas",
      raised: "$5.1M",
      stage: "Series A",
      industry: "EdTech",
      image: "/HomePage/PitchDeck_2/FutureMind.webp",
      description:
        "Personalized AI-powered learning experiences that adapt to individual learning styles and accelerate skill development.",
    },
    {
      id: 14,
      title: "Chef",
      subtitle: "Culinary Experience Platform",
      category: "food",
      raised: "$3.7M",
      stage: "Series A",
      industry: "Food Tech",
      image: "/HomePage/PitchDeck_2/Chef.webp",
      description:
        "Professional chef services platform connecting culinary experts with food enthusiasts for premium dining experiences.",
    },
    {
      id: 15,
      title: "Elevatex",
      subtitle: "Event Management Solutions",
      category: "saas",
      raised: "$2.8M",
      stage: "Seed Round",
      industry: "Event Tech",
      image: "/HomePage/PitchDeck_2/Elevatex.webp",
      description:
        "Comprehensive event management platform streamlining planning, coordination, and execution of corporate and social events.",
    },
    {
      id: 16,
      title: "Illuminate",
      subtitle: "Wellness & Mindfulness",
      category: "healthtech",
      raised: "$1.6M",
      stage: "Pre-Series A",
      industry: "HealthTech",
      image: "/HomePage/PitchDeck_2/Wellness.webp",
      description:
        "Holistic wellness platform integrating mindfulness practices with personalized health tracking and community support.",
    },
    {
      id: 17,
      title: "Al Noor Plaza Hotel",
      subtitle: "Luxury Hospitality",
      category: "hospitality",
      raised: "$8.9M",
      stage: "Series B",
      industry: "Hospitality",
      image: "/HomePage/PitchDeck_2/AINoorPlazaHotel.webp",
      description:
        "Premium hotel chain offering world-class accommodations with authentic cultural experiences and modern luxury amenities.",
    },
  ];

  const filteredDecks =
    selectedCategory === "all"
      ? pitchDecks
      : pitchDecks.filter((deck) => deck.category === selectedCategory);

  const handleCategoryChange = (categoryId) => {
    setIsFiltering(true);
    setSelectedCategory(categoryId);
    // Remove filtering state after animation completes
    setTimeout(() => setIsFiltering(false), 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>

      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="inline-flex items-center text-slate-300 hover:text-white mb-4 sm:mb-6 transition-colors text-sm sm:text-base cursor-pointer">
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            <Link to="/portfolio">Back to Portfolio</Link>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Pitch Deck Portfolio
          </h1>
          <p className="text-slate-200 text-base sm:text-lg lg:text-xl max-w-3xl">
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
                onClick={() => handleCategoryChange(category.id)}
                className={`px-3 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-xs sm:text-sm ${
                  selectedCategory === category.id
                    ? "bg-slate-800 text-white shadow-md sm:shadow-lg"
                    : "bg-white text-slate-800 hover:bg-slate-50 shadow-sm sm:shadow-md border border-slate-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 transition-opacity duration-300 ${
            isFiltering ? "opacity-70" : "opacity-100"
          }`}
        >
          {filteredDecks.map((deck, index) => (
            <div
              key={`${deck.id}-${selectedCategory}`}
              className="group cursor-pointer"
              style={{
                animationDelay: `${index * 50}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-xl overflow-hidden hover:shadow-lg sm:hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2">
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <LazyImage
                    src={deck.image}
                    alt={deck.title}
                    className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="relative p-4 sm:p-6 h-full flex flex-col justify-between z-10">
                    <div className="flex justify-between items-start">
                      <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md sm:rounded-lg text-slate-800 text-xs sm:text-sm font-semibold shadow-sm">
                        {deck.industry}
                      </div>
                      <div className="text-right bg-black/30 backdrop-blur-sm rounded-lg px-3 py-2">
                        <div className="text-white font-bold text-sm sm:text-base md:text-lg">
                          {deck.raised}
                        </div>
                        <div className="text-gray-200 text-xs sm:text-sm">
                          {deck.stage}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="mb-3">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-1">
                      {deck.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base font-medium">
                      {deck.subtitle}
                    </p>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {deck.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-16 sm:mt-20 bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Portfolio Impact
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Our pitch decks have consistently delivered results for startups
              across diverse industries
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                $500M+
              </div>
              <div className="text-slate-600 text-lg">Total Funding Raised</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                95%
              </div>
              <div className="text-slate-600 text-lg">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                50+
              </div>
              <div className="text-slate-600 text-lg">Startups Funded</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default PitchDecksPortfolio;
