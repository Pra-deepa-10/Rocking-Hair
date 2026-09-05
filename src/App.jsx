import { sendEnquiryEmail } from "./email";
import { useState, useEffect } from "react";
import PrivacyPolicy from "./PrivacyPolicy";
import Terms from "./Terms";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

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

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
  "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
  "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
  "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
  "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde",
  "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros",
  "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark",
  "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador",
  "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland",
  "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada",
  "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary",
  "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
  "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North",
  "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
  "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
  "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia",
  "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
  "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia",
  "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea",
  "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania",
  "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
  "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
  "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
  "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan",
  "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
  "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga",
  "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
  "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
  "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
  "Zimbabwe"
];

const countryCodes = [
  { code: "+93", name: "AF" }, { code: "+355", name: "AL" }, { code: "+213", name: "DZ" },
  { code: "+376", name: "AD" }, { code: "+244", name: "AO" }, { code: "+54", name: "AR" },
  { code: "+374", name: "AM" }, { code: "+61", name: "AU" }, { code: "+43", name: "AT" },
  { code: "+994", name: "AZ" }, { code: "+973", name: "BH" }, { code: "+880", name: "BD" },
  { code: "+375", name: "BY" }, { code: "+32", name: "BE" }, { code: "+501", name: "BZ" },
  { code: "+229", name: "BJ" }, { code: "+975", name: "BT" }, { code: "+591", name: "BO" },
  { code: "+387", name: "BA" }, { code: "+267", name: "BW" }, { code: "+55", name: "BR" },
  { code: "+673", name: "BN" }, { code: "+359", name: "BG" }, { code: "+226", name: "BF" },
  { code: "+257", name: "BI" }, { code: "+855", name: "KH" }, { code: "+237", name: "CM" },
  { code: "+1", name: "CA" }, { code: "+238", name: "CV" }, { code: "+236", name: "CF" },
  { code: "+235", name: "TD" }, { code: "+56", name: "CL" }, { code: "+86", name: "CN" },
  { code: "+57", name: "CO" }, { code: "+269", name: "KM" }, { code: "+242", name: "CG" },
  { code: "+243", name: "CD" }, { code: "+506", name: "CR" }, { code: "+385", name: "HR" },
  { code: "+53", name: "CU" }, { code: "+357", name: "CY" }, { code: "+420", name: "CZ" },
  { code: "+45", name: "DK" }, { code: "+253", name: "DJ" }, { code: "+1", name: "DM" },
  { code: "+1", name: "DO" }, { code: "+593", name: "EC" }, { code: "+20", name: "EG" },
  { code: "+503", name: "SV" }, { code: "+240", name: "GQ" }, { code: "+291", name: "ER" },
  { code: "+372", name: "EE" }, { code: "+251", name: "ET" }, { code: "+679", name: "FJ" },
  { code: "+358", name: "FI" }, { code: "+33", name: "FR" }, { code: "+241", name: "GA" },
  { code: "+220", name: "GM" }, { code: "+995", name: "GE" }, { code: "+49", name: "DE" },
  { code: "+233", name: "GH" }, { code: "+30", name: "GR" }, { code: "+1", name: "GD" },
  { code: "+502", name: "GT" }, { code: "+224", name: "GN" }, { code: "+245", name: "GW" },
  { code: "+592", name: "GY" }, { code: "+509", name: "HT" }, { code: "+504", name: "HN" },
  { code: "+852", name: "HK" }, { code: "+36", name: "HU" }, { code: "+354", name: "IS" },
  { code: "+91", name: "IN" }, { code: "+62", name: "ID" }, { code: "+98", name: "IR" },
  { code: "+964", name: "IQ" }, { code: "+353", name: "IE" }, { code: "+972", name: "IL" },
  { code: "+39", name: "IT" }, { code: "+1", name: "JM" }, { code: "+81", name: "JP" },
  { code: "+962", name: "JO" }, { code: "+7", name: "KZ" }, { code: "+254", name: "KE" },
  { code: "+686", name: "KI" }, { code: "+850", name: "KP" }, { code: "+82", name: "KR" },
  { code: "+965", name: "KW" }, { code: "+996", name: "KG" }, { code: "+856", name: "LA" },
  { code: "+371", name: "LV" }, { code: "+961", name: "LB" }, { code: "+266", name: "LS" },
  { code: "+231", name: "LR" }, { code: "+218", name: "LY" }, { code: "+423", name: "LI" },
  { code: "+370", name: "LT" }, { code: "+352", name: "LU" }, { code: "+853", name: "MO" },
  { code: "+389", name: "MK" }, { code: "+261", name: "MG" }, { code: "+265", name: "MW" },
  { code: "+60", name: "MY" }, { code: "+960", name: "MV" }, { code: "+223", name: "ML" },
  { code: "+356", name: "MT" }, { code: "+692", name: "MH" }, { code: "+222", name: "MR" },
  { code: "+230", name: "MU" }, { code: "+52", name: "MX" }, { code: "+691", name: "FM" },
  { code: "+373", name: "MD" }, { code: "+377", name: "MC" }, { code: "+976", name: "MN" },
  { code: "+382", name: "ME" }, { code: "+212", name: "MA" }, { code: "+258", name: "MZ" },
  { code: "+95", name: "MM" }, { code: "+264", name: "NA" }, { code: "+977", name: "NP" },
  { code: "+31", name: "NL" }, { code: "+64", name: "NZ" }, { code: "+505", name: "NI" },
  { code: "+227", name: "NE" }, { code: "+234", name: "NG" }, { code: "+47", name: "NO" },
  { code: "+968", name: "OM" }, { code: "+92", name: "PK" }, { code: "+680", name: "PW" },
  { code: "+970", name: "PS" }, { code: "+507", name: "PA" }, { code: "+675", name: "PG" },
  { code: "+595", name: "PY" }, { code: "+51", name: "PE" }, { code: "+63", name: "PH" },
  { code: "+48", name: "PL" }, { code: "+351", name: "PT" }, { code: "+974", name: "QA" },
  { code: "+40", name: "RO" }, { code: "+7", name: "RU" }, { code: "+250", name: "RW" },
  { code: "+1", name: "KN" }, { code: "+1", name: "LC" }, { code: "+1", name: "VC" },
  { code: "+685", name: "WS" }, { code: "+378", name: "SM" }, { code: "+239", name: "ST" },
  { code: "+966", name: "SA" }, { code: "+221", name: "SN" }, { code: "+381", name: "RS" },
  { code: "+248", name: "SC" }, { code: "+232", name: "SL" }, { code: "+65", name: "SG" },
  { code: "+421", name: "SK" }, { code: "+386", name: "SI" }, { code: "+677", name: "SB" },
  { code: "+252", name: "SO" }, { code: "+27", name: "ZA" }, { code: "+34", name: "ES" },
  { code: "+94", name: "LK" }, { code: "+249", name: "SD" }, { code: "+597", name: "SR" },
  { code: "+268", name: "SZ" }, { code: "+46", name: "SE" }, { code: "+41", name: "CH" },
  { code: "+963", name: "SY" }, { code: "+886", name: "TW" }, { code: "+992", name: "TJ" },
  { code: "+255", name: "TZ" }, { code: "+66", name: "TH" }, { code: "+228", name: "TG" },
  { code: "+676", name: "TO" }, { code: "+1", name: "TT" }, { code: "+216", name: "TN" },
  { code: "+90", name: "TR" }, { code: "+993", name: "TM" }, { code: "+256", name: "UG" },
  { code: "+380", name: "UA" }, { code: "+971", name: "AE" }, { code: "+44", name: "GB" },
  { code: "+255", name: "TZ" }, { code: "+1", name: "US" }, { code: "+598", name: "UY" },
  { code: "+998", name: "UZ" }, { code: "+678", name: "VU" }, { code: "+58", name: "VE" },
  { code: "+84", name: "VN" }, { code: "+967", name: "YE" }, { code: "+260", name: "ZM" },
  { code: "+263", name: "ZW" }
];

