import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Facilities() {
  const facilities = [
    {
      id: 'peenya-integrated',
      label: 'Integrated Facility / Peenya',
      name: 'Precision Manufacturing Centre',
      desc: 'One integrated facility for laser cutting, CNC bending, fabrication, welding, quality inspection and final assembly.',
    },
  ];

  return (
    <section className="section section-black" id="facilities">
      <div className="container">
        <div className="section-header-block">
          <span className="mono-eyebrow">02 // FACILITIES</span>
          <h2 className="section-heading">One facility. Every critical process.</h2>
          <p className="section-desc">
            An end-to-end manufacturing centre in Peenya Industrial Estate, Bengaluru.
          </p>
        </div>

        <div className="facilities-grid-clean facilities-grid-clean--single">
          {facilities.map((f, index) => (
            <motion.div
              key={f.id}
              className="facility-card-clean"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                className="facility-media-clean facility-photo"
                src="/images/production-floor.jpg"
                alt="Arunagiri Industries production and assembly floor"
              />

              <div className="facility-body-clean">
                <div>
                  <span className="facility-label">{f.label}</span>
                  <h3 className="facility-title">{f.name}</h3>
                  <p className="facility-description">{f.desc}</p>
                </div>
                <a href="#machinery" className="facility-arrow" aria-label={`Inspect ${f.name}`}>
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="manufacturing-flow" aria-label="Manufacturing workflow">
          <span>Design &amp; prepare</span><i />
          <span>Cut &amp; form</span><i />
          <span>Weld &amp; assemble</span><i />
          <span>Inspect &amp; dispatch</span>
        </div>
      </div>
    </section>
  );
}
