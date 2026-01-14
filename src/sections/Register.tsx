"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Building, Users, Send, CheckCircle } from 'lucide-react';

const Register = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => setSubmitted(true), 1000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-brand-primary flex items-center justify-center p-6">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-brand-secondary/20 border border-brand-accent/50 p-12 rounded-3xl text-center max-w-lg w-full relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-brand-accent/5"></div>
          <div className="relative z-10">
             <div className="w-20 h-20 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
               <CheckCircle className="w-10 h-10 text-brand-accent" />
             </div>
             <h2 className="text-3xl font-bold text-white mb-4">Registration Successful!</h2>
             <p className="text-brand-muted mb-8">
               Thank you for registering for the EV Battery Intelligence Challenge. We have sent a confirmation email with further details.
             </p>
             <button 
               onClick={() => setSubmitted(false)}
               className="bg-brand-secondary hover:bg-brand-secondary/80 text-white px-8 py-3 rounded-lg font-medium transition-colors"
             >
               Back to Home
             </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-primary py-24 sm:py-32 relative">
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-brand-secondary/20 to-transparent -z-10"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Register for EV BIC
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-2 text-lg leading-8 text-brand-muted"
          >
            Join the revolution in EV battery intelligence. Secure your spot today.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mx-auto max-w-xl glass-panel p-8 sm:p-12 rounded-3xl border border-brand-secondary/50 shadow-2xl relative"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-brand-accent/5 rounded-full blur-3xl -z-10"></div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="col-span-1">
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-brand-text mb-2">First name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-brand-muted" />
                  </div>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    required
                    className="block w-full rounded-lg border-0 bg-brand-primary/60 pl-10 py-3 text-white shadow-sm ring-1 ring-inset ring-brand-secondary focus:ring-2 focus:ring-inset focus:ring-brand-accent sm:text-sm sm:leading-6 transition-all"
                    placeholder="John"
                  />
                </div>
              </div>
              
              <div className="col-span-1">
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-brand-text mb-2">Last name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-brand-muted" />
                  </div>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    required
                    className="block w-full rounded-lg border-0 bg-brand-primary/60 pl-10 py-3 text-white shadow-sm ring-1 ring-inset ring-brand-secondary focus:ring-2 focus:ring-inset focus:ring-brand-accent sm:text-sm sm:leading-6 transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="company" className="block text-sm font-semibold leading-6 text-brand-text mb-2">College / Organization</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Building className="h-5 w-5 text-brand-muted" />
                  </div>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    required
                    className="block w-full rounded-lg border-0 bg-brand-primary/60 pl-10 py-3 text-white shadow-sm ring-1 ring-inset ring-brand-secondary focus:ring-2 focus:ring-inset focus:ring-brand-accent sm:text-sm sm:leading-6 transition-all"
                    placeholder="University Name or Company"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-brand-text mb-2">Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-brand-muted" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="block w-full rounded-lg border-0 bg-brand-primary/60 pl-10 py-3 text-white shadow-sm ring-1 ring-inset ring-brand-secondary focus:ring-2 focus:ring-inset focus:ring-brand-accent sm:text-sm sm:leading-6 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="team-name" className="block text-sm font-semibold leading-6 text-brand-text mb-2">Team Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Users className="h-5 w-5 text-brand-muted" />
                  </div>
                  <input
                    type="text"
                    name="team-name"
                    id="team-name"
                    required
                    className="block w-full rounded-lg border-0 bg-brand-primary/60 pl-10 py-3 text-white shadow-sm ring-1 ring-inset ring-brand-secondary focus:ring-2 focus:ring-inset focus:ring-brand-accent sm:text-sm sm:leading-6 transition-all"
                    placeholder="The Innovators"
                  />
                </div>
              </div>
              
              <div className="sm:col-span-2">
                 <label htmlFor="theme" className="block text-sm font-semibold leading-6 text-brand-text mb-2">Preferred Theme</label>
                 <div className="relative">
                    <select
                      id="theme"
                      name="theme"
                      className="block w-full rounded-lg border-0 bg-brand-primary/60 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-brand-secondary focus:ring-2 focus:ring-inset focus:ring-brand-accent sm:text-sm sm:leading-6 transition-all appearance-none"
                    >
                      <option>Predictive Battery Health Analytics</option>
                      <option>Intelligent Thermal Anomaly Detection</option>
                      <option>Fleet-Level Battery Performance Dashboard</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-muted">
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                    </div>
                 </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-2 rounded-lg bg-brand-accent px-3.5 py-4 text-center text-sm font-bold text-brand-dark shadow-[0_0_20px_-5px_rgba(0,220,130,0.4)] hover:shadow-[0_0_25px_-5px_rgba(0,220,130,0.6)] hover:bg-white hover:scale-[1.01] transition-all duration-200"
              >
                Submit Registration <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
