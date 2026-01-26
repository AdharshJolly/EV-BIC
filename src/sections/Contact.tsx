"use client";

import { Mail, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="relative min-h-screen bg-transparent py-24 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-secondary/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center mb-20"
        >
          <motion.div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/30">
              <span className="text-brand-accent font-semibold text-sm uppercase tracking-widest">
                Get in Touch
              </span>
            </span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
          >
            We&apos;re Here to{" "}
            <span className="bg-linear-to-r from-brand-accent to-brand-secondary bg-clip-text text-transparent">
              Help
            </span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg leading-8 text-brand-muted max-w-xl mx-auto"
          >
            Have questions about the challenge, eligibility, or technical
            details? Reach out to us through any of the channels below.
          </motion.p>
        </motion.div>

        {/* Contact Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto"
        >
          {/* Email Card */}
          <motion.div variants={itemVariants}>
            <Card className="group relative h-full glass-panel border border-brand-accent/20 hover:border-brand-accent/50 bg-linear-to-br from-brand-secondary/40 to-brand-secondary/20 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-brand-accent/0 to-brand-accent/0 group-hover:from-brand-accent/5 group-hover:to-brand-accent/5 transition-all duration-500"></div>
              <CardContent className="p-8 flex flex-col h-full relative z-10">
                <div className="mb-6">
                  <div className="inline-block p-4 rounded-2xl bg-linear-to-br from-brand-accent/20 to-brand-secondary/20 group-hover:from-brand-accent/30 group-hover:to-brand-secondary/30 transition-all duration-500 transform group-hover:scale-110">
                    <Mail className="h-8 w-8 text-brand-accent" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Email Us</h3>
                <p className="text-sm text-brand-muted mb-6">
                  Get in touch via email
                </p>
                <div className="space-y-4 grow">
                  <div>
                    <p className="text-xs text-brand-muted uppercase tracking-wider mb-1">
                      VSD
                    </p>
                    <a
                      href="mailto:vsd@vlsisystemdesign.com"
                      className="text-white font-medium hover:text-brand-accent transition-colors duration-300 flex items-center gap-2 group/link"
                    >
                      vsd@vlsisystemdesign.com
                      <Send className="h-4 w-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-brand-muted uppercase tracking-wider mb-1">
                      Manoj
                    </p>
                    <a
                      href="mailto:m.manoj@btech.christuniversity.in"
                      className="text-white font-medium hover:text-brand-accent transition-colors duration-300 flex items-center gap-2 group/link"
                    >
                      m.manoj@btech.christuniversity.in
                      <Send className="h-4 w-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Location Card */}
          <motion.div variants={itemVariants}>
            <Link
              href="https://www.google.com/maps/dir//Mysore+Rd,+Kanmanike,+Kengeri,+Kumbalgodu,+Bengaluru,+Karnataka+560074/@11.5921563,75.8185309,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3bae472f365fe219:0xcae219b3b46324db!2m2!1d77.4378951!2d12.8631289?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <Card className="group relative h-full glass-panel border border-brand-accent/20 hover:border-brand-accent/50 bg-linear-to-br from-brand-secondary/40 to-brand-secondary/20 transition-all duration-500 overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-linear-to-br from-brand-accent/0 to-brand-accent/0 group-hover:from-brand-accent/5 group-hover:to-brand-accent/5 transition-all duration-500"></div>
                <CardContent className="p-8 flex flex-col h-full relative z-10">
                  <div className="mb-6">
                    <div className="inline-block p-4 rounded-2xl bg-linear-to-br from-brand-accent/20 to-brand-secondary/20 group-hover:from-brand-accent/30 group-hover:to-brand-secondary/30 transition-all duration-500 transform group-hover:scale-110">
                      <MapPin className="h-8 w-8 text-brand-accent" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    Visit Us
                  </h3>
                  <p className="text-sm text-brand-muted mb-6">
                    Open in Google Maps
                  </p>
                  <div className="space-y-2 grow">
                    <p className="text-white font-medium">
                      CHRIST (Deemed to be University)
                    </p>
                    <p className="text-brand-muted">Kengeri Campus</p>
                    <p className="text-brand-muted">Bangalore, Karnataka</p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-brand-accent group-hover:gap-3 transition-all duration-300">
                    <span className="text-sm font-medium">Get Directions</span>
                    <Send className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-brand-muted text-sm">
            📧 For general inquiries or feedback, feel free to reach out to us.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;