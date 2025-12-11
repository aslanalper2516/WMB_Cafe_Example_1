import { Icon } from '@iconify/react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-orange-500"></span>
              <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">
                {t('hero.since')}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-gray-900 leading-[1.1] mb-8">
              {t('hero.title')}
              <br />
              <span className="text-gray-400">{t('hero.titleSub')}</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed max-w-xl mb-10 font-normal">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/menu" className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-all shadow-sm">
                {t('hero.viewMenu')}
                <Icon icon="lucide:arrow-right" className="ml-2" width={16} height={16} strokeWidth={1.5} />
              </a>
              <a href="#about" className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-white border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
                {t('hero.ourHeritage')}
              </a>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute -inset-4 bg-orange-100/50 rounded-2xl rotate-2 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2670&auto=format&fit=crop" 
              alt="WMB Cafe Specialties" 
              className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>

      {/* Decorative Background Gradient */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-[600px] h-[600px] bg-gradient-to-br from-orange-50/50 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>
    </section>
  );
}
