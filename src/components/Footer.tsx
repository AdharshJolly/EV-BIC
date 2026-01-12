import { Github, Twitter, Linkedin, Mail, BatteryCharging } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-primary border-t border-brand-secondary/50 pt-16 pb-8 mt-auto relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-brand-accent/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
             <div className="flex items-center space-x-2">
                <BatteryCharging className="h-8 w-8 text-brand-accent" />
                <span className="text-xl font-bold text-white tracking-wider">EV BIC</span>
             </div>
             <p className="text-brand-muted max-w-md">
               Powering the future of E-Mobility with indigenous compute. Join the challenge to build safe, smart, and sustainable battery systems.
             </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
               {['About', 'Themes', 'Guidelines', 'Sponsors', 'Register'].map((item) => (
                 <li key={item}>
                   <Link to={`/${item.toLowerCase()}`} className="text-brand-muted hover:text-brand-accent transition-colors">
                     {item}
                   </Link>
                 </li>
               ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-white font-bold mb-6">Connect</h3>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="bg-brand-secondary/50 p-2.5 rounded-lg text-brand-muted hover:text-white hover:bg-brand-accent/20 transition-all"><Github className="h-5 w-5" /></a>
              <a href="#" className="bg-brand-secondary/50 p-2.5 rounded-lg text-brand-muted hover:text-white hover:bg-brand-accent/20 transition-all"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="bg-brand-secondary/50 p-2.5 rounded-lg text-brand-muted hover:text-white hover:bg-brand-accent/20 transition-all"><Linkedin className="h-5 w-5" /></a>
              <a href="mailto:contact@evbic.com" className="bg-brand-secondary/50 p-2.5 rounded-lg text-brand-muted hover:text-white hover:bg-brand-accent/20 transition-all"><Mail className="h-5 w-5" /></a>
            </div>
            <p className="text-sm text-brand-muted">
              Have questions?<br />
              <a href="mailto:info@evbic.com" className="text-brand-accent hover:underline">info@evbic.com</a>
            </p>
          </div>
        </div>

        <div className="border-t border-brand-secondary/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-brand-muted">
            &copy; {new Date().getFullYear()} EV Battery Intelligence Challenge. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-brand-muted">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
