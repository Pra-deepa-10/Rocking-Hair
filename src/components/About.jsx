import "./About.css";

export default function About() {
  return (
    <section className="about-section reveal" id="about">
      <div className="about-content reveal reveal-left">
        <p className="eyebrow">ABOUT Q-HAIRS</p>
        <h2>
          Crafted for beauty.
          <span> Designed for you.</span>
        </h2>
        <p className="about-intro">
          Q-Hairs brings together the beauty of
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
      <div className="about-highlight reveal">
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
         including Tirupati, Madurai, Karaikudi, Samayapuram and Bannari Mariamman Temple.
        </p>
      </div>
    </section>
  );
}