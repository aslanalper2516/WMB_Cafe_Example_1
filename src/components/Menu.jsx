import { Icon } from '@iconify/react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Menu() {
  const { t, language } = useLanguage();

  return (
    <section id="menu" className="py-24 md:py-32 border-t border-border bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary mb-4">
              {t('menu.title')}
            </h2>
            <p className="text-lg text-text-muted max-w-md">
              {t('menu.description')}
            </p>
          </div>
          <Link to="/menu" className="text-sm font-semibold text-primary hover:text-primary-dark flex items-center gap-2 group">
            {t('menu.seeFullMenu')}
            <Icon icon="lucide:chevron-right" width={18} height={18} strokeWidth={2} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {/* Item 1: The Classic */}
          <div className="group relative rounded-2xl overflow-hidden bg-background border border-border md:col-span-2 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" 
                alt="Borek" 
                className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 p-8 z-10">
              <div className="flex items-center gap-2 mb-2 text-primary">
                <Icon icon="lucide:star" width={16} height={16} className="text-primary" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  {t('menu.signature')}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 line-clamp-1">
                {t('menu.legendaryBorek')}
              </h3>
              <p className="text-gray-200 text-sm max-w-md line-clamp-2">
                {t('menu.borekDescription')}
              </p>
            </div>
          </div>

          {/* Item 2: Coffee */}
          <div className="group relative rounded-2xl overflow-hidden bg-white border border-border hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="h-48 overflow-hidden bg-background relative">
              <img 
                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2671&auto=format&fit=crop" 
                alt="Coffee" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-6 flex flex-col justify-between min-h-[200px]">
              <div>
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Icon icon="lucide:coffee" width={20} height={20} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2 line-clamp-1">
                  {t('menu.specialtyBrews')}
                </h3>
                <p className="text-sm text-text-muted line-clamp-2">
                  {t('menu.coffeeDescription')}
                </p>
              </div>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                <span className="text-lg font-bold text-primary">{t('menu.price')}</span>
                <button 
                  className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-all shadow-md hover:shadow-lg hover:scale-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
                  aria-label={language === 'tr' ? `${t('menu.specialtyBrews')} sepete ekle` : `Add ${t('menu.specialtyBrews')} to cart`}
                >
                  <Icon icon="lucide:plus" width={18} height={18} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>

          {/* Item 3: Sweet Pastry */}
          <div className="group relative rounded-2xl overflow-hidden bg-white border border-border hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="p-6 h-full flex flex-col">
              <div className="flex-1">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Icon icon="lucide:croissant" width={20} height={20} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2 line-clamp-1">
                  {t('menu.sweetDelights')}
                </h3>
                <p className="text-sm text-text-muted mb-6 line-clamp-2">
                  {t('menu.sweetDescription')}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-text-muted">
                    <Icon icon="lucide:check" className="text-green-500 flex-shrink-0" width={14} />
                    <span className="line-clamp-1">{t('menu.freshlyBaked')}</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-text-muted">
                    <Icon icon="lucide:check" className="text-green-500 flex-shrink-0" width={14} />
                    <span className="line-clamp-1">{t('menu.premiumButter')}</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-text-muted">
                    <Icon icon="lucide:check" className="text-green-500 flex-shrink-0" width={14} />
                    <span className="line-clamp-1">{t('menu.noPreservatives')}</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <Link 
                  to="/menu" 
                  className="block w-full py-2.5 text-center text-sm font-semibold text-secondary border-2 border-border rounded-lg hover:bg-background hover:border-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
                >
                  {t('menu.viewSelection')}
                </Link>
              </div>
            </div>
          </div>

          {/* Item 4: Atmosphere */}
          <div className="group relative rounded-2xl overflow-hidden bg-gray-900 md:col-span-2 flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center relative z-10">
              <span className="text-orange-500 font-medium text-xs tracking-wider uppercase mb-3">
                {t('menu.ourPromise')}
              </span>
              <h3 className="text-2xl font-medium text-white mb-4">
                {t('menu.placeToBelong')}
              </h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                {t('menu.promiseDescription')}
              </p>
              <Link to="/locations" className="inline-flex items-center text-white text-sm font-semibold hover:text-primary transition-colors gap-2 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 rounded">
                {t('menu.findCafe')}
                <Icon icon="lucide:arrow-right" width={16} height={16} strokeWidth={1.5} />
              </Link>
            </div>
            <div className="w-full md:w-1/2 relative h-64 md:h-auto overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2694&auto=format&fit=crop" 
                alt="Cafe Interior" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
              />
              {/* Left gradient overlay - slides to left */}
              <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent group-hover:translate-x-[-100%] transition-transform duration-1000 ease-out"></div>
              {/* Right gradient overlay - slides to right */}
              <div className="absolute inset-0 left-1/2 w-1/2 bg-gradient-to-l from-gray-900 via-gray-900/80 to-transparent group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
