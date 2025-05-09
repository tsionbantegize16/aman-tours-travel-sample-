import React, { useState, useRef } from 'react';

const primaryGreen = '#4CAF50';
const luxuryGold = '#FFD700';
const earthBrown = '#8B4513';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    // Simulate form submission (replace with your actual API call)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay
      setSubmissionStatus('success');
      setFormData({ name: '', email: '', message: '' });
      formRef.current?.reset(); // Reset the form
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 flex items-center justify-center bg-gradient-to-br from-green-100 to-yellow-100">
      <div className="bg-white shadow-xl rounded-lg p-8 md:p-12 w-full md:w-3/4 lg:w-1/2">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-2" style={{ color: primaryGreen }}>
            Let's Connect
          </h1>
          <p className="text-gray-600">We'd love to hear from you!</p>
        </div>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className={`bg-${isSubmitting ? 'gray-400' : 'green-500'} hover:bg-${
                isSubmitting ? 'gray-400' : 'green-700'
              } text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300 w-full`}
              disabled={isSubmitting}
              style={{ backgroundColor: isSubmitting ? 'gray' : primaryGreen }}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </div>
              ) : (
                'Send Message'
              )}
            </button>
          </div>
          {submissionStatus === 'success' && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Success!</strong>
              <span className="block sm:inline"> Your message has been sent. We'll get back to you soon.</span>
            </div>
          )}
          {submissionStatus === 'error' && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline"> There was an issue sending your message. Please try again later.</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default ContactPage;