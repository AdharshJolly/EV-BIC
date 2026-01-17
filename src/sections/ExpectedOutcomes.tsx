"use client";

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Globe, Lightbulb, Award } from 'lucide-react';

const ExpectedOutcomes = () => {
  const outcomes = [
    {
      icon: TrendingUp,
      title: "Enhanced Battery Reliability",
      desc: "Improved prediction of battery lifespan and performance degradation"
    },
    {
      icon: Globe,
      title: "Industry Advancement",
      desc: "Development of indigenous EV battery intelligence solutions"
    },
    {
      icon: Lightbulb,
      title: "Innovation Ecosystem",
      desc: "Fostering a community of skilled engineers in EV technology"
    },
    {
      icon: Award,
      title: "Safety Standards",
      desc: "Establishing new benchmarks for EV battery safety monitoring"
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
              The EV Battery Intelligence Challenge aims to deliver transformative solutions that will shape the future of electric mobility in India and beyond.
            </p>
          </motion.div>
        </div>

        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((outcome, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-brand-secondary/10 border border-brand-secondary/30 rounded-2xl p-6 hover:bg-brand-secondary/20 transition-all group"
            >
              <outcome.icon className="w-8 h-8 text-brand-muted group-hover:text-brand-accent transition-colors mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">{outcome.title}</h3>
              <p className="text-sm text-brand-muted">{outcome.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ExpectedOutcomes;