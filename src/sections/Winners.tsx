"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Star, Crown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Winners = () => {
  const winners = [
    {
      rank: "1st Runner Up",
      team: "The Invincibles",
      members: ["Karthigaa S", "Nalinkumar S"],
      institution: "Madras Institute of Technology",
      prize: "₹35,000",
      color: "text-gray-300",
      borderColor: "border-gray-400/30",
      bgColor: "bg-gray-400/10",
      icon: Medal,
      delay: 0.1,
      order: "order-2 md:order-1",
      scale: 1,
    },
    {
      rank: "Grand Winner",
      team: "SentinelX",
      members: ["Mohammed Fawaz Ali", "Syed Abdul Mateen"],
      institution: "SR University",
      prize: "₹50,000",
      color: "text-brand-accent",
      borderColor: "border-brand-accent/50",
      bgColor: "bg-brand-accent/10",
      icon: Crown,
      delay: 0,
      order: "order-1 md:order-2",
      scale: 1.1,
      isWinner: true,
    },
    {
      rank: "2nd Runner Up",
      team: "NeuroMotive",
      members: ["Abisek S", "Dhakshana Bala S"],
      institution: "Vellore Institute of Technology",
      prize: "₹25,000",
      color: "text-amber-600",
      borderColor: "border-amber-700/30",
      bgColor: "bg-amber-700/10",
      icon: Medal,
      delay: 0.2,
      order: "order-3",
      scale: 0.95,
    },
  ];

  return (
    <div className="bg-transparent py-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[150px] -z-10"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl lg:text-center mb-20">
          <Badge
            variant="outline"
            className="mb-4 text-brand-accent border-brand-accent/30 bg-brand-accent/5 uppercase tracking-widest px-4 py-1"
          >
            Hall of Fame
          </Badge>
          <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl font-display uppercase">
            Meet Our <span className="text-brand-accent">Champions</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-brand-muted font-body">
            Celebrating the brightest minds who pushed the boundaries of EV battery intelligence and indigenous innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto pt-10">
          {winners.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay, duration: 0.5 }}
              className={`${item.order} relative group`}
            >
              {item.isWinner && (
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-brand-accent animate-bounce">
                  <Trophy className="w-10 h-10 fill-brand-accent" />
                </div>
              )}
              
              <Card 
                className={`overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(204,255,0,0.2)] ${item.borderColor} bg-brand-secondary/20 backdrop-blur-sm border-2`}
                style={{ transform: `scale(${item.scale})` }}
              >
                <div className={`absolute top-0 left-0 w-full h-1 ${item.isWinner ? "bg-brand-accent" : "bg-white/10"}`}></div>
                
                <CardContent className="p-8 text-center">
                  <div className={`mx-auto w-20 h-20 rounded-2xl flex items-center justify-center mb-6 border ${item.borderColor} ${item.bgColor} rotate-3 group-hover:rotate-0 transition-transform duration-500`}>
                    <item.icon className={`w-10 h-10 ${item.color} -rotate-3 group-hover:rotate-0 transition-transform duration-500`} />
                  </div>
                  
                  <Badge variant="outline" className={`mb-6 ${item.borderColor} ${item.color} bg-white/5 px-4 py-1 rounded-full text-[10px] font-bold tracking-[0.2em]`}>
                    {item.rank}
                  </Badge>
                  
                  <div className="space-y-6 mb-8">
                    <h3 className="text-4xl font-black text-white tracking-tighter font-heading group-hover:text-brand-accent transition-colors duration-500 leading-none">
                      {item.team}
                    </h3>
                    
                    <div className="flex flex-col items-center gap-3">
                      <div className="flex flex-col gap-1">
                        <span className="text-[9px] font-bold text-brand-accent/50 uppercase tracking-[0.4em] mb-1">Team Members</span>
                        {item.members.map((member, idx) => (
                          <p key={idx} className="text-white font-body text-sm font-semibold tracking-wide leading-tight">
                            {member}
                          </p>
                        ))}
                      </div>
                      <div className="w-8 h-px bg-brand-accent/20"></div>
                      <p className="text-brand-muted font-display text-[11px] font-bold uppercase tracking-widest leading-relaxed px-4">
                        {item.institution}
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-brand-accent/10 flex flex-col items-center relative">
                    <div className="absolute -top-px left-1/2 -translate-x-1/2 w-12 h-0.5 bg-brand-accent/30"></div>
                    <span className="text-[10px] font-mono text-brand-muted uppercase tracking-[0.3em] mb-1">Grant Awarded</span>
                    <span className={`text-3xl font-black ${item.color} font-display tracking-tight`}>{item.prize}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Decorative base for podium feel */}
              <div className="hidden md:block absolute -bottom-4 left-4 right-4 h-4 bg-brand-secondary/40 blur-xl rounded-full -z-10"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Winners;