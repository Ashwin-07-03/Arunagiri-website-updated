import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function QuoteEstimator({ onPrefillEnquiry }) {
  const [material, setMaterial] = useState('Mild Steel');
  const [thickness, setThickness] = useState('3.0 mm');
  const [process, setProcess] = useState('Laser Cut + Bend');
  const [quantity, setQuantity] = useState('50 - 200 pcs');

  const materials = ['Mild Steel', 'Stainless Steel', 'Aluminum', 'Galvanized Sheet'];
  const thicknesses = ['1.2 mm', '2.0 mm', '3.0 mm', '6.0 mm', '10.0 mm'];
  const processes = ['Laser Cut Only', 'Laser Cut + Bend', 'Complete Fabrication', 'Full Assembly'];
  const quantities = ['1 - 10 pcs (Proto)', '10 - 50 pcs', '50 - 200 pcs', '200+ Batch'];

  const getEstimatedTurnaround = () => {
    if (quantity.includes('Proto')) return '24 - 48 Hours';
    if (quantity.includes('200+')) return '5 - 7 Business Days';
    return '3 - 4 Business Days';
  };

  const handleSendToContact = () => {
    const summary = `${process} for ${material} (${thickness}), Qty: ${quantity}`;
    onPrefillEnquiry(summary);
  };

  return (
    <section className="section section-white" id="estimator">
      <div className="container">
        <div>
          <span className="mono-eyebrow">05 // ESTIMATOR</span>
          <h2 className="section-heading">Instant Job Estimator.</h2>
          <p className="section-desc">
            Configure material and batch size to calculate turnaround time and prefill a custom quote request.
          </p>
        </div>

        <motion.div
          className="estimator-box-clean"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <div style={{ marginBottom: '20px' }}>
              <span className="mono-eyebrow" style={{ fontSize: '10px', marginBottom: '8px' }}>1. MATERIAL</span>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {materials.map((m) => (
                  <button
                    key={m}
                    className={`estimator-pill-clean ${material === m ? 'active' : ''}`}
                    onClick={() => setMaterial(m)}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <span className="mono-eyebrow" style={{ fontSize: '10px', marginBottom: '8px' }}>2. THICKNESS</span>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {thicknesses.map((t) => (
                  <button
                    key={t}
                    className={`estimator-pill-clean ${thickness === t ? 'active' : ''}`}
                    onClick={() => setThickness(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <span className="mono-eyebrow" style={{ fontSize: '10px', marginBottom: '8px' }}>3. PROCESS</span>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {processes.map((p) => (
                  <button
                    key={p}
                    className={`estimator-pill-clean ${process === p ? 'active' : ''}`}
                    onClick={() => setProcess(p)}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="mono-eyebrow" style={{ fontSize: '10px', marginBottom: '8px' }}>4. BATCH SIZE</span>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {quantities.map((q) => (
                  <button
                    key={q}
                    className={`estimator-pill-clean ${quantity === q ? 'active' : ''}`}
                    onClick={() => setQuantity(q)}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="estimator-summary-clean">
            <div>
              <span className="mono-eyebrow" style={{ fontSize: '10px', marginBottom: '16px' }}>JOB SUMMARY</span>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '10px', color: '#52525b' }}>
                <span>Material</span>
                <span style={{ fontWeight: 600, color: '#09090b' }}>{material} ({thickness})</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '10px', color: '#52525b' }}>
                <span>Process</span>
                <span style={{ fontWeight: 600, color: '#09090b' }}>{process}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '10px', color: '#52525b' }}>
                <span>Batch</span>
                <span style={{ fontWeight: 600, color: '#09090b' }}>{quantity}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', borderTop: '1px solid #e4e4e7', paddingTop: '12px', marginTop: '12px', fontWeight: 600, color: '#09090b' }}>
                <span>Est. Turnaround</span>
                <span>{getEstimatedTurnaround()}</span>
              </div>
            </div>

            <button
              className="hero-btn-t1"
              style={{ background: '#09090b', color: '#ffffff', border: 'none', width: '100%', marginTop: '20px' }}
              onClick={handleSendToContact}
            >
              Request Quote for this Spec <ArrowRight size={14} style={{ marginLeft: '6px' }} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
