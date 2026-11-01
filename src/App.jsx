import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Facilities from './components/Facilities';
import Services from './components/Services';
import Machinery from './components/Machinery';
import Products from './components/Products';
import ClientsMarquee from './components/ClientsMarquee';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.2,
    });

    let frameId;
    const raf = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'facilities', 'technology', 'machinery', 'products', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrefillEnquiry = (serviceOrSummary) => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <Mission />
        <Facilities />
        <Services />
        <Machinery onSelectMachineForEnquiry={handlePrefillEnquiry} />
        <Products onSelectProductForEnquiry={handlePrefillEnquiry} />
        <ClientsMarquee />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
