"use client";

import { motion } from 'framer-motion';
import { Cpu, Target, Users, Globe, Zap, Shield, Database, LayoutDashboard } from 'lucide-react';

const About = () => {
  const objectives = [
    { icon: Zap, title: "Battery Health", desc: "Health estimation and degradation tracking" },
    { icon: Shield, title: "Safety Monitoring", desc: "Thermal and safety monitoring" },
    { icon: Database, title: "Predictive Analytics", desc: "Predicting battery lifespan" },
    { icon: LayoutDashboard, title: "Cloud Integration", desc: "Secure edge-to-cloud pipelines" }
  ];

  return (
    <div className="relative overflow-hidden bg-brand-primary">
       {/* Background Elements */}
       <div className="absolute top-0 left-0 w-full h-[500px] bg-brand-secondary/20 skew-y-6 transform origin-top-left -z-10"></div>
       <div className="absolute bottom-0 right-0 w-full h-[500px] bg-brand-secondary/20 -skew-y-6 transform origin-bottom-right -z-10"></div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl lg:text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-base font-semibold leading-7 text-brand-accent uppercase tracking-widest"
          >
            The Mission
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Driving Innovation in the Indian EV Ecosystem
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-brand-muted"
          >
            India&apos;s rapid transition towards electric mobility requires robust battery safety and reliability. 
            The EV Battery Intelligence Challenge empowers you to build the future of sustainable transport.
          </motion.p>
        </div>

        {/* The Platform Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-brand-secondary/30 border border-brand-secondary/50 p-8 sm:p-12 lg:flex lg:items-center lg:gap-x-12 mb-24 relative overflow-hidden"
        >
           <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
             <Cpu className="w-96 h-96" />
           </div>
           
           <div className="lg:w-1/2">
             <div className="flex items-center gap-3 mb-6">
               <div className="p-3 bg-brand-accent/20 rounded-lg">
                 <Cpu className="h-8 w-8 text-brand-accent" />
               </div>
               <h3 className="text-2xl font-bold text-white">The Platform</h3>
             </div>
             <h4 className="text-xl font-semibold text-white mb-4">VSDSquadron ULTRA + THEJAS32 (C-DAC VEGA)</h4>
             <p className="text-brand-muted mb-6 text-lg">
               At the heart of the hackathon is the VSDSquadron ULTRA, an advanced development platform built around the THEJAS32 RISC-V processor.
             </p>
             <ul className="space-y-3">
               {['Real-time sensor interfacing', 'Deterministic control', 'Secure firmware execution', 'Cloud dashboards integration'].map((item, i) => (
                 <li key={i} className="flex items-center gap-3 text-brand-text">
                   <div className="h-2 w-2 rounded-full bg-brand-accent"></div>
                   {item}
                 </li>
               ))}
             </ul>
           </div>
           
           <div className="mt-8 lg:mt-0 lg:w-1/2 relative z-10">
              <div className="aspect-[4/3] bg-brand-dark/50 rounded-2xl border border-brand-secondary flex items-center justify-center p-8">
                {/* Placeholder for Board Image */}
                <div className="text-center">
                  <Cpu className="w-24 h-24 text-brand-muted mx-auto mb-4 opacity-50" />
                  <p className="text-brand-muted text-sm uppercase tracking-widest font-bold">Hardware Visualization</p>
                </div>
              </div>
           </div>
        </motion.div>

        {/* Why This Matters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
           <motion.div 
             initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}
             className="glass-panel p-8 rounded-2xl"
           >
             <div className="flex items-center gap-4 mb-6">
               <Globe className="h-8 w-8 text-blue-400" />
               <h3 className="text-2xl font-bold text-white">The Challenge</h3>
             </div>
             <p className="text-brand-muted leading-relaxed">
               Current EV battery systems in India largely depend on imported controllers and &quot;black-box&quot; units with limited data access. This dependency stifles innovation and limits optimization.
             </p>
           </motion.div>

           <motion.div 
             initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}
             className="glass-panel p-8 rounded-2xl border-brand-accent/30"
           >
             <div className="flex items-center gap-4 mb-6">
               <Target className="h-8 w-8 text-brand-accent" />
               <h3 className="text-2xl font-bold text-white">The Solution</h3>
             </div>
             <p className="text-brand-muted leading-relaxed">
               Build transparent, software-defined, and cloud-connected battery intelligence systems using homegrown silicon. Create indigenous firmware and reference designs.
             </p>
           </motion.div>
        </div>

        {/* Objectives */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-white text-center mb-12">Key Objectives</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((obj, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-secondary/10 p-6 rounded-xl border border-brand-secondary/30 hover:border-brand-accent/50 hover:bg-brand-secondary/20 transition-all group"
              >
                <obj.icon className="h-10 w-10 text-brand-muted group-hover:text-brand-accent transition-colors mb-4" />
                <h4 className="font-bold text-white mb-2">{obj.title}</h4>
                <p className="text-sm text-brand-muted">{obj.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Participants */}
        <div className="text-center bg-gradient-to-r from-brand-secondary/20 to-brand-primary rounded-3xl p-12 border border-brand-secondary/50">
          <div className="inline-block p-4 bg-brand-accent/10 rounded-full mb-6">
            <Users className="h-8 w-8 text-brand-accent" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Who Can Participate?</h3>
          <p className="text-brand-muted max-w-2xl mx-auto mb-8">
            This challenge is open to innovators who are ready to shape the future of E-Mobility.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Students', 'Researchers', 'Start-ups (< 2 Years)'].map((p, i) => (
               <span key={i} className="px-6 py-2 rounded-full bg-brand-secondary text-brand-text border border-brand-secondary/50 font-medium">
                 {p}
               </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
