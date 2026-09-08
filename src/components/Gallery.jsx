import "./Gallery.css";
import "../index.css";

import closureBlondeBodyWave from "../assets/product-images/closure-blonde-body-wave.webp";
import closureBodyWave from "../assets/product-images/closure-body-wave.webp";
import closureBodyWaveTransparentLace from "../assets/product-images/closure-body-wave-transparent-lace.webp";
import closureCurlBlack from "../assets/product-images/closure-curl-black.webp";
import closureStraightPair from "../assets/product-images/closure-straight-pair.webp";
import closureStraightTransparentLaceBack from "../assets/product-images/closure-straight-transparent-lace-back-view.webp";
import closureStraightTransparentLaceFront from "../assets/product-images/closure-straight-transparent-lace-front-view.webp";
import closureWavyPair from "../assets/product-images/closure-wavy-pair.webp";
import curlyBundlesWeft from "../assets/product-images/curly-bundles-weft.webp";
import extensionCurl from "../assets/product-images/extension-curl.webp";
import extensionWhite from "../assets/product-images/extension-white.webp";
import hairExtensions from "../assets/product-images/hair-extensions.webp";
import straightBundlesBlack from "../assets/product-images/straight-bundles-black.webp";
import tapeInExtensionsCollectionWhite from "../assets/product-images/tape-in-extensions-collection-white.webp";
import wavyBundles from "../assets/product-images/wavy-bundles.webp";
import frontalBodyBrown from "../assets/product-images/frontal-body-brown.webp";
import frontalBodyWaveBlonde from "../assets/product-images/frontal-body-wave-blonde.webp";
import frontalWaveTransparentLace from "../assets/product-images/frontal-wave-transparent-lace.webp";
import goldWaveWig from "../assets/product-images/gold-wave-wig.webp";
import multicolorWigs from "../assets/product-images/multicolor-wigs.webp";
import frontalStraight from "../assets/product-images/frontal-straight.webp";
import wigStraightFull from "../assets/product-images/wig-straight-full.webp";
import wigStraightFullBack from "../assets/product-images/wig-straight-full-back.webp";
import wigStraightGluelessFront from "../assets/product-images/wig-straight-glueless-front-view.webp";
import wigWhite from "../assets/product-images/wig-white.webp";
import wigWhiteStraight from "../assets/product-images/wig-white-straight.webp";
import wigWhiteWave from "../assets/product-images/wig-white-wave.webp";

const galleryImages = [
  { src: closureBlondeBodyWave, alt: "Blonde body wave closure" },
  { src: closureBodyWave, alt: "Body wave closure" },
  { src: closureBodyWaveTransparentLace, alt: "Body wave transparent lace closure" },
  { src: closureCurlBlack, alt: "Black curly closure" },
  { src: closureStraightPair, alt: "Straight hair closures" },
  { src: closureStraightTransparentLaceBack, alt: "Straight transparent lace back" },
  { src: closureStraightTransparentLaceFront, alt: "Straight transparent lace front" },
  { src: closureWavyPair, alt: "Wavy closures" },
  { src: curlyBundlesWeft, alt: "Curly bundles" },
  { src: extensionCurl, alt: "Curly extensions" },
  { src: extensionWhite, alt: "White extensions" },
  { src: frontalBodyBrown, alt: "Brown body wave frontal" },
  { src: frontalBodyWaveBlonde, alt: "Blonde body wave frontal" },
  { src: frontalWaveTransparentLace, alt: "Wave transparent lace frontal" },
  { src: goldWaveWig, alt: "Gold wave wig" },
  { src: hairExtensions, alt: "Hair extensions" },
  { src: multicolorWigs, alt: "Multicolor wigs" },
  { src: straightBundlesBlack, alt: "Straight black bundles" },
  { src: tapeInExtensionsCollectionWhite, alt: "Tape in extensions" },
  { src: wavyBundles, alt: "Wavy bundles" },
  { src: frontalStraight, alt: "Straight frontals" },
  { src: wigStraightFull, alt: "Premium straight wig", large: true },
  { src: wigStraightFullBack, alt: "Straight wig back" },
  { src: wigStraightGluelessFront, alt: "Glueless straight wig" },
  { src: wigWhite, alt: "White wig" },
  { src: wigWhiteStraight, alt: "White straight wig" },
  { src: wigWhiteWave, alt: "White wave wig" },
];

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
            <img src={item.src} alt={item.alt} loading="eager" />
          </div>
        ))}
      </div>
    </section>
  );
}