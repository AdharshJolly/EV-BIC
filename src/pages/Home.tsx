import { ArrowRight, Cpu, Zap, Shield, ChevronRight, BatteryCharging } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="relative isolate overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
         <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
         <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-32 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8"
        >
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-brand-secondary/50 px-3 py-1 text-sm font-semibold leading-6 text-brand-accent ring-1 ring-inset ring-brand-accent/20 hover:bg-brand-accent/10 transition-colors">
                Registration Open
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-brand-muted hover:text-white transition-colors">
                <span>Join the challenge</span>
                <ChevronRight className="h-4 w-4" />
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-5xl font-bold tracking-tight text-white sm:text-7xl leading-tight">
            Powering the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-400">E-Mobility</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-brand-muted max-w-lg">
            Build cloud-connected, intelligent battery monitoring systems on the VSDSquadron ULTRA. Join India's premier EV Battery Intelligence Challenge.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link to="/register" className="group relative px-6 py-3 font-semibold text-brand-dark transition-all duration-200 bg-brand-accent rounded-lg hover:bg-white hover:shadow-[0_0_30px_-5px_rgba(0,220,130,0.6)]">
              <span className="relative z-10 flex items-center gap-2">
                Register Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link to="/about" className="text-sm font-semibold leading-6 text-white hover:text-brand-accent transition-colors">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </motion.div>
        
        {/* Hero Visual */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32"
        >
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
             <div className="relative -m-2 rounded-xl bg-brand-secondary/10 p-2 ring-1 ring-inset ring-brand-secondary/40 lg:-m-4 lg:rounded-2xl lg:p-4 backdrop-blur-sm">
               
               <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent to-blue-600 rounded-2xl blur opacity-20"></div>
               
               <div className="relative rounded-md bg-brand-primary/80 border border-brand-secondary/50 p-8 shadow-2xl overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <BatteryCharging className="w-64 h-64" />
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 relative z-10">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="glass-panel p-6 rounded-xl border border-brand-secondary/50 hover:border-brand-accent/50 transition-colors"
                    >
                        <div className="bg-brand-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                          <Cpu className="h-6 w-6 text-brand-accent" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Indigenous Compute</h3>
                        <p className="text-sm text-brand-muted">Powered by THEJAS32 RISC-V processor from C-DAC.</p>
                    </motion.div>
                    
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="glass-panel p-6 rounded-xl border border-brand-secondary/50 hover:border-brand-accent/50 transition-colors"
                    >
                        <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                          <Zap className="h-6 w-6 text-blue-400" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Smart Energy</h3>
                        <p className="text-sm text-brand-muted">Real-time battery health estimation and degradation tracking.</p>
                    </motion.div>
                    
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="sm:col-span-2 glass-panel p-6 rounded-xl border border-brand-secondary/50 hover:border-brand-accent/50 transition-colors"
                    >
                        <div className="bg-red-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                          <Shield className="h-6 w-6 text-red-400" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Safety First</h3>
                        <p className="text-sm text-brand-muted">Thermal and safety monitoring with predictive analytics to prevent hazards.</p>
                    </motion.div>
                  </div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
