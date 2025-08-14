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
      icon: <FileText className="w-8 h-8" />,
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
      icon: <Search className="w-8 h-8" />,
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
      icon: <PenTool className="w-8 h-8" />,
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
      icon: <BarChart3 className="w-8 h-8" />,
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
      icon: <Truck className="w-8 h-8" />,
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

        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-300 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-500 rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-8 h-8 bg-blue-400 rounded-full opacity-20 animate-bounce"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Our Process
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            A proven five-step methodology that transforms your vision into
            investor-ready materials that drive real results
          </p>
          <div className="flex justify-center space-x-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">5</div>
              <div className="text-blue-200 text-sm">Steps</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">1,500+</div>
              <div className="text-blue-200 text-sm">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">$2B+</div>
              <div className="text-blue-200 text-sm">Raised</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              From Concept to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Success
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures every project delivers maximum
              impact and investor appeal
            </p>
          </div>

          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-2xl shadow-lg">
                      {step.icon}
                    </div>
                    <div>
                      <span className="text-blue-600 font-semibold text-lg">
                        Step {step.id}
                      </span>
                      <h3 className="text-3xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {step.details.map((detail, detailIndex) => (
                      <div
                        key={detailIndex}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                        <span className="text-gray-700 font-medium">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Element */}
                <div className="flex-1 flex justify-center">
                  <div className="relative">
                    <div className="w-80 h-64 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl shadow-xl flex items-center justify-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300">
                        <div className="text-white scale-150">{step.icon}</div>
                      </div>
                    </div>

                    {/* Step number indicator */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      {step.id}
                    </div>
                  </div>
                </div>

                {/* Arrow for non-last steps */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 mt-32">
                    <ArrowRight className="w-8 h-8 text-blue-400" />
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
