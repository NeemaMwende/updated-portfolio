import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      'service_tpijrih',   // Replace with your EmailJS service ID
      'template_vz2nmsh',  // Replace with your EmailJS template ID
      formData,
      'S1Mtnqkgi92_QOqrW'       // Replace with your EmailJS user ID
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
      setFormData({ firstname: '', lastname: '', email: '', message: '' });
      setIsSubmitting(false);
    }).catch((err) => {
      console.error('FAILED...', err);
      alert('Failed to send the message, please try again.');
      setIsSubmitting(false);
    });
  };

  return (
    <div className='contact-form-content'>
      <form onSubmit={handleSubmit}>
        <div className="name-container">
          <input
            type='text'
            name='firstname'
            placeholder='First Name'
            value={formData.firstname}
            onChange={handleChange}
            required
          />
          <input
            type='text'
            name='lastname'
            placeholder='Last Name'
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name='message'
          placeholder='Message'
          rows={3}
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'SENDING...' : 'SEND'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
