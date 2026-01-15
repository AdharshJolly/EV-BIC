"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const Team = () => {
  const christMembers = [
    {
      name: "Dr Joseph Rodrigues",
      role: "Head - Industry Institute Interaction Cell",
      org: "CHRIST University",
      image: "/images/joseph.jpg"
    },
    {
      name: "Dr Parag Jose",
      role: "Head - CoE of E-mobility",
      org: "CHRIST University",
      image: "/images/parag.jpg"
    },
    {
      name: "M Manoj Reddy",
      role: "Student Coordinator - Industry Institute Interaction Cell",
      org: "CHRIST University",
      image: "/images/Manoj.jpg"
    }
  ];

  const vsdMembers = [
    {
      name: "Kunal Ghosh",
      role: "Co-founder, VSD",
      org: "VSD",
      initial: "KG"
    },
    {
      name: "Anagha Ghosh",
      role: "Co-founder, VSD",
      org: "VSD",
      initial: "AG"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="bg-transparent py-24 sm:py-32 border-t border-brand-secondary/30 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl lg:text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-4 text-brand-accent border-brand-accent/30 bg-brand-accent/5 uppercase tracking-widest">
              Leadership
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 font-display">
              The Team Behind <span className="text-brand-accent">EV BIC</span>
            </h2>
            <p className="text-lg leading-relaxed text-brand-muted">
              The collaborative force from CHRIST (Deemed to be University) and VSD, dedicated to fostering the next generation of EV innovators.
            </p>
          </motion.div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 gap-16">
          {/* VSD Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 flex flex-col items-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <h3 className="text-2xl font-bold text-white uppercase tracking-wide font-display border-b-2 border-brand-accent pb-1">VSD</h3>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
            >
              {vsdMembers.map((member, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <Card className="bg-brand-secondary/10 border-brand-secondary/30 hover:border-brand-accent/50 transition-all duration-300 hover:bg-brand-secondary/20 h-full w-full max-w-sm mx-auto">
                    <CardContent className="p-8 flex flex-col items-center text-center gap-6">
                      <Avatar className="h-24 w-24 bg-brand-accent/20 border-2 border-brand-accent/30">
                        <AvatarFallback className="bg-brand-accent/20 text-brand-accent font-bold text-xl">
                          {member.initial}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-2">{member.name}</h4>
                        <p className="text-sm text-brand-muted mb-3">{member.role}</p>
                        <Badge variant="secondary" className="bg-brand-secondary/40 text-brand-accent text-xs">
                          {member.org}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* CHRIST Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 flex flex-col items-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <h3 className="text-2xl font-bold text-white uppercase tracking-wide font-display border-b-2 border-brand-accent pb-1">CHRIST University</h3>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            >
              {christMembers.map((member, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <Card className="bg-brand-secondary/10 border-brand-secondary/30 hover:border-brand-accent/50 transition-all duration-300 hover:bg-brand-secondary/20 h-full w-full max-w-sm mx-auto">
                    <CardContent className="p-8 flex flex-col items-center text-center gap-6">
                      <div className="h-24 w-24 rounded-full overflow-hidden border-2 border-brand-accent/30 relative">
                        {/* @ts-ignore */}
                        <img
                          src={member.image}
                          alt={member.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-2">{member.name}</h4>
                        <p className="text-sm text-brand-muted mb-3">{member.role}</p>
                        <Badge variant="secondary" className="bg-brand-secondary/40 text-brand-accent text-xs">
                          {member.org}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Team;
