"use client";

import { useState, useEffect } from "react";
import { Menu, BatteryCharging } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "../lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple scroll spy
      const sections = [
        "home",
        "about",
        "challenges",
        "timeline",
        "coe",
        "hardware",
        "sponsors",
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Challenges", path: "#challenges" },
    { name: "Timeline", path: "#timeline" },
    { name: "Hardware", path: "#hardware" },
    { name: "COE", path: "#coe" },
    { name: "Sponsors", path: "#sponsors" },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
    // Smooth scroll is handled by CSS scroll-behavior: smooth
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4",
        scrolled ? "pt-4" : "pt-6",
      )}
    >
      <div
        className={cn(
          "w-full max-w-7xl transition-all duration-500 ease-in-out border border-brand-secondary/50",
          scrolled
            ? "bg-brand-primary/60 backdrop-blur-xl rounded-full px-4 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.4)] border-brand-accent/20"
            : "bg-transparent rounded-2xl px-4 py-3 border-transparent",
        )}
      >
        <div className="flex items-center justify-between h-14 w-full gap-2">
          {/* Left Section: VSD Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="shrink-0">
              <Link
                href="https://www.vlsisystemdesign.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/vsd-logo.png"
                  alt="VSD"
                  width={40}
                  height={40}
                  className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </Link>
            </div>
            <a href="#home" className="flex items-center gap-2 group shrink-0">
              <div className="relative shrink-0">
                <div className="absolute inset-0 bg-brand-accent blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <BatteryCharging className="h-5 w-5 text-brand-accent relative z-10" />
              </div>
              <span className="text-base font-bold text-white tracking-wider group-hover:text-brand-accent transition-colors whitespace-nowrap hidden md:inline">
                EV Battery Challenge
              </span>
              <span className="text-base font-bold text-white tracking-wider group-hover:text-brand-accent transition-colors md:hidden">
                EV-BIC
              </span>
            </a>
          </div>

          {/* Center Section: Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 flex-1 justify-center px-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.path.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.path}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative whitespace-nowrap",
                    isActive
                      ? "text-brand-accent"
                      : "text-brand-muted hover:text-white",
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-brand-secondary/40 rounded-full -z-10"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* Right Section: Register, CHRIST Logo & Mobile Menu */}
          <div className="flex items-center gap-3">
            <Button
              asChild
              className="hidden sm:flex shrink-0 bg-brand-accent text-brand-dark px-4 py-1.5 rounded-full text-xs font-bold hover:bg-white hover:shadow-[0_0_20px_-5px_rgba(0,220,130,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <a href="#register">Register</a>
            </Button>

            <div className="shrink-0">
              <Link
                href="https://christuniversity.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/cu-logo.png"
                  alt="CHRIST University"
                  width={40}
                  height={40}
                  className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </Link>
            </div>

            <div className="lg:hidden shrink-0">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-brand-muted hover:text-white hover:bg-brand-secondary/50 h-8 w-8"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="top"
                  className="bg-brand-primary/95 backdrop-blur-2xl border-brand-secondary rounded-b-3xl"
                >
                  {/* ... sheet content ... */}
                  <SheetTitle className="hidden">Navigation Menu</SheetTitle>
                  <SheetDescription className="hidden">
                    Mobile navigation menu for EV BIC website
                  </SheetDescription>
                  <div className="px-2 pt-4 pb-6 space-y-2">
                    {navItems.map((item) => {
                      const isActive = activeSection === item.path.substring(1);
                      return (
                        <a
                          key={item.name}
                          href={item.path}
                          onClick={() => handleNavClick()}
                          className={cn(
                            "block px-4 py-3 rounded-xl text-base font-medium transition-colors",
                            isActive
                              ? "text-brand-accent bg-brand-secondary/30"
                              : "text-brand-muted hover:text-white hover:bg-brand-secondary/20",
                          )}
                        >
                          {item.name}
                        </a>
                      );
                    })}
                    <Button
                      asChild
                      className="w-full mt-6 bg-brand-accent text-brand-dark py-6 rounded-xl text-base font-bold hover:bg-white transition-colors"
                    >
                      <a href="#register" onClick={() => handleNavClick()}>
                        Register Now
                      </a>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;