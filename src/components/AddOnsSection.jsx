import { Check } from "lucide-react";
import React from "react";

const AddOnsSection = ({
  availableAddOns,
  selectedService,
  selectedAddOns,
  onAddOnToggle,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Enhance Your Order
      </h3>
      <p className="text-gray-600 mb-6">
        Add complementary services to maximize your impact
      </p>

      <div className="space-y-4">
        {availableAddOns[selectedService.category]?.map((addOn) => {
          const isSelected = selectedAddOns.some(
            (item) => item.id === addOn.id
          );
          return (
            <div
              key={addOn.id}
              className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                isSelected
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
              }`}
              onClick={() => onAddOnToggle(addOn)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                      isSelected
                        ? "bg-blue-500 border-blue-500"
                        : "border-gray-300"
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 text-white" />}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{addOn.name}</h4>
                    <p className="text-sm text-gray-500">{addOn.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-semibold text-gray-900">
                    ${addOn.price}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedAddOns.length > 0 && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center">
            <Check className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-sm font-medium text-green-800">
              {selectedAddOns.length} add-on
              {selectedAddOns.length > 1 ? "s" : ""} selected
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddOnsSection;
