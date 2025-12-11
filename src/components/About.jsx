import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import CountUp from './CountUp';

export default function About() {
  const { t, language } = useLanguage();

  const timeline = [
    {
      year: '1985',
      title: language === 'tr' ? 'Başlangıç' : 'The Beginning',
      description: language === 'tr' 
        ? 'Mütevazı bir aile fırını olarak Sariyer\'de yolculuğumuza başladık.'
        : 'We started our journey as a humble family bakery in Sariyer.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800'
    },
    {
      year: '2000',
      title: language === 'tr' ? 'Büyüme' : 'Growth',
      description: language === 'tr'
        ? 'İlk franchise lokasyonumuzu açtık ve markamızı genişletmeye başladık.'
        : 'We opened our first franchise location and began expanding our brand.',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800'
    },
    {
      year: '2015',
      title: language === 'tr' ? 'Modernizasyon' : 'Modernization',
      description: language === 'tr'
        ? 'WMB Cafe markası altında modern kafe konseptine geçiş yaptık.'
        : 'We transitioned to a modern cafe concept under the WMB Cafe brand.',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800'
    },
    {
      year: '2023',
      title: language === 'tr' ? 'Bugün' : 'Today',
      description: language === 'tr'
        ? '12 lokasyonda kaliteli lezzetler sunmaya devam ediyoruz.'
        : 'We continue to serve quality flavors at 12 locations.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800'
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6">
            {t('about.title')}
          </h2>
          <p className="text-lg md:text-xl text-text-muted max-w-3xl mx-auto">
            {t('about.description1')}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>

          <div className="space-y-16 md:space-y-24">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-lg transform -translate-x-1/2 z-10"></div>

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className={`inline-block ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                    <span className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-primary/30 mb-3 block leading-none">
                      {item.year}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
                      {item.title}
                    </h3>
                    <p className="text-text-muted leading-relaxed max-w-md">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border group">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                      style={{ 
                        filter: 'brightness(1.05) contrast(1.1) saturate(1.15)',
                        imageRendering: 'crisp-edges'
                      }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/10 to-transparent"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 pt-16 border-t border-border"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon icon="lucide:calendar" width={32} height={32} className="text-primary" />
              </div>
              <span className="block text-5xl md:text-6xl font-serif font-bold text-primary mb-3">
                <CountUp end={35} suffix="+" />
              </span>
              <span className="text-sm md:text-base text-text-muted uppercase tracking-wider font-semibold">
                {t('about.years')}
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon icon="lucide:map-pin" width={32} height={32} className="text-primary" />
              </div>
              <span className="block text-5xl md:text-6xl font-serif font-bold text-primary mb-3">
                <CountUp end={12} />
              </span>
              <span className="text-sm md:text-base text-text-muted uppercase tracking-wider font-semibold">
                {t('about.locations')}
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon icon="lucide:smile" width={32} height={32} className="text-primary" />
              </div>
              <span className="block text-5xl md:text-6xl font-serif font-bold text-primary mb-3">
                <CountUp end={10} suffix="k+" />
              </span>
              <span className="text-sm md:text-base text-text-muted uppercase tracking-wider font-semibold">
                {t('about.happyGuests')}
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
