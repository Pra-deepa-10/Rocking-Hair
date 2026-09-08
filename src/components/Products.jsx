import "./Products.css";
import closureCurlBlack from "../assets/product-images/closure-curl-black.webp";
import straightBundlesBlack from "../assets/product-images/straight-bundles-black.webp";
import frontalStraight from "../assets/product-images/frontal-straight.webp";
import multicolorWigs from "../assets/product-images/multicolor-wigs.webp";

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
            <img src={frontalStraight} alt="Frontals" />
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
      </div>
    </section>
  );
}