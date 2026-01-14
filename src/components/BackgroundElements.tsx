"use client";

import { motion } from 'framer-motion';
import { Zap, Leaf, Battery, Cpu, Activity, Shield } from 'lucide-react';
import { useEffect, useState, useMemo } from 'react';

const BackgroundElements = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nodes = useMemo(() => [
    { id: 'n1', Icon: Zap, label: "HV_BUS_01", top: "20%", left: "15%", duration: 15 },
    { id: 'n2', Icon: Leaf, label: "ENV_SYNC", top: "75%", left: "12%", duration: 18 },
    { id: 'n3', Icon: Battery, label: "CELL_MON", top: "45%", left: "85%", duration: 20 },
    { id: 'n4', Icon: Cpu, label: "RISCV_CORE", top: "82%", left: "72%", duration: 16 },
    { id: 'n5', Icon: Activity, label: "NODE_TEL", top: "12%", left: "62%", duration: 14 },
    { id: 'n6', Icon: Shield, label: "SAFE_PROT", top: "55%", left: "5%", duration: 17 },
  ], []);

  if (isMobile) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none bg-[#020804]">
      
      {/* --- LAYER 1: 3D Warping Grid (Autonomous) --- */}
      <motion.div 
        animate={{ 
          rotateX: [1, -1, 1],
          rotateY: [-1, 1, -1],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute inset-[-10%] opacity-[0.06]"
        style={{ perspective: 1000 }}
      >
         <div className="w-full h-full" 
              style={{ 
                backgroundImage: `
                  linear-gradient(to right, #ccff00 1px, transparent 1px),
                  linear-gradient(to bottom, #ccff00 1px, transparent 1px)
                `,
                backgroundSize: '100px 100px'
              }} 
         />
      </motion.div>

      {/* --- LAYER 2: Generative Neural Paths (Autonomous) --- */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
         {[...Array(4)].map((_, i) => (
            <motion.path
               key={i}
               d={`M ${-100 + i * 200} ${200 + i * 150} Q ${400 + i * 100} ${100 + i * 50} ${1100} ${400 + i * 100}`}
               stroke="#ccff00"
               strokeWidth="1"
               fill="none"
               animate={{ 
                 pathLength: [0, 1, 0],
                 opacity: [0, 0.5, 0]
               }}
               transition={{ 
                 duration: 12 + i * 3, 
                 repeat: Infinity, 
                 ease: "easeInOut",
                 delay: i * 2
               }}
            />
         ))}
      </svg>

      {/* --- LAYER 3: Diagnostic Instruments (Autonomous) --- */}
      {nodes.map((node) => (
        <div 
          key={node.id} 
          className="absolute"
          style={{ top: node.top, left: node.left }}
        >
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.1, 0.25, 0.1]
            }}
            transition={{ 
              duration: node.duration / 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="flex flex-col items-center justify-center"
          >
            {/* Rotating Technical Rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute w-20 h-20 border border-brand-accent/10 rounded-full border-dashed"
            />
            
            <div className="bg-brand-secondary/20 p-3 rounded-xl border border-brand-accent/10 backdrop-blur-sm relative overflow-hidden">
               <node.Icon size={20} strokeWidth={1.5} className="text-brand-accent" />
            </div>

            <span className="mt-4 font-mono text-[6px] tracking-[0.4em] text-white/40 uppercase">
              {node.label}
            </span>
          </motion.div>
        </div>
      ))}

      {/* --- LAYER 4: Atmospheric Light Blooms (Autonomous) --- */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.03, 0.05, 0.03]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[140px]"
      />

      {/* --- LAYER 5: Technical Perimeter --- */}
      <div className="absolute inset-8 border border-white/5 rounded-[2rem] opacity-30 pointer-events-none">
         <div className="absolute top-4 left-6 font-mono text-[8px] text-brand-accent/20 tracking-[0.5em] uppercase">Sector_Alpha // Grid_Active</div>
         <div className="absolute bottom-4 right-6 font-mono text-[8px] text-brand-accent/20 tracking-[0.5em] uppercase text-right">Core_System // v.2026.04</div>
      </div>

    </div>
  );
};

export default BackgroundElements;
