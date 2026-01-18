import { BatteryCharging } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-brand-primary via-brand-primary to-brand-dark border-t border-brand-secondary/50 pt-16 pb-8 mt-auto relative overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(204,255,0,0.03)_0%,transparent_40%),linear-gradient(245deg,rgba(204,255,0,0.02)_0%,transparent_50%)]"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(204,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,transparent_0%,rgba(204,255,0,0.02)_1px,transparent_1px)] bg-size-[80px_80px] opacity-40"></div>

      {/* Scanline Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(204,255,0,0.01)_50%,transparent_51%)] bg-size-[100%_4px] pointer-events-none"></div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Accent Glow - Left */}
      <div className="absolute -bottom-20 -left-32 w-96 h-96 bg-brand-accent/3 blur-[100px] rounded-full pointer-events-none opacity-60"></div>

      {/* Accent Glow - Right */}
      <div className="absolute -bottom-40 -right-32 w-96 h-96 bg-brand-accent/3 blur-[100px] rounded-full pointer-events-none opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <BatteryCharging className="h-8 w-8 text-brand-accent" />
              <span className="text-xl font-bold text-white tracking-wider">
                EV Battery Intelligence Challenge
              </span>
            </div>
            <p className="text-brand-muted max-w-md">
              Powering the Future of E-Mobility with Indigenous Compute. Join
              the challenge to build safe, smart, and sustainable battery
              systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                "About",
                "Themes",
                "Guidelines",
                /* 'Sponsors', */ "Register",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-brand-muted hover:text-brand-accent transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-white font-bold mb-6">Partners</h3>
            <div className="space-y-4">
              <div className="text-brand-accent font-bold text-lg">C-DAC</div>
              <div className="text-brand-muted text-sm">
                Centre for Development of Advanced Computing
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-secondary/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-brand-muted">
            &copy; {new Date().getFullYear()} EV Battery Intelligence Challenge.
            All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-brand-muted">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
