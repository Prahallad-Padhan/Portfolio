// src/Footer/index.js
import React, { useState } from 'react';
import './styles.css'; // Import your styles
import { send } from 'emailjs-com'; // Import EmailJS
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    send('prahallad', 'template_cq0rpb7', formData, '1q_V-rszPQ4O5e59T')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert('Failed to send message. Please try again later.');
      });
  };
  

  return (
    <footer className="footer">
      <div className="footer-content">
      <div className="footer-section contact-form">
          <h4>Contact Me</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>

        <div className="footer-section info">
          <h4>Contact Info</h4>
          <p>Email: prahalladp1325@gmail.com</p>
          <h4>Socials</h4>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/pp1325" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/Prahallad-Padhan" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
        </div>

        <div className="footer-section sitemap">
          <h4>Site Map</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#work">Work</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} PrahalladPadhan_. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
