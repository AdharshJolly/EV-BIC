"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Zap, Globe, Users, Target } from "lucide-react";

const CenterOfExcellence = () => {
  const coePoints = [
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description:
        "The Centre of Excellence in E-Mobility at Christ University, Kengeri Campus, plays a critical role in shaping the future of transportation and addressing global challenges related to sustainability and energy efficiency.",
      focus: "Energy Storage Systems, Advanced Powertrain Technologies, Software-Driven Vehicles",
    },
    {
      icon: Zap,
      title: "Global Recognition",
      description:
        "CoE in E-Mobility is a globally recognized innovation hub driving the future of sustainable mobility. We collaborate with industry to deliver cost-effective, cutting-edge solutions.",
      focus: "Clean, efficient, and intelligent transportation systems",
    },
    {
      icon: Users,
      title: "CSR Initiative",
      description:
        "Centre of Excellence in E-Mobility is a CSR initiative of Safran Engineering Services India Ltd in association with IEEE and CHRIST (Deemed to be University).",
      focus: "Community of professors and students solving real-world problems",
    },
  ];

  const imageCards = [
    { src: "/images/COE-1.jpeg", alt: "E-Mobility Research", index: 1 },
    { src: "/images/COE-2.jpeg", alt: "Advanced Technologies", index: 2 },
    { src: "/images/COE-3.jpeg", alt: "Innovation Lab", index: 3 },
    { src: "/images/COE-4.jpeg", alt: "Team Collaboration", index: 4 },
    { src: "/images/COE-5.jpeg", alt: "Sustainable Solutions", index: 5 },
  ];

  return (
    <div className="bg-transparent py-24 sm:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-accent/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl lg:text-center mb-16"
        >
          <Badge
            variant="outline"
            className="mb-4 text-brand-accent border-brand-accent/30 bg-brand-accent/5 uppercase tracking-widest"
          >
            Centre of Excellence
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 font-display">
            E-Mobility at{" "}
            <span className="text-brand-accent">CHRIST University</span>
          </h2>
          <p className="text-lg text-brand-muted leading-relaxed">
            Advancing research and development of Electric Mobility technologies
            through innovation, collaboration, and sustainable solutions
          </p>
        </motion.div>

        {/* Content Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {coePoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                <Card className="bg-brand-secondary/20 border-brand-secondary/50 hover:border-brand-accent/30 transition-all duration-300 h-full group hover:shadow-[0_0_30px_-5px_rgba(204,255,0,0.1)]">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-brand-accent/10 p-3 mb-4 group-hover:scale-110 transition-transform duration-300 border border-brand-accent/20">
                      <IconComponent className="w-full h-full text-brand-accent" />
                    </div>
                    <CardTitle className="text-xl text-white">
                      {point.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-brand-muted/90 text-sm leading-relaxed mb-4">
                      {point.description}
                    </p>
                    <div className="border-t border-brand-secondary/30 pt-4">
                      <p className="text-xs uppercase tracking-widest text-brand-accent font-semibold mb-2">
                        Focus Areas
                      </p>
                      <p className="text-sm text-brand-muted">{point.focus}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Image Gallery Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white text-center mb-12 font-display">
              Our Innovation Showcase
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {imageCards.map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="group relative overflow-hidden rounded-xl border border-brand-secondary/50 hover:border-brand-accent/50 transition-all duration-300 aspect-square"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-semibold text-sm">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <Card className="bg-brand-secondary/10 border-brand-accent/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-accent"></div>
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <Target className="w-8 h-8 text-brand-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-white mb-3">
                    Dedicated to Excellence
                  </h4>
                  <p className="text-brand-muted leading-relaxed">
                    The Centre is dedicated to advancing the research and
                    development of Electric Mobility technologies. We are a
                    community of professors and students who combine our
                    knowledge and insights from our specialized fields to solve
                    problems and attain successful outputs that drive the
                    sustainable future of transportation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default CenterOfExcellence;
