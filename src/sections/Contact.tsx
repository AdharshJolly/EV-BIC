"use client";

import { Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  return (
    <div className="min-h-screen bg-transparent py-24 sm:py-32 relative">
       {/* Background */}
       <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-brand-secondary/10 to-transparent -z-10"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-base font-semibold leading-7 text-brand-accent uppercase tracking-widest"
          >
            Get in Touch
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            We&apos;re Here to Help
          </motion.p>
          <p className="mt-4 text-lg leading-8 text-brand-muted">
            Have questions about the challenge, eligibility, or technical details? Reach out to us.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:gap-24 max-w-2xl mx-auto">
          {/* Contact Info & FAQ */}
          <div className="flex flex-col gap-12">
             <motion.div 
               initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}
               className="space-y-8"
             >
                <Card className="glass-panel border-transparent hover:border-brand-accent/50 transition-colors bg-brand-secondary/30">
                  <CardContent className="p-8 flex items-start gap-6">
                    <div className="bg-brand-secondary/50 p-4 rounded-xl group-hover:bg-brand-accent/20 transition-colors">
                      <Mail className="h-6 w-6 text-brand-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                      <div className="space-y-1">
                        <p className="text-brand-muted">VSD: <a href="mailto:vsd@evbic.com" className="text-white hover:text-brand-accent transition-colors">vsd@evbic.com</a></p>
                        <p className="text-brand-muted">Manoj: <a href="mailto:manoj@evbic.com" className="text-white hover:text-brand-accent transition-colors">manoj@evbic.com</a></p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-panel border-transparent hover:border-brand-accent/50 transition-colors bg-brand-secondary/30">
                  <CardContent className="p-8 flex items-start gap-6">
                    <div className="bg-brand-secondary/50 p-4 rounded-xl group-hover:bg-brand-accent/20 transition-colors">
                      <MapPin className="h-6 w-6 text-brand-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                      <p className="text-brand-muted leading-relaxed">
                        CHRIST (Deemed to be University)<br />
                        Bannerghatta Road Campus (BKC)<br />
                        Bangalore, Karnataka
                      </p>
                    </div>
                  </CardContent>
                </Card>
             </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
