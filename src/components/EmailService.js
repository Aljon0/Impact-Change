// Fix the API URL configuration
const getApiBaseUrl = () => {
    // Check for environment variable first
    if (import.meta.env.VITE_API_URL) {
        return import.meta.env.VITE_API_URL;
    }
    
    // Production URL (make sure this matches your actual Render URL)
    if (import.meta.env.PROD) {
        return 'https://impact-change-api.onrender.com';
    }
    
    // Development fallback
    return window.location.origin.includes('localhost') 
        ? 'http://localhost:4242' 
        : window.location.origin;
};

const API_BASE_URL = getApiBaseUrl();

export const emailService = {
    /**
     * Send invoice email after successful payment
     * @param {Object} emailData - Data needed for the invoice email
     * @returns {Promise} - Response from the email API
     */
    sendInvoiceEmail: async (emailData) => {
        try {
            console.log('Sending invoice email with data:', emailData);
            console.log('Using API URL:', API_BASE_URL);

            const response = await fetch(`${API_BASE_URL}/send-invoice-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(emailData),
            });

            console.log('Response status:', response.status);

            // Check if the response is actually JSON
            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                // If it's not JSON, get the text to see what we actually received
                const text = await response.text();
                console.error('Expected JSON but received:', text.substring(0, 200));
                throw new Error(`Server returned ${response.status}: ${response.statusText}. Expected JSON but received ${contentType}`);
            }

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || result.message || `HTTP error! status: ${response.status}`);
            }

            console.log('Invoice email sent successfully:', result);
            return result;

        } catch (error) {
            console.error('Error sending invoice email:', error);
            
            // Provide more helpful error messages
            if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
                throw new Error('Network error: Unable to connect to the server. Please check your internet connection and try again.');
            }
            
            if (error.message.includes('404')) {
                throw new Error('Email service endpoint not found. Please contact support.');
            }
            
            throw error;
        }
    },

    /**
     * Test email configuration
     * @returns {Promise} - Response from the test email API
     */
    testEmailConfig: async () => {
        try {
            console.log('Testing email configuration at:', API_BASE_URL);
            
            const response = await fetch(`${API_BASE_URL}/test-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            });

            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                const text = await response.text();
                console.error('Expected JSON but received:', text.substring(0, 200));
                throw new Error(`Server returned ${response.status}: Expected JSON but received ${contentType}`);
            }

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || result.message || `HTTP error! status: ${response.status}`);
            }

            console.log('Email configuration test result:', result);
            return result;

        } catch (error) {
            console.error('Error testing email configuration:', error);
            throw error;
        }
    },

    /**
     * Test API connection
     * @returns {Promise} - Response from health check
     */
    testApiConnection: async () => {
        try {
            console.log('Testing API connection at:', API_BASE_URL);
            
            const response = await fetch(`${API_BASE_URL}/health`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Health check failed: ${response.status} ${response.statusText}`);
            }

            const result = await response.json();
            console.log('API connection test result:', result);
            return result;

        } catch (error) {
            console.error('Error testing API connection:', error);
            throw error;
        }
    },

    /**
     * Generate order number (client-side fallback)
     * @returns {string} - Generated order number
     */
    generateOrderNumber: () => {
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 1000);
        return `ORD-${timestamp}-${random}`;
    },

    /**
     * Format order data for email
     * @param {Object} params - Parameters for formatting
     * @returns {Object} - Formatted email data
     */
    formatEmailData: ({
        selectedService,
        paymentData,
        paymentIntentId,
        orderNumber = null,
        orderDate = null
    }) => {
        return {
            selectedService,
            paymentData,
            paymentIntentId,
            orderNumber: orderNumber || emailService.generateOrderNumber(),
            orderDate: orderDate || new Date().toISOString()
        };
    }
};

export default emailService;