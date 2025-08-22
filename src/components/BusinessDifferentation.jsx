const BusinessDifferentiation = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-6">
      <div className="bg-green-500 text-white px-4 py-3 rounded-lg font-medium">
        Business Differentiation & Founder Expertise (Optional – Do your best!)
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            1. What makes your business unique?
          </label>
          <p className="text-sm text-gray-600 mb-2">
            ** Describe your unique selling proposition (USP) or competitive
            advantage.
          </p>
          <textarea
            value={formData.uniqueValue}
            onChange={(e) => handleInputChange("uniqueValue", e.target.value)}
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
            onChange={(e) => handleInputChange("competitors", e.target.value)}
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
            onChange={(e) => handleInputChange("problemSolved", e.target.value)}
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
            ** Highlight key differentiators like pricing, technology, customer
            service, or efficiency.
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
            5. What relevant experience do you (or your team) have that makes
            you the right person to run this business?
          </label>
          <p className="text-sm text-gray-600 mb-2">
            **Share your background, industry experience, or past successes.
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
            **If yes, provide details about the previous business, growth, and
            outcome.
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
            7. What skills or expertise do you bring to help make this business
            successful?
          </label>
          <p className="text-sm text-gray-600 mb-2">
            ** Examples: sales, marketing, technical, operational, finance, etc.
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
};

export default BusinessDifferentiation;
