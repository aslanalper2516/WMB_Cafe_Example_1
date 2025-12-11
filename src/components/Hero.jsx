import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { useLanguage } from '../context/LanguageContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  const { t } = useLanguage();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const { scrollY } = useScroll();
  const heroImageY = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const animationProps = prefersReducedMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : {};

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-premium-gradient">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="max-w-2xl"
            initial={prefersReducedMotion ? {} : { opacity: 0, x: -30 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            {...animationProps}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-8"
              initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              {...animationProps}
            >
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                {t('hero.since')}
              </span>
            </motion.div>
            
            <motion.h1 
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-secondary leading-[1.1] mb-6"
              initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              {...animationProps}
            >
              {t('hero.title')}
              <br />
              <span className="text-accent">{t('hero.titleSub')}</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-text-muted leading-relaxed max-w-xl mb-10"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              {...animationProps}
            >
              {t('hero.description')}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 flex-wrap"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              {...animationProps}
            >
              <Link 
                to="/menu" 
                className="group inline-flex items-center justify-center h-14 px-10 rounded-lg bg-primary text-white text-base font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
              >
                {t('hero.viewMenu')}
                <Icon icon="lucide:arrow-right" className="ml-2 group-hover:translate-x-1 transition-transform" width={18} height={18} strokeWidth={2} />
              </Link>
              <Link 
                to="/locations" 
                className="inline-flex items-center justify-center h-14 px-10 rounded-lg bg-white border-2 border-secondary text-secondary text-base font-semibold hover:bg-secondary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 focus-visible:outline-2 focus-visible:outline-secondary focus-visible:outline-offset-2"
              >
                {t('nav.locations')}
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative mt-12 lg:mt-0"
            initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95, x: 30 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            style={prefersReducedMotion ? {} : { y: heroImageY }}
            {...animationProps}
          >
            <div className="absolute -inset-6 bg-primary/10 rounded-3xl rotate-3 -z-10 blur-xl"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <motion.img 
                src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2670&auto=format&fit=crop" 
                alt="WMB Cafe Specialties" 
                className="w-full object-cover aspect-[4/3]"
                initial={prefersReducedMotion ? {} : { scale: 1.1 }}
                animate={prefersReducedMotion ? {} : { scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                style={{ filter: 'brightness(1.05) contrast(1.1) saturate(1.1)' }}
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-20 translate-x-20 w-[800px] h-[800px] bg-gradient-to-br from-primary/5 via-accent/5 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-20 -translate-x-20 w-[600px] h-[600px] bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>
    </section>
  );
}
