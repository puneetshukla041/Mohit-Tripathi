import React, { useState } from "react";
import { motion } from "framer-motion";
import { useMutation, QueryClient, QueryClientProvider } from "@tanstack/react-query";

// --- START: Contact Form Validation Service ---
// This file contains the logic for validating the contact form data.
const ContactService = {
  /**
   * Validates the provided contact form data.
   * @param {object} formData - The form data object to validate.
   * @param {string} formData.name - The sender's name.
   * @param {string} formData.email - The sender's email.
   * @param {string} formData.subject - The message subject.
   * @param {string} formData.message - The message body.
   * @returns {{success: boolean, errors: object}} The validation result.
   */
  validateContactForm: (formData) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name || formData.name.trim() === '') {
      errors.name = "Name is required.";
    }

    if (!formData.email || formData.email.trim() === '') {
      errors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.subject || formData.subject.trim() === '') {
      errors.subject = "Subject is required.";
    }

    if (!formData.message || formData.message.trim() === '') {
      errors.message = "Message is required.";
    }

    // Check for message length
    if (formData.message && formData.message.length > 2000) {
      errors.message = "Message cannot exceed 2000 characters.";
    }

    // Return success if no errors were found.
    const success = Object.keys(errors).length === 0;

    return {
      success,
      errors
    };
  }
};
// --- END: Contact Form Validation Service ---

// --- START: useSubmitContactMessage Hook ---
// This is a mock API call. In a real application, this would send data to a backend.
const submitContactMessage = async (formData) => {
  console.log("Submitting form data:", formData);
  
  return new Promise((resolve, reject) => {
    // Simulate network delay
    setTimeout(() => {
      // Simulate a successful response
      console.log("Mock API call successful!");
      resolve({ success: true, message: "Message sent successfully!" });
      
      // Uncomment the line below and comment the one above to test an error state
      // reject(new Error("Simulated network error. Please try again later."));
    }, 2000); // 2-second delay
  });
};

const useSubmitContactMessage = () => {
  return useMutation({
    mutationFn: submitContactMessage,
  });
};
// --- END: useSubmitContactMessage Hook ---

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const { mutate: submitMessage, isLoading } = useSubmitContactMessage();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    const { name, email, subject, message } = formData;
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setErrors({
        submit: "Please fill in all required fields before sending.",
      });
      return;
    }

    // Validate form
    const validation = ContactService.validateContactForm(formData);
    if (Object.keys(validation.errors).length > 0) {
      setErrors({ submit: "Please check your input and try again." });
      return;
    }

    // Clear any previous errors
    setErrors({});

    // Submit the message
    submitMessage(formData, {
      onSuccess: (result) => {
        if (result.success) {
          setShowSuccess(true);
          setFormData({ name: "", email: "", subject: "", message: "" });

          // Hide success message after 5 seconds
          setTimeout(() => {
            setShowSuccess(false);
          }, 5000);
        } else {
          setErrors({ submit: result.error });
        }
      },
      onError: (error) => {
        setErrors({
          submit: error.message || "Failed to send message. Please try again.",
        });
      },
    });
  };

  return (
    <div className="pb-4 border-b border-neutral-900">
      {/* Section Header - matching other components */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        className="my-20 text-4xl text-center"
      >
        Get In <span className="text-neutral-500">Touch</span>
      </motion.h2>

      {/* Two-Column Contact Form */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto mb-8"
      >
        {/* Success Message */}
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center p-4 mb-8 space-x-3 border border-green-700 rounded-lg bg-green-900/20 backdrop-blur-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-xl text-green-400">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <p className="text-green-400">
              Your message has been sent successfully! I'll get back to you
              soon.
            </p>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Two-Column Layout, now responsive for mobile */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Left Column - Name, Email, Subject */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-between space-y-6"
            >
              {/* Name Field */}
              <div className="flex-1">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-neutral-400"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-white transition-all duration-300 border rounded-xl backdrop-blur-sm bg-neutral-900/30 border-neutral-700/50 focus:outline-none focus:ring-0 focus:border-neutral-700/50 focus:bg-neutral-900/50 focus:shadow-lg focus:shadow-cyan-500/10 placeholder-neutral-500"
                  placeholder="Your name"
                  disabled={isLoading}
                />
              </div>

              {/* Email Field */}
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-neutral-400"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-white transition-all duration-300 border rounded-xl backdrop-blur-sm bg-neutral-900/30 border-neutral-700/50 focus:outline-none focus:ring-0 focus:border-neutral-700/50 focus:bg-neutral-900/50 focus:shadow-lg focus:shadow-cyan-500/10 placeholder-neutral-500"
                  placeholder="your.email@example.com"
                  disabled={isLoading}
                />
              </div>

              {/* Subject Field */}
              <div className="flex-1">
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-neutral-400"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-white transition-all duration-300 border rounded-xl backdrop-blur-sm bg-neutral-900/30 border-neutral-700/50 focus:outline-none focus:ring-0 focus:border-neutral-700/50 focus:bg-neutral-900/50 focus:shadow-lg focus:shadow-cyan-500/10 placeholder-neutral-500"
                  placeholder="What's this about?"
                  disabled={isLoading}
                />
              </div>
            </motion.div>

            {/* Right Column - Message Field */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col"
            >
              {/* Message Field */}
              <div className="flex flex-col flex-1">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-neutral-400"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full flex-1 min-h-[300px] px-4 py-3 transition-all duration-300 border rounded-xl backdrop-blur-sm bg-neutral-900/30 border-neutral-700/50 focus:outline-none focus:ring-0 focus:border-neutral-700/50 focus:bg-neutral-900/50 focus:shadow-lg focus:shadow-cyan-500/10 text-white placeholder-neutral-500 resize-none"
                  placeholder="Tell me about your project or idea... Share your vision, requirements, timeline, or any questions you have. I'd love to hear from you!"
                  disabled={isLoading}
                />
                <p className="mt-2 text-xs text-neutral-500">
                  {formData.message.length}/2000 characters
                </p>
              </div>
            </motion.div>
          </div>

          {/* Submit Button - Centered and styled like blog buttons */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col items-center mt-10 space-y-3"
          >
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
              className={`inline-flex items-center px-8 py-4 text-sm font-medium rounded-xl transition-all duration-300 backdrop-blur-sm border space-x-3 ${
                isLoading
                  ? "bg-neutral-800/50 text-neutral-500 cursor-not-allowed border-neutral-700/50"
                  : "bg-neutral-900/50 hover:bg-neutral-800/70 text-white border-neutral-700/50 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10"
              }`}
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-transparent rounded-full border-t-neutral-400 animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-base">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                  <span>Send Message</span>
                </>
              )}
            </motion.button>

            {/* Subtle Error Messages Below Button */}
            {errors.submit && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md text-xs text-center text-neutral-500"
              >
                {errors.submit}
              </motion.p>
            )}
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

const queryClient = new QueryClient();

// The main App component that provides the QueryClient context
const App = () => (
  <QueryClientProvider client={queryClient}>
    <div className="min-h-screen bg-neutral-950 text-neutral-200">
      <div className="container px-8 mx-auto lg:px-14">
        <Contact />
      </div>
    </div>
  </QueryClientProvider>
);

export default App;
