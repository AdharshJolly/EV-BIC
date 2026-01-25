"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  Calendar,
  Cloud,
  Cpu,
  Rocket,
  Shield,
  Users,
  Zap,
} from "lucide-react";

const Timeline = () => {
  const dates = [

    {
      event: "Inauguration",
      date: "11 Feb 2026",
      status: "Upcoming",
      desc: "Official launch at CHRIST (Deemed to be University), Bangalore.",
    },
    {
      event: "Proposal Submission",
      date: "11 Feb - 13 Feb 2026",
      status: "Upcoming",
      desc: "Detailed technical proposal submission.",
    },
    {
      event: "Video & GitHub",
      date: "16 Feb - 26 Feb 2026",
      status: "Upcoming",
      desc: "Submission of prototype video and code repository.",
    },
    {
      event: "Shortlisting",
      date: "27 Feb - 28 Feb 2026",
      status: "Upcoming",
      desc: "Announcement of Top 10 teams.",
    },
    {
      event: "Grand Finale",
      date: "10 Mar - 11 Mar 2026",
      status: "Upcoming",
      desc: "Physical demonstration and hackathon finale.",
    },
  ];

  const outcomes = [
    { title: "Functional EV battery intelligence prototypes", Icon: Cpu },
    { title: "Indigenous firmware and reference designs", Icon: Shield },
    {
      title: "Cloud dashboards demonstrating real-world battery insights",
      Icon: Cloud,
    },
    {
      title: "A talent pool trained on Indian RISC-V processors and boards",
      Icon: Users,
    },
    { title: "Reduced dependence on imported BMS solutions", Icon: Zap },
    {
      title: "Faster innovation cycles through open, transparent platforms",
      Icon: Rocket,
    },
    {
      title:
        "A pathway to deploy Make-in-India electronics in future EV programs",
      Icon: BarChart3,
    },
  ];

  return (
    <div className="bg-transparent py-24 relative">
      <div className="absolute left-0 bottom-0 w-full h-1/2 bg-linear-to-t from-brand-secondary/20 to-transparent -z-10"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 font-display">
            Event Timeline
          </h2>
          <p className="text-brand-muted">
            Follow the journey from ideation to innovation.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-brand-secondary/50 md:left-1/2 md:-ml-px"></div>

          {dates.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative mb-12 last:mb-0 md:flex md:justify-between ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Dot */}
              <div className="absolute left-8 -ml-3 w-6 h-6 rounded-full border-4 border-brand-primary bg-brand-accent md:left-1/2 md:-ml-3 z-10 shadow-[0_0_10px_rgba(204,255,0,0.5)]"></div>

              <div className="ml-20 md:ml-0 md:w-[45%]">
                <Card className="bg-brand-secondary/30 border-brand-secondary/50 hover:border-brand-accent/30 transition-all">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <Badge
                        variant={
                          item.status === "Active" ? "default" : "secondary"
                        }
                        className={
                          item.status === "Active"
                            ? "bg-brand-accent text-brand-dark"
                            : "bg-brand-secondary text-brand-muted"
                        }
                      >
                        {item.status}
                      </Badge>
                      <div className="flex items-center text-xs font-bold text-brand-muted uppercase tracking-wider">
                        <Calendar className="w-3 h-3 mr-1" />
                        {item.date}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {item.event}
                    </h3>
                    <p className="text-sm text-brand-muted">{item.desc}</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="md:col-span-2 lg:col-span-4 my-20"
        >
          <div className="mx-auto max-w-3xl lg:text-center mb-10">
            <Badge
              variant="outline"
              className="mb-4 text-brand-accent border-brand-accent/30 bg-brand-accent/5 uppercase tracking-widest"
            >
              Impact & Outcomes
            </Badge>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3 font-display">
              Expected Outcomes &{" "}
              <span className="text-brand-accent">Industry Impact</span>
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-brand-muted">
              This hackathon aims to seed a domestic EV electronics ecosystem
              built on open, transparent platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.map(({ title, Icon }, i) => (
              <div
                key={i}
                className="rounded-2xl p-px bg-linear-to-b from-brand-accent/40 to-brand-secondary/40"
              >
                <div className="rounded-2xl bg-brand-secondary/10 border border-brand-secondary/30 p-6 h-full transition-all duration-200 hover:bg-brand-secondary/20 hover:shadow-xl hover:shadow-brand-accent/10">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/15 text-brand-accent ring-1 ring-brand-accent/30">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-1">
                        {title}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Who Can Participate - Full Width Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="md:col-span-2 lg:col-span-4 bg-brand-accent/5 border border-brand-accent/20 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-brand-accent/10 rounded-full">
              <Users className="w-6 h-6 text-brand-accent" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Who Can Participate?
              </h3>
              <p className="text-sm text-brand-muted">
                Innovators ready to shape the future.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {["Students", "Researchers", "Start-ups (< 2 Years)"].map(
              (p, i) => (
                <Badge
                  key={i}
                  variant="secondary"
                  className="bg-brand-secondary text-brand-text border border-brand-secondary/50 px-4 py-1.5"
                >
                  {p}
                </Badge>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Timeline;
