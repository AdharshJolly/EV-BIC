"use client";

import { motion } from "framer-motion";
import { Lock, Timer, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Register = () => {
  return (
    <div className="bg-transparent py-24 relative overflow-hidden" id="register">
      {/* Bio-Lime background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <Badge 
            variant="outline" 
            className="mb-4 border-brand-accent/30 text-brand-accent bg-brand-accent/5 px-4 py-1 uppercase tracking-widest text-[10px]"
          >
            Phase 1 Complete
          </Badge>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold tracking-tight text-white sm:text-5xl font-display mb-4"
          >
            Registrations <span className="text-brand-accent underline underline-offset-8 decoration-brand-accent/30">Closed</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg leading-8 text-brand-muted max-w-xl mx-auto"
          >
            The registration phase for EV Battery Intelligence Challenge 2026 has officially concluded.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="mx-auto max-w-2xl relative"
        >
          <Card className="bg-brand-secondary/20 border-brand-secondary/50 backdrop-blur-md overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-brand-accent/50 to-transparent"></div>
            <CardContent className="p-10 text-center">
              <div className="w-20 h-20 bg-brand-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-brand-accent/20 rotate-3">
                <Lock className="w-10 h-10 text-brand-accent -rotate-3" />
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Thank You for the Overwhelming Response!</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mt-8">
                  <div className="p-4 rounded-xl bg-brand-primary/40 border border-brand-secondary/50 flex gap-4">
                    <div className="mt-1">
                      <Timer className="w-5 h-5 text-brand-accent" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Next Step</p>
                      <p className="text-brand-muted text-xs mt-1">Shortlisted teams will be announced soon on the timeline.</p>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-brand-primary/40 border border-brand-secondary/50 flex gap-4">
                    <div className="mt-1">
                      <Info className="w-5 h-5 text-brand-accent" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Support</p>
                      <p className="text-brand-muted text-xs mt-1">Check the FAQ or reach out via the contact section for queries.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 flex flex-col items-center">
                  <p className="text-brand-accent font-mono text-sm uppercase tracking-tighter mb-4">
                    // REGISTRATION_STATUS: LOCKED
                  </p>
                  <div className="w-full max-w-md h-px bg-linear-to-r from-transparent via-brand-secondary to-transparent"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
