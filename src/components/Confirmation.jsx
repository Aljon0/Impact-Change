import { Link } from "react-router-dom";

const Confirmation = ({ setShowConfirmation }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 text-center">
        <div className="mb-6">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Submission Successful!
          </h2>
          <p className="text-gray-600 text-lg">
            Thank you for providing your business information. We've received
            your submission and will begin working on your pitch deck and
            business plan.
          </p>
        </div>

        <div className="space-y-4">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition duration-300 text-lg cursor-pointer">
            <Link to="/payment-flow">Proceed to Payment</Link>
          </button>

          <button
            onClick={() => setShowConfirmation(false)}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition duration-300 cursor-pointer"
          >
            Review Submission
          </button>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            Questions? Contact us at{" "}
            <a
              href="mailto:will@startscaleandsucceed.com"
              className="text-blue-600 hover:underline"
            >
              will@startscaleandsucceed.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
