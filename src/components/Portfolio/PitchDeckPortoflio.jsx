import { ArrowLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Enhanced LazyMedia component that handles both images and videos
const LazyMedia = ({
  src,
  alt,
  className,
  type = "image",
  videoRef,
  isHovered,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const mediaRef = useRef(null);

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

    if (mediaRef.current) {
      observer.observe(mediaRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (type === "video" && videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch((error) => {
          console.error("Error playing video:", error);
        });
      } else {
        videoRef.current.pause();
        if (videoRef.current.currentTime > 0) {
          videoRef.current.currentTime = 0;
        }
      }
    }
  }, [isHovered, type, videoRef]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div
      ref={mediaRef}
      className={`${className} relative overflow-hidden bg-black`}
    >
      {/* Skeleton loader */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer"></div>
        </div>
      )}

      {/* Actual media */}
      {isInView && (
        <>
          {hasError ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
              <div className="text-center">
                <div className="text-2xl mb-2">📷</div>
                <div className="text-sm">Media unavailable</div>
              </div>
            </div>
          ) : type === "video" ? (
            <video
              ref={videoRef}
              src={src}
              className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ${
                isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
              onLoadedData={handleLoad}
              onError={handleError}
              muted
              loop
              playsInline
              preload="metadata"
            />
          ) : (
            <img
              src={src}
              alt={alt}
              className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ${
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
  const [hoveredCard, setHoveredCard] = useState(null);

  const pitchDecks = [
    {
      id: 1,
      title: "BeautyBot",
      subtitle: "Salon Booking Software",
      category: "saas",
      raised: "$1.8M",
      stage: "Pre-Series A",
      industry: "Beauty Tech",
      image: "/HomePage/Videos/BeautyBot.mp4",
      mediaType: "video",
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
      image: "/HomePage/Videos/RoyalShisha.mp4",
      mediaType: "video",
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
      image: "/HomePage/Videos/SentioHotel.mp4",
      mediaType: "video",
      description:
        "Eco-luxury hotel brand combining sustainable practices with premium guest experiences in prime locations.",
    },
    {
      id: 4,
      title: "Localist",
      subtitle: "Community Investment Platform",
      category: "fintech",
      raised: "$3.4M",
      stage: "Series A",
      industry: "PropTech",
      image: "/HomePage/Videos/Localist.mp4",
      mediaType: "video",
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
      image: "/HomePage/Videos/SARTORIA.mp4",
      mediaType: "video",
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
      image: "/HomePage/Videos/Noir.mp4",
      mediaType: "video",
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
      image: "/HomePage/Videos/Lemme.mp4",
      mediaType: "video",
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
      image: "/HomePage/Videos/ChromaShift.mp4",
      mediaType: "video",
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
      image: "/HomePage/Videos/Cuddle.mp4",
      mediaType: "video",
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
      image: "/HomePage/Videos/Nexus.mp4",
      mediaType: "video",
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
      image: "/HomePage/Videos/Zenscape.mp4",
      mediaType: "video",
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
      image: "/HomePage/Videos/Sunharvest.mp4",
      mediaType: "video",
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
      image: "/HomePage/Videos/FutureMind.mp4",
      mediaType: "video",
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
      image: "/HomePage/Videos/ChefAlex.mp4",
      mediaType: "video",
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
      image: "/HomePage/Videos/ElevateX.mp4",
      mediaType: "video",
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
      image: "/HomePage/Videos/Lumia.mp4",
      mediaType: "video",
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
      image: "/HomePage/Videos/Noor.mp4",
      mediaType: "video",
      description:
        "Premium hotel chain offering world-class accommodations with authentic cultural experiences and modern luxury amenities.",
    },
  ];

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
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="inline-flex items-center text-slate-300 hover:text-white mb-4 sm:mb-6 transition-colors text-sm sm:text-base cursor-pointer">
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            <span>Back to Portfolio</span>
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
        {/* Portfolio Grid - Changed to 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {pitchDecks.map((deck, index) => {
            const videoRef = useRef(null);

            return (
              <div
                key={deck.id}
                className="group cursor-pointer"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: "fadeInUp 0.6s ease-out forwards",
                }}
                onMouseEnter={() => setHoveredCard(deck.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-xl overflow-hidden hover:shadow-lg sm:hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2">
                  {/* Video container with proper aspect ratio */}
                  <div className="relative overflow-hidden aspect-video bg-black">
                    <LazyMedia
                      src={deck.image}
                      alt={deck.title}
                      type={deck.mediaType || "image"}
                      className="w-full h-full"
                      videoRef={videoRef}
                      isHovered={hoveredCard === deck.id}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="relative p-3 sm:p-4 lg:p-6 h-full flex flex-col justify-between z-10">
                      <div className="flex justify-between items-start">
                        <div className="bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-md sm:rounded-lg text-slate-800 text-xs font-semibold shadow-sm">
                          {deck.industry}
                        </div>
                        <div className="text-right bg-black/30 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2">
                          <div className="text-white font-bold text-sm">
                            {deck.raised}
                          </div>
                          <div className="text-gray-200 text-xs">
                            {deck.stage}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 lg:p-6">
                    <div className="mb-3">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">
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
            );
          })}
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
