import "./Gallery.css";

const imageModules = import.meta.glob(
  "../assets/product-images/*.webp",
  { eager: true, import: "default" }
);

const galleryImages = Object.entries(imageModules).map(([path, src]) => {
  const fileName = path.split("/").pop().replace(".webp", "");
  return {
    src: src,
    alt: "something went wrong",
    fileName: fileName,
    large: fileName === "wig-10" || fileName === "wig-14",
  };
});

// UPDATED to your corrected names from screenshot
const featuredNames = [
  "bundle-curl",
  "closure-4",
  "frontal-8",
  "wig-15",
  "hair-extension-1",
  "i-tips-1",
  "clip-in-extension-1",
  "wig-10",
];

export default function Gallery() {
  const previewImages = galleryImages.filter(img => featuredNames.includes(img.fileName)).slice(0, 8);
  const displayImages = previewImages.length >= 6 ? previewImages : galleryImages.slice(0, 8);

  return (
    <section className="gallery-section reveal" id="gallery">
      <div className="gallery-heading">
        <div className="gallery-heading-left">
          <p className="eyebrow">THE COLLECTION IN FOCUS</p>
          <h2>Beauty in <span>every detail.</span></h2>
        </div>
        <div className="gallery-heading-right">
          <p>Discover the textures, movement and versatility that define our experience.</p>
          <a href="/gallery" className="text-link">
            DISCOVER MORE →
          </a>
        </div>
      </div>

      <div className="gallery-grid">
        {displayImages.map((item) => (
          <div key={item.fileName} className={`gallery-item ${item.large ? "gallery-large" : ""}`}>
            <img src={item.src} alt="something went wrong" loading="lazy" />
          </div>
        ))}
      </div>

      <div className="gallery-bottom-action">
        <a href="/gallery" className="text-link">
          EXPLORE GALLERY →
        </a>
      </div>
    </section>
  );
}