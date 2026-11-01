import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, Factory, Gauge, UsersRound } from 'lucide-react';

export default function Mission() {
  return (
    <section className="section section-white" id="about">
      <div className="container">
        <div className="mission-layout">
          <span className="mono-eyebrow">01 // MISSION</span>

          <motion.div
            style={{ width: '100%' }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mission-statement-clean">
              Engineering excellence for modern industry.
            </h2>

            <div className="mission-copy">
              <p>ARUNAGIRI INDUSTRIES PVT. LTD. offers a comprehensive range of manufacturing services, including CNC machining, CNC Laser &amp; Bending, all types of welding processes, assembly, and quality assurance testing.</p>
              <p>Whether it's prototyping new concepts or scaling production for established products, our experienced team collaborates closely with clients to achieve optimal outcomes. We take pride in our ability to provide flexible solutions that meet varying project specifications and timelines.</p>
              <p>Our dedication to sustainability and ethical practices underscores every aspect of our operations, ensuring that we not only meet regulatory requirements but also contribute positively to the environment and communities we serve.</p>
            </div>

            <div className="stats-cards-row">
              <div className="stat-card-clean">
                <UsersRound className="mission-stat-icon" aria-hidden="true" />
                <div className="stat-val-clean">35</div>
                <div className="stat-lbl-clean">Skilled professionals dedicated to precision manufacturing</div>
              </div>
              <div className="stat-card-clean">
                <Gauge className="mission-stat-icon" aria-hidden="true" />
                <div className="stat-val-clean">65HP</div>
                <div className="stat-lbl-clean">Power capacity ensuring efficient production capabilities</div>
              </div>
              <div className="stat-card-clean">
                <Factory className="mission-stat-icon" aria-hidden="true" />
                <div className="stat-val-clean">15+</div>
                <div className="stat-lbl-clean">Advanced machinery for comprehensive manufacturing solutions</div>
              </div>
              <div className="stat-card-clean">
                <CalendarDays className="mission-stat-icon" aria-hidden="true" />
                <div className="stat-val-clean">2022</div>
                <div className="stat-lbl-clean">Established with a vision for manufacturing excellence</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
