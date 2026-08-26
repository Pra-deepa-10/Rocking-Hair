import { sendEnquiryEmail } from "./email";
import { useState, useEffect } from "react";


import logo from "./assets/rocking-hair-logo.png";
import heroHair from "./assets/product-images/hero-hair.jpeg";
import closureStraight from "./assets/product-images/closure-straight.jpeg";
import closureCurly from "./assets/product-images/closure-curly.jpeg";
import frontalStraight from "./assets/product-images/frontal-straight.jpeg";
import frontalWave from "./assets/product-images/frontal-wave.jpeg";
import hairExtStraight from "./assets/product-images/hair-extension-straight.jpeg";
import hairExtCurl from "./assets/product-images/hair-extension-wavy.jpeg";
import wigStraight from "./assets/product-images/wig-straight.jpeg";
import wigCurl from "./assets/product-images/wig-curly.jpeg";
import Showcase from "./assets/product-images/Showcase-hair.jpeg";
import customHair from "./assets/product-images/custom-hair.jpg";
import waveBundle from "./assets/product-images/wave-bundle.jpeg";

function App() {
  const[submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  country: "",
  product: "Hair Extensions",
  message: "",
});

useEffect(() => {
  if (!submitted) return;

  const timer = setTimeout(() => {
    setSubmitted(false);
  }, 4000);

  return () => clearTimeout(timer);
}, [submitted]);

  const handleSubmit = async (event) => {
  event.preventDefault();

  console.log("FORM SUBMITTED");

  const success = await sendEnquiryEmail(formData);

  if (success) {
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      country: "",
      product: "Hair Extensions",
      message: "",
    });
  } else {
    alert("Failed to send enquiry. Please try again.");
  }
};

  const handleChange = (event) => {
  const { name, value } = event.target;

  setFormData({
    ...formData,
    [name]: value,
  });
};

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        ✦ Premium Indian Human Hair Extensions
      </div>

      {/* Navbar */}
      <header className="navbar">
        <a href="/" className="logo">
          <img src={logo} alt="Rocking Hair" />
          <span>ROCKING HAIR</span>
        </a>
        
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#products">Our Products</a>
          <a href="#why-us">Why Us</a>
          <a href="#care">Care Guide</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact Us</a>
        </nav>

        <a href="#enquiry" className="enquire-btn">
          ENQUIRE NOW
        </a>
      </header>

      {/* Temporary Hero */}
      <main>
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

        <section className="benefits" id="why-us">
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
              <p>
                Carefully selected hair with a refined, natural finish.
              </p>
            </div>

            <div className="benefit-card">
              <span>02</span>
              <h3>Natural Look & Feel</h3>
              <p>
                Beautiful movement, softness and a naturally luxurious appearance.
              </p>
            </div>

            <div className="benefit-card">
              <span>03</span>
              <h3>Made to Last</h3>
              <p>
                Designed for confidence, versatility and long-lasting beauty.
              </p>
            </div>

            <div className="benefit-card">
              <span>04</span>
              <h3>Global Enquiries</h3>
              <p>
                Connect with our team for product enquiries from anywhere in the world.
              </p>
            </div>
          </div>
        </section>
        <section className="about-section" id="about">
          <div className="about-content">
            <p className="eyebrow">ABOUT ROCKING HAIR</p>

            <h2>
              Crafted for beauty.
              <span> Designed for you.</span>
            </h2>

            <p className="about-intro">
              Rocking Hair Extensions brings together the beauty of
              premium Indian human hair with craftsmanship, versatility
              and a deep understanding of hair.
            </p>

            <p>
              From extensions and closures to frontals and wigs, our
              collection is created to help you explore different
              lengths, textures and styles while maintaining a natural,
              elegant appearance.
            </p>

            <a href="#enquiry" className="text-link">
              DISCOVER MORE →
            </a>
          </div>

          <div className="about-highlight">
            <span>OUR HERITAGE</span>

            <h3>
              From South India
              <br />
              to the world.
            </h3>

            <p>
             With knowledge and experience passed down through generations,
             our team understands the value of carefully selecting and working
             with quality human hair, sourced mainly from temples across South India, 
             including Madurai, Karaikudi and Samayapuram.
            </p>
          </div>
        </section>

        <section className="products-section" id="products">
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
            <article className="product-card">
              <div className="product-placeholder">
                <img src={hairExtStraight} alt="Hair Extensions" />
              </div>

              <div className="product-info">
                <h3>Hair Extensions</h3>
                <p>
                  Add length, volume and movement with beautifully
                  crafted hair extensions.
                </p>

                <a href="#enquiry">ENQUIRE →</a>
              </div>
            </article>

            <article className="product-card">
              <div className="product-placeholder">
                <img src={closureCurly} alt="Closures" />
              </div>

              <div className="product-info">
                <h3>Closures</h3>
                <p>
                  Designed to create a natural-looking finish and
                  seamless styling possibilities.
                </p>

                <a href="#enquiry">ENQUIRE →</a>
              </div>
            </article>

            <article className="product-card">
              <div className="product-placeholder">
                <img src={frontalStraight} alt="Frontals" />
              </div>

              <div className="product-info">
                <h3>Frontals</h3>
                <p>
                  Enhance your hairline with versatile options designed
                  for a refined, natural appearance.
                </p>

                <a href="#enquiry">ENQUIRE →</a>
              </div>
            </article>

            <article className="product-card">
              <div className="product-placeholder">
                <img src={wigCurl} alt="Wigs" />
              </div>

              <div className="product-info">
                <h3>Wigs</h3>
                <p>
                  Discover versatile styles designed to complement
                  your individual look.
                </p>

                <a href="#enquiry">ENQUIRE →</a>
              </div>
            </article>
          </div>
        </section>

        <section className="quality-section" id="quality">
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
                <p>
                  We carefully source ethically sourced, 100% human hair
                  with quality and authenticity at the heart of our process.
                </p>
              </div>
            </div>

            <div className="quality-item">
              <span>02</span>

              <div>
                <h3>Crafted with Precision</h3>
                <p>
                  Each extension is crafted with attention to detail to
                  achieve a natural, seamless and refined appearance.
                </p>
              </div>
            </div>

            <div className="quality-item">
              <span>03</span>

              <div>
                <h3>Made for Your Style</h3>
                <p>
                  Choose from different lengths, colors and textures,
                  whether you love silky straight, glamorous curls or
                  chic waves.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="custom-section" id="custom">
          <div className="custom-visual">
            <img
              src={customHair}
              alt="Premium human hair customization"
            />
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

        <section className="care-section" id="care">
          <div className="care-heading">
            <p className="eyebrow">CARE GUIDE</p>

            <h2>
              The right care.
              <span>The lasting beauty.</span>
            </h2>

            <p>
              With the right care, your hair can maintain its softness,
              natural movement and beautiful finish for longer.
            </p>
          </div>

          <div className="care-grid">
            <div className="care-card">
              <span>01</span>
              <h3>Gentle Washing</h3>
              <p>
                Use a gentle shampoo and lukewarm water. Avoid excessive
                rubbing or rough handling while washing.
              </p>
            </div>

            <div className="care-card">
              <span>02</span>
              <h3>Proper Conditioning</h3>
              <p>
                Apply conditioner through the lengths of the hair to help
                maintain softness, moisture and smoothness.
              </p>
            </div>

            <div className="care-card">
              <span>03</span>
              <h3>Careful Storage</h3>
              <p>
                Store your hair in a clean, dry place and gently detangle
                before storing to help preserve its shape and texture.
              </p>
            </div>
          </div>
        </section>

        <section className="gallery-section" id="gallery">
          <div className="gallery-heading">
            <div>
              <p className="eyebrow">THE COLLECTION IN FOCUS</p>

              <h2>
                Beauty in
                <span> every detail.</span>
              </h2>
            </div>

            <p>
              Discover the textures, movement and versatility that define
              the Rocking Hair experience.
            </p>
          </div>

          <div className="gallery-grid">
            <div className="gallery-item gallery-wide gallery-large">
              <img src={Showcase} alt="Bundles" />
            </div>

            <div className="gallery-item">
              <img src={hairExtStraight} alt="Hair extensions" />
            </div>

            <div className="gallery-item">
              <img src={hairExtCurl} alt="Hair extensions" />
            </div>

            <div className="gallery-item">
              <img src={frontalWave} alt="Hair frontals" />
            </div>

            <div className="gallery-item">
              <img src={waveBundle} alt="Hair Extensions" />
            </div>

            <div className="gallery-item">
              <img src={frontalStraight} alt="Hair frontals" />
            </div>

            <div id="wig-straight" className="gallery-item gallery-large">
              <img src={wigStraight} alt="Premium wigs" />
            </div>

            <div className="gallery-item">
              <img src={wigCurl} alt="Premium wigs" />
            </div>

            <div className="gallery-item">
              <img src={closureCurly} alt="closures" />
            </div>

            <div className="gallery-item">
              <img src={closureStraight} alt="closures" />
            </div>
          </div>
        </section>

        <section className="enquiry-section" id="enquiry">
          <div className="enquiry-intro">
            <p className="eyebrow">GET IN TOUCH</p>

            <h2>
              Let's find the
              <span> perfect match.</span>
            </h2>

            <p>
              Tell us what you're looking for and our team will help you
              explore the right hair solution for your style and preferences.
            </p>

            <div className="enquiry-note">
              <span>ROCKING HAIR EXTENSIONS</span>
              <p>
                Premium Indian human hair for enquiries worldwide.
              </p>
            </div>
          </div>

          <form className="enquiry-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required />
              </div>

              <div className="form-group">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  placeholder="Enter your country" 
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="product">Product Interest</label>
              <select id="product" name="product" 
              value={formData.product}
              onChange={handleChange} required>
                <option value="">Select a product</option>
                <option value="hair-extensions">Hair Extensions</option>
                <option value="closures">Closures</option>
                <option value="frontals">Frontals</option>
                <option value="wigs">Wigs</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Enquiry</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell us about your requirements..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="enquiry-submit">
              SEND ENQUIRY →
            </button>
          </form>

          {submitted && (
            <div className="enquiry-toast">
              <span>✓</span>
              <div>
                <strong>Enquiry sent successfully</strong>
                <p>Thank you for contacting Rocking Hair.</p>
              </div>
            </div>
          )}
        </section>

        <footer className="footer" id="contact">
          <div className="footer-main">
            <div className="footer-brand">
              <img src={logo} alt="Rocking Hair" />

              <p>
                Premium Indian human hair crafted for natural beauty,
                versatility and timeless elegance.
              </p>

              <a href="#enquiry" className="footer-enquire">
                MAKE AN ENQUIRY →
              </a>
            </div>

            <div className="footer-column">
              <h3>Explore</h3>

              <a href="#home">Home</a>
              <a href="#about">About Us</a>
              <a href="#products">Our Products</a>
              <a href="#why-us">Why Us</a>
            </div>

            <div className="footer-column">
              <h3>Discover</h3>

              <a href="#care">Care Guide</a>
              <a href="#gallery">Gallery</a>
              <a href="#enquiry">Enquire Now</a>
            </div>

            <div className="footer-column">
              <h3>Our Collection</h3>

              <a href="#products">Hair Extensions</a>
              <a href="#products">Closures</a>
              <a href="#products">Frontals</a>
              <a href="#products">Wigs</a>
            </div>
          </div>
          <div className="footer-contact-bar">
            <p className="footer-contact-title">CONTACT INFO</p>
            <div className="footer-contact-grid">
              <div>
                <h3>India Address</h3>
                <p>
                  M247, NEW ASTC HUDCO, 100 Feet Road,<br />
                  Thally Road, Hosur, Tamil Nadu,<br />
                  India - 635109
                </p>
              </div>

              <div>
                <h3>Email Us</h3>
                <a href="mailto:Vys.business@gmail.com">
                  Vys.business@gmail.com
                </a>
              </div>

              <div>
                <h3>Call / WhatsApp Us</h3>
                <a href="tel:+919994532455">
                  +91 9994532455
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 Rocking Hair Extensions. All rights reserved.</p>

            <p>Premium Indian Human Hair · South India</p>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;