import React, { useEffect, useState } from "react";

const TermsPrivacyModal = ({ onAccept }) => {
  const [activeTab, setActiveTab] = useState("terms");
  const [hasAccepted, setHasAccepted] = useState(false);

  useEffect(() => {
    // Check if terms were already accepted
    const checkAccepted = () => {
      try {
        const accepted =
          localStorage.getItem("termsPrivacyAccepted") === "true";
        if (accepted) {
          setHasAccepted(true);
          if (onAccept) onAccept();
        }
      } catch (error) {
        console.warn("Storage not available");
        // Don't auto-accept if storage fails
      }
    };

    checkAccepted();
  }, [onAccept]);

  const handleAccept = () => {
    try {
      localStorage.setItem("termsPrivacyAccepted", "true");
    } catch (error) {
      console.warn("Storage not available");
    }

    setHasAccepted(true);
    if (onAccept) onAccept();
  };

  // Don't render if already accepted
  if (hasAccepted) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
          <h2 className="text-2xl font-bold mb-2">Welcome to Impact Change</h2>
          <p className="text-blue-100">
            Please review and accept our Terms & Conditions and Privacy Policy
            to continue
          </p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          <button
            className={`flex-1 py-3 px-6 text-center font-medium transition-colors cursor-pointer ${
              activeTab === "terms"
                ? "bg-blue-50 text-blue-700 border-b-2 border-blue-700"
                : "text-gray-600 hover:text-blue-700"
            }`}
            onClick={() => setActiveTab("terms")}
          >
            Terms & Conditions
          </button>
          <button
            className={`flex-1 py-3 px-6 text-center font-medium transition-colors cursor-pointer ${
              activeTab === "privacy"
                ? "bg-blue-50 text-blue-700 border-b-2 border-blue-700"
                : "text-gray-600 hover:text-blue-700"
            }`}
            onClick={() => setActiveTab("privacy")}
          >
            Privacy Policy
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-96">
          {activeTab === "terms" ? (
            <div className="prose max-w-none">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Terms and Conditions
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Last Updated: August 5, 2025
              </p>

              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    1. Agreement to Terms
                  </h4>
                  <p>
                    By accessing and using this website, you accept and agree to
                    be bound by the terms and provision of this agreement. These
                    Terms apply to all visitors, users, and others who access or
                    use the website.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    2. Intellectual Property Rights
                  </h4>
                  <p>
                    Unless otherwise stated, we and/or our licensors own the
                    intellectual property rights for all material on this
                    website. All text, graphics, logos, and content are the
                    property of Will Bryant and are protected by copyright and
                    other intellectual property laws.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    3. User Representations and Conduct
                  </h4>
                  <p>
                    By using this website, you represent and warrant that you
                    will use the website in accordance with these Terms, will
                    not use the website for any illegal or unauthorized purpose,
                    and your use will not violate any applicable law or
                    regulation.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    4. Third-Party Websites and Content
                  </h4>
                  <p>
                    This website contains links to third-party websites and
                    services, most notably the Fiverr® platform. We are not
                    responsible for any third-party websites accessed through
                    our site or for their content, privacy policies, or
                    practices.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    5. Disclaimer of Warranties
                  </h4>
                  <p>
                    This website and its content are provided on an "as is" and
                    "as available" basis. We make no warranties, expressed or
                    implied, regarding the operation of the website or the
                    information, content, or materials included.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    6. Limitation of Liability
                  </h4>
                  <p>
                    To the fullest extent permitted by law, in no event will
                    Will Bryant, his affiliates, directors, or employees be
                    liable for any indirect, incidental, special, consequential,
                    or punitive damages.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    7. Crucial Clause: Governance of Client Services
                  </h4>
                  <p>
                    All professional advisory and consulting services offered by
                    Will Bryant are contracted, delivered, and governed
                    exclusively through the Fiverr® platform. This website
                    serves as a portfolio and point of contact only.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    8. Governing Law and Jurisdiction
                  </h4>
                  <p>
                    These Terms shall be governed and construed in accordance
                    with the laws of England and Wales, without regard to its
                    conflict of law provisions.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="prose max-w-none">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Privacy Policy
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Last Updated: August 4, 2025
              </p>

              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    1. Introduction
                  </h4>
                  <p>
                    Welcome to the website of Will Bryant. We are committed to
                    protecting the privacy and security of your personal
                    information. This Privacy Policy describes how we collect,
                    use, process, and disclose your information in accordance
                    with applicable data protection laws, including UK GDPR and
                    EU GDPR.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    2. Information We Collect
                  </h4>
                  <p>
                    We collect information you provide voluntarily (contact
                    information, inquiry details) and information collected
                    automatically (log data, device information, cookies and
                    similar technologies).
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    3. How We Use Your Information
                  </h4>
                  <p>
                    We use your information to respond to inquiries (legitimate
                    interest), improve our website (legitimate interest), for
                    marketing communications (with your consent), and to comply
                    with legal obligations.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    4. Information Sharing and Disclosure
                  </h4>
                  <p>
                    We do not sell your personal data. We may share your
                    information with service providers, through the Fiverr
                    platform when you engage our services, and for legal
                    compliance and protection purposes.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    5. International Data Transfers
                  </h4>
                  <p>
                    Your information may be transferred globally. We implement
                    safeguards such as Standard Contractual Clauses where
                    required to ensure your data is treated securely.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    6. Your Data Protection Rights (GDPR & UK GDPR)
                  </h4>
                  <p>
                    If you are a UK or EEA resident, you have rights including
                    access, rectification, erasure, restriction of processing,
                    objection to processing, and data portability. You can also
                    lodge complaints with supervisory authorities.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    7. Cookie Policy
                  </h4>
                  <p>
                    We use strictly necessary cookies for website functionality
                    and performance/analytics cookies (like Google Analytics) to
                    improve our site. You can control cookie settings through
                    your browser.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    8. Data Security
                  </h4>
                  <p>
                    We have implemented appropriate technical and organizational
                    security measures to protect your personal information,
                    though no method of transmission over the Internet is 100%
                    secure.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 flex justify-between items-center border-t border-gray-200">
          <p className="text-sm text-gray-600">
            By clicking "Accept All", you agree to both our Terms & Conditions
            and Privacy Policy
          </p>
          <button
            onClick={handleAccept}
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 cursor-pointer"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsPrivacyModal;
