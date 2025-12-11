import { Icon } from '@iconify/react';
import { useLanguage } from '../context/LanguageContext';

export default function Franchise() {
  const { t } = useLanguage();

  return (
    <section id="franchise" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100 text-gray-900 mb-6">
          <Icon icon="lucide:store" width={24} height={24} strokeWidth={1.5} />
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-gray-900 mb-6">
          {t('franchise.title')}
        </h2>
        <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
          {t('franchise.description')}
        </p>
        <form className="max-w-md mx-auto space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder={t('franchise.firstName')}
              className="w-full h-11 px-4 rounded-lg bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition-all"
            />
            <input 
              type="text" 
              placeholder={t('franchise.lastName')}
              className="w-full h-11 px-4 rounded-lg bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition-all"
            />
          </div>
          <input 
            type="email" 
            placeholder={t('franchise.email')}
            className="w-full h-11 px-4 rounded-lg bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition-all"
          />
          <button 
            type="button" 
            className="w-full h-11 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-all shadow-md"
          >
            {t('franchise.submit')}
          </button>
          <p className="text-xs text-gray-400 mt-4">
            {t('franchise.terms')}
          </p>
        </form>
      </div>

      {/* Grid Pattern BG */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10"></div>
    </section>
  );
}
