"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Zap, Shield, Database, LayoutDashboard, Cpu, Globe, Target, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const About = () => {
   const objectives = [
      { icon: Zap, title: "Battery Health", desc: "Health estimation and degradation tracking" },
      { icon: Shield, title: "Safety Monitoring", desc: "Thermal and safety monitoring" },
      { icon: Database, title: "Predictive Analytics", desc: "Predicting battery lifespan" },
      { icon: LayoutDashboard, title: "Cloud Integration", desc: "Secure edge-to-cloud pipelines" }
   ];

   return (
      <div className="bg-transparent py-24 sm:py-32 border-t border-brand-secondary/30 relative overflow-hidden">
         <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">

            {/* Header - Original Text */}
            <div className="mx-auto max-w-3xl lg:text-center mb-20">
               <Badge variant="outline" className="mb-4 text-brand-accent border-brand-accent/30 bg-brand-accent/5 uppercase tracking-widest">The Mission</Badge>
               <motion.h2
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 font-display"
               >
                  Driving Innovation in the Indian <span className="text-brand-accent">EV Ecosystem</span>
               </motion.h2>
               <motion.p
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                  className="text-lg leading-relaxed text-brand-muted"
               >
                  India&apos;s rapid transition towards electric mobility requires robust battery safety and reliability.
                  The EV Battery Intelligence Challenge empowers you to build the future of sustainable transport.
               </motion.p>
            </div>

            {/* Bento Grid Layout for Original Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">

               {/* The Platform - Featured Large Card */}
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="md:col-span-2 lg:col-span-2 row-span-2 bg-brand-secondary/10 border border-brand-secondary rounded-2xl p-8 flex flex-col relative overflow-hidden group hover:border-brand-accent/30 transition-all">
                  <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
                     <Cpu className="w-64 h-64 text-brand-accent" />
                  </div>
                  <div className="flex items-center gap-3 mb-6">
                     <div className="p-3 bg-brand-accent/10 rounded-xl border border-brand-accent/20">
                        <Cpu className="w-6 h-6 text-brand-accent" />
                     </div>
                     <h3 className="text-xl font-bold text-white uppercase tracking-wide">The Platform</h3>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-4">VSDSquadron ULTRA + THEJAS32 (C-DAC VEGA)</h4>
                  <p className="text-brand-muted leading-relaxed mb-6">
                     VSDSquadron Ultra is a Made-in-India RISC‑V development board, designed and built domestically by VLSI System Design (VSD) and powered by C-DAC’s indigenous VEGA/Thejas32 processor, proudly showcasing India’s own semiconductor innovation for the next generation of electronics and IoT developers.
                  </p>
                  <ul className="space-y-3 mt-auto">
                     {['Real-time sensor interfacing', 'Deterministic control', 'Secure firmware execution', 'Cloud dashboards integration'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-brand-text">
                           <div className="h-1.5 w-1.5 rounded-full bg-brand-accent"></div>
                           {item}
                        </li>
                     ))}
                  </ul>
               </motion.div>

               {/* The Challenge */}
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="md:col-span-1 lg:col-span-2 bg-brand-secondary/10 border border-brand-secondary rounded-2xl p-6 hover:bg-brand-secondary/20 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                     <Globe className="w-5 h-5 text-blue-400" />
                     <h3 className="text-lg font-bold text-white">The Challenge</h3>
                  </div>
                  <p className="text-sm text-brand-muted leading-relaxed">
                     Current EV battery systems in India largely depend on imported controllers and &quot;black-box&quot; units with limited data access. This dependency stifles innovation and limits optimization.
                  </p>
               </motion.div>

               {/* The Solution */}
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="md:col-span-1 lg:col-span-2 bg-brand-secondary/10 border border-brand-secondary rounded-2xl p-6 hover:bg-brand-secondary/20 transition-colors border-brand-accent/20">
                  <div className="flex items-center gap-3 mb-4">
                     <Target className="w-5 h-5 text-brand-accent" />
                     <h3 className="text-lg font-bold text-white">The Solution</h3>
                  </div>
                  <p className="text-sm text-brand-muted leading-relaxed">
                     Build transparent, software-defined, and cloud-connected battery intelligence systems using homegrown silicon. Create indigenous firmware and reference designs.
                  </p>
               </motion.div>

               {/* Key Objectives Grid (4 Small Cards) */}
               {objectives.map((obj, i) => (
                  <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + (i * 0.1) }}
                     className="bg-brand-secondary/5 border border-brand-secondary rounded-2xl p-5 hover:bg-brand-secondary/15 transition-all group"
                  >
                     <obj.icon className="w-8 h-8 text-brand-muted group-hover:text-brand-accent transition-colors mb-3" />
                     <h4 className="text-base font-bold text-white mb-1">{obj.title}</h4>
                     <p className="text-xs text-brand-muted">{obj.desc}</p>
                  </motion.div>
               ))}

               {/* Who Can Participate - Full Width Bottom */}
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="md:col-span-2 lg:col-span-4 bg-brand-accent/5 border border-brand-accent/20 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                     <div className="p-3 bg-brand-accent/10 rounded-full">
                        <Users className="w-6 h-6 text-brand-accent" />
                     </div>
                     <div>
                        <h3 className="text-lg font-bold text-white">Who Can Participate?</h3>
                        <p className="text-sm text-brand-muted">Innovators ready to shape the future.</p>
                     </div>
                  </div>
                  <div className="flex flex-wrap gap-3 justify-center">
                     {['Students', 'Researchers', 'Start-ups (< 2 Years)'].map((p, i) => (
                        <Badge key={i} variant="secondary" className="bg-brand-secondary text-brand-text border border-brand-secondary/50 px-4 py-1.5">
                           {p}
                        </Badge>
                     ))}
                  </div>
               </motion.div>

            </div>

            {/* Image Gallery Section */}
            <motion.div
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               className="mt-24"
            >
               <h3 className="text-3xl font-bold text-white text-center mb-12 font-display">
                  Technology in Action
               </h3>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  {[
                     { src: "/images/G1.jpeg", alt: "Battery Analysis", title: "Real-time Monitoring" },
                     { src: "/images/G2.jpeg", alt: "Hardware Integration", title: "Advanced Hardware" },
                     { src: "/images/G3.jpeg", alt: "Data Processing", title: "Data Intelligence" },
                     { src: "/images/G5.jpeg", alt: "Performance Metrics", title: "Performance Analytics" },
                     { src: "/images/G6.jpeg", alt: "Innovation Lab", title: "Research & Development" },
                  ].map((image, idx) => (
                     <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.4 }}
                        className="group relative overflow-hidden rounded-xl border border-brand-secondary/50 hover:border-brand-accent/50 transition-all duration-300 h-64"
                     >
                        <Image
                           src={image.src}
                           alt={image.alt}
                           fill
                           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                           <div>
                              <p className="text-brand-accent font-semibold text-sm tracking-widest uppercase mb-2">Featured</p>
                              <p className="text-white font-bold text-lg">{image.title}</p>
                           </div>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </motion.div>
         </div>
      </div>
   );
};

export default About;
