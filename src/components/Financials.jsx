const Financials = ({ formData, handleInputChange }) => {
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
            CapEx refers to one-time purchases of physical or long-term assets
            essential for your business, such as office space, equipment,
            machinery, or major technology investments.
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
            Examples: advertising, social media campaigns, website development.
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
            3. What are your expected legal, regulatory, and compliance costs?
          </label>
          <p className="text-sm text-gray-600 mb-2">
            Examples: business registration, patents, trademarks, contracts,
            licenses
          </p>
          <textarea
            value={formData.legalCosts}
            onChange={(e) => handleInputChange("legalCosts", e.target.value)}
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
            If applicable, list estimated costs for production, raw materials,
            initial stock.
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
          <p className="text-sm text-gray-600 mb-2">1. Product/Service Name</p>
          <p className="text-sm text-gray-600 mb-2">2. Price Per Unit</p>
          <p className="text-sm text-gray-600 mb-2">
            3. Expected Sales in First Month
          </p>
          <textarea
            value={formData.keyProducts}
            onChange={(e) => handleInputChange("keyProducts", e.target.value)}
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
            If possible, provide an estimate for each year. Example: Year 1:
            20%, Year 2: 50%, Year 3: 30%.
          </p>
          <textarea
            value={formData.growthRate}
            onChange={(e) => handleInputChange("growthRate", e.target.value)}
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
};

export default Financials;
