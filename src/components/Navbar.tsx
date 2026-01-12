import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BatteryCharging } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Themes', path: '/themes' },
    { name: 'Guidelines', path: '/guidelines' },
    { name: 'Sponsors', path: '/sponsors' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-brand-primary/90 backdrop-blur-md border-b border-brand-secondary sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BatteryCharging className="h-8 w-8 text-brand-accent" />
              <span className="text-xl font-bold text-white tracking-wider">EV BIC</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-brand-accent bg-brand-secondary/50'
                      : 'text-brand-muted hover:text-white hover:bg-brand-secondary/30'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/register"
                className="bg-brand-accent text-brand-dark px-4 py-2 rounded-md text-sm font-bold hover:bg-brand-accent/90 transition-colors"
              >
                Register
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-muted hover:text-white hover:bg-brand-secondary focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-primary border-b border-brand-secondary">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.path
                    ? 'text-brand-accent bg-brand-secondary/50'
                    : 'text-brand-muted hover:text-white hover:bg-brand-secondary/30'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/register"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-brand-accent text-brand-dark px-4 py-3 rounded-md text-base font-bold hover:bg-brand-accent/90"
            >
              Register Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
