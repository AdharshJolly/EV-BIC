"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const TechnologyInAction = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-24"
      >
        <h3 className="text-3xl font-bold text-white text-center mb-12 font-display">
          Technology in Action
        </h3>

        {/* Bento/Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[250px] gap-6 max-w-7xl mx-auto">
          {/* Item 1: Large Featured (G1) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden border border-brand-secondary/50 group"
          >
            <Image
              src="/images/G1.jpeg"
              alt="Real-time Monitoring"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-brand-dark/90 via-transparent to-transparent flex items-end p-8">
              <div>
                <Badge className="mb-3 bg-brand-accent text-brand-dark font-bold border-none">
                  Featured Tech
                </Badge>
                <h4 className="text-2xl font-bold text-white mb-2">
                  Real-time Battery Intelligence
                </h4>
                <p className="text-brand-muted line-clamp-2">
                  Advanced sensors tracking voltage, current, and temperature in
                  micro-second intervals.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Item 2: Standard (G2) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden border border-brand-secondary/50 group"
          >
            <Image
              src="/images/G2.jpeg"
              alt="Hardware Integration"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-brand-dark/90 via-black/20 to-transparent flex items-end p-6">
              <h4 className="text-lg font-bold text-white">
                Hardware Integration
              </h4>
            </div>
          </motion.div>

          {/* Item 3: Standard (G3) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative rounded-3xl overflow-hidden border border-brand-secondary/50 group"
          >
            <Image
              src="/images/G3.jpeg"
              alt="Data Processing"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-brand-dark/90 via-black/20 to-transparent flex items-end p-6">
              <h4 className="text-lg font-bold text-white">Data Processing</h4>
            </div>
          </motion.div>

          {/* Item 4: Wide (G5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 relative rounded-3xl overflow-hidden border border-brand-secondary/50 group"
          >
            <Image
              src="/images/G5.jpeg"
              alt="Performance Analytics"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-brand-dark/90 via-transparent to-transparent flex items-end p-8">
              <div>
                <h4 className="text-xl font-bold text-white mb-1">
                  Performance Analytics
                </h4>
                <p className="text-sm text-brand-muted">
                  Deep insights into battery health and lifecycle.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Item 5: Standard (G6) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="relative rounded-3xl overflow-hidden border border-brand-secondary/50 group"
          >
            <Image
              src="/images/G6.jpeg"
              alt="R&D Lab"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-brand-dark/90 via-black/20 to-transparent flex items-end p-6">
              <h4 className="text-lg font-bold text-white">Innovation Lab</h4>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default TechnologyInAction;
