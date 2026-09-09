import "./Gallery.css";

const imageModules = import.meta.glob(
  "../assets/product-images/*.webp",
  { eager: true, import: "default" }
);

const customAlts = {
  "closure-blonde-body-wave": "Blonde body wave closure",
  "closure-body-wave": "Body wave closure",
  "closure-body-wave-transparent-lace": "Body wave transparent lace closure",
  "closure-curl-black": "Black curly closure",
  "closure-straight-pair": "Straight hair closures",
  "closure-straight-transparent-lace-back-view": "Straight transparent lace back",
  "closure-straight-transparent-lace-front-view": "Straight transparent lace front",
  "closure-wavy-pair": "Wavy closures",
  "curly-bundles-weft": "Curly bundles",
  "extension-curl": "Curly extensions",
  "extension-white": "White extensions",
  "frontal-body-brown": "Brown body wave frontal",
  "frontal-body-wave-blonde": "Blonde body wave frontal",
  "frontal-wave-transparent-lace": "Wave transparent lace frontal",
  "gold-wave-wig": "Gold wave wig",
  "hair-extensions": "Hair extensions",
  "multicolor-wigs": "Multicolor wigs",
  "straight-bundles-black": "Straight black bundles",
  "tape-in-extensions-collection-white": "Tape in extensions",
  "wavy-bundles": "Wavy bundles",
  "frontal-straight": "Straight frontals",
  "wig-straight-full": "Premium straight wig",
  "wig-straight-full-back": "Straight wig back",
  "wig-straight-glueless-front-view": "Glueless straight wig",
  "wig-white": "White wig",
  "wig-white-straight": "White straight wig",
  "wig-white-wave": "White wave wig",
};

const galleryImages = Object.entries(imageModules).map(([path, src]) => {
  const fileName = path.split("/").pop().replace(".webp", "");
  return {
    src: src,
    alt: customAlts[fileName] || fileName.replace(/-/g, " "),
    large: fileName === "wig-straight-full",
  };
});

export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-heading">
        <div>
          <p className="eyebrow">THE COLLECTION IN FOCUS</p>
          <h2>Beauty in <span>every detail.</span></h2>
        </div>
        <p>Discover the textures, movement and versatility that define the Rocking Hair experience.</p>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((item) => (
          <div key={item.alt} className={`gallery-item ${item.large ? "gallery-large" : ""}`}>
            <img src={item.src} alt={item.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}