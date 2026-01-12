import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark border-t border-brand-secondary text-brand-muted py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-white mb-2">EV BIC</h3>
            <p className="text-sm">Powering the Future of E-Mobility</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="hover:text-brand-accent transition-colors"><Github className="h-5 w-5" /></a>
            <a href="#" className="hover:text-brand-accent transition-colors"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="hover:text-brand-accent transition-colors"><Linkedin className="h-5 w-5" /></a>
            <a href="mailto:contact@evbic.com" className="hover:text-brand-accent transition-colors"><Mail className="h-5 w-5" /></a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs border-t border-brand-secondary/30 pt-4">
          <p>&copy; {new Date().getFullYear()} EV Battery Intelligence Challenge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
