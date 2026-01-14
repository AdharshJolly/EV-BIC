"use client";

import { ArrowRight, Cpu, Shield, ChevronRight, BatteryCharging } from 'lucide-react';
import { motion } from 'framer-motion';
import Countdown from '@/components/Countdown';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className="relative isolate overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
         <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
         <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-x-16 lg:px-8 lg:py-24">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto text-center lg:text-left"
        >
          <div className="mb-6 flex justify-center lg:justify-start">
            <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium text-brand-accent border-brand-accent/50 bg-brand-accent/10 rounded-full animate-pulse">
              <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
                </span>
                Registration Open
              </span>
            </Badge>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight uppercase font-display">
            EV Battery <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-teal-400">Intelligence</span> Challenge
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-brand-muted max-w-xl mx-auto lg:mx-0">
            Powering the Future of E-Mobility with <span className="text-white font-bold">Indigenous Compute</span>. Join the revolution to build safer, smarter, and sustainable energy systems.
          </p>
          
          <div className="my-10">
            <Countdown />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Button asChild size="lg" className="h-12 px-8 text-base font-bold bg-brand-accent text-brand-dark hover:bg-white hover:text-brand-dark hover:scale-105 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(204,255,0,0.5)]">
              <a href="#register">
                Register Now <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg" className="h-12 px-8 text-base font-semibold text-white hover:text-brand-accent hover:bg-brand-secondary/50">
              <a href="#about">
                Explore Themes <ChevronRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </motion.div>
        
        {/* Hero Visual */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow relative hidden lg:block"
        >
          <div className="relative z-10 w-full max-w-lg mx-auto perspective-1000">
             {/* Abstract Circuit/Battery Visual */}
             <div className="relative bg-brand-secondary/30 backdrop-blur-xl border border-brand-secondary/50 rounded-2xl p-8 shadow-2xl transform rotate-y-12 hover:rotate-y-0 transition-transform duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent rounded-2xl pointer-events-none"></div>
                
                <div className="grid grid-cols-2 gap-4">
                   <div className="col-span-2 aspect-video bg-brand-dark/50 rounded-xl border border-brand-secondary flex items-center justify-center relative overflow-hidden group">
                      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                      <BatteryCharging className="w-24 h-24 text-brand-accent group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute bottom-4 left-4 right-4 h-1 bg-brand-secondary rounded-full overflow-hidden">
                         <div className="h-full bg-brand-accent w-[85%] animate-pulse"></div>
                      </div>
                   </div>

                   <div className="bg-brand-dark/50 p-4 rounded-xl border border-brand-secondary hover:border-brand-accent/50 transition-colors">
                      <Cpu className="w-8 h-8 text-teal-400 mb-2" />
                      <div className="h-2 w-12 bg-teal-400/20 rounded-full mb-1"></div>
                      <div className="h-2 w-20 bg-brand-secondary rounded-full"></div>
                   </div>

                   <div className="bg-brand-dark/50 p-4 rounded-xl border border-brand-secondary hover:border-brand-accent/50 transition-colors">
                      <Shield className="w-8 h-8 text-brand-accent mb-2" />
                      <div className="h-2 w-12 bg-brand-accent/20 rounded-full mb-1"></div>
                      <div className="h-2 w-16 bg-brand-secondary rounded-full"></div>
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