"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Target,
  Cpu,
  CheckCircle2,
  Network,
  BarChart3,
  AlertTriangle,
  Monitor,
  ArrowRight,
  GraduationCap,
} from "lucide-react";
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
  ];

  const metrics = {
    soc: 85,
    temp: 32, // °C
    packV: 400, // V
    current: 120, // A
  };

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
              VSDSquadron{" "}
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
            <Card className="bg-brand-secondary/20 border-brand-secondary border-dashed p-4 relative overflow-hidden backdrop-blur-sm">
              <div className="relative z-10">
                <div className="aspect-square h-80 max-w-xs mx-auto bg-brand-dark/50 rounded-3xl border border-brand-secondary flex items-center justify-center relative group mb-2 overflow-hidden">
                  <Image
                    src="/images/vsd.jpeg"
                    alt="VSDSquadron"
                    fill
                    className="object-contain rounded-3xl"
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

        {/* Notable Operations */}
        <div className="grid grid-cols-1 gap-8 mb-24">
          {/* Operations */}
          <Card className="bg-brand-secondary/10 border-brand-secondary/50">
            <CardHeader className="border-b border-brand-secondary/30">
              <CardTitle className="text-white flex items-center gap-3 text-lg uppercase tracking-wide font-display">
                <Target className="w-5 h-5 text-brand-accent" /> Notable
                Operations
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
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
              </div>
            </CardContent>
          </Card>
        </div>

        {/* VSDSquadron Use Case (Enhanced) */}
        <Card className="bg-brand-secondary/10 border-brand-secondary/50 mb-12">
          <CardHeader className="border-b border-brand-secondary/30">
            <CardTitle className="text-white flex items-center gap-3 text-lg uppercase tracking-wide font-display">
              <Cpu className="w-5 h-5 text-brand-accent" /> VSDSquadron:
              Real-time Battery Analytics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <p className="text-sm text-brand-muted leading-relaxed">
              Edge monitoring for Li-ion packs: live BMS data via CAN, decoded
              and analyzed on indigenous RISC‑V VSDSquadron. Delivers alerts,
              logs, and visuals for diagnostics and research.
            </p>

            {/* Pipeline Flow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 flex-wrap"
            >
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-brand-primary/40 border border-brand-secondary">
                <Network className="w-4 h-4 text-brand-accent" />
                <span className="text-xs text-white">CAN (BMS)</span>
              </div>
              <ArrowRight className="w-4 h-4 text-brand-muted" />
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-brand-primary/40 border border-brand-secondary">
                <Cpu className="w-4 h-4 text-brand-accent" />
                <span className="text-xs text-white">Decode</span>
              </div>
              <ArrowRight className="w-4 h-4 text-brand-muted" />
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-brand-primary/40 border border-brand-secondary">
                <BarChart3 className="w-4 h-4 text-brand-accent" />
                <span className="text-xs text-white">Analytics</span>
              </div>
              <ArrowRight className="w-4 h-4 text-brand-muted" />
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-brand-primary/40 border border-brand-secondary">
                <AlertTriangle className="w-4 h-4 text-brand-accent" />
                <span className="text-xs text-white">Alerts</span>
              </div>
              <ArrowRight className="w-4 h-4 text-brand-muted" />
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-brand-primary/40 border border-brand-secondary">
                <Monitor className="w-4 h-4 text-brand-accent" />
                <span className="text-xs text-white">Logs & Viz</span>
              </div>
            </motion.div>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-accent mt-0.5" />
                <span className="text-xs text-white">
                  Real-time CAN frame decoding
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-accent mt-0.5" />
                <span className="text-xs text-white">
                  Health & performance analytics
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-accent mt-0.5" />
                <span className="text-xs text-white">
                  Threshold-based alerts & fault detection
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-accent mt-0.5" />
                <span className="text-xs text-white">
                  Logging & visualization support
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Academic Ambassador: Christ University */}
        <Card className="bg-brand-secondary/10 border-brand-secondary/50 mb-24">
          <CardHeader className="border-b border-brand-secondary/30">
            <CardTitle className="text-white flex items-center gap-3 text-lg uppercase tracking-wide font-display">
              <GraduationCap className="w-5 h-5 text-brand-accent" /> Academic
              Ambassador: Christ University
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <p className="text-sm text-brand-muted leading-relaxed">
              Christ University leads the academic and applied research
              initiatives on the indigenous RISC‑V VSDSquadron for e‑mobility.
              They validate the platform across electric vehicles, energy
              storage, and smart battery technologies—bridging hardware
              innovation with real‑world mobility applications.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-accent mt-0.5" />
                <span className="text-xs text-white">
                  EV & e‑mobility validation initiatives
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-accent mt-0.5" />
                <span className="text-xs text-white">
                  Battery diagnostics lab workflows
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-accent mt-0.5" />
                <span className="text-xs text-white">
                  Curriculum & capstone integration
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-accent mt-0.5" />
                <span className="text-xs text-white">
                  Industry–academia collaboration & research outputs
                </span>
              </div>
            </div>

            {/* Program Callout */}
            <div className="p-3 rounded-xl bg-brand-accent/10 border border-brand-accent/40 text-xs text-white">
              Ambassador Program: advancing indigenous RISC‑V hardware for
              e‑mobility with rigorous validation, teaching modules, and applied
              research.
            </div>
          </CardContent>
        </Card>

        {/* Bottom Grid: Operations */}
      </div>
    </div>
  );
};

export default Hardware;
