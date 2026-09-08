import customHair from "../assets/product-images/custom-hair.webp";
import "./Custom.css";

export default function Custom() {
  return (
    <section className="custom-section reveal" id="custom">
      <div className="custom-visual">
        <img src={customHair} alt="Premium human hair customization" />
      </div>
      <div className="custom-content">
        <p className="eyebrow">YOUR HAIR, YOUR WAY</p>
        <h2>
          Made to match
          <span> your vision.</span>
        </h2>
        <p className="custom-intro">
          Choose from a range of colors, lengths and textures to create a look
          that feels uniquely yours. Our team can help you find the right match
          for your style and preferences.
        </p>
        <div className="custom-options">
          <div>
            <span>01</span>
            <h3>Colors</h3>
            <p>Choose your ideal shade.</p>
          </div>
          <div>
            <span>02</span>
            <h3>Lengths</h3>
            <p>Find the length that suits you.</p>
          </div>
          <div>
            <span>03</span>
            <h3>Textures</h3>
            <p>Explore straight, waves and curls.</p>
          </div>
        </div>
        <a href="#enquiry" className="custom-link">
          FIND YOUR PERFECT MATCH →
        </a>
      </div>
    </section>
  );
}