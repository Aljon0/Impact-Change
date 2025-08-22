const OperationsLogistics = ({ formData, handleInputChange }) => {
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
            ** Examples: manufacturing, service delivery, software development,
            customer support
          </p>
          <textarea
            value={formData.keyProcesses}
            onChange={(e) => handleInputChange("keyProcesses", e.target.value)}
            placeholder="Your answer"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            2. Do you have suppliers, vendors, or key partnerships that are
            essential to your operations?
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
            onChange={(e) => handleInputChange("businessTools", e.target.value)}
            placeholder="Your answer"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            4. Do you have a physical location, office, or warehouse? If yes,
            provide details.
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
            ** Examples: supply chain delays, hiring, inventory management.
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
};

export default OperationsLogistics;
