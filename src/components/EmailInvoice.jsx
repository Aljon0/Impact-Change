import React from "react";

const EmailInvoice = ({
  selectedService,
  paymentData,
  paymentIntentId,
  orderNumber,
  orderDate,
}) => {
  // Helper function to get category display name
  const getCategoryDisplayName = () => {
    if (!selectedService) return "Service";

    if (selectedService.categoryName) {
      return selectedService.categoryName;
    }

    // Fallback to formatted category ID if categoryName is not available
    const categoryMap = {
      "pitch-decks": "Pitch Decks",
      "business-plans": "Business Plans",
      "market-research": "Market Research",
      "one-pager": "One Pager",
      linkedin: "LinkedIn Optimization",
      consulting: "Consulting",
    };

    return categoryMap[selectedService.category] || selectedService.category;
  };

  // Calculate total (assuming no tax for now)
  const calculateTotal = () => {
    return selectedService ? selectedService.price : 0;
  };

  // Format date
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#ffffff",
        color: "#333333",
      }}
    >
      {/* Header */}
      <div
        style={{
          textAlign: "center",
          padding: "40px 20px",
          borderBottom: "2px solid #f0f0f0",
        }}
      >
        <img
          src="/ImpactChange.png"
          alt="Impact Change"
          style={{
            maxHeight: "80px",
            marginBottom: "20px",
          }}
        />
        <h1
          style={{
            color: "#2563eb",
            fontSize: "28px",
            margin: "0",
            fontWeight: "bold",
          }}
        >
          Your Order is Confirmed!
        </h1>
      </div>

      {/* Greeting */}
      <div style={{ padding: "30px 20px 20px" }}>
        <h2
          style={{
            fontSize: "18px",
            color: "#333333",
            margin: "0 0 15px 0",
          }}
        >
          Hi {paymentData?.fullName || "Valued Customer"},
        </h2>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.6",
            color: "#555555",
            margin: "0 0 30px 0",
          }}
        >
          Thank you for your order! We have finished processing it and are
          excited to get started.
        </p>
      </div>

      {/* Invoice Details */}
      <div
        style={{
          backgroundColor: "#f8fafc",
          margin: "0 20px",
          padding: "25px",
          borderRadius: "8px",
          border: "1px solid #e2e8f0",
        }}
      >
        <h3
          style={{
            fontSize: "18px",
            color: "#374151",
            margin: "0 0 20px 0",
            fontWeight: "bold",
          }}
        >
          Invoice & Order Details
        </h3>

        <div style={{ marginBottom: "15px" }}>
          <strong style={{ color: "#374151" }}>Order Number:</strong>{" "}
          <span style={{ color: "#6b7280" }}>{orderNumber}</span>
        </div>

        <div style={{ marginBottom: "25px" }}>
          <strong style={{ color: "#374151" }}>Order Date:</strong>{" "}
          <span style={{ color: "#6b7280" }}>{formatDate(orderDate)}</span>
        </div>

        {/* Service Details Table */}
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            backgroundColor: "#ffffff",
            borderRadius: "6px",
            overflow: "hidden",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f1f5f9" }}>
              <th
                style={{
                  padding: "12px 15px",
                  textAlign: "left",
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#374151",
                  borderBottom: "1px solid #e2e8f0",
                }}
              >
                Product / Service
              </th>
              <th
                style={{
                  padding: "12px 15px",
                  textAlign: "right",
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#374151",
                  borderBottom: "1px solid #e2e8f0",
                }}
              >
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                style={{
                  padding: "15px",
                  borderBottom: "1px solid #f0f0f0",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "#1f2937",
                      marginBottom: "4px",
                    }}
                  >
                    {selectedService?.name}
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#6b7280",
                    }}
                  >
                    {getCategoryDisplayName()}
                  </div>
                </div>
              </td>
              <td
                style={{
                  padding: "15px",
                  textAlign: "right",
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#1f2937",
                  borderBottom: "1px solid #f0f0f0",
                }}
              >
                ${selectedService?.price}
              </td>
            </tr>
          </tbody>
        </table>

        {/* Total Section */}
        <div
          style={{
            marginTop: "20px",
            padding: "15px 0",
            borderTop: "2px solid #e2e8f0",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <span style={{ fontSize: "14px", color: "#6b7280" }}>
              Subtotal:
            </span>
            <span style={{ fontSize: "16px", color: "#1f2937" }}>
              ${calculateTotal()}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "15px",
            }}
          >
            <span style={{ fontSize: "14px", color: "#6b7280" }}>Tax:</span>
            <span style={{ fontSize: "16px", color: "#1f2937" }}>$0</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#dbeafe",
              padding: "12px 15px",
              borderRadius: "6px",
            }}
          >
            <span
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "#1f2937",
              }}
            >
              Total:
            </span>
            <span
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#2563eb",
              }}
            >
              ${calculateTotal()}
            </span>
          </div>
        </div>

        {/* Payment Reference */}
        {paymentIntentId && (
          <div
            style={{
              marginTop: "20px",
              padding: "12px 15px",
              backgroundColor: "#f9fafb",
              borderRadius: "6px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                color: "#6b7280",
                marginBottom: "4px",
              }}
            >
              Payment Reference
            </div>
            <div
              style={{
                fontSize: "11px",
                fontFamily: "monospace",
                color: "#374151",
                wordBreak: "break-all",
              }}
            >
              {paymentIntentId}
            </div>
          </div>
        )}
      </div>

      {/* Next Steps */}
      <div style={{ padding: "30px 20px" }}>
        <h3
          style={{
            fontSize: "18px",
            color: "#374151",
            margin: "0 0 20px 0",
            fontWeight: "bold",
          }}
        >
          Next Steps
        </h3>

        <div
          style={{
            backgroundColor: "#eff6ff",
            border: "1px solid #bfdbfe",
            borderRadius: "8px",
            padding: "20px",
            marginBottom: "25px",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              color: "#1e40af",
              margin: "0 0 15px 0",
              fontWeight: "bold",
            }}
          >
            Our team is now beginning work on your project. The estimated
            delivery time is one week.
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "#3730a3",
              margin: "0",
            }}
          >
            We will reach out if we have any questions and will send you an
            update midway through the process.
          </p>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h4
            style={{
              fontSize: "16px",
              color: "#374151",
              margin: "0 0 15px 0",
            }}
          >
            Timeline:
          </h4>
          <ul
            style={{
              listStyle: "none",
              padding: "0",
              margin: "0",
            }}
          >
            <li
              style={{
                fontSize: "14px",
                color: "#555555",
                marginBottom: "8px",
                paddingLeft: "20px",
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: "0",
                  top: "6px",
                  width: "6px",
                  height: "6px",
                  backgroundColor: "#3b82f6",
                  borderRadius: "50%",
                }}
              ></span>
              Our team will review your submission within 24 hours
            </li>
            <li
              style={{
                fontSize: "14px",
                color: "#555555",
                marginBottom: "8px",
                paddingLeft: "20px",
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: "0",
                  top: "6px",
                  width: "6px",
                  height: "6px",
                  backgroundColor: "#3b82f6",
                  borderRadius: "50%",
                }}
              ></span>
              We'll create your {getCategoryDisplayName().toLowerCase()}
            </li>
            <li
              style={{
                fontSize: "14px",
                color: "#555555",
                marginBottom: "0",
                paddingLeft: "20px",
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: "0",
                  top: "6px",
                  width: "6px",
                  height: "6px",
                  backgroundColor: "#3b82f6",
                  borderRadius: "50%",
                }}
              ></span>
              Standard delivery within one week
            </li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          textAlign: "center",
          padding: "30px 20px",
          borderTop: "1px solid #e5e7eb",
          backgroundColor: "#f9fafb",
        }}
      >
        <p
          style={{
            fontSize: "16px",
            color: "#374151",
            margin: "0 0 10px 0",
            fontWeight: "bold",
          }}
        >
          Thank you for your business!
        </p>
        <p
          style={{
            fontSize: "14px",
            color: "#6b7280",
            margin: "0 0 20px 0",
          }}
        >
          Impact Change Team
        </p>

        <div
          style={{
            fontSize: "12px",
            color: "#9ca3af",
          }}
        >
          <p style={{ margin: "0 0 5px 0" }}>
            Need help?{" "}
            <a
              href="/contact"
              style={{ color: "#3b82f6", textDecoration: "underline" }}
            >
              Contact Us
            </a>
          </p>
          <p style={{ margin: "0" }}>
            Visit our website:{" "}
            <a
              href="/"
              style={{ color: "#3b82f6", textDecoration: "underline" }}
            >
              Impact Change
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailInvoice;
