import { Icon } from '@iconify/react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-gray-900 rounded-md flex items-center justify-center text-white">
                <span className="font-semibold text-[10px] tracking-tighter">
                  WMB
                </span>
              </div>
              <span className="font-semibold text-sm tracking-tight text-gray-900">
                WMB Cafe
              </span>
            </a>
            <p className="text-sm text-gray-500 max-w-xs mb-6">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Icon icon="lucide:instagram" width={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Icon icon="lucide:twitter" width={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Icon icon="lucide:facebook" width={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-sm text-gray-900 mb-4">{t('footer.product')}</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Borek
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Coffee
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Bakery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Catering
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm text-gray-900 mb-4">{t('footer.company')}</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  {t('footer.about')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  {t('footer.careers')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  {t('footer.franchise')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  {t('footer.contact')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm text-gray-900 mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  {t('footer.terms')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  {t('footer.cookiePolicy')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            {t('footer.copyright')}
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-medium text-gray-600">
              {t('footer.allSystemsOperational')}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
