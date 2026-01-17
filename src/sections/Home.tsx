"use client";

import { ArrowRight, Cpu, Zap, ChevronRight, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Countdown from "@/components/Countdown";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-transparent overflow-hidden pt-32 lg:pt-40">
      {/* --- Immersive Background Environment --- */}
      {/* Dynamic Grid Floor with Perspective */}
      <div className="absolute inset-0 perspective-[1000px] pointer-events-none">
        <div className="absolute bottom-[-20%] left-[-20%] w-[140%] h-[80%] bg-[linear-gradient(transparent_0%,rgba(204,255,0,0.05)_1px,transparent_1px),linear-gradient(90deg,transparent_0%,rgba(204,255,0,0.05)_1px,transparent_1px)] bg-size-[60px_60px] transform-[rotateX(60deg)] opacity-30 animate-[pulse_8s_ease-in-out_infinite]"></div>
      </div>

      {/* Central "Reactor" Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Scanline Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(204,255,0,0.02)_50%,transparent_51%)] bg-size-[100%_8px] pointer-events-none opacity-20"></div>

      {/* --- Holographic Central Interface --- */}
      <div className="relative z-10 w-full max-w-7xl px-4 flex flex-col items-center">
        {/* Organized By Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col items-center gap-2 mb-8"
        >
          <span className="text-[10px] font-mono text-brand-muted uppercase tracking-[0.3em]">
            Presented By
          </span>
          <div className="flex items-center sm:gap-12 gap-4 -mt-10 -mb-8 ">
            {/* CHRIST Logo */}
            <div className="flex items-center justify-center transition-all duration-300 hover:scale-105">
              <Image
                src="/images/cu-logo.png"
                alt="CHRIST University"
                width={600}
                height={600}
                className="object-contain opacity-90 hover:opacity-100 transition-opacity w-56 h-32 sm:w-80 sm:h-48"
                priority
              />
            </div>

            <div className="h-10 w-px bg-white/10"></div>

            {/* VSD Logo */}
            <div className="flex items-center justify-center transition-all duration-300 hover:scale-105">
              <Image
                src="/images/vsd-logo.png"
                alt="VSD"
                width={600}
                height={600}
                className="object-contain opacity-90 hover:opacity-100 transition-opacity w-40 h-24 sm:w-60 sm:h-36"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Central "Reactor Ring" Visualization */}
        <div className="relative mb-12 group">
          {/* Rotating Outer Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-87.5 h-87.5 sm:w-125 sm:h-125 border border-brand-accent/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 sm:w-112.5 sm:h-112.5 border border-dashed border-brand-accent/20 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>

          {/* Center Content Group */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center"
          >
            <div className="mb-6 flex justify-center gap-3">
              <Badge
                variant="outline"
                className="bg-brand-secondary/50 backdrop-blur-sm border-brand-accent/30 text-brand-accent tracking-widest px-4 py-1.5 uppercase font-mono text-xs"
              >
                Challenge Active
              </Badge>
              <Badge
                variant="outline"
                className="bg-brand-accent/10 backdrop-blur-sm border-brand-accent/50 text-brand-accent tracking-widest px-4 py-1.5 uppercase font-mono text-xs animate-pulse"
              >
                <Trophy className="w-3 h-3 mr-2 inline" />
                ₹2,15,000 Pool
              </Badge>
            </div>

            {/* Main Typography - Layered & Glitchy */}
            <h1 className="relative text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter leading-[0.85] font-display text-white mb-6 select-none">
              <span className="block text-transparent bg-clip-text bg-linear-to-b from-white/10 to-transparent absolute top-0 left-0 -z-10 blur-sm transform scale-105">
                EV BATTERY
              </span>
              EV BATTERY
              <br />
              <span className="text-brand-accent relative inline-block">
                INTELLIGENCE CHALLENGE
                <span className="absolute -inset-1 bg-brand-accent/20 blur-xl opacity-50"></span>
              </span>
            </h1>

            <p className="max-w-xl mx-auto text-lg sm:text-xl text-brand-muted/80 font-medium leading-relaxed mb-8">
              <span className="text-white">
                Powering the Future of E-Mobility with Indigenous Atmanirbhar
                Compute
              </span>
              <br />
              <span className="text-brand-accent">
                Powered by CDAC
              </span>
            </p>

            {/* Interactive Countdown "Chip" */}
            <div className="inline-flex flex-col items-center bg-brand-secondary/30 backdrop-blur-md border border-brand-accent/20 rounded-2xl p-6 sm:px-10 shadow-[0_0_40px_-10px_rgba(204,255,0,0.1)] mb-10 group-hover:border-brand-accent/40 transition-colors duration-500">
              <div className="text-[10px] font-mono text-brand-accent/60 mb-2 tracking-widest uppercase">
                Time Remaining To Register
              </div>
              <Countdown />
            </div>

            {/* Primary Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
              <Button
                asChild
                className="h-14 px-8 text-lg font-bold bg-brand-accent text-brand-dark hover:bg-white hover:scale-105 transition-all duration-300 rounded-none skew-x-[-10deg] border-0 relative overflow-hidden group"
              >
                <a href="#register">
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  <span className="skew-x-10 flex items-center gap-2">
                    INITIATE_REGISTRATION <ArrowRight className="w-5 h-5" />
                  </span>
                </a>
              </Button>

              <a
                href="#about"
                className="group flex items-center gap-2 text-brand-muted hover:text-white transition-colors text-sm font-mono tracking-widest uppercase"
              >
                <span>Explore_Data</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Floating Data Artifacts */}
        <div className="absolute bottom-10 left-10 hidden lg:block">
          <div className="flex items-center gap-4 text-brand-accent/40 font-mono text-xs">
            <Cpu className="w-4 h-4" />
            <span>CORE: RISC-V 64-BIT</span>
          </div>
        </div>
        <div className="absolute bottom-10 right-10 hidden lg:block">
          <div className="flex items-center gap-4 text-brand-accent/40 font-mono text-xs text-right">
            <span>STATUS: OPTIMAL</span>
            <Zap className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Corner Brackets */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-brand-accent/20 rounded-tl-3xl pointer-events-none"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-brand-accent/20 rounded-tr-3xl pointer-events-none"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-brand-accent/20 rounded-bl-3xl pointer-events-none"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-brand-accent/20 rounded-br-3xl pointer-events-none"></div>
    </div>
  );
};

export default Home;
