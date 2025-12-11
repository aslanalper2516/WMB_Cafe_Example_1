import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { useLanguage } from '../context/LanguageContext';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const { t, language, changeLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/menu', label: t('nav.menu') },
    { to: '/#about', label: t('nav.ourStory') },
    { to: '/#franchise', label: t('nav.franchise') },
    { to: '/locations', label: t('nav.locations') },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-border' 
          : 'bg-white/80 backdrop-blur-md border-b border-border/50'
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-white shadow-md group-hover:shadow-lg transition-shadow">
              <span className="font-bold text-sm tracking-tighter">WMB</span>
            </div>
            <span className="font-semibold text-base tracking-tight text-secondary group-hover:text-primary transition-colors">
              WMB Cafe
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="relative text-sm font-medium text-text-muted hover:text-secondary transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            {/* Search - Functional Dropdown */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-text-muted hover:text-secondary transition-colors rounded-lg hover:bg-background"
              >
                <Icon icon="lucide:search" width={20} height={20} strokeWidth={1.5} />
              </button>
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-border p-4"
                  >
                    <input
                      type="text"
                      placeholder={language === 'tr' ? 'Ara...' : 'Search...'}
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      autoFocus
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Language Toggle */}
            <button
              onClick={() => changeLanguage(language === 'tr' ? 'en' : 'tr')}
              className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-text-muted hover:text-secondary hover:bg-background transition-all border border-border"
              title={language === 'tr' ? 'Switch to English' : 'Türkçe\'ye Geç'}
            >
              <span className="text-xs font-semibold">{language === 'tr' ? 'EN' : 'TR'}</span>
              <Icon icon="lucide:languages" width={16} height={16} />
            </button>

            {/* Order Online CTA */}
            <Link
              to="/menu"
              className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
            >
              {t('nav.orderOnline')}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-text-muted hover:text-secondary transition-colors"
            >
              <Icon 
                icon={isMobileMenuOpen ? "lucide:x" : "lucide:menu"} 
                width={24} 
                height={24} 
                strokeWidth={1.5} 
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-white">
                      <span className="font-bold text-sm">WMB</span>
                    </div>
                    <span className="font-semibold text-base text-secondary">WMB Cafe</span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-text-muted hover:text-secondary"
                  >
                    <Icon icon="lucide:x" width={24} height={24} />
                  </button>
                </div>

                <nav className="space-y-2">
                  {navLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.to}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 rounded-lg text-base font-medium text-text-muted hover:text-secondary hover:bg-background transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-8 pt-8 border-t border-border space-y-4">
                  <button
                    onClick={() => {
                      changeLanguage(language === 'tr' ? 'en' : 'tr');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium text-text-muted hover:text-secondary hover:bg-background transition-colors"
                  >
                    <span>{language === 'tr' ? 'English' : 'Türkçe'}</span>
                    <Icon icon="lucide:languages" width={20} height={20} />
                  </button>
                  <Link
                    to="/menu"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center px-4 py-3 rounded-lg bg-primary text-white text-base font-semibold hover:bg-primary-dark transition-colors"
                  >
                    {t('nav.orderOnline')}
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
