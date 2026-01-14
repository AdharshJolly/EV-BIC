"use client";

import { motion } from 'framer-motion';
import { Cpu, Users, Target, Image as ImageIcon, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const Squadron = () => {
  const personnel = [
    { name: "Kunal Ghosh", role: "Co-founder, VSD", initial: "KG" },
    { name: "Steve Hoover", role: "Redwood EDA", initial: "SH" },
    { name: "C-DAC Team", role: "VEGA Processor Architects", initial: "CD" },
  ];

  const operations = [
    { 
      title: "THEJAS32 Deployment", 
      desc: "Successful integration of the indigenous RISC-V VEGA processor on the ULTRA platform.",
      status: "Operational"
    },
    { 
      title: "Edge AI Optimization", 
      desc: "Achieving 10x efficiency in real-time battery health localized inference.",
      status: "Completed"
    },
    { 
      title: "Sovereign Compute", 
      desc: "Building a verifiable and secure hardware ecosystem for mission-critical apps.",
      status: "In Progress"
    }
  ];

  const gallery = [
    { title: "Ultra Board", type: "Hardware", color: "bg-brand-accent/20" },
    { title: "Lab Setup", type: "R&D", color: "bg-teal-500/20" },
    { title: "RISC-V Core", type: "Architecture", color: "bg-blue-500/20" },
    { title: "Community", type: "Outreach", color: "bg-white/10" },
  ];

  return (
    <div className="bg-transparent py-24 sm:py-32 relative z-10 border-t border-brand-secondary/30" id="squadron">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-end">
           <div>
              <Badge className="bg-brand-accent text-brand-dark mb-4 px-4 py-1">Hardware Platform</Badge>
              <h2 className="text-4xl sm:text-6xl font-black text-white font-display uppercase tracking-tighter leading-none mb-6">
                 VSD Squadron <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white">ULTRA</span>
              </h2>
              <p className="text-xl text-brand-muted leading-relaxed max-w-xl">
                 To pioneer indigenous hardware innovation through RISC-V architecture, providing a robust ecosystem for sovereign compute and high-stakes energy intelligence.
              </p>
           </div>
           <div className="flex justify-start lg:justify-end">
              <div className="bg-brand-secondary/20 border border-brand-secondary p-4 rounded-2xl flex items-center gap-4">
                 <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center">
                    <Cpu className="text-brand-accent w-6 h-6" />
                 </div>
                 <div>
                    <div className="text-xs font-mono text-brand-muted uppercase tracking-widest">Platform_Status</div>
                    <div className="text-white font-bold">READY_FOR_DEPLOYMENT</div>
                 </div>
              </div>
           </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
           
           {/* Personnel */}
           <Card className="bg-brand-secondary/10 border-brand-secondary/50 lg:col-span-1 h-full">
              <CardHeader className="border-b border-brand-secondary/30">
                 <CardTitle className="text-white flex items-center gap-3 text-lg uppercase tracking-wide font-display">
                    <Users className="w-5 h-5 text-brand-accent" /> Key Personnel
                 </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                 {personnel.map((p, i) => (
                    <div key={i} className="flex items-center gap-4">
                       <Avatar className="h-10 w-10 border border-brand-accent/30">
                          <AvatarFallback className="bg-brand-secondary text-brand-accent font-bold text-xs">{p.initial}</AvatarFallback>
                       </Avatar>
                       <div>
                          <div className="text-sm font-bold text-white leading-none">{p.name}</div>
                          <div className="text-xs text-brand-muted mt-1">{p.role}</div>
                       </div>
                    </div>
                 ))}
              </CardContent>
           </Card>

           {/* Operations */}
           <Card className="bg-brand-secondary/10 border-brand-secondary/50 lg:col-span-2">
              <CardHeader className="border-b border-brand-secondary/30">
                 <CardTitle className="text-white flex items-center gap-3 text-lg uppercase tracking-wide font-display">
                    <Target className="w-5 h-5 text-brand-accent" /> Notable Operations
                 </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {operations.map((op, i) => (
                       <div key={i} className="p-4 rounded-xl bg-brand-primary/40 border border-brand-secondary group hover:border-brand-accent/30 transition-colors">
                          <div className="flex justify-between items-start mb-2">
                             <h4 className="text-white font-bold text-sm uppercase tracking-tight">{op.title}</h4>
                             <span className="text-[8px] font-mono text-brand-accent px-1.5 py-0.5 border border-brand-accent/30 rounded uppercase">
                                {op.status}
                             </span>
                          </div>
                          <p className="text-xs text-brand-muted leading-relaxed">{op.desc}</p>
                       </div>
                    ))}
                    <div className="p-4 rounded-xl border border-dashed border-brand-secondary flex items-center justify-center opacity-50">
                       <span className="text-[10px] font-mono text-brand-muted uppercase">Next_Module_Initializing...</span>
                    </div>
                 </div>
              </CardContent>
           </Card>
        </div>

        {/* Media Gallery Section */}
        <div className="space-y-8">
           <div className="flex items-center justify-between">
              <h3 className="text-white font-display uppercase tracking-widest flex items-center gap-3">
                 <ImageIcon className="w-5 h-5 text-brand-accent" /> Visual Assets
              </h3>
              <div className="h-px flex-grow mx-8 bg-brand-secondary/30 hidden sm:block"></div>
              <Button variant="ghost" className="text-xs font-mono text-brand-muted hover:text-white uppercase tracking-widest">
                 View_Library <ExternalLink className="ml-2 w-3 h-3" />
              </Button>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {gallery.map((item, i) => (
                 <motion.div 
                    key={i} 
                    whileHover={{ y: -5 }}
                    className={`aspect-square rounded-2xl ${item.color} border border-white/5 flex flex-col items-center justify-center group relative overflow-hidden`}
                 >
                    <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-3">
                       <ImageIcon className="w-5 h-5 text-white/20" />
                    </div>
                    <div className="text-[10px] font-mono text-white font-bold uppercase tracking-widest">{item.title}</div>
                    <div className="text-[8px] font-mono text-brand-muted uppercase mt-1">{item.type}</div>
                 </motion.div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
};

export default Squadron;
