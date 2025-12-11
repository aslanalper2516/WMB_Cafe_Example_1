import { useLanguage } from '../context/LanguageContext';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LanguageWrapper from '../components/LanguageWrapper';
import TimelineItem from '../components/TimelineItem';
import ValueCard from '../components/ValueCard';
import GalleryGrid from '../components/GalleryGrid';

export default function StoryPage() {
  const { t, language } = useLanguage();

  const timelineData = [
    {
      year: t('story.timeline.milestone1.year'),
      title: t('story.timeline.milestone1.title'),
      description: t('story.timeline.milestone1.description'),
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2000&auto=format&fit=crop',
    },
    {
      year: t('story.timeline.milestone2.year'),
      title: t('story.timeline.milestone2.title'),
      description: t('story.timeline.milestone2.description'),
      image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=2000&auto=format&fit=crop',
    },
    {
      year: t('story.timeline.milestone3.year'),
      title: t('story.timeline.milestone3.title'),
      description: t('story.timeline.milestone3.description'),
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2000&auto=format&fit=crop',
    },
    {
      year: t('story.timeline.milestone4.year'),
      title: t('story.timeline.milestone4.title'),
      description: t('story.timeline.milestone4.description'),
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2000&auto=format&fit=crop',
    },
  ];

  const valuesData = [
    {
      icon: 'lucide:heart',
      title: t('story.values.originalTaste.title'),
      description: t('story.values.originalTaste.description'),
      image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?q=80&w=2000&auto=format&fit=crop',
    },
    {
      icon: 'lucide:hand',
      title: t('story.values.handcrafted.title'),
      description: t('story.values.handcrafted.description'),
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2000&auto=format&fit=crop',
    },
    {
      icon: 'lucide:users',
      title: t('story.values.community.title'),
      description: t('story.values.community.description'),
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop',
    },
  ];

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop',
      alt: language === 'tr' ? 'El ile hamur açma' : 'Hand-rolling dough',
      caption: language === 'tr' ? 'Her katman el ile özenle açılır' : 'Every layer is carefully hand-rolled',
    },
    {
      src: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?q=80&w=1200&auto=format&fit=crop',
      alt: language === 'tr' ? 'Börek hazırlama' : 'Preparing börek',
      caption: language === 'tr' ? 'Geleneksel tekniklerle hazırlanan börekler' : 'Börek prepared with traditional techniques',
    },
    {
      src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1200&auto=format&fit=crop',
      alt: language === 'tr' ? 'Fırın' : 'Oven',
      caption: language === 'tr' ? 'Taze pişen ürünler' : 'Freshly baked products',
    },
    {
      src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop',
      alt: language === 'tr' ? 'Kafe iç mekan' : 'Cafe interior',
      caption: language === 'tr' ? 'Sıcak ve davetkar atmosfer' : 'Warm and inviting atmosphere',
    },
    {
      src: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1200&auto=format&fit=crop',
      alt: language === 'tr' ? 'Tamamlanmış ürünler' : 'Completed products',
      caption: language === 'tr' ? 'Sunuma hazır lezzetler' : 'Flavors ready to serve',
    },
    {
      src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop',
      alt: language === 'tr' ? 'Mutfak ekibi' : 'Kitchen team',
      caption: language === 'tr' ? 'Deneyimli zanaatkârlar' : 'Experienced artisans',
    },
  ];

  return (
    <LanguageWrapper>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-lg border-b border-border shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-white shadow-md">
                  <span className="font-bold text-sm">WMB</span>
                </div>
                <span className="font-semibold text-base text-secondary">WMB Cafe</span>
              </Link>
              <Link
                to="/"
                className="flex items-center gap-2 text-sm font-medium text-text-muted hover:text-secondary transition-colors"
              >
                <Icon icon="lucide:arrow-left" width={18} height={18} />
                <span className="hidden sm:inline">{t('nav.menu')}</span>
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2000&auto=format&fit=crop"
              alt={language === 'tr' ? 'Fırın mutfağı' : 'Bakery kitchen'}
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.85) contrast(1.1) saturate(1.1)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/40 to-transparent"></div>
          </div>
          <div className="relative z-10 h-full flex items-end">
            <div className="max-w-7xl mx-auto px-6 pb-16 md:pb-24 w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                  {t('story.heroTitle')}
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">
                  {t('story.heroSubtitle')}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Founding Story Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary mb-6">
                  {t('story.foundingTitle')}
                </h2>
                <div className="space-y-4 text-text-muted leading-relaxed text-lg">
                  <p>{t('story.foundingContent')}</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
                  <img
                    src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1600&auto=format&fit=crop"
                    alt={language === 'tr' ? 'İlk fırın' : 'First bakery'}
                    className="w-full aspect-[4/3] object-cover"
                    loading="lazy"
                    style={{ filter: 'brightness(1.05) contrast(1.1) saturate(1.15)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/10 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 md:py-32 bg-premium-gradient">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary mb-4">
                {language === 'tr' ? 'Yolculuğumuz' : 'Our Journey'}
              </h2>
              <p className="text-lg text-text-muted max-w-2xl mx-auto">
                {language === 'tr' 
                  ? 'Yıllar içinde geçirdiğimiz önemli dönüm noktaları'
                  : 'Key milestones in our journey over the years'}
              </p>
            </motion.div>

            <div className="relative">
              {timelineData.map((milestone, index) => (
                <TimelineItem
                  key={index}
                  year={milestone.year}
                  title={milestone.title}
                  description={milestone.description}
                  image={milestone.image}
                  index={index}
                  isLast={index === timelineData.length - 1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Brand Values Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary mb-4">
                {language === 'tr' ? 'Değerlerimiz' : 'Our Values'}
              </h2>
              <p className="text-lg text-text-muted max-w-2xl mx-auto">
                {language === 'tr'
                  ? 'Bizi yönlendiren temel ilkeler'
                  : 'The core principles that guide us'}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {valuesData.map((value, index) => (
                <ValueCard
                  key={index}
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                  image={value.image}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24 md:py-32 bg-premium-gradient">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary mb-4">
                {language === 'tr' ? 'Atölyemizden' : 'From Our Workshop'}
              </h2>
              <p className="text-lg text-text-muted max-w-2xl mx-auto">
                {language === 'tr'
                  ? 'Günlük çalışmalarımızdan birkaç an'
                  : 'A few moments from our daily work'}
              </p>
            </motion.div>

            <GalleryGrid images={galleryImages} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-secondary text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                {t('story.ctaTitle')}
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                {language === 'tr'
                  ? 'Size en yakın WMB Cafe lokasyonunu ziyaret edin ve geleneksel lezzetlerimizi keşfedin.'
                  : 'Visit the nearest WMB Cafe location and discover our traditional flavors.'}
              </p>
              <Link
                to="/locations"
                className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-lg bg-primary text-white text-base font-semibold hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:scale-105 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
              >
                {t('story.ctaButton')}
                <Icon icon="lucide:arrow-right" width={20} height={20} strokeWidth={2} />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </LanguageWrapper>
  );
}

