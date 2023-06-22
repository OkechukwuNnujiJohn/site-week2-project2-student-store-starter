import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
// import contactImage from './contact.png';
import './ContactUs.css';

export default function ContactUs () {
  return (
    <div className="contact-section">
      <div className="contact-info">
        {/* <div className="contact-image">
          <img src={contactImage} alt="Contact" />
        </div> */}
        <div className="contact-details">
          <h2>Contact Us</h2>
          <p>Email: code@path.org</p>
          <p>Phone: 1-800-CODEPATH</p>
          <p>Address: 123 Fake Street, San Francisco, CA</p>
          <div className="social-icons">
            <AiFillFacebook className="social-icon" />
            <AiFillInstagram className="social-icon" />
            <AiFillLinkedin className="social-icon" />
            <AiFillTwitterCircle className="social-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

// export default ContactUs;
