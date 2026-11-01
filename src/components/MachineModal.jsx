import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';

export default function MachineModal({ machine, onClose, onEnquire }) {
  if (!machine) return null;

  return (
    <AnimatePresence>
      <div className="modal-overlay" onClick={onClose}>
        <motion.div
          className="modal-content"
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            <X size={18} />
          </button>

          <span className="mono-eyebrow">Equipment spec sheet</span>
          <h3 className="modal-title">
            {machine.name}
          </h3>
          <p className="machine-model" style={{ color: 'var(--ink-soft)', marginBottom: '20px' }}>
            {machine.model}
          </p>

          <p style={{ color: 'var(--ink-soft)', fontSize: '13px', marginBottom: '20px' }}>
            {machine.desc}
          </p>

          <div className="modal-specs">
            {machine.specs.map((spec, i) => (
              <div key={i} className="modal-spec">
                <span className="detail-label">{spec.label}</span>
                <span className="detail-value">{spec.value}</span>
              </div>
            ))}
          </div>

          <div>
            <span className="detail-label">Key capabilities</span>
            <ul className="modal-features">
              {machine.features.map((feat, i) => (
                <li key={i}>
                  <Check size={12} /> {feat}
                </li>
              ))}
            </ul>
          </div>

          <button
            className="button button--dark"
            onClick={() => {
              onEnquire(machine.name);
              onClose();
            }}
          >
            Request Job Quote for this Machine
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
