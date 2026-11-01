import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function TechAccordion() {
  const [expanded, setExpanded] = useState('laser');

  const techItems = [
    {
      id: 'laser',
      title: '3KW Fiber Laser Cutting Technology',
      content: 'High-speed fiber laser resonator processing steel, aluminum, and stainless steel up to 15mm with ±0.03mm precision positioning and zero micro-burrs.',
    },
    {
      id: 'bending',
      title: '5-Axis CNC Press Brake Bending',
      content: 'Amada 100-ton hydraulic bending system with automatic crowning compensation and 5-axis CNC backgauge for complex multi-stage sheet metal forming.',
    },
    {
      id: 'welding',
      title: 'Sanitary TIG & Structural MIG Welding',
      content: 'MWA professional TIG AC/DC setup for high-purity sanitary joints on stainless steel and aluminum, paired with 400A heavy-duty MIG welding stations.',
    },
    {
      id: 'cad',
      icon: 'cad',
      title: 'CAD / CAM 3D Toolpath Simulation',
      content: 'Advanced computer-aided engineering converting customer STEP/DXF files directly into automated nesting algorithms and multi-axis CNC toolpaths.',
    },
    {
      id: 'qa',
      title: 'CMM & ISO Quality Protocols',
      content: 'Coordinate Measuring Machine (CMM) dimensional verification, raw material hardness testing, and full inspection certificates accompanying every production batch.',
    },
  ];

  return (
    <section className="section tech-section" id="technology">
      <div className="container">
        <div className="tech-grid">
          <div>
            <span className="section-mono-tag">Technology_</span>
            <h2 className="section-title">Core Engineering Capabilities.</h2>
            <p className="section-subtitle">
              Engineered for high repeatability, tight tolerance standards, and minimal material waste.
            </p>
          </div>

          <div className="tech-accordions">
            {techItems.map((item) => {
              const isOpen = expanded === item.id;
              return (
                <div
                  key={item.id}
                  className="tech-accordion-item"
                  onClick={() => setExpanded(isOpen ? null : item.id)}
                >
                  <div className="tech-accordion-header">
                    <h3 className="tech-accordion-title">{item.title}</h3>
                    <div className="tech-accordion-icon">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        className="tech-accordion-body"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.content}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
