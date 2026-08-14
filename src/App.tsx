import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Services from "./components/Services";
import Featured from "./components/Featured";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Featured />
        <About />
        <WhyUs />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
