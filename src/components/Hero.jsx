import heroHair from "../assets/website-images/hero-hair.webp";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>
          Luxury Hair.
          <br />
          <span>Timeless You.</span>
        </h1>
        <p>
          Premium Indian Human Hair Extensions crafted for
          natural beauty, softness and elegance.
        </p>
        <a href="#enquiry" className="hero-btn">
          ENQUIRE NOW →
        </a>
      </div>
      <div className="hero-visual">
        <img src={heroHair} alt="Premium human hair extensions"/>
      </div>
    </section>
  );
}