import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram, MapPin, ChevronUp } from "lucide-react";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/menu", label: "MENU" },
    { path: "/locations", label: "SPOTS" },
    { path: "/gallery", label: "GALLERY" },
    { path: "/about", label: "ABOUT" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-zinc-900/50 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/10 ${
        isScrolled 
          ? 'bg-zinc-900/70' 
          : ''
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center group relative h-full">
              <img
                src="/images/logos/vromiara-header-logo.png"
                alt="VROMIARA - η' βρωμιάρα"
                className="h-20 w-auto transition-all duration-300 group-hover:scale-105"
                data-testid="nav-logo"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  data-testid={`nav-${link.label.toLowerCase()}`}
                  className={`relative px-4 py-2 text-sm font-bold tracking-widest transition-all duration-300 rounded-lg ${
                    isActive(link.path)
                      ? "text-yellow-400"
                      : "text-white hover:text-yellow-400"
                  }`}
                >
                  {/* Background highlight */}
                  <span className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                    isActive(link.path) 
                      ? 'bg-yellow-400/10' 
                      : 'bg-transparent hover:bg-white/5'
                  }`} />
                  
                  {/* Text */}
                  <span className="relative">{link.label}</span>
                  
                  {/* Active indicator */}
                  {isActive(link.path) && (
                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* Social Links & Mobile Menu Button */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/vromiarastreetfood"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white hover:text-pink-500 hover:bg-white/5 rounded-lg transition-all duration-300"
                data-testid="social-instagram"
              >
                <Instagram size={22} />
              </a>
              <a
                href="https://linktr.ee/vromiara.spots"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 bg-yellow-400 text-black px-5 py-2.5 font-bold text-sm hover:bg-pink-500 hover:text-white transition-all duration-300 rounded-lg magnetic-btn pulse-neon"
                data-testid="order-button"
              >
                <MapPin size={16} />
                FIND US
              </a>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-white hover:text-yellow-400 hover:bg-white/5 rounded-lg transition-all duration-300"
                data-testid="mobile-menu-button"
              >
                {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-smooth ${
            isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
          data-testid="mobile-menu"
        >
          <div className="bg-black/98 backdrop-blur-lg border-t border-yellow-500/20 px-4 py-6 space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                style={{ transitionDelay: `${index * 50}ms` }}
                className={`block text-lg font-bold tracking-widest transition-all duration-300 px-4 py-3 rounded-lg ${
                  isActive(link.path)
                    ? "text-yellow-400 bg-yellow-400/10 border-l-4 border-yellow-400"
                    : "text-white hover:text-yellow-400 hover:bg-white/5 hover:pl-6"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://linktr.ee/vromiara.spots"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-yellow-400 text-black px-4 py-4 font-bold text-lg hover:bg-pink-500 hover:text-white transition-all duration-300 mt-6 rounded-lg"
            >
              <span className="flex items-center justify-center gap-2">
                <MapPin size={20} />
                FIND US
              </span>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <Outlet />
      </main>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-40 p-3 bg-yellow-400 text-black rounded-full shadow-lg transition-all duration-500 hover:bg-pink-500 hover:text-white glow-yellow ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </button>

      {/* Footer */}
      <footer className="bg-black border-t border-yellow-500/20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-mesh-gradient opacity-20" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Brand - Full height logo */}
            <div className="flex-shrink-0 group">
              <Link to="/">
                <img
                  src="/images/logos/vromiara-logo-truly-transparent.png"
                  alt="VRMR"
                  className="h-36 md:h-44 w-auto hover:scale-105 transition-all duration-500 cursor-pointer drop-shadow-2xl"
                />
              </Link>
            </div>

            {/* Quick Links */}
            <div className="flex-1 flex flex-col items-center justify-center">
              <h4 className="text-yellow-400 font-bold mb-5 graffiti-text text-lg tracking-wider">QUICK LINKS</h4>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-gray-400 hover:text-yellow-400 transition-all duration-300 text-sm underline-grow"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social & Contact */}
            <div className="flex flex-col items-center justify-center">
              <h4 className="text-yellow-400 font-bold mb-5 graffiti-text text-lg tracking-wider">CONNECT</h4>
              <div className="flex gap-3 mb-5">
                <a
                  href="https://instagram.com/vromiarastreetfood"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-yellow-400/10 rounded-lg hover:bg-pink-500 hover:scale-110 transition-all duration-300 group"
                >
                  <Instagram size={24} className="text-yellow-400 group-hover:text-white transition-colors" />
                </a>
              </div>
              <a
                href="https://linktr.ee/vromiara.spots"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-yellow-400 transition-colors text-sm font-medium"
              >
                linktr.ee/vromiara.spots
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

          {/* Bottom section */}
          <div className="text-center space-y-3">
            <p className="text-gray-500 text-sm">
              Fresh code. Dirty tasty vibes. Built by{' '}
              <a 
                href="https://www.linkedin.com/in/dionisis-kaisaris-246998283/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-yellow-400 hover:text-pink-500 transition-colors font-medium"
              >
                Dionisis Kaisaris
              </a>
            </p>
            <p className="text-gray-600 text-xs">
              © {new Date().getFullYear()} VROMIARA STREET FOOD. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
