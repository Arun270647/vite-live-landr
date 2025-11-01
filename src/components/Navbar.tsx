import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', path: '/', hash: '#features' },
    { name: 'Pricing', path: '/', hash: '#pricing' },
  ];

  const handleNavClick = (path: string, hash: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== path) {
      window.location.href = path + hash;
    } else if (hash) {
      const element = document.querySelector(hash);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="text-3xl font-black tracking-tighter text-white">
              <span className="text-white">TMA</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.path, link.hash)}
                className="text-gray-300 hover:text-white font-medium transition-colors"
              >
                {link.name}
              </button>
            ))}
            <a
              href="#pricing"
              className="bg-white text-background px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105"
            >
              Sign In
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-primary"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-xl border-t border-white/10">
          <div className="container mx-auto px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.path, link.hash)}
                className="block w-full text-left text-gray-300 hover:text-white font-medium py-2"
              >
                {link.name}
              </button>
            ))}
            <a
              href="#pricing"
              className="block text-center bg-white text-background px-6 py-2.5 rounded-lg font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign In
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
