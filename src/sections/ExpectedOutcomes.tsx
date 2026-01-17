"use client";

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const ExpectedOutcomes = () => {
  const outcomes = [
    {
      title: "Functional EV battery intelligence prototypes",
    },
    {
      title: "Indigenous firmware and reference designs",
    },
    {
      title: "Cloud dashboards demonstrating real-world battery insights",
    },
    {
      title: "A talent pool trained on Indian RISC-V processors and boards",
    },
    {
      title: "Reduced dependence on imported BMS solutions",
    },
    {
      title: "Faster innovation cycles through open, transparent platforms",
    },
    {
      title: "A pathway to deploy Make-in-India electronics in future EV programs",
    }
  ];

  return (
    <div className="bg-transparent py-24 sm:py-32 border-t border-brand-secondary/30 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="mx-auto max-w-3xl lg:text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-4 text-brand-accent border-brand-accent/30 bg-brand-accent/5 uppercase tracking-widest">
              Impact & Outcomes
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 font-display">
              Expected Outcomes & <span className="text-brand-accent">Industry Impact</span>
            </h2>
            <p className="text-lg leading-relaxed text-brand-muted">
              This hackathon aims to create more than prototypes it seeks to seed a domestic EV electronics ecosystem.
            </p>
          </motion.div>
        </div>

        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-brand-secondary/10 border border-brand-secondary/30 rounded-2xl p-6 hover:bg-brand-secondary/20 transition-all group"
            >
              <h3 className="text-lg font-bold text-white mb-2">{outcome.title}</h3>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ExpectedOutcomes;