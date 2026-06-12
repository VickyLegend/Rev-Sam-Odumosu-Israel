import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Search, User, ChevronDown } from 'lucide-react';
import { navLinks } from '../../constants/content';
import Button from '../ui/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40); // threshold lower because of top bar
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    
    if (href.startsWith('/')) {
      return; // Let React Router handle it
    }

    e.preventDefault();
    const isHome = location.pathname === '/';
    
    if (!isHome) {
      navigate('/');
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-brand-black border-b border-brand-gold/20 py-2 hidden md:block w-full z-50 relative">
        <div className="container mx-auto px-4 md:px-8 flex justify-end items-center gap-6 text-xs text-brand-cream/80 font-body">
          <button aria-label="Search" className="hover:text-brand-gold transition-colors">
            <Search size={14} />
          </button>
          <div className="w-[1px] h-3 bg-brand-gold/30"></div>
          <Link to="/my-account" className="flex items-center gap-2 hover:text-brand-gold transition-colors">
            <User size={14} />
            My Account
          </Link>
          <div className="w-[1px] h-3 bg-brand-gold/30"></div>
          <Link to="/register" className="hover:text-brand-gold transition-colors">
            Register
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <header 
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled ? 'top-0 bg-brand-navy/95 backdrop-blur-md py-3 shadow-lg shadow-black/20' : 'top-0 md:top-[33px] bg-transparent py-5'
        }`}
        style={{ marginTop: document.querySelector('.bg-brand-crimson') ? (window.scrollY > 0 ? 0 : 0) : 0 }}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <Link to="/" className="font-display-deco text-xl lg:text-2xl text-brand-gold relative z-50 shrink-0">
            Sam Odumosu-Israel
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative group"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.name)}
                onMouseLeave={() => link.dropdown && setOpenDropdown(null)}
              >
                {link.dropdown ? (
                  <button className="flex items-center gap-1 font-body text-sm font-medium text-white/80 hover:text-brand-gold transition-colors py-2">
                    {link.name} <ChevronDown size={14} />
                  </button>
                ) : (
                  <React.Fragment>
                    {link.href.startsWith('/') ? (
                      <Link 
                        to={link.href}
                        className="font-body text-sm font-medium text-white/80 hover:text-brand-gold transition-colors py-2 block"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a 
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="font-body text-sm font-medium text-white/80 hover:text-brand-gold transition-colors py-2 block"
                      >
                        {link.name}
                      </a>
                    )}
                  </React.Fragment>
                )}

                {/* Dropdown */}
                {link.dropdown && (
                  <AnimatePresence>
                    {openDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-brand-charcoal border border-brand-gold/30 rounded shadow-xl overflow-hidden"
                      >
                        {link.dropdown.map(dLink => (
                          <Link 
                            key={dLink.name}
                            to={dLink.href}
                            className="block px-4 py-3 font-body text-sm text-brand-cream/80 hover:bg-brand-navy hover:text-brand-gold transition-colors border-b border-brand-gold/10 last:border-0"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {dLink.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            <Button to="/donate" size="sm" className="ml-2 px-6">
              Donate
            </Button>
          </nav>

          {/* Mobile Menu Toggle & Donate (Mobile view) */}
          <div className="flex xl:hidden items-center gap-4 relative z-50">
            <Button to="/donate" size="sm" className="hidden sm:inline-flex px-4 py-1.5 text-xs">Donate</Button>
            <button 
              className="text-brand-gold p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: '100vh', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="fixed inset-0 top-0 left-0 bg-brand-navy z-40 flex flex-col pt-24 px-6 overflow-y-auto pb-8"
              >
                {/* Mobile Top Bar Links */}
                <div className="flex justify-center gap-6 border-b border-brand-gold/20 pb-6 mb-6">
                  <Link to="/my-account" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 text-brand-gold font-body text-sm">
                    <User size={16} /> My Account
                  </Link>
                  <Link to="/register" onClick={() => setIsMobileMenuOpen(false)} className="text-brand-gold font-body text-sm">
                    Register
                  </Link>
                </div>

                <div className="flex flex-col items-center gap-6 w-full">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 20, opacity: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="w-full text-center"
                    >
                      {link.dropdown ? (
                        <div className="flex flex-col items-center gap-4">
                          <span className="font-display text-2xl text-white/50">{link.name}</span>
                          <div className="flex flex-col gap-3">
                            {link.dropdown.map(dLink => (
                              <Link 
                                key={dLink.name}
                                to={dLink.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="font-display text-xl text-brand-gold"
                              >
                                {dLink.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <React.Fragment>
                          {link.href.startsWith('/') ? (
                            <Link 
                              to={link.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="font-display text-2xl text-white hover:text-brand-gold block"
                            >
                              {link.name}
                            </Link>
                          ) : (
                            <a 
                              href={link.href}
                              onClick={(e) => handleNavClick(e, link.href)}
                              className="font-display text-2xl text-white hover:text-brand-gold block"
                            >
                              {link.name}
                            </a>
                          )}
                        </React.Fragment>
                      )}
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ delay: navLinks.length * 0.05 }}
                    className="w-full mt-6"
                  >
                     <Button to="/donate" className="w-full py-4 text-xl">
                       Sow a Seed / Donate
                     </Button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
}
