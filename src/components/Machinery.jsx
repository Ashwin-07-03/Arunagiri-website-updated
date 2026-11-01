import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import MachineModal from './MachineModal';

export default function Machinery({ onSelectMachineForEnquiry }) {
  const [activeMachine, setActiveMachine] = useState(null);

  const machineryList = [
    {
      id: 'bfw-bmv-50-tc24',
      image: '/images/bfw-bmv-50-tc24.jpg',
      name: 'Vertical Machining Centre',
      model: 'BFW BMV 50 TC24',
      desc: 'Vertical CNC machining centre for accurate, repeatable production of precision components.',
      specs: [
        { label: 'Machine Type', value: 'Vertical Machining Centre' },
        { label: 'Model', value: 'BFW BMV 50 TC24' },
        { label: 'Tooling', value: 'Automatic Tool Changer' },
        { label: 'Application', value: 'Precision Component Machining' },
      ],
      features: [
        'Multi-operation CNC machining',
        'Repeatable production of close-tolerance parts',
        'Suitable for component and fixture manufacturing',
      ],
    },
    {
      id: 'ace-sje-08-lm',
      image: '/images/ace-sje-08-lm.jpg',
      name: 'CNC Turning Centre',
      model: 'Ace Micromatic SJE 08 LM',
      desc: 'CNC turning centre for efficient precision turning of production components.',
      specs: [
        { label: 'Machine Type', value: 'CNC Turning Centre' },
        { label: 'Model', value: 'Ace Micromatic SJE 08 LM' },
        { label: 'Process', value: 'Precision Turning' },
        { label: 'Application', value: 'Production Components' },
      ],
      features: [
        'Consistent CNC turning cycles',
        'Suitable for repeat production work',
        'Compact automated machining setup',
      ],
    },
    {
      id: 'equipment-inspector',
      image: '/images/equipment-inspector.jpg',
      name: 'Laser Engraving Machine',
      model: 'Computer-Assisted Inspection Station',
      desc: 'Computer-assisted inspection system for checking component quality and measurement results.',
      specs: [
        { label: 'Machine Type', value: 'Inspection System' },
        { label: 'Control', value: 'Computer-Assisted' },
        { label: 'Application', value: 'Component Quality Inspection' },
        { label: 'Output', value: 'Measurement Results' },
      ],
      features: [
        'Dedicated inspection workstation',
        'Digital measurement result display',
        'Supports quality control checks',
      ],
    },
    {
      id: 'laser-3kw',
      image: '/images/laser-cutter.jpg',
      name: 'CNC Laser Cutting Machine',
      model: '3KW Fiber Laser (3000 × 1500 MM)',
      desc: 'Process mild steel up to 15mm, stainless steel up to 8mm, and aluminum up to 6mm.',
      specs: [
        { label: 'Bed Capacity', value: '3000 × 1500 mm' },
        { label: 'Laser Power', value: '3000 Watts Fiber' },
        { label: 'Max Steel Thickness', value: '15 mm MS / 8 mm SS' },
        { label: 'Positioning Accuracy', value: '±0.03 mm' },
      ],
      features: [
        'Intricate pattern geometry cutting',
        'Minimal heat-affected zones & zero edge burrs',
        'Automatic nesting optimization for minimal scrap',
      ],
    },
    {
      id: 'press-brake',
      image: '/images/press-brake.jpg',
      name: 'CNC 5-Axis Press Brake',
      model: 'Amada RG M2 1003',
      desc: '100-ton hydraulic press brake with 5-axis CNC backgauge for repeat bending accuracy.',
      specs: [
        { label: 'Bending Force', value: '100 Tons' },
        { label: 'Bending Length', value: '3000 mm' },
        { label: 'Control Axes', value: '5-Axis CNC' },
        { label: 'Repeatability', value: '±0.01 mm' },
      ],
      features: [
        'Multi-stage complex angle bending',
        'Automatic crowning compensation',
        'Consistent precision across full 3m sheet length',
      ],
    },
    {
      id: 'tig-welder',
      image: '/images/tig-welder.jpg',
      name: 'TIG Welding Station',
      model: 'MWA Professional Series',
      desc: 'High-purity TIG welding setup for sanitary joints on stainless steel & aluminum.',
      specs: [
        { label: 'Process', value: 'GTAW / TIG AC/DC' },
        { label: 'Duty Cycle', value: '100% @ 250A' },
        { label: 'Materials', value: 'SS 304/316, Aluminum, Titanium' },
        { label: 'Weld Finish', value: 'Sanitary / Food Grade' },
      ],
      features: [
        'Ultra-clean aesthetic weld beads',
        'Minimal thermal distortion on thin sheets',
        'X-ray quality weld integrity',
      ],
    },
    {
      id: 'mig-welder',
      image: '/images/mig-welder.jpg',
      name: 'MIG Welding Station',
      model: 'Industrial Grade 400A Heavy Duty',
      desc: '400A heavy-duty MIG welding setup for high-volume structural metal assembly.',
      specs: [
        { label: 'Max Output', value: '400 Amps' },
        { label: 'Wire Feed', value: '4-Roll Automatic Synchronized' },
        { label: 'Process', value: 'GMAW / FCAW' },
        { label: 'Duty Cycle', value: '60% @ 400A' },
      ],
      features: [
        'Deep penetration structural welds',
        'High deposition rate for production speed',
        'Heavy tubular and plate welding',
      ],
    },
    {
      id: 'compressor',
      image: '/images/air-compressor.jpg',
      name: 'Industrial Air Compressor',
      model: 'Kaeser 1000L Rotary Screw System',
      desc: '1000L compressed air system providing dry assist gases for laser cutting operations.',
      specs: [
        { label: 'Tank Capacity', value: '1000 Liters' },
        { label: 'Operating Pressure', value: '10 - 13 Bar' },
        { label: 'Air Dryer', value: 'Integrated Refrigerant Dryer' },
        { label: 'Filtration', value: '0.01 Micron Oil-Free' },
      ],
      features: [
        'Continuous 24/7 industrial duty cycle',
        'Moisture-free clean air supply',
        'Power-efficient variable speed drive',
      ],
    },
    {
      id: 'riveting',
      image: '/images/riveting-machine.jpg',
      name: 'Pneumatic Riveting Machine',
      model: 'SL-TECH SL-618 Heavy Duty',
      desc: '54kN insertion machine for PEM self-clinching studs, nuts, and flush sheet joints.',
      specs: [
        { label: 'Press Force', value: '54 kN (6 Tons)' },
        { label: 'Throat Depth', value: '450 mm' },
        { label: 'Fasteners', value: 'PEM Studs, Nuts, Standoffs' },
        { label: 'Control', value: 'Pressure & Position Repeatability' },
      ],
      features: [
        'Distortion-free clinch fastener insertion',
        'Automated stroke force limit safety',
        'Clean flush finish on finished enclosures',
      ],
    },
  ];

  const supportingEquipment = [
    { name: 'Survo Tapping Machine', image: '/images/cmm-inspection.jpg' },
    { name: 'Bench Drilling', image: '/images/bench-drill.jpg' },
    { name: 'Handheld Laser Welding', image: '/images/handheld-laser-welder.jpg' },
  ];

  return (
    <section className="section section-black" id="machinery">
      <div className="container">
        <div className="section-header-block">
          <span className="mono-eyebrow">04 // FLEET</span>
          <h2 className="section-heading">Our machinery.</h2>
          <p className="section-desc">
            Click any row to inspect machine specs, tolerances, and bed capacities.
          </p>
        </div>

        <div className="machinery-list-clean">
          {machineryList.map((m, index) => (
            <motion.div
              key={m.id}
              className="machine-row-clean"
              onClick={() => setActiveMachine(m)}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <span className="machine-index">
                0{index + 1}
              </span>

              <div className="machine-thumbnail">
                <img src={m.image} alt="" />
              </div>

              <div>
                <h3 className="machine-name">{m.name}</h3>
                <p className="machine-description">{m.desc}</p>
              </div>

              <span className="machine-model">
                {m.model}
              </span>

              <div className="machine-arrow">
                <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="supporting-equipment" aria-label="Supporting equipment">
          {supportingEquipment.map((machine) => (
            <div className="supporting-equipment-card" key={machine.name}>
              <img src={machine.image} alt={machine.name} />
              <span>{machine.name}</span>
            </div>
          ))}
        </div>
      </div>

      <MachineModal
        machine={activeMachine}
        onClose={() => setActiveMachine(null)}
        onEnquire={(name) => onSelectMachineForEnquiry(name)}
      />
    </section>
  );
}
