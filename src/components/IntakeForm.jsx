import { useState } from "react";
import BusinessDetails from "./BusinessDetails";
import BusinessDifferentiation from "./BusinessDifferentation";
import Confirmation from "./Confirmation";
import EssentialBusinessInfo from "./EssentialBusinessInfo";
import Financials from "./Financials";
import OperationsLogistics from "./OperationsLogistics";
import PersonnelStaffing from "./PersonnelStaffing";
import SalesMarketing from "./SalesMarketing";

// Replace with your Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyO9sXCDkxtwUsYJqa3T8ZLOa-o6A8qUx969R5LxMB4RvLzOj9AjxfQNWeNg4eMoMeB/exec";

const IntakeForm = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    fiverrUsername: "",
    What_is_the_name_of_your_business: "",
    What_is_your_businesswebsite__ifavailable: "",
    What_is_the_physical_or_registered_business_address: "",
    Who_is_the_founder_of_the_business: "",
    Please_provide_the_LinkedIn_profile_of_the_founder_ifavailable: "",
    What_is_the_legal_structure_of_your_business: "",
    What_year_was_your_business_founded: "",
    Provide_a_short_summary_of_what_your_business_does: "",
    How_much_funding_are_you_seeking: "",
    What_is_the_primary_purpose_of_this_funding: "",
    Have_you_achieved_any_notable_milestones_so_far: "",
    Do_you_have_any_brand_assets_you_like_to_include: null,
    Please_share_the_Google_Drive_or_Dropbox_link_containing_the_assets_you_like_to_provide:
      "",
    What_are_your_brand_colors: "",
    What_makes_your_business_unique: "",
    Who_are_your_main_competitors: "",
    What_problem_does_your_business_solve_for_customers: "",
    How_does_your_business_solve_this_problem_better_than_other_solutions: "",
    What_relevant_experience_do_you_or_your_team_have_that_makes_you_the_right_person_to_run_this_business:
      "",
    Have_you_or_your_team_built_or_scaled_a_business_before: "",
    What_skills_or_expertise_do_you_bring_to_help_make_this_business_successful:
      "",
    What_are_your_sales_and_marketing_strategies_for_online_growth: "",
    What_are_your_sales_and_marketing_strategies_for_offline_growth: "",
    Do_you_have_an_existing_customer_base_If_yes_how_many_customers_or_users:
      "",
    What_has_been_your_most_successful_marketing_effort_so_far: "",
    How_do_you_plan_to_retain_and_grow_your_customer_base: "",
    Do_you_have_a_sales_team: "",
    What_are_the_key_processes_in_your_business: "",
    Do_you_have_suppliers_vendors_or_key_partnerships_that_are_essential_to_your_operations:
      "",
    What_tools_software_or_systems_do_you_use_to_manage_your_business: "",
    Do_you_have_a_physical_location_office_or_warehouse_If_yes_provide_details:
      "",
    How_do_you_fulfill_orders_or_deliver_your_product_or_service: "",
    What_challenges_do_you_face_in_operations: "",
    What_capital_expenditures_CapEx_will_you_need: "",
    What_are_your_initial_marketing_and_branding_setup_costs: "",
    What_are_your_expected_legal_regulatory_and_compliance_costs: "",
    What_are_your_product_development_or_inventory_costs: "",
    List_up_to_five_key_products_or_services_their_price_and_expected_first_month_sales:
      "",
    What_is_your_projected_annual_growth_rate: "",
    What_are_your_estimated_monthly_operating_expenses: "",
    Do_you_currently_have_employees_If_yes_how_many_and_what_roles: "",
    Do_you_plan_to_hire_employees_in_the_next_1_5_years_If_yes_what_positions_and_how_many:
      "",
    What_are_your_estimated_monthly_salaries_for_employees: "",
    timestamp: new Date().toISOString(),
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    setFormData((prev) => ({ ...prev, brandAssets: files }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Prepare data for submission
      const submissionData = {
        ...formData,
        // Convert file object to file names string
        brandAssets: formData.brandAssets
          ? Array.from(formData.brandAssets)
              .map((file) => file.name)
              .join(", ")
          : "",
        submissionDate: new Date().toLocaleString(),
      };

      // Send data to Google Sheets
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      // Note: With no-cors mode, we can't read the response
      // But the data should still be sent to Google Sheets
      setShowConfirmation(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(
        "Failed to submit form. Please try again or contact support."
      );
    } finally {
      setIsSubmitting(false);
    }
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
          <EssentialBusinessInfo
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );
      case 2:
        return (
          <BusinessDetails
            formData={formData}
            handleInputChange={handleInputChange}
            handleFileChange={handleFileChange}
          />
        );
      case 3:
        return (
          <BusinessDifferentiation
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );
      case 4:
        return (
          <SalesMarketing
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );
      case 5:
        return (
          <OperationsLogistics
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );
      case 6:
        return (
          <Financials
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );
      case 7:
        return (
          <PersonnelStaffing
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );
      default:
        return null;
    }
  };

  if (showConfirmation) {
    return <Confirmation setShowConfirmation={setShowConfirmation} />;
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

          {submitError && (
            <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
              {submitError}
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t">
            <button
              onClick={prevPage}
              disabled={currentPage === 1 || isSubmitting}
              className={`px-6 py-2 rounded-lg font-medium ${
                currentPage === 1 || isSubmitting
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer"
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
                    What_is_the_name_of_your_business: "",
                    What_is_your_businesswebsite__ifavailable: "",
                    What_is_the_physical_or_registered_business_address: "",
                    Who_is_the_founder_of_the_business: "",
                    Please_provide_the_LinkedIn_profile_of_the_founder_ifavailable:
                      "",
                    What_is_the_legal_structure_of_your_business: "",
                    What_year_was_your_business_founded: "",
                    Provide_a_short_summary_of_what_your_business_does: "",
                    How_much_funding_are_you_seeking: "",
                    What_is_the_primary_purpose_of_this_funding: "",
                    Have_you_achieved_any_notable_milestones_so_far: "",
                    Do_you_have_any_brand_assets_you_like_to_include: null,
                    Please_share_the_Google_Drive_or_Dropbox_link_containing_the_assets_you_like_to_provide:
                      "",
                    What_are_your_brand_colors: "",
                    What_makes_your_business_unique: "",
                    Who_are_your_main_competitors: "",
                    What_problem_does_your_business_solve_for_customers: "",
                    How_does_your_business_solve_this_problem_better_than_other_solutions:
                      "",
                    What_relevant_experience_do_you_or_your_team_have_that_makes_you_the_right_person_to_run_this_business:
                      "",
                    Have_you_or_your_team_built_or_scaled_a_business_before: "",
                    What_skills_or_expertise_do_you_bring_to_help_make_this_business_successful:
                      "",
                    What_are_your_sales_and_marketing_strategies_for_online_growth:
                      "",
                    What_are_your_sales_and_marketing_strategies_for_offline_growth:
                      "",
                    Do_you_have_an_existing_customer_base_If_yes,
                    _how_many_customers_or_users: "",
                    What_has_been_your_most_successful_marketing_effort_so_far:
                      "",
                    How_do_you_plan_to_retain_and_grow_your_customer_base: "",
                    Do_you_have_a_sales_team: "",
                    What_are_the_key_processes_in_your_business: "",
                    Do_you_have_suppliers,
                    _vendors,
                    _or_key_partnerships_that_are_essential_to_your_operations:
                      "",
                    What_tools,
                    _software,
                    _or_systems_do_you_use_to_manage_your_business: "",
                    Do_you_have_a_physical_location,
                    _office,
                    _or_warehouse_If_yes,
                    _provide_details: "",
                    How_do_you_fulfill_orders_or_deliver_your_product_or_service:
                      "",
                    What_challenges_do_you_face_in_operations: "",
                    What_capital_expenditures_CapEx_will_you_need: "",
                    What_are_your_initial_marketing_and_branding_setup_costs:
                      "",
                    What_are_your_expected_legal,
                    _regulatory,
                    _and_compliance_costs: "",
                    What_are_your_product_development_or_inventory_costs: "",
                    List_up_to_five_key_products_or_services,
                    _their_price,
                    _and_expected_first_month_sales: "",
                    What_is_your_projected_annual_growth_rate: "",
                    What_are_your_estimated_monthly_operating_expenses: "",
                    Do_you_currently_have_employees_If_yes,
                    _how_many_and_what_roles: "",
                    Do_you_plan_to_hire_employees_in_the_next_1_5_years_If_yes,
                    _what_positions_and_how_many: "",
                    What_are_your_estimated_monthly_salaries_for_employees: "",
                    timestamp: new Date().toISOString(),
                  });
                  setCurrentPage(1);
                  setSubmitError(null);
                }}
                disabled={isSubmitting}
                className="text-blue-600 hover:underline disabled:text-gray-400 disabled:cursor-not-allowed"
              >
                Clear form
              </button>
            </div>

            {currentPage < 7 ? (
              <button
                onClick={nextPage}
                disabled={isSubmitting}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg cursor-pointer font-medium hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 disabled:bg-green-400 cursor-pointer disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntakeForm;
