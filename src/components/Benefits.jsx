import "./Benefits.css";

export default function Benefits() {
  return (
    <section className="benefits reveal" id="why-us">
      <div className="section-heading">
        <p className="eyebrow">THE ROCKING HAIR STANDARD</p>
        <h2>
          Beauty that feels
          <span> naturally yours.</span>
        </h2>
        <p>
          Discover premium human hair crafted for exceptional
          softness, natural movement and lasting elegance.
        </p>
      </div>
      <div className="benefit-grid">
        <div className="benefit-card">
          <span>01</span>
          <h3>Premium Quality</h3>
          <p>Carefully selected hair with a refined, natural finish.</p>
        </div>
        <div className="benefit-card">
          <span>02</span>
          <h3>Natural Look & Feel</h3>
          <p>Beautiful movement, softness and a naturally luxurious appearance.</p>
        </div>
        <div className="benefit-card">
          <span>03</span>
          <h3>Made to Last</h3>
          <p>Designed for confidence, versatility and long-lasting beauty.</p>
        </div>
        <div className="benefit-card">
          <span>04</span>
          <h3>Global Enquiries</h3>
          <p>Connect with our team for product enquiries from anywhere in the world.</p>
        </div>
      </div>
    </section>
  );
}