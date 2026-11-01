import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-full" id="home">
      <img
        className="hero-photo"
        src="/images/laser-cutting-action.jpg"
        alt="Precision laser cutting in progress"
      />
      <div className="hero-photo-overlay" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orbit" aria-hidden="true"><span className="hero-orbit-mark" /></div>

      <div className="hero-container">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="hero-kicker">Arunagiri Industries / Bengaluru, India</p>
            <h1 className="hero-title-t1">Precision built for what’s next.</h1>
            <div className="hero-actions">
              <a href="#contact" className="button">Start a project <ArrowDownRight size={15} /></a>
              <a href="#facilities" className="button button--ghost">Explore our facility</a>
            </div>
          </div>
          <p className="hero-subtitle">CNC machining, laser cutting and sheet metal fabrication for ambitious industrial teams.</p>
        </motion.div>
      </div>
    </section>
  );
}
