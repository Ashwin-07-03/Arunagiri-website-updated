import React from 'react';

export default function ClientsMarquee() {
  const clients = [
    { name: 'Aerosky', logo: '/images/clients/aerosky.jpg' },
    { name: 'Freebowler', logo: '/images/clients/freebowler.jpg' },
    { name: 'IRA', logo: '/images/clients/ira.jpg' },
    { name: 'Alpha Design Technologies', logo: '/images/clients/alpha-design-technologies.jpg' },
    { name: 'Tesseract Advanced Systems', logo: '/images/clients/tesseract-advanced-systems.jpg' },
    { name: 'Vasmed', logo: '/images/clients/vasmed.png' },
    { name: 'Cambricin', logo: '/images/clients/cambricin.jpg' },
    { name: 'Innovation Glass', logo: '/images/clients/innovation-glass.png' },
    { name: 'ReVx Energy', logo: '/images/clients/revx-energy.png' },
  ];
  const industries = [
    { name: 'Aerospace and defence', intro: 'Precision-built components and assemblies for demanding aerospace and defence applications.', image: '/images/industry-aerospace-defence.png' },
    { name: 'Automotive industry', intro: 'Reliable fabricated parts and production support for modern vehicle manufacturing.', image: '/images/industry-automotive.png' },
    { name: 'Robotics industry', intro: 'Accurate enclosures, frames and custom parts for advanced robotic systems.', image: '/images/industry-robotics.png' },
    { name: 'Medtech industry', intro: 'Carefully manufactured components and enclosures for medical technology equipment.', image: '/images/industry-medtech.png' },
  ];

  return (
    <>
    <section className="section industries">
      <div className="container">
        <div className="industries-heading">
          <span className="section-eyebrow">Industries we serve</span>
          <h2 className="section-title">Built for the industries shaping tomorrow.</h2>
        </div>
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <article className="industry-card" key={industry.name}>
              <img src={industry.image} alt="" />
              <div className="industry-card-copy">
                <span className="industry-index">0{index + 1}</span>
                <h3>{industry.name}</h3>
                <p>{industry.intro}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
    <section className="section clients">
      <div className="container">
        <div className="section-header center">
          <span className="section-eyebrow">Industry Standard</span>
          <h2 className="section-title">Trusted by engineering leaders.</h2>
          <p className="section-subtitle">
            Delivering precision manufacturing solutions for industrial OEMs and technology innovators across India.
          </p>
        </div>

        <div className="marquee-wrapper">
          <div className="marquee-track">
            {clients.map((client) => (
              <div className="client-logo" key={client.name}>
                <img src={client.logo} alt={`${client.name} logo`} />
              </div>
            ))}
            {/* Seamless duplicate loop */}
            {clients.map((client) => (
              <div className="client-logo" key={`dup-${client.name}`} aria-hidden="true">
                <img src={client.logo} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
