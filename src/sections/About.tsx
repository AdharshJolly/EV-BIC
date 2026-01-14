"use client";

import { motion } from 'framer-motion';
import { Leaf, Globe, Zap, Cpu, ArrowUpRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const stats = [
    { label: "Market Growth", value: "30%", suffix: "CAGR", desc: "Projected EV market growth in India" },
    { label: "Carbon Reduction", value: "1Gt", suffix: "CO2", desc: "Target reduction by 2030" },
    { label: "Compute Power", value: "10x", suffix: "Efficiency", desc: "With RISC-V architecture" },
    { label: "Innovation", value: "100+", suffix: "Startups", desc: "Expected ecosystem growth" },
  ];

  return (
    <div className="relative overflow-hidden bg-brand-primary py-24 sm:py-32">
       {/* Decorative Background */}
       <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-secondary/30 to-transparent pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Header with Impact Focus */}
        <div className="mx-auto max-w-3xl lg:text-center mb-20">
          <Badge variant="outline" className="mb-4 text-teal-400 border-teal-400/30 bg-teal-400/10">The Mission</Badge>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 font-display"
          >
            Decarbonizing Mobility with <span className="text-brand-accent">Intelligent Compute</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-lg leading-relaxed text-brand-muted"
          >
            The transition to electric mobility is not just about changing engines; it&apos;s about reimagining energy intelligence. 
            We are challenging you to build the &quot;Brain&quot; of the future EV—safe, efficient, and sustainable.
          </motion.p>
        </div>

        {/* Impact Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-brand-secondary/20 border-brand-secondary/50 hover:border-brand-accent/30 transition-colors h-full">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="text-4xl font-black text-white mb-1 font-display">
                      {stat.value}<span className="text-lg text-brand-accent ml-1">{stat.suffix}</span>
                    </div>
                    <div className="text-sm font-bold text-brand-muted uppercase tracking-wider mb-2">{stat.label}</div>
                  </div>
                  <p className="text-xs text-brand-muted/70 pt-4 border-t border-brand-secondary/50 mt-4">{stat.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* The Solution / Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           <motion.div 
             initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}
             className="relative"
           >
              <div className="absolute -inset-4 bg-brand-accent/5 rounded-3xl blur-2xl"></div>
              <Card className="relative bg-brand-secondary/40 border-brand-secondary backdrop-blur-sm overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-10">
                   <Globe className="w-64 h-64 text-brand-accent" />
                 </div>
                 <CardContent className="p-8 sm:p-10">
                   <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                     <Leaf className="text-brand-accent" /> Sustainable by Design
                   </h3>
                   <p className="text-brand-muted mb-6 leading-relaxed">
                     Current battery systems are &quot;black boxes&quot;—inefficient and prone to waste. By enabling precise health monitoring and predictive maintenance, we can extend battery life by up to 20%, significantly reducing e-waste and carbon footprint.
                   </p>
                   <div className="flex flex-wrap gap-3">
                     {['Circular Economy', 'E-Waste Reduction', 'Energy Efficiency'].map(tag => (
                       <Badge key={tag} variant="secondary" className="bg-brand-primary text-brand-muted border border-brand-secondary">{tag}</Badge>
                     ))}
                   </div>
                 </CardContent>
              </Card>
           </motion.div>

           <motion.div 
             initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}
             className="space-y-8"
           >
              <div className="flex gap-4">
                 <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center flex-shrink-0 border border-teal-500/20">
                    <Cpu className="w-6 h-6 text-teal-400" />
                 </div>
                 <div>
                    <h4 className="text-xl font-bold text-white mb-2">Indigenous Compute</h4>
                    <p className="text-brand-muted">
                       Leveraging the power of the <strong>VSDSquadron ULTRA</strong> (RISC-V) to build sovereign, secure, and verifiable battery management systems.
                    </p>
                 </div>
              </div>
              
              <div className="flex gap-4">
                 <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center flex-shrink-0 border border-brand-accent/20">
                    <Zap className="w-6 h-6 text-brand-accent" />
                 </div>
                 <div>
                    <h4 className="text-xl font-bold text-white mb-2">Real-Time Intelligence</h4>
                    <p className="text-brand-muted">
                       Moving from reactive to predictive. Using Edge AI to detect thermal anomalies and optimize charging cycles in real-time.
                    </p>
                 </div>
              </div>

              <div className="pt-4">
                 <a href="#themes" className="inline-flex items-center text-brand-accent font-bold hover:underline">
                   Explore the Problem Statements <ArrowUpRight className="ml-2 w-4 h-4" />
                 </a>
              </div>
           </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;