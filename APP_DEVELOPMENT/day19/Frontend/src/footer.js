import React from 'react';
import './footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate
  return (
    <footer className="footer">
      <img src="https://thumbs.dreamstime.com/b/african-safari-animals-lion-zebra-hippo-giraffe-silhouettes-landscape-background-illustration-vector-panorama-184379947.jpg?w=1600"></img>
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
        <a href="/Termsa" className="footer_link">Terms of Service</a> |
        <a href="/aboutus" className="footer_link">About us</a> |
        <a href="/contactus" className="footer_link"></a>

      </p>
    </footer>
  );
};

export default Footer;