"use client";

import { motion } from 'framer-motion';
import Image from "next/image";
import { Cpu, Users, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Hardware = () => {
  const personnel = [
    { name: "Kunal Ghosh", role: "Co-founder, VSD", initial: "KG" },
    { name: "Steve Hoover", role: "Redwood EDA", initial: "SH" },
    { name: "C-DAC Team", role: "VEGA Processor Architects", initial: "CD" },
  ];

  const operations = [
    {
      title: "THEJAS32 Deployment",
      desc: "Successful integration of the indigenous RISC-V VEGA processor on the ULTRA platform.",
      status: "Operational",
    },
    {
      title: "Edge AI Optimization",
      desc: "Achieving 10x efficiency in real-time battery health localized inference.",
      status: "Completed",
    },
    {
      title: "Sovereign Compute",
      desc: "Building a verifiable and secure hardware ecosystem for mission-critical apps.",
      status: "In Progress",
    },
  ];

  return (
    <div
      className="bg-transparent py-24 sm:py-32 relative z-10 border-t border-brand-secondary/30"
      id="hardware"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-end">
          <div>
            <Badge className="bg-brand-accent text-brand-dark mb-4 px-4 py-1 uppercase tracking-widest text-xs font-mono">
              Hardware Ecosystem
            </Badge>
            <h2 className="text-4xl sm:text-6xl font-black text-white font-display uppercase tracking-tighter leading-none mb-6">
              VSD Squadron{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white">
                ULTRA
              </span>
            </h2>
            <p className="text-xl text-brand-muted leading-relaxed max-w-xl">
              Pioneering indigenous hardware innovation through RISC-V
              architecture.
              <span className="block mt-4 p-4 bg-brand-accent/10 border-l-4 border-brand-accent rounded-r-xl text-white font-bold shadow-[0_0_20px_-5px_rgba(204,255,0,0.2)] animate-pulse">
                The top 15 shortlisted teams will receive this comprehensive
                hardware arsenal to bring their intelligence models to life.
              </span>
            </p>
          </div>
          <div className="flex justify-start lg:justify-end">
            <div className="bg-brand-secondary/20 border border-brand-secondary p-4 rounded-2xl flex items-center gap-4 backdrop-blur-md">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center">
                <Cpu className="text-brand-accent w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-brand-muted uppercase tracking-widest">
                  Platform_Status
                </div>
                <div className="text-white font-bold uppercase tracking-tight">
                  Ready_For_Shortlist
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* VSDSquadron Visual */}
        <div className="flex justify-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative max-w-md"
          >
            <div className="absolute -inset-4 bg-brand-accent/10 rounded-[3rem] blur-3xl opacity-50"></div>

            <Card className="bg-brand-secondary/20 border-brand-secondary border-dashed p-8 relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Cpu className="w-64 h-64 text-brand-accent" />
              </div>

              <div className="relative z-10">
                <div className="aspect-square max-w-xs mx-auto bg-brand-dark/50 rounded-3xl border border-brand-secondary flex items-center justify-center relative group mb-8 overflow-hidden">
                  <Image
                    src="/images/vsd.jpeg"
                    alt="VSDSquadron"
                    fill
                    className="object-cover rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="space-y-4 text-center">
                  <h3 className="text-xl font-bold text-white uppercase tracking-widest font-display">
                    VSDSquadron
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    <Badge
                      variant="outline"
                      className="border-brand-secondary text-brand-muted text-[8px]"
                    >
                      USB-C
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-brand-secondary text-brand-muted text-[8px]"
                    >
                      GPIO
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-brand-secondary text-brand-muted text-[8px]"
                    >
                      LOW POWER
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Bottom Grid: Personnel & Operations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {/* Personnel */}
          <Card className="bg-brand-secondary/10 border-brand-secondary/50 lg:col-span-1 h-full">
            <CardHeader className="border-b border-brand-secondary/30">
              <CardTitle className="text-white flex items-center gap-3 text-lg uppercase tracking-wide font-display">
                <Users className="w-5 h-5 text-brand-accent" /> Key Personnel
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              {personnel.map((p, i) => (
                <div key={i} className="flex items-center gap-4">
                  <Avatar className="h-10 w-10 border border-brand-accent/30">
                    <AvatarFallback className="bg-brand-secondary text-brand-accent font-bold text-xs">
                      {p.initial}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm font-bold text-white leading-none">
                      {p.name}
                    </div>
                    <div className="text-xs text-brand-muted mt-1">
                      {p.role}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Operations */}
          <Card className="bg-brand-secondary/10 border-brand-secondary/50 lg:col-span-2">
            <CardHeader className="border-b border-brand-secondary/30">
              <CardTitle className="text-white flex items-center gap-3 text-lg uppercase tracking-wide font-display">
                <Target className="w-5 h-5 text-brand-accent" /> Notable
                Operations
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {operations.map((op, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-brand-primary/40 border border-brand-secondary group hover:border-brand-accent/30 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-white font-bold text-sm uppercase tracking-tight">
                        {op.title}
                      </h4>
                      <span className="text-[8px] font-mono text-brand-accent px-1.5 py-0.5 border border-brand-accent/30 rounded uppercase">
                        {op.status}
                      </span>
                    </div>
                    <p className="text-xs text-brand-muted leading-relaxed">
                      {op.desc}
                    </p>
                  </div>
                ))}
                <div className="p-4 rounded-xl border border-dashed border-brand-secondary flex items-center justify-center opacity-50">
                  <span className="text-[10px] font-mono text-brand-muted uppercase">
                    Initializing_Next...
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Hardware;
