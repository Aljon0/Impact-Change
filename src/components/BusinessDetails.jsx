const BusinessDetails = ({ formData, handleInputChange, handleFileChange }) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            8. Provide a short summary of what your business does.
          </label>
          <p className="text-sm text-gray-600 mb-2">
            **One or two sentences explaining your product/service and industry
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
            onChange={(e) => handleInputChange("fundingAmount", e.target.value)}
            placeholder="Your answer"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            10. What is the primary purpose of this funding?
          </label>
          <p className="text-sm text-gray-600 mb-2">
            ** Examples: product development, marketing, hiring, inventory,
            expansion, other - please specify
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
            **Examples: product launch, first customers, revenue milestones,
            partnerships, funding rounds, press coverage.
          </p>
          <textarea
            value={formData.milestones}
            onChange={(e) => handleInputChange("milestones", e.target.value)}
            placeholder="Your answer"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            13. Do you have any brand assets you'd like to include? (If yes,
            upload them.)
          </label>
          <p className="text-sm text-gray-600 mb-2">
            **Example brand guidelines, company logo, professional photos such
            as founder headshots, team photos, or product images)
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
            14. Please share the Google Drive or Dropbox link containing the
            assets you'd like to provide.
          </label>
          <p className="text-sm text-gray-600 mb-2">
            Make sure the link is set to 'Anyone with the link can view' so we
            can access the files without restrictions.
          </p>
          <input
            type="url"
            value={formData.assetsLink}
            onChange={(e) => handleInputChange("assetsLink", e.target.value)}
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
            onChange={(e) => handleInputChange("brandColors", e.target.value)}
            placeholder="Your answer"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;
