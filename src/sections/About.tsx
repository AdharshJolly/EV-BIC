"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  Database,
  LayoutDashboard,
  Cpu,
  Globe,
  Target,
  Users,
  Cloud,
  Rocket,
  BarChart3,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const objectives = [
    {
      icon: Zap,
      title: "Battery Health",
      desc: "Health estimation and degradation tracking",
    },
    {
      icon: Shield,
      title: "Safety Monitoring",
      desc: "Thermal and safety monitoring",
    },
    {
      icon: Database,
      title: "Predictive Analytics",
      desc: "Predicting battery lifespan",
    },
    {
      icon: LayoutDashboard,
      title: "Cloud Integration",
      desc: "Secure edge-to-cloud pipelines",
    },
  ];

  return (
    <div className="bg-transparent py-24 sm:py-32 border-t border-brand-secondary/30 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Header - Original Text */}
        <div className="mx-auto max-w-3xl lg:text-center mb-20">
          <Badge
            variant="outline"
            className="mb-4 text-brand-accent border-brand-accent/30 bg-brand-accent/5 uppercase tracking-widest"
          >
            The Mission
          </Badge>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 font-display"
          >
            Driving Innovation in the Indian{" "}
            <span className="text-brand-accent">EV Ecosystem</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg leading-relaxed text-brand-muted"
          >
            India&apos;s rapid transition towards electric mobility requires
            robust battery safety and reliability. The EV Battery Intelligence
            Challenge empowers you to build the future of sustainable transport.
          </motion.p>
        </div>

        {/* Bento Grid Layout for Original Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
          {/* The Platform - Featured Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:col-span-2 lg:col-span-2 row-span-2 bg-brand-secondary/10 border border-brand-secondary rounded-2xl p-8 flex flex-col relative overflow-hidden group hover:border-brand-accent/30 transition-all"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
              <Cpu className="w-64 h-64 text-brand-accent" />
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-brand-accent/10 rounded-xl border border-brand-accent/20">
                <Cpu className="w-6 h-6 text-brand-accent" />
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                The Platform
              </h3>
            </div>
            <h4 className="text-lg font-bold text-white mb-4">
              VSDSquadron ULTRA + THEJAS32 (C-DAC VEGA)
            </h4>
            <p className="text-brand-muted leading-relaxed mb-6">
              VSDSquadron Ultra is a Made-in-India RISC‑V development board,
              designed and built domestically by VLSI System Design (VSD) and
              powered by C-DAC’s indigenous VEGA/Thejas32 processor, proudly
              showcasing India’s own semiconductor innovation for the next
              generation of electronics and IoT developers.
            </p>
            <ul className="space-y-3 mt-auto">
              {[
                "Real-time sensor interfacing",
                "Deterministic control",
                "Secure firmware execution",
                "Cloud dashboards integration",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm text-brand-text"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-brand-accent"></div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* The Challenge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 lg:col-span-2 bg-brand-secondary/10 border border-brand-secondary rounded-2xl p-6 hover:bg-brand-secondary/20 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-white">The Challenge</h3>
            </div>
            <p className="text-sm text-brand-muted leading-relaxed">
              Current EV battery systems in India largely depend on imported
              controllers and &quot;black-box&quot; units with limited data
              access. This dependency stifles innovation and limits
              optimization.
            </p>
          </motion.div>

          {/* The Solution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 lg:col-span-2 bg-brand-secondary/10 border border-brand-secondary rounded-2xl p-6 hover:bg-brand-secondary/20 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-5 h-5 text-brand-accent" />
              <h3 className="text-lg font-bold text-white">The Solution</h3>
            </div>
            <p className="text-sm text-brand-muted leading-relaxed">
              Build transparent, software-defined, and cloud-connected battery
              intelligence systems using homegrown silicon. Create indigenous
              firmware and reference designs.
            </p>
          </motion.div>

          {/* Key Objectives Grid (4 Small Cards) */}
          {objectives.map((obj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="bg-brand-secondary/5 border border-brand-secondary rounded-2xl p-5 hover:bg-brand-secondary/15 transition-all group"
            >
              <obj.icon className="w-8 h-8 text-brand-muted group-hover:text-brand-accent transition-colors mb-3" />
              <h4 className="text-base font-bold text-white mb-1">
                {obj.title}
              </h4>
              <p className="text-xs text-brand-muted">{obj.desc}</p>
            </motion.div>
          ))}

          
        </div>
      </div>
    </div>
  );
};

export default About;
