import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar({ activeSection }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 20);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  const navItems = [
    { id: 'technology', label: 'Technology' },
    { id: 'facilities', label: 'Manufacturing' },
    { id: 'about', label: 'Company' },
    { id: 'contact', label: 'Contact ↗' },
  ];

  return (
    <motion.header
      className={`header ${isScrolled ? 'header--scrolled' : ''}`}
      initial={{ opacity: 0, y: -28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="header-inner">
        <motion.a href="#home" className="header-logo" whileHover={{ scale: 1.035 }} whileTap={{ scale: 0.98 }}>
          <img src="/logo-transparent.png" alt="Arunagiri Industries" className="header-logo-img" />
        </motion.a>

        {/* T1 Floating Translucent Pill Navigation Bar */}
        <div className={`header-nav-pill ${mobileOpen ? 'mobile-open' : ''}`}>
          {navItems.map((item) => {
            const isCTA = item.id === 'contact';
            return (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                className={`header-nav-link ${activeSection === item.id ? 'active' : ''} ${isCTA ? 'header-cta-pill' : ''}`}
                onClick={() => setMobileOpen(false)}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.96 }}
              >
                {item.label}
              </motion.a>
            );
          })}
        </div>

        <button
          className="hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </motion.header>
  );
}
