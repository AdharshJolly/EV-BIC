"use client";

import { useState, useEffect } from 'react';
import { Menu, X, BatteryCharging } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple scroll spy
      const sections = ['home', 'about', 'themes', 'guidelines', /* 'sponsors', */ 'contact'];
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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Themes', path: '#themes' },
    { name: 'Guidelines', path: '#guidelines' },
    /* { name: 'Sponsors', path: '#sponsors' }, */
    { name: 'Contact', path: '#contact' },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
    // Smooth scroll is handled by CSS scroll-behavior: smooth
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4",
        scrolled ? "pt-4" : "pt-6"
      )}
    >
      <div
        className={cn(
          "w-full max-w-6xl transition-all duration-500 ease-in-out border border-brand-secondary/50",
          scrolled 
            ? "bg-brand-primary/60 backdrop-blur-xl rounded-full px-6 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.4)] border-brand-accent/20" 
            : "bg-transparent rounded-2xl px-4 py-3 border-transparent"
        )}
      >
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-accent blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <BatteryCharging className="h-7 w-7 text-brand-accent relative z-10" />
              </div>
              <span className="text-xl font-bold text-white tracking-wider group-hover:text-brand-accent transition-colors">
                EV <span className="hidden sm:inline">Battery Intelligence Challenge</span>
                <span className="sm:hidden">BIC</span>
              </span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => {
                 const isActive = activeSection === item.path.substring(1);
                 return (
                  <a
                    key={item.name}
                    href={item.path}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 relative",
                      isActive
                        ? "text-brand-accent"
                        : "text-brand-muted hover:text-white"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute inset-0 bg-brand-secondary/40 rounded-full -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    {item.name}
                  </a>
                );
              })}
              <a
                href="#register"
                className="ml-4 bg-brand-accent text-brand-dark px-5 py-2.5 rounded-full text-sm font-bold hover:bg-white hover:shadow-[0_0_20px_-5px_rgba(0,220,130,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Register
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-muted hover:text-white hover:bg-brand-secondary/50 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-full left-4 right-4 mt-4 bg-brand-primary/95 backdrop-blur-2xl border border-brand-secondary rounded-3xl overflow-hidden shadow-2xl md:hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
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
                        : "text-brand-muted hover:text-white hover:bg-brand-secondary/20"
                    )}
                  >
                    {item.name}
                  </a>
                );
              })}
              <a
                href="#register"
                onClick={() => handleNavClick()}
                className="block w-full text-center mt-6 bg-brand-accent text-brand-dark px-4 py-4 rounded-xl text-base font-bold hover:bg-white transition-colors"
              >
                Register Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;