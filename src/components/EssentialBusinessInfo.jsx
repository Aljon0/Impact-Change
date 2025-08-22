const EssentialBusinessInfo = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-6">
      <div className="bg-green-500 text-white px-4 py-3 rounded-lg font-medium">
        Essential Business Information (Required – Please complete all fields)
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            1. What is the name of your business?
          </label>
          <input
            type="text"
            value={formData.businessName}
            onChange={(e) => handleInputChange("businessName", e.target.value)}
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
            **If applicable, provide your home office if no formal address yet.
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
            onChange={(e) => handleInputChange("founderName", e.target.value)}
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
            onChange={(e) => handleInputChange("foundedYear", e.target.value)}
            placeholder="Your answer"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default EssentialBusinessInfo;
