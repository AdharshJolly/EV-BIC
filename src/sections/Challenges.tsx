"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Battery, Cpu, TrendingUp } from "lucide-react";

const Challenges = () => {
  const challenges = [
    {
      title: "Battery Management System",
      description: "Design and optimize a BMS for EV battery health monitoring and safety.",
      icon: Battery,
      color: "from-blue-500 to-cyan-500",
      difficulty: "Advanced",
    },
    {
      title: "Thermal Management",
      description: "Develop innovative cooling solutions for high-performance battery packs.",
      icon: Zap,
      color: "from-orange-500 to-red-500",
      difficulty: "Advanced",
    },
    {
      title: "Energy Efficiency",
      description: "Create algorithms to maximize EV range through intelligent power distribution.",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      difficulty: "Intermediate",
    },
    {
      title: "Integration Architecture",
      description: "Build seamless integration between battery, motor, and control systems.",
      icon: Cpu,
      color: "from-purple-500 to-pink-500",
      difficulty: "Advanced",
    },
  ];

  return (
    <div className="bg-transparent py-24 sm:py-32 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-accent/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 font-display">
              Challenge Tracks
            </h2>
            <p className="text-xl text-brand-muted">
              Choose your specialization and tackle real-world EV battery challenges
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {challenges.map((challenge, index) => {
            const IconComponent = challenge.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="bg-brand-secondary/20 border-brand-secondary/50 hover:border-brand-accent/30 transition-all duration-300 h-full group hover:shadow-[0_0_30px_-5px_rgba(204,255,0,0.1)]">
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${challenge.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                    <CardTitle className="text-xl text-white">{challenge.title}</CardTitle>
                    <CardDescription className="text-brand-muted/80 text-base">
                      {challenge.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center justify-between">
                    <Badge variant="outline" className="bg-brand-accent/10 text-brand-accent border-brand-accent/30">
                      {challenge.difficulty}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-brand-muted text-lg max-w-2xl mx-auto">
            Teams can choose one or multiple challenge tracks to focus on. Excellence in any track could lead you to the winner's circle and the prize pool.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Challenges;
