import "./Products.css";
import closureCurlBlack from "../assets/product-images/closure-curl-black.webp";
import straightBundlesBlack from "../assets/product-images/straight-bundles-black.webp";
import frontal4 from "../assets/product-images/frontal-4.webp";
import multicolorWigs from "../assets/product-images/multicolor-wigs.webp";
import iTipsImage from "../assets/product-images/i-tips-1.webp";
import clipInImage from "../assets/product-images/clip-on-extension-1.webp";

export default function Products() {
  return (
    <section className="products-section reveal" id="products">
      <div className="products-heading">
        <div>
          <p className="eyebrow">OUR COLLECTION</p>
          <h2>
            Crafted for
            <span> every expression.</span>
          </h2>
        </div>
        <p>
          Explore our range of premium hair solutions, created for
          versatility, natural beauty and effortless styling.
        </p>
      </div>
      <div className="products-grid">
        <article className="product-card reveal">
          <div className="product-placeholder">
            <img src={straightBundlesBlack} alt="Hair Extensions" />
          </div>
          <div className="product-info">
            <h3>Hair Extensions</h3>
            <p>Add length, volume and movement with beautifully crafted hair extensions.</p>
            <div className="product-actions">
              <a href="#enquiry">ENQUIRE →</a>
              <a href="#gallery">VIEW MORE →</a>
            </div>
          </div>
        </article>
        <article className="product-card reveal">
          <div className="product-placeholder">
            <img src={closureCurlBlack} alt="Closures" />
          </div>
          <div className="product-info">
            <h3>Closures</h3>
            <p>Designed to create a natural-looking finish and seamless styling possibilities.</p>
            <div className="product-actions">
              <a href="#enquiry">ENQUIRE →</a>
              <a href="#gallery">VIEW MORE →</a>
            </div>
          </div>
        </article>
        <article className="product-card reveal">
          <div className="product-placeholder">
            <img src={frontal4} alt="Frontals" />
          </div>
          <div className="product-info">
            <h3>Frontals</h3>
            <p>Enhance your hairline with versatile options designed for a refined, natural appearance.</p>
            <div className="product-actions">
              <a href="#enquiry">ENQUIRE →</a>
              <a href="#gallery">VIEW MORE →</a>
            </div>
          </div>
        </article>
        <article className="product-card reveal">
          <div className="product-placeholder">
            <img src={multicolorWigs} alt="Wigs" />
          </div>
          <div className="product-info">
            <h3>Wigs</h3>
            <p>Discover versatile styles designed to complement your individual look.</p>
            <div className="product-actions">
              <a href="#enquiry">ENQUIRE →</a>
              <a href="#gallery">VIEW MORE →</a>
            </div>
          </div>
        </article>
        <article className="product-card reveal">
          <div className="product-placeholder">
            <img src={iTipsImage} alt="I-Tips Extensions" />
          </div>
          <div className="product-info">
            <h3>I-Tips</h3>
            <p>Premium keratin I-tip extensions for natural movement, easy installation and long-lasting volume.</p>
            <div className="product-actions">
              <a href="#enquiry">ENQUIRE →</a>
              <a href="#gallery">VIEW MORE →</a>
            </div>
          </div>
        </article>
        <article className="product-card reveal">
          <div className="product-placeholder">
            <img src={clipInImage} alt="Clip-in Extensions" />
          </div>
          <div className="product-info">
            <h3>Clip-in Extensions</h3>
            <p>Instant length and volume with secure clip-in wefts — perfect for quick styling and retail sales.</p>
            <div className="product-actions">
              <a href="#enquiry">ENQUIRE →</a>
              <a href="#gallery">VIEW MORE →</a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}