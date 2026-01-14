"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const Marquee = () => {
  const items = [
    "Indigenous Compute",
    "RISC-V Architecture",
    "Future Mobility",
    "Sustainable Energy",
    "Battery Intelligence",
    "Edge AI",
    "Smart Thermal Management"
  ];

  return (
    <div className="relative py-12 bg-brand-primary border-y border-brand-secondary overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-brand-accent/5 blur-3xl"></div>
      
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {[...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center gap-8 group">
              <span className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-brand-text to-brand-text/50 group-hover:from-brand-accent group-hover:to-lime-500 transition-all duration-300">
                {item}
              </span>
              <Zap className="text-brand-accent w-6 h-6 sm:w-8 sm:h-8 opacity-50" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
