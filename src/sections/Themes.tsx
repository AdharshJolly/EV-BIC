"use client";

import { Activity, Thermometer, BarChart3, Target, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const Themes = () => {
  const themes = [
    {
      id: 1,
      title: 'Predictive Battery Health Analytics',
      icon: Activity,
      color: 'text-brand-accent',
      bg: 'bg-brand-accent/10',
      border: 'border-brand-accent/30',
      hoverBorder: 'hover:border-brand-accent',
      problem: 'Design a cloud-based system that collects real-time data on EV battery parameters and applies predictive algorithms to forecast battery degradation and remaining useful life (RUL).',
      objective: 'Alert users and fleet operators about potential failures before they occur, ensuring safety and reduced downtime.',
      approach: [
        'Real-time data collection pipeline',
        'Predictive algorithms for degradation',
        'Alert mechanisms for failures',
        'Validation against provided datasets'
      ]
    },
    {
      id: 2,
      title: 'Intelligent Thermal Anomaly Detection',
      icon: Thermometer,
      color: 'text-red-400',
      bg: 'bg-red-500/10',
      border: 'border-red-500/30',
      hoverBorder: 'hover:border-red-500',
      problem: 'Develop a monitoring solution that detects and analyzes abnormal thermal patterns in EV batteries using IoT sensors to identify hotspots and predict thermal runaway.',
      objective: 'Predict thermal runaway and prevent catastrophic failures through real-time monitoring and alerting.',
      approach: [
        'Thermal pattern monitoring system',
        'Anomaly detection algorithms',
        'Thermal runaway prediction models',
        'Real-time alerting dashboard'
      ]
    },
    {
      id: 3,
      title: 'Fleet-Level Battery Performance Dashboard',
      icon: BarChart3,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/30',
      hoverBorder: 'hover:border-blue-500',
      problem: 'Create a centralized, cloud-based dashboard for fleet operators that aggregates battery performance data from multiple EVs, providing insights into usage and health.',
      objective: 'Enable data-driven decisions for cost optimization and preventive maintenance across the entire fleet.',
      approach: [
        'Multi-vehicle data aggregation',
        'Battery performance analytics',
        'Comparative analysis tools',
        'Intuitive fleet management UI'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-brand-primary py-24 sm:py-32 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-secondary/10 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl lg:text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base leading-7 text-brand-accent uppercase tracking-widest">Hackathon Tracks</h2>
            <h3 className="mt-2 text-4xl text-white sm:text-5xl">
              Choose Your Challenge
            </h3>
            <p className="mt-6 text-lg leading-8 text-brand-muted">
              We have defined three critical problem statements. Select the one that challenges you to push the boundaries of EV technology.
            </p>
          </motion.div>
        </div>

        <div className="space-y-24">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className={`group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start p-8 rounded-3xl border ${theme.border} bg-brand-secondary/5 ${theme.hoverBorder} transition-colors duration-500`}>
                 {/* Decorative background glow on hover */}
                 <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl bg-gradient-to-r from-transparent via-${theme.color.replace('text-', '')}/5 to-transparent`}></div>

                 {/* Icon & Title Section */}
                 <div className="lg:col-span-4 flex flex-col gap-6 relative z-10">
                    <div className={`w-20 h-20 rounded-2xl ${theme.bg} flex items-center justify-center shadow-lg`}>
                      <theme.icon className={`w-10 h-10 ${theme.color}`} />
                    </div>
                    <h3 className="text-3xl font-bold text-white leading-tight">
                      {theme.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-muted">
                      <Target className="w-4 h-4" />
                      <span>Track {index + 1}</span>
                    </div>
                 </div>

                 {/* Content Section */}
                 <CardContent className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 p-0 relative z-10">
                    <div className="space-y-4">
                       <h4 className={`text-lg font-bold ${theme.color} flex items-center gap-2`}>
                         Problem Statement
                       </h4>
                       <p className="text-brand-text leading-relaxed">
                         {theme.problem}
                       </p>
                    </div>
                    
                    <div className="space-y-4">
                       <h4 className="text-lg font-bold text-white flex items-center gap-2">
                         Core Objective
                       </h4>
                       <p className="text-brand-muted leading-relaxed">
                         {theme.objective}
                       </p>
                    </div>

                    <div className="md:col-span-2 pt-6 border-t border-brand-secondary/30">
                       <h4 className="text-sm font-bold text-brand-muted uppercase tracking-wide mb-4">
                         Implementation Approach
                       </h4>
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                          {theme.approach.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                               <ChevronRight className={`w-4 h-4 mt-1 flex-shrink-0 ${theme.color}`} />
                               <span className="text-brand-text text-sm">{item}</span>
                            </div>
                          ))}
                       </div>
                    </div>
                 </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Themes;
