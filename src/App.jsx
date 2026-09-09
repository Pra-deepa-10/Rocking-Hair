import { useEffect } from "react";
import FullGallery from "./FullGallery";
import PrivacyPolicy from "./PrivacyPolicy";
import Terms from "./Terms";
import ShippingInfo from "./ShippingInfo";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import About from "./components/About";
import Products from "./components/Products";
import VideoSection from "./components/VideoSection";
import Quality from "./components/Quality";
import Custom from "./components/Custom";
import Care from "./components/Care";
import EnquirySection from "./components/EnquirySection";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

function App() {
  const path = typeof window !== 'undefined' ? window.location.pathname : '';
  if (path === "/gallery" || path === "/gallery/") {
    return <FullGallery />;
  }
  
  if (window.location.pathname === "/privacy-policy") {
    return <PrivacyPolicy />;
  }
  if (window.location.pathname === "/terms") {
    return <Terms />;
  }
  if (window.location.pathname === "/shipping") {
    return <ShippingInfo />
  }

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

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <VideoSection />
        <Benefits />
        <Products />
        <About />
        <Quality />
        <Custom />
        <Care />
        <Gallery />
        <EnquirySection />
        <Footer />
      </main>
    </>
  );
}

export default App;