function App() {
   if (window.location.pathname === "/privacy-policy") {
    return <PrivacyPolicy />;
  }
   if (window.location.pathname === "/terms") {
    return <Terms />;
  }

  const[submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  countryCode: '+91-IN',
  dialCode: '+91',
  countryName: 'IN',
  phone: "",
  country: "",
  product: "hair-extensions",
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

  if (name === "phone") {
    setFormData({
     ...formData,
      [name]: value.replace(/[^0-9]/g, '') // only numbers
    });
  }
  else if (name === 'countryCode') {
    const [code, cName] = value.split('-');
      setFormData({
    ...formData,
      countryCode: value, // e.g. "+1-US" for select to work
      dialCode: code, // e.g. "+1" for backend
      countryName: cName // e.g. "US"
    });}
  else {
    setFormData({...formData, [name]: value, });
  }

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
                  At the heart of our process is a simple promise: 
                  ethically sourced, 100% human hair, with uncompromised quality and authenticity.
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
                <div style={{ display: 'flex', gap: '8px' }}>
                  <select                        //country code selector
                    name="countryCode" 
                    aria-label="Country code"
                    value={formData.countryCode} 
                    onChange={handleChange}
                    style={{ width: '85px' }}
                  >
                    {countryCodes.map((c) => (
                      <option key={`${c.code}-${c.name}`} value={`${c.code}-${c.name}`}>
                        {c.code} {c.name}
                      </option>
                    ))}
                  </select>
                  <input type="tel" id="phone" name="phone" placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange} style={{flex:1}}
                  required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="country">Country</label>
                <select id="country" name="country" 
                value={formData.country} 
                onChange={handleChange} required>
                  <option value="">Select your country</option>
                  {countries.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
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
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms">Terms & Disclaimer</a>
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
                <h3><FiMapPin style={{marginRight: '6px', color: '#D4AF37'}} />
                 India Address</h3>
                <p>
                  M247, NEW ASTC HUDCO, 100 Feet Road,<br />
                  Thally Road, Hosur, Tamil Nadu,<br />
                  India - 635109
                </p>
              </div>

              <div>
                <h3><FiMail style={{marginRight: '6px', color: '#D4AF37'}} />
                Email Us</h3>
                <a href="mailto:Vys.business@gmail.com">
                  Vys.business@gmail.com
                </a>
              </div>

              <div>
                <h3><FiPhone style={{marginRight: '6px', color: '#D4AF37'}} />
                Call / WhatsApp Us</h3>
                <a href="tel:+919994532455">
                  +91 9994532455
                </a>
              </div>
            </div>
            <div className="social-section">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="https://wa.me/919994532455" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <FaWhatsapp />
                </a>
                <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/in/shanmuga-sundaram-6418792a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedinIn />
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