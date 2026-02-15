"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Calendar,
  Cloud,
  Cpu,
  ExternalLink,
  Rocket,
  Shield,
  Users,
  Zap,
} from "lucide-react";

const topTeams = [
  {
    name: "NeuroMotive",
    p1: "Abisek S",
    p2: "Dhakshana Bala S",
    university: "Vellore institute of Technology",
    desc: "NeuroMotive is a TinyML-powered, federated learning battery safety system on VSDSquadron ULTRA that predicts thermal anomalies in EV cells and autonomously prevents thermal runaway through closed-loop control",
  },
  {
    name: "Guradian Grid",
    p1: "Atharv Aggarwal",
    p2: "Tushar Vats",
    university: "Jaypee Institute of Information Technology",
    desc: "ThermaGuard-RISC is a hybrid edge-cloud EV battery safety system that uses a physics-based digital twin on VSDSquadron ULTRA with FPGA fail-safe backup to detect and prevent thermal runaway in real time while predicting long-term battery faults via cloud ML",
  },
  {
    name: "For Tomorrow",
    p1: "Kodiganti Akshaya",
    p2: "M Manoj Reddy",
    university: "CHRIST (Deemed to be University), Bangalore Kengeri Campus",
    desc: "A cloud-edge EV battery analytics system using a PINN-based estimator on VSDSquadron ULTRA to deliver sub-2% SoC accuracy, RUL prediction, and intelligent range estimation with real-time safety monitoring",
  },
  {
    name: "Ante Meridiem",
    p1: "Mathi Prakash N",
    p2: "A Athul Krishna",
    university: "Chennai Institute of Technology",
    desc: "SentinEL-V is an edge AI-based thermal runaway prediction system on VSDSquadron ULTRA that fuses thermal acceleration and VOC gas sensing using a Decision Tree classifier to autonomously trigger SCRAM-level safety actions before catastrophic battery failure",
  },
  {
    name: "Battery Sentinals",
    p1: "F Mohamed Zayn Ismail",
    p2: "Palaniraj M",
    university: "Chennai Institue of Technology",
    desc: "A multi-timeframe EV battery safety system using VSDSquadron ULTRA to detect early thermal runaway through temperature divergence, swelling sensing, and thermal fingerprint analysis with real-time alert fusion and cloud visualization",
  },
  {
    name: "The invincibles",
    p1: "Karthigaa S",
    p2: "Nalinkumar S",
    university: "Madras institute of technology",
    desc: "ThermalGuard is a multi-algorithm RISC-V edge-based EV battery safety system on VSDSquadron Ultra that fuses physics validation, statistical anomaly detection, and time-to-critical prediction to generate a real-time Thermal Safety Score with sub-500ms latency",
  },
  {
    name: "VoltGuard",
    p1: "Divyam Goyal",
    p2: "Ravi Patel",
    university:
      "Punjab Engineering College (Deemed to be University) Chandigarh",
    desc: "An embedded-plus-cloud predictive battery health analytics system on VSDSquadron ULTRA that extracts physics-aware features and runs lightweight ML on-board for real-time SoH estimation, while leveraging advanced cloud models for high-accuracy SoH and RUL prediction under Indian EV duty cycles",
  },
  {
    name: "GenEV",
    p1: "Joel Thomas Mario",
    p2: "Joseph Mangaly",
    university: "Christ University",
    desc: "Battery Anatomy is a dual-layer physics-aware and behavior-driven EV battery monitoring system on VSDSquadron ULTRA that estimates internal resistance in real time, generates a unified health score, and predicts early degradation and thermal anomalies weeks in advance",
  },
  {
    name: "TEAM FIRE EV",
    p1: "A. Alex Paul",
    p2: "Harshdeep Sharma",
    university: "Christ University - Kengeri",
    desc: "An edge-intelligent EV battery analytics and digital passport system on VSDSquadron ULTRA that performs SOC/SoH estimation, thermal risk prediction, and secure QR-based battery health certification with zero real-time cloud dependency",
  },
  {
    name: "EVOLVE.3X",
    p1: "Preetham Awaji",
    p2: "Shivraj by",
    university: "KLE Technological university hubli",
    desc: "An Edge-AI enabled distributed EV fleet intelligence platform powered by THEJAS32 RISC-V that performs real-time battery analytics at vehicle level, synchronizes with cloud-based Digital Twins, and optimizes fleet-wide charging, maintenance, and energy costs autonomously",
  },
  {
    name: "BattSafe",
    p1: "Mohammed Omer",
    p2: "Shakeb Sarwar",
    university: "Energy Institute Bengaluru, RGIPT",
    desc: "An edge-based multi-modal thermal runaway prevention system on VSDSquadron ULTRA that fuses electrical, thermal, gas, pressure, and swelling signals using a 3-speed monitoring loop and correlation engine to autonomously disconnect the battery before catastrophic failure",
  },
  {
    name: "VOLTIQ",
    p1: "Jobin Joseph Alour",
    p2: "Aarush Kumar",
    university: "Christ University, Kengeri",
    desc: "A fleet-level EV battery intelligence system using VSDSquadron ULTRA as the on-vehicle edge brain to perform real-time battery analytics, event detection, and feature extraction, while enabling cloud-based SoH/RUL prediction and fleet optimization dashboards",
  },
  {
    name: "SentinelX",
    p1: "Mohammed Fawaz Ali",
    p2: "Syed Abdul Mateen",
    university: "SR UNIVERSITY",
    desc: "A quad-modal sensor fusion BMS on VSDSquadron ULTRA that combines chemical, mechanical, thermal, and electrical residual analysis to detect early battery faults and autonomously isolate faulty cells via MOSFET bypass for limp-home operation",
  },
  {
    name: "Fumblers",
    p1: "Arjun Bora",
    p2: "Arin Bhuyan",
    university: "Dibrugarh University",
    desc: "Indra-BMS is a physics-informed edge battery diagnostics system on VSDSquadron ULTRA that performs real-time differential capacity analysis (dQ/dV) on RISC-V to identify specific degradation modes (LLI, LAM) and transmit compact health vectors for bandwidth-efficient, transparent EV battery intelligence",
  },
  {
    name: "RV-Intelligence",
    p1: "Selvakamal.M",
    p2: "Thirumalai.V",
    university: "Government College of Technology ,Coimbatore",
    desc: "A real-time predictive battery analytics system on VSDSquadron ULTRA that runs an Adaptive Extended Kalman Filter (AEKF) to estimate SOC, SOH, SOP, and internal resistance with <2% error, enabling edge-based health monitoring and intelligent EV safety alerts",
  },
];

