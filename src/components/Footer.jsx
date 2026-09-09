import logo from "../assets/rocking-hair-logo.png";
import "./Footer.css";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-main">
        <div className="footer-brand">
          <img src={logo} alt="Rocking Hair" />
          <p>Premium Indian human hair crafted for natural beauty, versatility and timeless elegance.</p>
          <a href="#enquiry" className="footer-enquire">MAKE AN ENQUIRY →</a>
        </div>
        <div className="footer-column">
          <h3>Explore</h3>
          <a href="/#home">Home</a>
          <a href="/#about">About Us</a>
          <a href="/#products">Our Products</a>
          <a href="/#why-us">Why Us</a>
        </div>
        <div className="footer-column">
          <h3>Discover</h3>
          <a href="/#care">Care Guide</a>
          <a href="/gallery">Gallery</a>
          <a href="#enquiry">Enquire Now</a>
          <a href="/shipping">Shipping Information</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms">Terms & Disclaimer</a>
        </div>
        <div className="footer-column">
          <h3>Our Collection</h3>
          <a href="/#products">Hair Extensions</a>
          <a href="/#products">Closures</a>
          <a href="/#products">Frontals</a>
          <a href="/#products">Wigs</a>
        </div>
      </div>
      <div className="footer-contact-bar">
        <p className="footer-contact-title">CONTACT INFO</p>
        <div className="footer-contact-grid">
          <div>
            <h3><FiMapPin style={{marginRight: '6px', color: '#D4AF37'}} /> India Address</h3>
            <p>SECOND FLOOR, SY NO 921/1 A1,<br />Nanjundeshwar Nagar, Hosur, Tamil Nadu,<br />India - 635109</p>
          </div>
          <div>
            <h3><FiMail style={{marginRight: '6px', color: '#D4AF37'}} /> Email Us</h3>
            <a href="mailto:Vys.business@gmail.com">Vys.business@gmail.com</a>
          </div>
          <div>
            <h3><FiPhone style={{marginRight: '6px', color: '#D4AF37'}} /> Call / WhatsApp Us</h3>
            <a href="tel:+919994532455">+91 9994532455</a>
          </div>
          <p>Business Hours: 9:00 AM – 6:00 PM</p>
        </div>
        <div className="social-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://wa.me/919994532455" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/shanmuga-sundaram-6418792a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Rocking Hair Extensions. All rights reserved.</p>
        <p>Premium Indian Human Hair · South India</p>
      </div>
    </footer>
  );
}