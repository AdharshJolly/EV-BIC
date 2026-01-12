import { useState } from 'react';
import { Activity, Thermometer, BarChart3, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Themes = () => {
  const [activeTheme, setActiveTheme] = useState<number | null>(null);

  const themes = [
    {
      id: 1,
      title: 'Predictive Battery Health Analytics',
      icon: Activity,
      color: 'text-brand-accent',
      bg: 'bg-brand-accent/10',
      border: 'border-brand-accent',
      problem: 'Design a cloud-based system that collects real-time data on EV battery parameters and applies predictive algorithms to forecast battery degradation and remaining useful life (RUL) based on a dataset that is provided.',
      objective: 'The system should alert users and fleet operators about potential failures before they occur, ensuring safety and reduced downtime.',
      approach: [
        'Develop real-time data collection and processing pipeline',
        'Implement predictive algorithms for battery degradation forecasting',
        'Create alert mechanisms for potential failures',
        'Design user interfaces for different stakeholders',
        'Validate against provided datasets'
      ]
    },
    {
      id: 2,
      title: 'Intelligent Thermal Anomaly Detection',
      icon: Thermometer,
      color: 'text-red-400',
      bg: 'bg-red-500/10',
      border: 'border-red-500',
      problem: 'Develop a cloud-integrated monitoring solution that detects and analyzes abnormal thermal patterns in EV batteries using IoT sensors. The system should employ anomaly detection models to identify hotspots or irregular heat distribution.',
      objective: 'Predict thermal runaway and prevent catastrophic failures through real-time monitoring and alerting.',
      approach: [
        'Build thermal pattern monitoring system',
        'Implement anomaly detection algorithms',
        'Develop thermal runaway prediction models',
        'Create real-time alerting system',
        'Design dashboard for thermal monitoring'
      ]
    },
    {
      id: 3,
      title: 'Fleet-Level Battery Performance Dashboard',
      icon: BarChart3,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500',
      problem: 'Create a centralized, cloud-based dashboard for fleet operators that aggregates battery performance data from multiple EVs in real time. Provide insights into energy usage trends, charging behavior, and inefficiencies.',
      objective: 'Enable data-driven decisions for cost optimization and preventive maintenance across the entire fleet.',
      approach: [
        'Develop multi-vehicle data aggregation system',
        'Implement battery performance analytics',
        'Create comparative analysis tools',
        'Design intuitive fleet management dashboard',
        'Build reporting and alerting features'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-brand-primary py-24 sm:py-32 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-20">
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
              Select a problem statement that aligns with your skills and interests. Click on a card to explore details.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveTheme(activeTheme === theme.id ? null : theme.id)}
              className={`cursor-pointer glass-panel rounded-2xl p-6 border transition-all duration-300 relative overflow-hidden ${
                activeTheme === theme.id 
                  ? `border-opacity-100 ${theme.border} bg-brand-secondary/40 ring-1 ring-${theme.border.replace('border-', '')}` 
                  : 'border-brand-secondary/50 hover:border-brand-secondary'
              }`}
            >
              {/* Active Indicator Strip */}
              <div className={`absolute top-0 left-0 w-full h-1 ${activeTheme === theme.id ? theme.bg.replace('/10', '') : 'bg-transparent'} transition-colors`}></div>

              <div className="flex items-center gap-x-4 mb-4">
                <div className={`h-14 w-14 flex items-center justify-center rounded-xl ${theme.bg}`}>
                  <theme.icon className={`h-7 w-7 ${theme.color}`} aria-hidden="true" />
                </div>
                <h3 className={`text-xl font-bold leading-tight ${activeTheme === theme.id ? 'text-white' : 'text-brand-text'}`}>
                  {theme.title}
                </h3>
              </div>
              
              <div className="mb-4">
                 <p className="text-sm text-brand-muted line-clamp-3">
                   {theme.problem}
                 </p>
              </div>

              <AnimatePresence>
                {activeTheme === theme.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-brand-secondary/50 mt-4 space-y-4">
                        <div>
                            <h4 className={`text-xs font-bold uppercase tracking-wide mb-2 ${theme.color}`}>Core Objective</h4>
                            <p className="text-sm text-brand-text">{theme.objective}</p>
                        </div>
                        
                        <div>
                            <h4 className={`text-xs font-bold uppercase tracking-wide mb-2 ${theme.color}`}>Implementation</h4>
                            <ul className="space-y-2">
                                {theme.approach.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-brand-muted">
                                    <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${theme.color}`} />
                                    {item}
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {activeTheme !== theme.id && (
                 <div className="mt-4 flex items-center text-sm font-medium text-brand-accent group-hover:underline">
                    View Details <ArrowRight className="w-4 h-4 ml-1" />
                 </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Themes;
