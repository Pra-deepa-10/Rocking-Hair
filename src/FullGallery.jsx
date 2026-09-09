import { useState, useMemo, useEffect } from "react";
import "./components/Gallery.css";
import "./FullGallery.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EnquirySection from "./components/EnquirySection";

const imageModules = import.meta.glob(
  "./assets/product-images/*.webp",
  { eager: true, import: "default" }
);

function getCategory(fileName) {
  const name = fileName.toLowerCase();
  if (name.includes("closure")) return "Closures";
  if (name.includes("frontal")) return "Frontals";
  if (name.includes("i-tips")) return "I-Tips";
  if (name.includes("clip")) return "Clip-in";
  if (name.includes("wig")) return "Wigs";
  if (name.includes("tape-in")) return "Tape-in";
  if (name.includes("hair-extension")) return "Extensions & Bundles";
  return "All";
}

export default function FullGallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const galleryImages = useMemo(() => {
    return Object.entries(imageModules).map(([path, src]) => {
      const fileName = path.split("/").pop().replace(".webp", "");
      return {
        src,
        fileName,
        alt: "something went wrong",
        category: getCategory(fileName),
      };
    });
  }, []);

  const categories = ["All", "Closures", "Frontals", "I-Tips", "Clip-in", "Wigs", "Extensions & Bundles", "Tape-in"];
  const filtered = activeFilter === "All" ? galleryImages : galleryImages.filter(img => img.category === activeFilter);

  const scrollToEnquiry = (e) => {
    e.preventDefault();
    document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <div className="full-gallery-page">
        <div className="full-gallery-hero">
          <p className="eyebrow">GALLERY</p>
          <h1>Our <span>Collection</span></h1>
          <p className="full-gallery-desc">Real warehouse stock<br></br> 
          Customization available!</p>
          <div className="gallery-actions">
            <a href="/" className="gallery-back-btn">← Back to Home</a>
            <a href="#enquiry" onClick={scrollToEnquiry} className="gallery-enquire-btn">Get Price →</a>
          </div>
        </div>

        <div className="gallery-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-pill ${activeFilter === cat ? "active" : ""}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="full-gallery-grid">
          {filtered.map((item) => (
            <div key={item.fileName} className="full-gallery-item" onClick={() => setLightbox(item)}>
              <img src={item.src} alt="something went wrong" loading="lazy" />
              <div className="gallery-item-overlay">
                <span className="gallery-item-category">{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        {lightbox && (
          <div className="lightbox" onClick={() => setLightbox(null)}>
            <div className="lightbox-content" onClick={e => e.stopPropagation()}>
              <button className="lightbox-close" onClick={() => setLightbox(null)}>×</button>
              <img src={lightbox.src} alt="something went wrong" />
              <div className="lightbox-info">
                <p>{lightbox.category}</p>
                <a href="#enquiry" onClick={(e) => { e.preventDefault(); setLightbox(null); setTimeout(() => document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" }), 100); }} className="lightbox-enquire">Enquire Now →</a>
              </div>
            </div>
          </div>
        )}

        <div className="gallery-bottom-cta">
          <h2>Found what you need?</h2>
          <p>Contact us for bulk rates.</p>
          <a href="#enquiry" onClick={scrollToEnquiry} className="cta-btn">Get Quote →</a>
        </div>

        <EnquirySection />
      </div>
      <Footer />
    </>
  );
}