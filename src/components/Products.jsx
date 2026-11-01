import React from 'react';
import { motion } from 'framer-motion';

export default function Products({ onSelectProductForEnquiry }) {
  const products = [
    { title: 'Production systems', detail: 'Designed and assembled at scale', image: '/images/production-floor.jpg', featured: true },
    { title: 'Precision Components / Sub Assemblies', detail: 'Jigs, dies and custom tooling', image: '/images/precision-tooling-die.jpg' },
    { title: 'Machined components', detail: 'Tight-tolerance metal parts', image: '/images/machined-components.jpg' },
    { title: 'Gigs and fixtures', detail: 'Purpose-built production aids', image: '/images/custom-fixture.png' },
    { title: 'Precision Components', detail: 'Complex profile and spiral forms', image: '/images/spiral-tooling.png' },
    { title: 'Motor Cycle Dynamo Meter', detail: 'Built for demanding operations', image: '/images/material-handling.png' },
    { title: 'Super thrower automatic', detail: 'Purpose-built training machines', image: '/images/freebowler-machine.jpg' },
    { title: 'Material Handling & Special Purpose Machines', detail: 'Precision fabricated equipment', image: '/images/mobile-robot-enclosure.jpg' },
    { title: 'Aluminium enclosures', detail: 'Rigid structural enclosures', image: '/images/sheet-metal-frame.jpg' },
    { title: 'Fabricated housings', detail: 'Designed for production assemblies', image: '/images/fabricated-housings.jpg' },
    { title: 'Electronic enclosures', detail: 'Precision formed metal housings', image: '/images/electronic-enclosure.jpg' },
    { title: 'Air service pedestal', detail: 'Durable branded equipment housing', image: '/images/air-pedestal.jpg' },
  ];

  return (
    <section className="section product-story" id="products">
      <div className="container">
        <div className="product-story-heading">
          <span className="mono-eyebrow">05 / WORK</span>
          <h2>Made for the work<br />that matters.</h2>
          <p>From one-off precision tools to production-ready equipment, every finished piece is shaped around the job it needs to do.</p>
        </div>
        <div className="product-gallery">
          {products.map((product, index) => (
            <motion.article className={`product-tile ${product.featured ? 'product-tile--featured' : ''}`} key={product.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.06 }}>
              <img src={product.image} alt={product.title} />
              <div className="product-tile-overlay">
                <span>{String(index + 1).padStart(2, '0')} / Arunagiri work</span>
                <div><h3>{product.title}</h3><p>{product.detail}</p></div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
