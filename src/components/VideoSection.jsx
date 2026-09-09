import "./VideoSection.css";

export default function VideoSection() {
  return (
    <section className="video-section" id="video">
      <div className="video-heading">
        <div>
          <p className="eyebrow">INSIDE OUR COLLECTION</p>
          <h2>Our inventory<span>in view.</span></h2>
        </div>
        <p>From silky straight to deep waves - closures, frontals and bundles ready for wholesale.</p>
      </div>

      <div className="video-single-wrapper">
        <video 
          autoPlay
          muted
          loop
          playsInline
          controls
          preload="metadata"
          className="single-video"
          poster=""
        >
          <source src="/videos/showroom-tour.mp4" type="video/mp4" />
          Your browser does not support video.
        </video>
        <div className="video-caption">
          <p>100+ varieties in stock | Hosur Warehouse</p>
        </div>
      </div>
    </section>
  );
}