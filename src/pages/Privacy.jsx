// src/pages/Privacy.jsx
import React from "react";

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-600 mb-8">
          Last Updated: August 4, 2025
        </p>

        <div className="space-y-6 text-gray-700">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              1. Introduction
            </h2>
            <p>
              Welcome to the website of Will Bryant. We are committed to
              protecting the privacy and security of your personal information.
              This Privacy Policy describes how we collect, use, process, and
              disclose your information in accordance with applicable data
              protection laws, including UK GDPR and EU GDPR.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              2. Information We Collect
            </h2>
            <p>
              We collect information you provide voluntarily (contact
              information, inquiry details) and information collected
              automatically (log data, device information, cookies and similar
              technologies).
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              3. How We Use Your Information
            </h4>
            <p>
              We use your information to respond to inquiries (legitimate
              interest), improve our website (legitimate interest), for
              marketing communications (with your consent), and to comply with
              legal obligations.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              4. Information Sharing and Disclosure
            </h4>
            <p>
              We do not sell your personal data. We may share your information
              with service providers, through the Fiverr platform when you
              engage our services, and for legal compliance and protection
              purposes.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              5. International Data Transfers
            </h4>
            <p>
              Your information may be transferred globally. We implement
              safeguards such as Standard Contractual Clauses where required to
              ensure your data is treated securely.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              6. Your Data Protection Rights (GDPR & UK GDPR)
            </h4>
            <p>
              If you are a UK or EEA resident, you have rights including access,
              rectification, erasure, restriction of processing, objection to
              processing, and data portability. You can also lodge complaints
              with supervisory authorities.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              7. Cookie Policy
            </h4>
            <p>
              We use strictly necessary cookies for website functionality and
              performance/analytics cookies (like Google Analytics) to improve
              our site. You can control cookie settings through your browser.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              8. Data Security
            </h4>
            <p>
              We have implemented appropriate technical and organizational
              security measures to protect your personal information, though no
              method of transmission over the Internet is 100% secure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
