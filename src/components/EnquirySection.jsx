import { useState, useEffect } from "react";
import { sendEnquiryEmail } from "../email";
import { countries, countryCodes } from "../data/countries";
import "./EnquirySection.css";

export default function EnquirySection() {
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
        [name]: value.replace(/[^0-9]/g, '')
      });
    }
    else if (name === 'countryCode') {
      const [code, cName] = value.split('-');
        setFormData({
      ...formData,
        countryCode: value,
        dialCode: code,
        countryName: cName
      });}
    else {
      setFormData({...formData, [name]: value, });
    }
  };

  return (
    <section className="enquiry-section reveal" id="enquiry">
      <div className="enquiry-intro">
        <p className="eyebrow">GET IN TOUCH</p>
        <h2>Let's find the<span> perfect match.</span></h2>
        <p>Tell us what you're looking for and our team will help you explore the right hair solution for your style and preferences.</p>
        <div className="enquiry-note">
          <span>Q-HAIRS</span>
          <p>Premium Indian human hair for enquiries worldwide.</p>
        </div>
      </div>
      <form className="enquiry-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group reveal">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group reveal">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group reveal">
            <label htmlFor="phone">Phone Number</label>
            <div style={{ display: 'flex', gap: '8px' }}>
              <select name="countryCode" aria-label="Country code" value={formData.countryCode} onChange={handleChange} style={{ width: '85px' }}>
                {countryCodes.map((c) => (
                  <option key={`${c.code}-${c.name}`} value={`${c.code}-${c.name}`}>
                    {c.code} {c.name}
                  </option>
                ))}
              </select>
              <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} style={{flex:1}} required />
            </div>
          </div>
          <div className="form-group reveal">
            <label htmlFor="country">Country</label>
            <select id="country" name="country" value={formData.country} onChange={handleChange} required>
              <option value="">Select your country</option>
              {countries.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-group reveal">
          <label htmlFor="product">Product Interest</label>
          <select id="product" name="product" value={formData.product} onChange={handleChange} required>
            <option value="">Select a product</option>
            <option value="hair-extensions">Hair Extensions</option>
            <option value="closures">Closures</option>
            <option value="frontals">Frontals</option>
            <option value="wigs">Wigs</option>
          </select>
        </div>
        <div className="form-group reveal">
          <label htmlFor="message">Your Enquiry</label>
          <textarea id="message" name="message" rows="6" placeholder="Tell us about your requirements..." value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="enquiry-submit">SEND ENQUIRY →</button>
      </form>
      {submitted && (
        <div className="enquiry-toast">
          <span>✓</span>
          <div>
            <strong>Enquiry sent successfully</strong>
            <p>Thank you for contacting Q-Hairs.</p>
          </div>
        </div>
      )}
    </section>
  );
}