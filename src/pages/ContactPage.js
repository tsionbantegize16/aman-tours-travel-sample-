import React, { useState } from 'react';
import Button from '../components/Button'; // Corrected import statement

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', null

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null); // Reset status

    // Simulate form submission
    try {
      // Replace with your actual API endpoint for form submission
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      // if (response.ok) {
      //   setSubmissionStatus('success');
      //   setFormData({ name: '', email: '', message: '' }); // Clear form
      // } else {
      //   setSubmissionStatus('error');
      // }

      setTimeout(() => {
        //Simulate a successful response
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
      }, 2000);
    } catch (error) {
      setSubmissionStatus('error');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold text-green-700 mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-y"
          />
        </div>
        <Button
          type="submit"
          label={isSubmitting ? 'Submitting...' : 'Send Message'}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={isSubmitting}
        />
        {submissionStatus === 'success' && (
          <p className="text-green-500 text-sm mt-4">Message sent successfully!</p>
        )}
        {submissionStatus === 'error' && (
          <p className="text-red-500 text-sm mt-4">Error sending message. Please try again.</p>
        )}
      </form>
    </div>
  );
}

export default ContactPage;