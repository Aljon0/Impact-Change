import {
  ArrowRight,
  BarChart3,
  FileText,
  PenTool,
  Search,
  Truck,
} from "lucide-react";
import React from "react";

const ProcessPage = () => {
  const processSteps = [
    {
      id: 1,
      icon: <FileText className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Intake Form",
      description:
        "Complete our comprehensive intake form to help us understand your business, goals, and specific requirements for your pitch deck or business plan.",
      details: [
        "Business overview assessment",
        "Goal identification",
        "Timeline establishment",
        "Resource evaluation",
      ],
    },
    {
      id: 2,
      icon: <Search className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Research & Analysis",
      description:
        "Our team conducts in-depth market research, competitive analysis, and financial modeling to build a solid foundation for your project.",
      details: [
        "Market research",
        "Competitive landscape analysis",
        "Industry trend evaluation",
        "Financial data gathering",
      ],
    },
    {
      id: 3,
      icon: <PenTool className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Content & Strategy",
      description:
        "We craft compelling narratives, develop strategic messaging, and create detailed content that resonates with investors and stakeholders.",
      details: [
        "Story development",
        "Strategic messaging",
        "Content creation",
        "Value proposition refinement",
      ],
    },
    {
      id: 4,
      icon: <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Design & Modeling",
      description:
        "Professional design and financial modeling bring your story to life with visually stunning presentations and robust financial projections.",
      details: [
        "Visual design creation",
        "Financial modeling",
        "Data visualization",
        "Brand integration",
      ],
    },
    {
      id: 5,
      icon: <Truck className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Delivery & Support",
      description:
        "Receive your completed materials with ongoing support, revisions, and guidance to ensure your success with investors and stakeholders.",
      details: [
        "Final delivery",
        "Review sessions",
        "Revision support",
        "Presentation coaching",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"></div>
        <div className="absolute inset-0 bg-black opacity-10"></div>

        {/* Animated background elements - Responsive positioning */}
        <div className="absolute top-10 left-4 sm:top-20 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-20 right-4 sm:top-40 sm:right-20 w-10 h-10 sm:w-16 sm:h-16 bg-blue-300 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-8 h-8 sm:w-12 sm:h-12 bg-blue-500 rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-6 h-6 sm:w-8 sm:h-8 bg-blue-400 rounded-full opacity-20 animate-bounce"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
            Our Process
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            A proven five-step methodology that transforms your vision into
            investor-ready materials that drive real results
          </p>
          <div className="flex justify-center space-x-4 sm:space-x-6 lg:space-x-8">
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                5
              </div>
              <div className="text-blue-200 text-xs sm:text-sm">Steps</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                1,500+
              </div>
              <div className="text-blue-200 text-xs sm:text-sm">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                $2B+
              </div>
              <div className="text-blue-200 text-xs sm:text-sm">Raised</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
              From Concept to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Success
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Our systematic approach ensures every project delivers maximum
              impact and investor appeal
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {processSteps.map((step, index) => (
              <div key={step.id} className="relative">
                <div
                  className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 space-y-4 sm:space-y-6 text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start space-x-3 sm:space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl sm:rounded-2xl shadow-lg">
                        {step.icon}
                      </div>
                      <div className="text-left">
                        <span className="text-blue-600 font-semibold text-sm sm:text-base lg:text-lg">
                          Step {step.id}
                        </span>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-2 lg:px-0">
                      {step.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 max-w-xl mx-auto lg:mx-0">
                      {step.details.map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className="flex items-center justify-center lg:justify-start space-x-2 sm:space-x-3"
                        >
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex-shrink-0"></div>
                          <span className="text-xs sm:text-sm lg:text-base text-gray-700 font-medium">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual Element */}
                  <div className="flex-1 flex justify-center">
                    <div className="relative">
                      <div className="w-64 h-48 sm:w-72 sm:h-56 lg:w-80 lg:h-64 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl sm:rounded-3xl shadow-xl flex items-center justify-center">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300">
                          <div className="text-white scale-125 sm:scale-150">
                            {step.icon}
                          </div>
                        </div>
                      </div>

                      {/* Step number indicator */}
                      <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base lg:text-lg shadow-lg">
                        {step.id}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow for non-last steps - Hidden on mobile, visible on larger screens */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:flex justify-center mt-8 lg:mt-12">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-blue-500" />
                    </div>
                  </div>
                )}

                {/* Mobile step connector - Only visible on mobile */}
                {index < processSteps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6">
                    <div className="w-px h-8 bg-gradient-to-b from-blue-300 to-blue-500"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessPage;
