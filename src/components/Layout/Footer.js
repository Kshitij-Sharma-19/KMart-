import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assests/icons/logo192.png';
import { BrowserRouter, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
              {/* Logo and Brief */}
              <div className="footer-section">
                <h2>KMart+</h2>
                <img src={Logo} alt="KMart+ Logo" 
                    width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none"  margin-inline-start="10"></img>
                <p>Your go-to destination <br /> for quality products at the best prices!</p>
              </div>
      
              {/* Contact Us */}
              <div className="footer-section">
                <h3>Contact Us</h3>
                <ul>
                  <li>Email: support@kmartplus.com</li>
                  <li>Phone: +91 (22) 0456-7890</li>
                  <li>Address: 1234 Market Street,<br /> Mumbai-400001,<br />Maharashtra,<br /> India</li>
                </ul>
              </div>
      
              {/* Customer Service */}
              <div className="footer-section">
                <h3>Customer Service</h3>
                <ul>
                  <li><NavLink to="/help-center">Help Center</NavLink></li>
                  <li><NavLink to="/returns">Returns & Exchanges</NavLink></li>
                  <li><NavLink to="/shipping">Shipping Info</NavLink></li>
                  <li><NavLink to="/faq">FAQ</NavLink></li>
                </ul>
              </div>
      
              {/* Social Media Links */}
              <div className="footer-section">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
              </div>
            </div>
      
            {/* Copyright */}
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} KMart+. All rights reserved.</p>
            </div>
          </footer>
    );
  };
  
  export default Footer;