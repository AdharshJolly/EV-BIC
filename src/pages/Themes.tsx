import { Activity, Thermometer, BarChart3 } from 'lucide-react';

const Themes = () => {
  const themes = [
    {
      id: 1,
      title: 'Predictive Battery Health Analytics',
      icon: Activity,
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
    <div className="bg-brand-primary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-accent">Hackathon Tracks</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Choose Your Challenge
          </p>
          <p className="mt-6 text-lg leading-8 text-brand-muted">
            Participants can select from three key themes focusing on health, safety, and fleet management.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            {themes.map((theme) => (
              <div key={theme.id} className="flex flex-col bg-brand-secondary/20 rounded-2xl p-8 border border-brand-secondary/50 hover:border-brand-accent/50 transition-colors">
                <div className="flex items-center gap-x-3 mb-6">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-brand-accent">
                    <theme.icon className="h-6 w-6 text-brand-dark" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold leading-7 text-white">
                    {theme.title}
                  </h3>
                </div>
                <div className="flex flex-col flex-1">
                  <h4 className="text-sm font-semibold text-brand-accent uppercase tracking-wide mb-2">Problem Statement</h4>
                  <p className="flex-auto text-base leading-7 text-brand-muted mb-6">
                    {theme.problem}
                  </p>
                  
                  <h4 className="text-sm font-semibold text-brand-accent uppercase tracking-wide mb-2">Implementation</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-brand-muted">
                    {theme.approach.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Themes;
