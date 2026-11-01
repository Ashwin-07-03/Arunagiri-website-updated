import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export default function ContactForm() {
  const contacts = [
    { label: 'Email', value: 'agi@arunagiriindustries@gmail.com', href: 'mailto:agi@arunagiriindustries@gmail.com', icon: <Mail size={18} /> },
    { label: 'Phone', value: '+91 9108046625 / +91 9108046626', href: 'tel:+919108046625', icon: <Phone size={18} /> },
    { label: 'Address', value: '#18, 19, 32 & 33, Byraveshwara Industrial Estate, Peenya, Bengaluru — 560091', icon: <MapPin size={18} /> },
  ];

  return (
    <section className="contact-band" id="contact" aria-label="Contact details">
      <div className="container">
        <motion.div
          className="contact-band-grid"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {contacts.map((contact) => {
            const content = <>
              <span className="contact-band-icon">{contact.icon}</span>
              <span><small>{contact.label}</small><strong>{contact.value}</strong></span>
              {contact.href && <ArrowUpRight className="contact-band-arrow" size={17} />}
            </>;

            return contact.href ? (
              <a className="contact-band-item" href={contact.href} key={contact.label}>{content}</a>
            ) : (
              <div className="contact-band-item" key={contact.label}>{content}</div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
