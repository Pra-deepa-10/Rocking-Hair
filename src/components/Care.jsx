import "./Care.css";

export default function Care() {
  return (
    <section className="care-section reveal reveal-right" id="care">
      <div className="care-heading">
        <p className="eyebrow">CARE GUIDE</p>
        <h2>
          The right care.
          <span>The lasting beauty.</span>
        </h2>
        <p>With the right care, your hair can maintain its softness, natural movement and beautiful finish for longer.</p>
      </div>
      <div className="care-grid">
        <div className="care-card">
          <span>01</span>
          <h3>Gentle Washing</h3>
          <p>Use a gentle shampoo and lukewarm water. Avoid excessive rubbing or rough handling while washing.</p>
        </div>
        <div className="care-card">
          <span>02</span>
          <h3>Proper Conditioning</h3>
          <p>Apply conditioner through the lengths of the hair to help maintain softness, moisture and smoothness.</p>
        </div>
        <div className="care-card">
          <span>03</span>
          <h3>Careful Storage</h3>
          <p>Store your hair in a clean, dry place and gently detangle before storing to help preserve its shape and texture.</p>
        </div>
      </div>
    </section>
  );
}