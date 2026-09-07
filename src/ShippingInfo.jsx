const ShippingInfo = () => {
  return (
    <div className="privacy-page">
      <div className="privacy-container">

        <a href="/" className="privacy-back">
          ← Back to Home
        </a>

        <p className="eyebrow">SHIPPING</p>

        <h1>Shipping Information</h1>

        <p className="privacy-intro">
          We work with trusted international courier services to ensure your
          order reaches you safely and efficiently.
        </p>

        <div className="privacy-content">

          <section>
            <h2>Shipping Time</h2>
            <p>
              Orders are shipped within 3–7 working days.
            </p>
          </section>

          <section>
            <h2>Courier Services</h2>
            <p>
              We use trusted international courier services such as DHL and
              FedEx for shipping.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default ShippingInfo;