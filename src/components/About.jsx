import React from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">Who We Are</span>
            <h2 className="section-title">Built on precision.<br />Driven by innovation.</h2>
            <p className="body-text">
              Arunagiri Industries Pvt. Ltd. offers a comprehensive range of manufacturing services — CNC machining, laser cutting & bending, advanced welding processes, electro-mechanical assembly, and quality assurance testing.
            </p>
            <p className="body-text">
              Whether prototyping new concepts or scaling production for established industrial clients, our experienced engineering team collaborates closely to achieve optimal manufacturing outcomes across timelines.
            </p>
            <p className="body-text">
              Our dedication to precision tolerances, ethical practices, and lean operations underscores every project we deliver from our facility in Peenya Industrial Estate, Bengaluru.
            </p>

            <div className="company-details">
              <div className="detail-item">
                <span className="detail-label">GSTIN</span>
                <span className="detail-value">29AAWCA5903H1Z8</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">CIN</span>
                <span className="detail-value">U29299KA2022PTC158398</span>
              </div>
            </div>
          </motion.div>

          <div className="about-visual">
            <motion.div
              className="photo-placeholder photo-about"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="photo-placeholder-inner">
                <div className="placeholder-icon">
                  <ImageIcon />
                </div>
                <p>Company / Facility Photo</p>
              </div>
            </motion.div>

            <motion.div
              className="photo-placeholder photo-about-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="photo-placeholder-inner">
                <div className="placeholder-icon small">
                  <ImageIcon />
                </div>
                <p>Workshop & Assembly Floor Photo</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
