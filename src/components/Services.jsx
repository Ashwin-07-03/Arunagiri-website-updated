import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Wrench, Cpu, ShieldCheck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Zap />,
      title: 'CNC Laser Cutting',
      desc: 'High-precision laser cutting with 3KW capacity for various materials and thicknesses. Perfect for intricate designs and clean edges on metal sheets up to 15mm thickness.',
      image: '/images/laser-cutting-action.jpg',
    },
    {
      icon: <Wrench />,
      title: 'Sheet Metal Fabrication',
      desc: 'Complete fabrication solutions from cutting to final assembly and finishing. Includes bending, forming, welding, and powder coating for durable, professional results.',
      image: '/images/services-background.jpg',
    },
    {
      icon: <Cpu />,
      title: 'CAD/CAM Design',
      desc: 'Advanced computer-aided design and manufacturing solutions for optimized production. From concept to reality with 3D modeling, simulation, and toolpath generation.',
      image: '/images/service-cad-cam.png',
    },
    {
      icon: <ShieldCheck />,
      title: 'Quality Assurance',
      desc: 'Rigorous testing and inspection ensuring products meet specifications. CMM inspection, material testing, and comprehensive documentation for every project.',
      image: '/images/service-quality-assurance.png',
    },
  ];

  return (
    <section className="services-section" id="technology">
      <div className="container">
        <div className="services-heading">
          <span className="mono-eyebrow">03 / SERVICES</span>
          <h2>Our services.</h2>
          <p>From prototyping to full-scale production, we deliver comprehensive manufacturing solutions with precision and reliability.</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.article
              className="service-card"
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
            >
              <img src={service.image} alt="" />
              <div className="service-card-content">
                <span className="service-icon">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
              </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
