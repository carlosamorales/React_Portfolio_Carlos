import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setErrors({ ...errors, [name]: 'This field is required' });
    } else {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    const newErrors = {};
    if (!name) newErrors.name = 'This field is required';
    if (!email) {
      newErrors.email = 'This field is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Email must be a valid @gmail.com address';
    }
    if (!message) newErrors.message = 'This field is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Display success message
      setSuccessMessage('Your info has been saved successfully');
      console.log('Form Data Submitted:', formData);
    } else {
      setSuccessMessage('');
    }
  };

  return (
    <section>
      <h2>Contact</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            onBlur={handleBlur} 
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            onBlur={handleBlur} 
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            onBlur={handleBlur}
          ></textarea>
          {errors.message && <p className="error-message">{errors.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
