import "./Quality.css";

export default function Quality() {
  return (
    <section className="quality-section reveal" id="quality">
      <div className="quality-intro">
        <p className="eyebrow">THE ART OF QUALITY</p>
        <h2>
          Quality you can feel.
          <span> Beauty you can see.</span>
        </h2>
        <p>
          We take pride in offering premium hair extensions crafted
          with precision using ethically sourced, 100% human hair.
          Every piece is designed to bring softness, natural movement
          and a flawless finish.
        </p>
      </div>
      <div className="quality-process">
        <div className="quality-item">
          <span>01</span>
          <div>
            <h3>Ethically Sourced</h3>
            <p>At the heart of our process is a simple promise: ethically sourced, 100% human hair, with uncompromised quality and authenticity.</p>
          </div>
        </div>
        <div className="quality-item">
          <span>02</span>
          <div>
            <h3>Crafted with Precision</h3>
            <p>Each extension is crafted with attention to detail to achieve a natural, seamless and refined appearance.</p>
          </div>
        </div>
        <div className="quality-item">
          <span>03</span>
          <div>
            <h3>Made for Your Style</h3>
            <p>Choose from different lengths, colors and textures, whether you love silky straight, glamorous curls or chic waves.</p>
          </div>
        </div>
      </div>
    </section>
  );
}