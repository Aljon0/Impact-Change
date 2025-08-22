const PersonnelStaffing = ({ formData, handleInputChange }) => {
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
            2. Do you plan to hire employees in the next 1-5 years? (If yes,
            what positions and how many?)
          </label>
          <textarea
            value={formData.hiringPlans}
            onChange={(e) => handleInputChange("hiringPlans", e.target.value)}
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
};

export default PersonnelStaffing;
