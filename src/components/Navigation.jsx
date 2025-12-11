import { Icon } from '@iconify/react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const { t, language, changeLanguage } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-white">
            <span className="font-semibold text-xs tracking-tighter">WMB</span>
          </div>
          <span className="font-medium text-sm tracking-tight text-gray-900 group-hover:text-gray-600 transition-colors">
            WMB Cafe
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/menu" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
            {t('nav.menu')}
          </Link>
          <a href="#about" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
            {t('nav.ourStory')}
          </a>
          <a href="#franchise" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
            {t('nav.franchise')}
          </a>
          <a href="#locations" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
            {t('nav.locations')}
          </a>
        </div>

        {/* Action */}
        <div className="flex items-center gap-3">
          <a href="#" className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
            <Icon icon="lucide:search" width={18} height={18} strokeWidth={1.5} />
          </a>
          <button
            onClick={() => changeLanguage(language === 'tr' ? 'en' : 'tr')}
            className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors px-2.5 py-1.5 rounded-md hover:bg-gray-50 border border-gray-200"
            title={language === 'tr' ? 'Switch to English' : 'Türkçe\'ye Geç'}
          >
            <span className="text-xs font-medium">{language === 'tr' ? 'EN' : 'TR'}</span>
            <Icon icon="lucide:languages" width={14} height={14} />
          </button>
          <a href="#" className="inline-flex items-center justify-center h-9 px-4 rounded-full bg-gray-900 text-white text-xs font-medium hover:bg-gray-800 transition-colors shadow-sm tracking-wide">
            {t('nav.orderOnline')}
          </a>
        </div>
      </div>
    </nav>
  );
}
