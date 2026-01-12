import { Activity, Thermometer, BarChart3, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Themes = () => {
  const themes = [
    {
      id: 1,
      title: 'Predictive Battery Health Analytics',
      icon: Activity,
      color: 'text-brand-accent',
      bg: 'bg-brand-accent/10',
      border: 'group-hover:border-brand-accent',
      problem: 'Design a cloud-based system that collects real-time data on EV battery parameters and applies predictive algorithms to forecast battery degradation and remaining useful life.',
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
      border: 'group-hover:border-red-500',
      problem: 'Develop a monitoring solution that detects and analyzes abnormal thermal patterns in EV batteries using IoT sensors to identify hotspots and predict thermal runaway.',
      approach: [
        'Thermal pattern monitoring',
        'Anomaly detection algorithms',
        'Thermal runaway prediction',
        'Real-time alerting system'
      ]
    },
    {
      id: 3,
      title: 'Fleet-Level Battery Performance Dashboard',
      icon: BarChart3,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'group-hover:border-blue-500',
      problem: 'Create a centralized dashboard for fleet operators that aggregates battery performance data from multiple EVs, providing insights into energy usage and health.',
      approach: [
        'Multi-vehicle data aggregation',
        'Battery performance analytics',
        'Comparative analysis tools',
        'Intuitive fleet management dashboard'
      ]
    }
  ];

  return (
    <div className="min-h-screen py-24 sm:py-32 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-brand-accent uppercase tracking-widest">Hackathon Tracks</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Choose Your Challenge
            </p>
            <p className="mt-6 text-lg leading-8 text-brand-muted">
              Participants can select from three key themes focusing on health, safety, and fleet management.
            </p>
          </motion.div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            {themes.map((theme, index) => (
              <motion.div
                key={theme.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`group flex flex-col glass-panel rounded-2xl p-8 border border-brand-secondary/50 transition-all duration-300 ${theme.border}`}
              >
                <div className="flex items-center gap-x-3 mb-6">
                  <div className={`h-12 w-12 flex items-center justify-center rounded-lg ${theme.bg}`}>
                    <theme.icon className={`h-6 w-6 ${theme.color}`} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold leading-7 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-brand-muted transition-colors">
                    {theme.title}
                  </h3>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="mb-6 p-4 rounded-lg bg-brand-primary/40 border border-brand-secondary/30">
                    <h4 className="text-xs font-bold text-brand-muted uppercase tracking-wide mb-2">Problem Statement</h4>
                    <p className="flex-auto text-sm leading-6 text-brand-text">
                        {theme.problem}
                    </p>
                  </div>
                  
                  <h4 className="text-xs font-bold text-brand-accent uppercase tracking-wide mb-3 flex items-center gap-2">
                    Implementation Approach <ArrowRight className="w-3 h-3" />
                  </h4>
                  <ul className="space-y-2">
                    {theme.approach.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-brand-muted group-hover:text-brand-text transition-colors">
                        <span className={`mt-1.5 h-1.5 w-1.5 rounded-full ${theme.bg.replace('/10', '')} flex-shrink-0`}></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Themes;
