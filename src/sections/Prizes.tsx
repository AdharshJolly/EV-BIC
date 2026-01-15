"use client";

import { motion } from 'framer-motion';
import { Trophy, Gift, Award, Cpu } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Prizes = () => {
  return (
    <div className="bg-transparent py-24 sm:py-32 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-brand-accent/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl lg:text-center mb-20">
          <motion.h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 font-display inline-block relative">
            <span className="relative">
              Prize Pool
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-brand-accent/50"></span>
            </span>
          </motion.h2>
          <p className="text-xl text-brand-muted mt-8">
            Total rewards worth <span className="text-brand-accent font-bold text-2xl animate-pulse">₹2,15,000</span> awaiting the best innovators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end max-w-5xl mx-auto">
           {/* 2nd Prize */}
           <motion.div 
             initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
             className="order-2 md:order-1"
           >
              <Card className="bg-brand-secondary/20 border-brand-secondary/50 text-center hover:-translate-y-2 transition-transform duration-300">
                 <CardHeader>
                    <div className="mx-auto bg-gray-400/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 border border-gray-400/30">
                       <Award className="w-8 h-8 text-gray-300" />
                    </div>
                    <CardTitle className="text-gray-300">2nd Place</CardTitle>
                 </CardHeader>
                 <CardContent>
                    <div className="text-3xl font-black text-white mb-2">₹35,000</div>
                    <p className="text-sm text-brand-muted">Cash Prize + Certificates</p>
                 </CardContent>
              </Card>
           </motion.div>

           {/* 1st Prize */}
           <motion.div 
             initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
             className="order-1 md:order-2 transform md:-translate-y-8"
           >
              <Card className="bg-brand-secondary/40 border-brand-accent/50 text-center relative overflow-hidden shadow-[0_0_30px_-5px_rgba(204,255,0,0.15)]">
                 <div className="absolute top-0 left-0 w-full h-1 bg-brand-accent"></div>
                 <CardHeader>
                    <div className="mx-auto bg-brand-accent/10 w-20 h-20 rounded-full flex items-center justify-center mb-4 border border-brand-accent/30">
                       <Trophy className="w-10 h-10 text-brand-accent" />
                    </div>
                    <CardTitle className="text-brand-accent text-xl">Winner</CardTitle>
                 </CardHeader>
                 <CardContent>
                    <div className="text-4xl sm:text-5xl font-black text-white mb-2">₹50,000</div>
                    <p className="text-sm text-brand-muted">Cash Prize + Incubation Support</p>
                 </CardContent>
              </Card>
           </motion.div>

           {/* 3rd Prize */}
           <motion.div 
             initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
             className="order-3"
           >
              <Card className="bg-brand-secondary/20 border-brand-secondary/50 text-center hover:-translate-y-2 transition-transform duration-300">
                 <CardHeader>
                    <div className="mx-auto bg-amber-700/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 border border-amber-700/30">
                       <Award className="w-8 h-8 text-amber-600" />
                    </div>
                    <CardTitle className="text-amber-600">3rd Place</CardTitle>
                 </CardHeader>
                 <CardContent>
                    <div className="text-3xl font-black text-white mb-2">₹25,000</div>
                    <p className="text-sm text-brand-muted">Cash Prize + Certificates</p>
                 </CardContent>
              </Card>
           </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
           <Card className="bg-brand-secondary/10 border-brand-secondary/30">
              <CardContent className="p-6 flex items-center gap-4">
                 <div className="bg-teal-500/10 p-3 rounded-lg">
                    <Gift className="w-6 h-6 text-teal-400" />
                 </div>
                 <div>
                    <h4 className="font-bold text-white">Consolation Prizes</h4>
                    <p className="text-sm text-brand-muted">7 Teams × ₹15,000 each</p>
                 </div>
              </CardContent>
           </Card>
           
           <Card className="bg-brand-secondary/10 border-brand-secondary/30">
              <CardContent className="p-6 flex items-center gap-4">
                 <div className="bg-brand-accent/10 p-3 rounded-lg">
                    <Cpu className="w-6 h-6 text-brand-accent" />
                 </div>
                 <div>
                    <h4 className="font-bold text-white">Hardware Kit</h4>
                    <p className="text-sm text-brand-muted">VSDSquadron Ultra Board for Top 15</p>
                 </div>
              </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