const Timeline = () => {
  // Function to parse date string and determine status
  const getEventStatus = (dateString: string): string => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Parse date range (e.g., "26 Jan - 10 Feb 2026") or single date (e.g., "11 Feb 2026")
    const parts = dateString.split(" - ");
    let startDate: Date;
    let endDate: Date;

    if (parts.length === 2) {
      // Date range
      const [startStr, endStr] = parts;
      const year =
        endStr.match(/\d{4}/)?.[0] || new Date().getFullYear().toString();
      startDate = new Date(`${startStr} ${year}`);
      endDate = new Date(endStr);
    } else {
      // Single date
      startDate = new Date(dateString);
      endDate = new Date(dateString);
    }

    if (endDate < today) {
      return "Past";
    } else if (startDate <= today && today <= endDate) {
      return "Active";
    } else {
      return "Upcoming";
    }
  };

  const dates = [
    {
      event: "Registration Phase",
      date: "26 Jan - 10 Feb 2026",
      desc: "Team registration and idea submission.",
    },
    {
      event: "Inauguration",
      date: "11 Feb 2026",
      desc: "Official launch at CHRIST (Deemed to be University), Bangalore.",
    },
    {
      event: "Proposal Submission",
      date: "11 Feb - 13 Feb 2026",
      desc: "Detailed technical proposal submission.",
    },
    {
      event: "Video & GitHub",
      date: "16 Feb - 26 Feb 2026",
      desc: "Submission of prototype video and code repository.",
    },
    {
      event: "Shortlisting",
      date: "27 Feb - 28 Feb 2026",
      desc: "Announcement of Top 15 teams.",
    },
    {
      event: "Grand Finale",
      date: "10 Mar - 11 Mar 2026",
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

          {dates.map((item, index) => {
            const status = getEventStatus(item.date);
            return (
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
                            status === "Active" ? "default" : "secondary"
                          }
                          className={
                            status === "Active"
                              ? "bg-brand-accent text-brand-dark"
                              : status === "Past"
                                ? "bg-gray-600 text-gray-300"
                                : "bg-brand-secondary text-brand-muted"
                          }
                        >
                          {status}
                        </Badge>
                        <div className="flex items-center text-xs font-bold text-brand-muted uppercase tracking-wider">
                          <Calendar className="w-3 h-3 mr-1" />
                          {item.date}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1">
                        {item.event}
                      </h3>
                      <p className="text-sm text-brand-muted mb-4">
                        {item.desc}
                      </p>

                      {item.event === "Shortlisting" && (
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full bg-brand-accent/10 border-brand-accent/30 text-brand-accent hover:bg-brand-accent hover:text-brand-dark transition-all duration-300"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              View Top 15 Teams
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="w-[95vw] sm:max-w-4xl max-h-[90vh] overflow-y-auto bg-brand-dark border-brand-secondary/50 text-white p-4 sm:p-6">
                            <DialogHeader>
                              <DialogTitle className="text-xl sm:text-2xl font-bold text-brand-accent mb-4 pr-6">
                                Top 15 Shortlisted Teams
                              </DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4 sm:space-y-6 py-2">
                              {topTeams.map((team, idx) => (
                                <div
                                  key={idx}
                                  className="group p-4 sm:p-5 rounded-xl bg-brand-secondary/20 border border-brand-secondary/40 hover:border-brand-accent/50 transition-all duration-300"
                                >
                                  <div className="flex flex-col gap-3 mb-4">
                                    <div className="flex items-start gap-3">
                                      <div className="flex-shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand-accent text-brand-dark font-bold text-xs sm:text-sm mt-0.5">
                                        {idx + 1}
                                      </div>
                                      <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-brand-accent transition-colors leading-tight">
                                        {team.name}
                                      </h4>
                                    </div>
                                    <Badge
                                      variant="outline"
                                      className="w-fit text-[10px] sm:text-xs border-brand-accent/30 text-brand-accent bg-brand-accent/5 py-0.5 sm:py-1"
                                    >
                                      {team.university}
                                    </Badge>
                                  </div>

                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
                                    <div className="flex items-center gap-2 text-xs sm:text-sm text-brand-muted">
                                      <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-accent" />
                                      <span className="font-semibold text-white">
                                        P1:
                                      </span>{" "}
                                      {team.p1}
                                    </div>
                                    <div className="flex items-center gap-2 text-xs sm:text-sm text-brand-muted">
                                      <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-accent" />
                                      <span className="font-semibold text-white">
                                        P2:
                                      </span>{" "}
                                      {team.p2}
                                    </div>
                                  </div>

                                  <div className="mt-4 p-3 sm:p-4 rounded-lg bg-brand-primary/50 border border-brand-secondary/30">
                                    <h5 className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-brand-accent mb-2">
                                      Project Description
                                    </h5>
                                    <p className="text-xs sm:text-sm leading-relaxed text-brand-text/90">
                                      {team.desc}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </DialogContent>
                        </Dialog>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            );
          })}
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
