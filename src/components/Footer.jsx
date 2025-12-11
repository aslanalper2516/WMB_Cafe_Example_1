import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t, language } = useLanguage();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Newsletter subscription logic here
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg">
                <span className="font-bold text-sm">WMB</span>
              </div>
              <span className="font-bold text-lg text-white">WMB Cafe</span>
            </Link>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-sm">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Icon icon="lucide:instagram" width={20} height={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <Icon icon="lucide:twitter" width={20} height={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Icon icon="lucide:facebook" width={20} height={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-bold text-lg mb-6">{t('footer.company')}</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/#about" className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2">
                  <Icon icon="lucide:chevron-right" width={16} height={16} />
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <Link to="/#franchise" className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2">
                  <Icon icon="lucide:chevron-right" width={16} height={16} />
                  {t('footer.franchise')}
                </Link>
              </li>
              <li>
                <Link to="/locations" className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2">
                  <Icon icon="lucide:chevron-right" width={16} height={16} />
                  {t('nav.locations')}
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2">
                  <Icon icon="lucide:chevron-right" width={16} height={16} />
                  {t('nav.menu')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-6">
              {language === 'tr' ? 'İletişim' : 'Contact'}
            </h4>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-300">
                <Icon icon="lucide:phone" width={20} height={20} className="text-primary" />
                <a href="tel:+902121234567" className="hover:text-primary transition-colors">
                  +90 212 123 45 67
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Icon icon="lucide:mail" width={20} height={20} className="text-primary" />
                <a href="mailto:info@wmbcafe.com" className="hover:text-primary transition-colors">
                  info@wmbcafe.com
                </a>
              </div>
            </div>

            <div>
              <h5 className="font-semibold mb-4">
                {language === 'tr' ? 'Bülten' : 'Newsletter'}
              </h5>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={language === 'tr' ? 'E-posta adresiniz' : 'Your email'}
                  className="flex-1 h-11 px-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  required
                />
                <button
                  type="submit"
                  className="h-11 px-6 rounded-lg bg-primary text-white hover:bg-primary-dark transition-all shadow-md hover:shadow-lg"
                >
                  <Icon icon="lucide:send" width={18} height={18} />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            {t('footer.copyright')}
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-medium text-gray-300">
              {language === 'tr' ? 'Her zaman ulaşılabiliriz.' : 'We are always reachable.'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
