import { useState } from "react";
import { Link } from "react-router-dom";

const IntakeForm = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    fiverrUsername: "",
    businessName: "",
    businessWebsite: "",
    businessAddress: "",
    founderName: "",
    linkedinProfile: "",
    legalStructure: "",
    foundedYear: "",
    businessSummary: "",
    fundingAmount: "",
    fundingPurpose: "",
    milestones: "",
    brandAssets: null,
    assetsLink: "",
    brandColors: "",
    uniqueValue: "",
    competitors: "",
    problemSolved: "",
    solutionDifferentiator: "",
    relevantExperience: "",
    previousBusiness: "",
    skillsExpertise: "",
    onlineStrategy: "",
    offlineStrategy: "",
    existingCustomers: "",
    successfulMarketing: "",
    customerRetention: "",
    salesTeam: "",
    keyProcesses: "",
    suppliersPartners: "",
    businessTools: "",
    physicalLocation: "",
    orderFulfillment: "",
    operationalChallenges: "",
    capitalExpenditure: "",
    marketingCosts: "",
    legalCosts: "",
    developmentCosts: "",
    keyProducts: "",
    growthRate: "",
    operatingExpenses: "",
    currentEmployees: "",
    hiringPlans: "",
    employeeSalaries: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    setFormData((prev) => ({ ...prev, brandAssets: files }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const nextPage = () => {
    if (currentPage < 7) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderProgressBar = () => {
    const progress = (currentPage / 7) * 100;
    return (
      <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    );
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="bg-green-500 text-white px-4 py-3 rounded-lg font-medium">
              Essential Business Information (Required – Please complete all
              fields)
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  1. What is the name of your business?
                </label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) =>
                    handleInputChange("businessName", e.target.value)
                  }
                  placeholder="Your answer"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  2. What is your business website (if available)?
                </label>
                <input
                  type="url"
                  value={formData.businessWebsite}
                  onChange={(e) =>
                    handleInputChange("businessWebsite", e.target.value)
                  }
                  placeholder="Your answer"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  3. What is the physical or registered business address?
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  **If applicable, provide your home office if no formal address
                  yet.
                </p>
                <input
                  type="text"
                  value={formData.businessAddress}
                  onChange={(e) =>
                    handleInputChange("businessAddress", e.target.value)
                  }
                  placeholder="Your answer"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  4. Who is the founder of the business?
                </label>
                <p className="text-sm text-gray-600 mb-2">** Enter full name</p>
                <input
                  type="text"
                  value={formData.founderName}
                  onChange={(e) =>
                    handleInputChange("founderName", e.target.value)
                  }
                  placeholder="Your answer"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  5. Please provide the LinkedIn profile of the founder (if
                  available).
                </label>
                <input
                  type="url"
                  value={formData.linkedinProfile}
                  onChange={(e) =>
                    handleInputChange("linkedinProfile", e.target.value)
                  }
                  placeholder="Your answer"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  6. What is the legal structure of your business?
                </label>
                <div className="space-y-2">
                  {[
                    "Sole Proprietor",
                    "LLC",
                    "Corporation",
                    "Partnership",
                    "Cooperative",
                    "Non-Profit",
                    "Other",
                  ].map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="radio"
                        name="legalStructure"
                        value={option}
                        checked={formData.legalStructure === option}
                        onChange={(e) =>
                          handleInputChange("legalStructure", e.target.value)
                        }
                        className="mr-3 text-blue-600"
                      />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  7. What year was your business founded?
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  **If not yet launched, provide the planned launch year.
                </p>
                <input
                  type="text"
                  value={formData.foundedYear}
                  onChange={(e) =>
                    handleInputChange("foundedYear", e.target.value)
                  }
                  placeholder="Your answer"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  8. Provide a short summary of what your business does.
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  **One or two sentences explaining your product/service and
                  industry
                </p>
                <textarea
                  value={formData.businessSummary}
                  onChange={(e) =>
                    handleInputChange("businessSummary", e.target.value)
                  }
                  placeholder="Your answer"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  9. How much funding are you seeking?
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  **Provide an approximate amount
                </p>
                <input
                  type="text"
                  value={formData.fundingAmount}
                  onChange={(e) =>
                    handleInputChange("fundingAmount", e.target.value)
                  }
                  placeholder="Your answer"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  10. What is the primary purpose of this funding?
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  ** Examples: product development, marketing, hiring,
                  inventory, expansion, other - please specify
                </p>
                <textarea
                  value={formData.fundingPurpose}
                  onChange={(e) =>
                    handleInputChange("fundingPurpose", e.target.value)
                  }
                  placeholder="Your answer"
                  rows="3"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  11. Have you achieved any notable milestones so far?
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  **Examples: product launch, first customers, revenue
                  milestones, partnerships, funding rounds, press coverage.
                </p>
                <textarea
                  value={formData.milestones}
                  onChange={(e) =>
                    handleInputChange("milestones", e.target.value)
                  }
                  placeholder="Your answer"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  13. Do you have any brand assets you'd like to include? (If
                  yes, upload them.)
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  **Example brand guidelines, company logo, professional photos
                  such as founder headshots, team photos, or product images)
                </p>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                  <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="w-full"
                    accept="image/*,.pdf"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Upload up to 5 supported files. Max 100 MB per file.
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  14. Please share the Google Drive or Dropbox link containing
                  the assets you'd like to provide.
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  Make sure the link is set to 'Anyone with the link can view'
                  so we can access the files without restrictions.
                </p>
                <input
                  type="url"
                  value={formData.assetsLink}
                  onChange={(e) =>
                    handleInputChange("assetsLink", e.target.value)
                  }
                  placeholder="Your answer"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  12. What are your brand colors?
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  **Provide hex codes or descriptions.
                </p>
                <input
                  type="text"
                  value={formData.brandColors}
                  onChange={(e) =>
                    handleInputChange("brandColors", e.target.value)
                  }
                  placeholder="Your answer"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="bg-green-500 text-white px-4 py-3 rounded-lg font-medium">
              Business Differentiation & Founder Expertise (Optional – Do your
              best!)
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  1. What makes your business unique?
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  ** Describe your unique selling proposition (USP) or
                  competitive advantage.
                </p>
                <textarea
                  value={formData.uniqueValue}
                  onChange={(e) =>
                    handleInputChange("uniqueValue", e.target.value)
                  }
                  placeholder="Your answer"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  2. Who are your main competitors? (List names or websites.)
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  **List names or websites of businesses that offer similar
                  products/services.
                </p>
                <textarea
                  value={formData.competitors}
                  onChange={(e) =>
                    handleInputChange("competitors", e.target.value)
                  }
                  placeholder="Your answer"
                  rows="3"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  3. What problem does your business solve for customers?
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  **Describe the key pain points your business addresses.
                </p>
                <textarea
                  value={formData.problemSolved}
                  onChange={(e) =>
                    handleInputChange("problemSolved", e.target.value)
                  }
                  placeholder="Your answer"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  4. How does your business solve this problem better than other
                  solutions?
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  ** Highlight key differentiators like pricing, technology,
                  customer service, or efficiency.
                </p>
                <textarea
                  value={formData.solutionDifferentiator}
                  onChange={(e) =>
                    handleInputChange("solutionDifferentiator", e.target.value)
                  }
                  placeholder="Your answer"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  5. What relevant experience do you (or your team) have that
                  makes you the right person to run this business?
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  **Share your background, industry experience, or past
                  successes.
                </p>
                <textarea
                  value={formData.relevantExperience}
                  onChange={(e) =>
                    handleInputChange("relevantExperience", e.target.value)
                  }
                  placeholder="Your answer"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  6. Have you or your team built or scaled a business before?
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  **If yes, provide details about the previous business, growth,
                  and outcome.
                </p>
                <textarea
                  value={formData.previousBusiness}
                  onChange={(e) =>
                    handleInputChange("previousBusiness", e.target.value)
                  }
                  placeholder="Your answer"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  7. What skills or expertise do you bring to help make this
                  business successful?
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  ** Examples: sales, marketing, technical, operational,
                  finance, etc.
                </p>
                <textarea
                  value={formData.skillsExpertise}
                  onChange={(e) =>
                    handleInputChange("skillsExpertise", e.target.value)
                  }
                  placeholder="Your answer"
                  rows="3"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="bg-green-500 text-white px-4 py-3 rounded-lg font-medium">
              Sales & Marketing Strategy (Optional – Do your best!)
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  1. What are your sales and marketing strategies for online
                  growth?
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  ** Examples: SEO, social media, paid ads, email marketing,
                  content marketing.
                </p>
                <textarea
                  value={formData.onlineStrategy}
                  onChange={(e) =>
                    handleInputChange("onlineStrategy", e.target.value)
                  }
                  placeholder="Your answer"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  2. What are your sales and marketing strategies for offline
                  growth?
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  **Examples: events, networking, retail partnerships, direct
                  sales, PR, referrals.
                </p>
                <textarea
                  value={formData.offlineStrategy}
                  onChange={(e) =>
                    handleInputChange("offlineStrategy", e.target.value)
                  }
                  placeholder="Your answer"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  3. Do you have an existing customer base? If yes, how many
                  customers or users?
                </label>
                <input
                  type="text"
                  value={formData.existingCustomers}
                  onChange={(e) =>
                    handleInputChange("existingCustomers", e.target.value)
                  }
                  placeholder="Your answer"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  4. What has been your most successful marketing effort so far?
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  ** If applicable, describe the campaign, channel, and results.
                </p>
                <textarea
                  value={formData.successfulMarketing}
                  onChange={(e) =>
                    handleInputChange("successfulMarketing", e.target.value)
                  }
                  placeholder="Your answer"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  5. How do you plan to retain and grow your customer base?
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  ** Examples: loyalty programs, community building, customer
                  support, repeat purchase incentives.
                </p>
                <textarea
                  value={formData.customerRetention}
                  onChange={(e) =>
                    handleInputChange("customerRetention", e.target.value)
                  }
                  placeholder="Your answer"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  6. Do you have a sales team?
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  **If yes, how is it structured?
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  **If no, do you plan to hire one?
                </p>
                <textarea
                  value={formData.salesTeam}
                  onChange={(e) =>
                    handleInputChange("salesTeam", e.target.value)
                  }
                  placeholder="Your answer"
                  rows="3"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="bg-green-500 text-white px-4 py-3 rounded-lg font-medium">
              Operations & Logistics (Optional – Do your best!)
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  1. What are the key processes in your business?
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  ** Examples: manufacturing, service delivery, software
                  development, customer support
                </p>
                <textarea
                  value={formData.keyProcesses}
                  onChange={(e) =>
                    handleInputChange("keyProcesses", e.target.value)
                  }
                  placeholder="Your answer"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  2. Do you have suppliers, vendors, or key partnerships that
                  are essential to your operations?
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  ** If yes, provide details.
                </p>
                <textarea
                  value={formData.suppliersPartners}
                  onChange={(e) =>
                    handleInputChange("suppliersPartners", e.target.value)
                  }
                  placeholder="Your answer"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  3. What tools, software, or systems do you use to manage your
                  business?
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  ** Examples: POS system, CRM, inventory management, accounting
                  software.
                </p>
                <textarea
                  value={formData.businessTools}
                  onChange={(e) =>
                    handleInputChange("businessTools", e.target.value)
                  }
                  placeholder="Your answer"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  4. Do you have a physical location, office, or warehouse? If
                  yes, provide details.
                </label>
                <textarea
                  value={formData.physicalLocation}
                  onChange={(e) =>
                    handleInputChange("physicalLocation", e.target.value)
                  }
                  placeholder="Your answer"
                  rows="3"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  5. How do you fulfill orders or deliver your product/service?
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  ** Shipping, digital downloads, in-person service, etc.
                </p>
                <textarea
                  value={formData.orderFulfillment}
                  onChange={(e) =>
                    handleInputChange("orderFulfillment", e.target.value)
                  }
                  placeholder="Your answer"
                  rows="3"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  6. What challenges do you face in operations?
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  ** Examples: supply chain delays, hiring, inventory
                  management.
                </p>
                <textarea
                  value={formData.operationalChallenges}
                  onChange={(e) =>
                    handleInputChange("operationalChallenges", e.target.value)
                  }
                  placeholder="Your answer"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="bg-green-500 text-white px-4 py-3 rounded-lg font-medium">
              Financials (Optional – Do your best!)
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  1. What capital expenditures (CapEx) will you need?
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  CapEx refers to one-time purchases of physical or long-term
                  assets essential for your business, such as office space,
                  equipment, machinery, or major technology investments.
                </p>
                <textarea
                  value={formData.capitalExpenditure}
                  onChange={(e) =>
                    handleInputChange("capitalExpenditure", e.target.value)
                  }
                  placeholder="Your answer"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  2. What are your initial marketing and branding setup costs?
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  Examples: advertising, social media campaigns, website
                  development.
                </p>
                <textarea
                  value={formData.marketingCosts}
                  onChange={(e) =>
                    handleInputChange("marketingCosts", e.target.value)
                  }
                  placeholder="Your answer"
                  rows="3"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  3. What are your expected legal, regulatory, and compliance
                  costs?
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  Examples: business registration, patents, trademarks,
                  contracts, licenses
                </p>
                <textarea
                  value={formData.legalCosts}
                  onChange={(e) =>
                    handleInputChange("legalCosts", e.target.value)
                  }
                  placeholder="Your answer"
                  rows="3"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  4. What are your product development or inventory costs?
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  If applicable, list estimated costs for production, raw
                  materials, initial stock.
                </p>
                <textarea
                  value={formData.developmentCosts}
                  onChange={(e) =>
                    handleInputChange("developmentCosts", e.target.value)
                  }
                  placeholder="Your answer"
                  rows="3"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  5. List up to five key products or services, their price, and
                  expected first-month sales.
                </label>
                <p className="text-sm text-gray-600 mb-2">Include:</p>
                <p className="text-sm text-gray-600 mb-2">
                  1. Product/Service Name
                </p>
                <p className="text-sm text-gray-600 mb-2">2. Price Per Unit</p>
                <p className="text-sm text-gray-600 mb-2">
                  3. Expected Sales in First Month
                </p>
                <textarea
                  value={formData.keyProducts}
                  onChange={(e) =>
                    handleInputChange("keyProducts", e.target.value)
                  }
                  placeholder="Your answer"
                  rows="6"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  6. What is your projected annual growth rate?
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  If possible, provide an estimate for each year. Example: Year
                  1: 20%, Year 2: 50%, Year 3: 30%.
                </p>
                <textarea
                  value={formData.growthRate}
                  onChange={(e) =>
                    handleInputChange("growthRate", e.target.value)
                  }
                  placeholder="Your answer"
                  rows="3"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  7. What are your estimated monthly operating expenses?
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  ** Provide rough estimates for the following categories.
                </p>
                <textarea
                  value={formData.operatingExpenses}
                  onChange={(e) =>
                    handleInputChange("operatingExpenses", e.target.value)
                  }
                  placeholder="Your answer"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <div className="bg-green-500 text-white px-4 py-3 rounded-lg font-medium">
              Personnel & Staffing Costs (Optional – Do your best!)
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  1. Do you currently have employees? (If yes, how many and what
                  roles?)
                </label>
                <textarea
                  value={formData.currentEmployees}
                  onChange={(e) =>
                    handleInputChange("currentEmployees", e.target.value)
                  }
                  placeholder="Your answer"
                  rows="3"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  2. Do you plan to hire employees in the next 1-5 years? (If
                  yes, what positions and how many?)
                </label>
                <textarea
                  value={formData.hiringPlans}
                  onChange={(e) =>
                    handleInputChange("hiringPlans", e.target.value)
                  }
                  placeholder="Your answer"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  3. What are your estimated monthly salaries for employees?
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  ** Provide rough estimates per role.
                </p>
                <textarea
                  value={formData.employeeSalaries}
                  onChange={(e) =>
                    handleInputChange("employeeSalaries", e.target.value)
                  }
                  placeholder="Your answer"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 text-center">
          <div className="mb-6">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Submission Successful!
            </h2>
            <p className="text-gray-600 text-lg">
              Thank you for providing your business information. We've received
              your submission and will begin working on your pitch deck and
              business plan.
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              What happens next?
            </h3>
            <div className="text-left space-y-2 text-gray-700">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span>
                  Our team will review your submission within 24 hours
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span>
                  We'll create your custom pitch deck and business plan
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span>Standard delivery within one week</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition duration-300 text-lg cursor-pointer">
              <Link to="/payment-flow">Proceed to Payment</Link>
            </button>

            <button
              onClick={() => setShowConfirmation(false)}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition duration-300 cursor-pointer"
            >
              Review Submission
            </button>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              Questions? Contact us at{" "}
              <a
                href="mailto:support@impactchange.com"
                className="text-blue-600 hover:underline"
              >
                support@impactchange.com
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-t-2xl p-6 mb-0">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Business Plan & Pitch Deck Preparation Form
              </h1>
              <p className="text-gray-600 mt-2">
                This form helps me gather the information I need to create your
                business plan and/or pitch deck. Section 1 is essential and must
                be completed. Other sections are optional— just do your best! If
                you don't have all the answers, that's fine. Leave blanks as
                needed!
              </p>
            </div>
          </div>

          {/* Initial form fields */}
          <div className="mt-6 space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="Your email"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {!formData.email && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <span className="mr-1">⚠</span> This is a required question
                </p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                What is your Fiverr username?
              </label>
              <input
                type="text"
                value={formData.fiverrUsername}
                onChange={(e) =>
                  handleInputChange("fiverrUsername", e.target.value)
                }
                placeholder="Your answer"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Main Form */}
        <div className="bg-white rounded-b-2xl p-6">
          {renderProgressBar()}
          {renderPage()}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`px-6 py-2 rounded-lg font-medium cursor-pointer ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Back
            </button>

            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Page {currentPage} of 7</span>
              <button
                onClick={() => {
                  setFormData({
                    email: "",
                    fiverrUsername: "",
                    businessName: "",
                    businessWebsite: "",
                    businessAddress: "",
                    founderName: "",
                    linkedinProfile: "",
                    legalStructure: "",
                    foundedYear: "",
                    businessSummary: "",
                    fundingAmount: "",
                    fundingPurpose: "",
                    milestones: "",
                    brandAssets: null,
                    assetsLink: "",
                    brandColors: "",
                    uniqueValue: "",
                    competitors: "",
                    problemSolved: "",
                    solutionDifferentiator: "",
                    relevantExperience: "",
                    previousBusiness: "",
                    skillsExpertise: "",
                    onlineStrategy: "",
                    offlineStrategy: "",
                    existingCustomers: "",
                    successfulMarketing: "",
                    customerRetention: "",
                    salesTeam: "",
                    keyProcesses: "",
                    suppliersPartners: "",
                    businessTools: "",
                    physicalLocation: "",
                    orderFulfillment: "",
                    operationalChallenges: "",
                    capitalExpenditure: "",
                    marketingCosts: "",
                    legalCosts: "",
                    developmentCosts: "",
                    keyProducts: "",
                    growthRate: "",
                    operatingExpenses: "",
                    currentEmployees: "",
                    hiringPlans: "",
                    employeeSalaries: "",
                  });
                  setCurrentPage(1);
                }}
                className="text-blue-600 hover:underline cursor-pointer"
              >
                Clear form
              </button>
            </div>

            {currentPage < 7 ? (
              <button
                onClick={nextPage}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 cursor-pointer"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 cursor-pointer"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntakeForm;
