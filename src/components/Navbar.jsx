import logo from "../assets/q-hairs-logo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="announcement-bar">
        ✦ Premium Indian Human Hair Extensions
      </div>
      <header className="navbar">
        <a href="/" className="logo">
          <img src={logo} alt="Q-Hairs" />
          <span>Q-HAIRS</span>
        </a>
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/#about">About Us</a>
          <a href="/#products">Our Products</a>
          <a href="/#why-us">Why Us</a>
          <a href="/#care">Care Guide</a>
          <a href="/gallery">Gallery</a>
          <a href="/#contact">Contact Us</a>
        </nav>
        <a href="/#enquiry" className="enquire-btn">
          ENQUIRE NOW
        </a>
      </header>
    </>
  );
}