import React from 'react';
import './footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate
  return (
    <footer className="footer">
      <img src="https://www.wildlifetrusts.org/themes/custom/wildlife_trust/images/footer-chalk_downland.svg"></img>
      <h3>Give Love for saving</h3>
      <div className="footer__social">
        <a href="https://www.facebook.com" className="footer_social-icon">
          <FaFacebook />
        </a>
        <a href="https://www.twitter.com" className="footer_social-icon">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com" className="footer_social-icon">
          <FaInstagram />
        </a>
      </div>
      <p id='txt'>
        &copy; 2023 Your WildV. All rights reserved. |
        <a href="/privacy" className="footer_link">Privacy Policy</a> |
        <a href="/tac" className="footer_link">Terms and condition</a> |
        <a href="/aboutus" className="footer_link">About us</a> |
        <a href="/faq" className="footer_link">Frequently asked Questions</a> |
      </p>
    </footer>
  );
};

export default Footer;