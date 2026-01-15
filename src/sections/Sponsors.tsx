"use client";

import { motion } from 'framer-motion';
import { Star, Shield, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const Sponsors = () => {
  return (
    <div
      className="bg-transparent py-24 sm:py-32 relative overflow-hidden"
      id="sponsors"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl lg:text-center mb-20">
          <Badge
            variant="outline"
            className="mb-4 text-brand-accent border-brand-accent/30 bg-brand-accent/5 uppercase tracking-widest"
          >
            Our Partners
          </Badge>
          <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl font-display uppercase">
            Powered by{" "}
            <span className="text-brand-accent">Industry Leaders</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-brand-muted font-body">
            Enabling the future of EV technology through strong collaboration
            and indigenous innovation.
          </p>
        </div>

        {/* Title Sponsors - Premium Look */}
        <div className="mb-24 relative">
          <div className="flex items-center justify-center gap-2 mb-12">
            <div className="h-px w-12 bg-brand-accent/30"></div>
            <h3 className="text-2xl font-bold text-white uppercase tracking-widest font-display flex items-center gap-3">
              <Star className="w-6 h-6 text-brand-accent fill-brand-accent animate-pulse" />
              Title Sponsors
              <Star className="w-6 h-6 text-brand-accent fill-brand-accent animate-pulse" />
            </h3>
            <div className="h-px w-12 bg-brand-accent/30"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <Card className="h-48 bg-brand-secondary/20 border-brand-accent/20 rounded-2xl flex items-center justify-center relative overflow-hidden group-hover:border-brand-accent/50 transition-all duration-500">
                  <div className="absolute inset-0 bg-brand-accent/5 group-hover:bg-brand-accent/10 transition-colors"></div>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-accent to-teal-500 opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
                  <CardContent className="p-0 flex items-center justify-center relative z-10">
                    <span className="text-2xl font-black text-white tracking-widest uppercase font-display opacity-40 group-hover:opacity-100 transition-opacity">
                      PARTNER_0{i}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gold & Silver Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Gold Sponsors */}
          <div>
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
              <Award className="w-6 h-6 text-brand-accent" />
              <h3 className="text-xl font-bold text-white uppercase tracking-widest font-display">
                Gold Sponsors
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="h-32 bg-brand-secondary/10 border border-brand-secondary rounded-xl flex items-center justify-center hover:border-brand-accent/30 hover:bg-brand-secondary/20 transition-all cursor-pointer"
                >
                  <span className="text-brand-muted font-mono text-sm uppercase tracking-wider">
                    Gold_Sponsor_0{i}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Silver Sponsors */}
          <div>
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
              <Shield className="w-6 h-6 text-teal-400" />
              <h3 className="text-xl font-bold text-white uppercase tracking-widest font-display">
                Silver Sponsors
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="h-32 bg-brand-secondary/10 border border-brand-secondary rounded-xl flex items-center justify-center hover:border-teal-500/30 hover:bg-brand-secondary/20 transition-all cursor-pointer"
                >
                  <span className="text-brand-muted font-mono text-sm uppercase tracking-wider">
                    Silver_Sponsor_0{i}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
