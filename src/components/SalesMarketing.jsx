const SalesMarketing = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-6">
      <div className="bg-green-500 text-white px-4 py-3 rounded-lg font-medium">
        Sales & Marketing Strategy (Optional – Do your best!)
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            1. What are your sales and marketing strategies for online growth?
          </label>
          <p className="text-sm text-gray-600 mb-2">
            ** Examples: SEO, social media, paid ads, email marketing, content
            marketing.
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
            2. What are your sales and marketing strategies for offline growth?
          </label>
          <p className="text-sm text-gray-600 mb-2">
            **Examples: events, networking, retail partnerships, direct sales,
            PR, referrals.
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
            3. Do you have an existing customer base? If yes, how many customers
            or users?
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
            ** Examples: loyalty programs, community building, customer support,
            repeat purchase incentives.
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
            onChange={(e) => handleInputChange("salesTeam", e.target.value)}
            placeholder="Your answer"
            rows="3"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default SalesMarketing;
