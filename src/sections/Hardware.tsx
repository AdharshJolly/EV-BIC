"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Cpu, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Hardware = () => {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-10 items-end">
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
          <div className="flex justify-center">
            <Card className="bg-brand-secondary/20 border-brand-secondary border-dashed p-8 relative overflow-hidden backdrop-blur-sm">
              <div className="relative z-10">
                <div className="aspect-square max-w-xs mx-auto bg-brand-dark/50 rounded-3xl border border-brand-secondary flex items-center justify-center relative group mb-8 overflow-hidden">
                  <Image
                    src="/images/vsd.jpeg"
                    alt="VSDSquadron"
                    fill
                    className="object-cover rounded-3xl"
                  />
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
          </div>
        </div>

        {/* VSDSquadron Visual */}
        <div className="flex justify-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative max-w-md"
          ></motion.div>
        </div>

        {/* Bottom Grid: Operations */}
        <div className="grid grid-cols-1 gap-8 mb-24">
          {/* Operations */}
          <Card className="bg-brand-secondary/10 border-brand-secondary/50">
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
