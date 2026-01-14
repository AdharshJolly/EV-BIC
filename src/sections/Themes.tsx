"use client";

import { Activity, Thermometer, BarChart3, Database, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

const Themes = () => {
  const themes = [
    {
      id: "track-1",
      title: "Predictive Battery Health Analytics",
      icon: Activity,
      summary: "Forecast battery degradation and Remaining Useful Life (RUL) using predictive algorithms.",
      problem: "Design a cloud-based system that collects real-time data on EV battery parameters and applies predictive algorithms to forecast battery degradation and remaining useful life (RUL).",
      objective: "Alert users and fleet operators about potential failures before they occur, ensuring safety and reduced downtime.",
      approach: [
        "Real-time data collection pipeline",
        "Predictive algorithms for degradation",
        "Alert mechanisms for failures",
        "Validation against provided datasets"
      ]
    },
    {
      id: "track-2",
      title: "Intelligent Thermal Anomaly Detection",
      icon: Thermometer,
      summary: "Detect and analyze abnormal thermal patterns to predict thermal runaway.",
      problem: "Develop a monitoring solution that detects and analyzes abnormal thermal patterns in EV batteries using IoT sensors to identify hotspots and predict thermal runaway.",
      objective: "Predict thermal runaway and prevent catastrophic failures through real-time monitoring and alerting.",
      approach: [
        "Thermal pattern monitoring system",
        "Anomaly detection algorithms",
        "Thermal runaway prediction models",
        "Real-time alerting dashboard"
      ]
    },
    {
      id: "track-3",
      title: "Fleet-Level Battery Performance Dashboard",
      icon: BarChart3,
      summary: "Centralized dashboard for fleet operators to aggregate and analyze battery performance.",
      problem: "Create a centralized, cloud-based dashboard for fleet operators that aggregates battery performance data from multiple EVs, providing insights into usage and health.",
      objective: "Enable data-driven decisions for cost optimization and preventive maintenance across the entire fleet.",
      approach: [
        "Multi-vehicle data aggregation",
        "Battery performance analytics",
        "Comparative analysis tools",
        "Intuitive fleet management UI"
      ]
    }
  ];

  return (
    <div className="bg-brand-primary py-24 sm:py-32 relative overflow-hidden" id="themes">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20">
           <Badge variant="outline" className="mb-4 border-brand-accent/30 text-brand-accent bg-brand-accent/5 tracking-widest uppercase">
              Hackathon Tracks
           </Badge>
           <h2 className="text-4xl sm:text-5xl font-black text-white font-display uppercase tracking-tight mb-4">
              Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white">Challenge</span>
           </h2>
           <p className="text-lg text-brand-muted max-w-2xl mx-auto">
              We have defined three critical problem statements. Select the one that challenges you to push the boundaries of EV technology.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {themes.map((theme, index) => (
             <motion.div
               key={theme.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
             >
               <div className="h-full bg-brand-secondary/10 border border-brand-secondary hover:border-brand-accent/50 transition-all duration-300 rounded-2xl p-8 flex flex-col items-center text-center group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  
                  <div className="w-16 h-16 bg-brand-secondary/50 rounded-2xl flex items-center justify-center mb-6 border border-brand-secondary group-hover:border-brand-accent/30 group-hover:bg-brand-accent/10 transition-colors">
                     <theme.icon className="w-8 h-8 text-white group-hover:text-brand-accent transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white font-display uppercase mb-4 leading-tight">{theme.title}</h3>
                  <p className="text-brand-muted mb-8 text-sm leading-relaxed">{theme.summary}</p>
                  
                  <div className="mt-auto relative z-10">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          type="button"
                          variant="outline" 
                          className="cursor-pointer border-brand-accent/30 text-brand-accent hover:bg-brand-accent hover:text-brand-dark transition-all"
                        >
                           View Details <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-brand-secondary border-brand-secondary text-white sm:max-w-lg max-h-[90vh] overflow-y-auto z-[100]">
                        <DialogHeader className="text-left">
                          <DialogTitle className="text-2xl font-display uppercase flex items-start gap-3">
                             <theme.icon className="w-6 h-6 text-brand-accent flex-shrink-0 mt-1" />
                             {theme.title}
                          </DialogTitle>
                          <DialogDescription className="text-brand-muted">
                             Full Problem Statement & Objectives
                          </DialogDescription>
                        </DialogHeader>
                        
                        <div className="space-y-6 pt-4 text-left">
                           <div>
                              <h4 className="text-sm font-bold text-brand-accent uppercase mb-2 flex items-center gap-2">
                                 <Database className="w-4 h-4" /> Problem Statement
                              </h4>
                              <p className="text-brand-text text-sm leading-relaxed border-l-2 border-brand-secondary pl-4">
                                 {theme.problem}
                              </p>
                           </div>
                           
                           <div>
                              <h4 className="text-sm font-bold text-brand-accent uppercase mb-2 flex items-center gap-2">
                                 <Zap className="w-4 h-4" /> Core Objective
                              </h4>
                              <p className="text-brand-text text-sm leading-relaxed border-l-2 border-brand-secondary pl-4">
                                 {theme.objective}
                              </p>
                           </div>

                           <div className="bg-brand-primary/50 p-4 rounded-lg border border-brand-secondary">
                              <h4 className="text-xs font-bold text-brand-muted uppercase mb-3">Implementation Approach</h4>
                              <div className="flex flex-col gap-2">
                                 {theme.approach.map((item, i) => (
                                    <div key={i} className="flex items-start gap-2 text-sm text-brand-text">
                                       <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                                       {item}
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
               </div>
             </motion.div>
           ))}
        </div>

      </div>
    </div>
  );
};

export default Themes;
