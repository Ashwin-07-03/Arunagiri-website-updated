import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-clean" id="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="header-logo">
              <img src="/logo-transparent.png" alt="Arunagiri Industries" className="header-logo-img" />
            </a>
            <p className="footer-tagline">
              Building domestic solar, sports, and industrial hardware supply chains through advanced precision manufacturing in Bengaluru.
            </p>
            <div className="footer-legal">
              <span>GSTIN: 29AAWCA5903H1Z8</span>
              <span>CIN: U29299KA2022PTC158398</span>
            </div>
          </div>

          <div className="footer-links-group">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#about">Company_</a></li>
              <li><a href="#facilities">Manufacturing_</a></li>
              <li><a href="#technology">Technology_</a></li>
              <li><a href="#machinery">Fleet_</a></li>
              <li><a href="#products">Products_</a></li>
              <li><a href="#contact">Contact_</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:agi@arunagiriindustries@gmail.com">agi@arunagiriindustries@gmail.com</a></li>
              <li><a href="tel:+919108046625">+91 9108046625</a></li>
              <li><a href="tel:+919108046626">+91 9108046626</a></li>
              <li style={{ marginTop: '6px', fontSize: '11px', color: 'var(--fg-dark-2)' }}>
                #18, 19, 32 & 33, Byraveshwara Industrial Estate, Peenya, Bengaluru — 560091
              </li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Resources</h4>
            <ul>
              <li><a href="#about">ISO Certification</a></li>
              <li><a href="#technology">Material Specs</a></li>
              <li><a href="#contact">Factory Visits</a></li>
              <li><a href="#products">Product Catalog</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Arunagiri Industries Pvt. Ltd.</span>
          <span>Bengaluru, Karnataka, India</span>
        </div>
      </div>
    </footer>
  );
}
