'use client'

// components/ContactForm.tsx

import { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Send formData to your Next.js API route for saving to the database
    try {
      const response = await fetch('/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful submission (e.g., show a success message)
        console.log('Contact form submitted successfully');
      } else {
        // Handle errors
        console.error('Contact form submission failed');
      }
    } catch (error) {
      console.error('Error submitting contact form', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-lg">
      <label className="block">
        <span className="text-gray-700">Name:</span>
        <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-input mt-1 block w-full" required />
      </label>
      <label className="block mt-4">
        <span className="text-gray-700">Email:</span>
        <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input mt-1 block w-full" required />
      </label>
      <label className="block mt-4">
        <span className="text-gray-700">Message:</span>
        <textarea name="message" value={formData.message} onChange={handleChange} className="form-textarea mt-1 block w-full" required />
      </label>
      <button type="submit" className="bg-blue-500 text-white mt-4 px-4 py-2 rounded hover:bg-blue-600">Submit</button>
    </form>
  );
};

export default ContactForm;
