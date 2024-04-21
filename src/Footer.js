import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your sign-up logic
    console.log('Email submitted:', email);
    // Reset the email input after submission
    setEmail('');
  };

  return (
    <footer className="footer">
    <div className="footer-section">
      <h2>Join our community of tradespeople and clients today</h2>
      <p>Stay informed with our newsletter. Our weekly newsletter is packed with valuable insights, tips, and updates on the tradespeople industry. From interviews with top tradespeople to insider information on the latest industry developments, our newsletter has it all.</p>
      <div className="newsletter">
        <input type="email" placeholder="Your Email" />
        <button>Sign Up</button>
      </div>
    </div>
    <div className="footer-section">
      <h2>Get In Touch</h2>
      <p>customercare@myapproved.co.uk</p>
      <p>+074 769 92213</p>
    </div>
    <div className="footer-section">
      <h2>Quick Links</h2>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Terms</a></li>
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Directory</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </div>
  </footer>
  );
}

export default Footer;

