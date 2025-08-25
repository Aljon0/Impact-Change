import { Check } from "lucide-react";
import React from "react";

const AddOnsSection = ({ availableAddOns, selectedAddOns, onAddOnToggle }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Enhance Your Order
        </h3>
        <p className="text-gray-600">
          Add complementary services to{" "}
          <span className="font-semibold text-blue-600">maximize</span> your
          impact
        </p>
      </div>

      <div className="space-y-4">
        {availableAddOns && availableAddOns.length > 0 ? (
          availableAddOns.map((addOn) => {
            const isSelected = selectedAddOns.some(
              (item) => item.id === addOn.id
            );
            return (
              <div
                key={addOn.id}
                className={`border-2 rounded-lg p-5 cursor-pointer transition-all duration-200 hover:shadow-md ${
                  isSelected
                    ? "border-blue-500 bg-blue-50 shadow-md"
                    : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                }`}
                onClick={() => onAddOnToggle(addOn)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                        isSelected
                          ? "bg-blue-500 border-blue-500 shadow-sm"
                          : "border-gray-300 hover:border-blue-300"
                      }`}
                    >
                      {isSelected && <Check className="w-4 h-4 text-white" />}
                    </div>
                    <div>
                      <h4
                        className={`font-semibold text-lg ${
                          isSelected ? "text-blue-900" : "text-gray-900"
                        }`}
                      >
                        {addOn.name}
                      </h4>
                      <p
                        className={`text-sm ${
                          isSelected ? "text-blue-700" : "text-gray-600"
                        }`}
                      >
                        {addOn.category}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span
                      className={`text-xl font-bold ${
                        isSelected ? "text-blue-600" : "text-gray-900"
                      }`}
                    >
                      ${addOn.price}
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-600">
                No additional services available for your selected plan.
              </p>
            </div>
          </div>
        )}
      </div>

      {selectedAddOns.length > 0 && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center">
            <Check className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-sm font-medium text-green-800">
              <span className="font-semibold">{selectedAddOns.length}</span>{" "}
              add-on
              {selectedAddOns.length > 1 ? "s" : ""} selected
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddOnsSection;
