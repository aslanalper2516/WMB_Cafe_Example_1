import { useLanguage } from '../context/LanguageContext';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import LanguageWrapper from '../components/LanguageWrapper';

export default function MenuPage() {
  const { t, language } = useLanguage();

  const menuItems = {
    borek: [
      'kıymalıBorek',
      'peynirliBorek',
      'ıspanaklıBorek',
      'suBorek'
    ],
    coffee: [
      'espresso',
      'americano',
      'cappuccino',
      'latte',
      'turkishCoffee'
    ],
    desserts: [
      'baklava',
      'sutlac',
      'kunefe',
      'croissant'
    ],
    beverages: [
      'ayran',
      'freshOrange',
      'lemonade',
      'turkishTea'
    ]
  };

  const renderMenuItem = (itemKey) => {
    const item = t(`menu.items.${itemKey}`);
    if (!item || typeof item !== 'object') return null;
    
    return (
      <div key={itemKey} className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-gray-300 transition-all">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
          </div>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-xl font-bold text-gray-900">{item.price}</span>
          <button className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800 transition-colors group-hover:scale-110">
            <Icon icon="lucide:plus" width={18} height={18} strokeWidth={2} />
          </button>
        </div>
      </div>
    );
  };

  return (
    <LanguageWrapper>
      <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-white">
                <span className="font-semibold text-xs tracking-tighter">WMB</span>
              </div>
              <span className="font-medium text-sm tracking-tight text-gray-900">
                WMB Cafe
              </span>
            </Link>
            <Link 
              to="/" 
              className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              <Icon icon="lucide:arrow-left" width={18} height={18} />
              <span className="hidden sm:inline">{t('nav.menu')}</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              {t('menu.pageTitle')}
            </h1>
            <p className="text-lg text-gray-600">
              {t('menu.pageSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Börekler */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
              <Icon icon="lucide:croissant" width={20} height={20} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              {t('menu.categories.borek')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.borek.map(renderMenuItem)}
          </div>
        </section>

        {/* Kahveler */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
              <Icon icon="lucide:coffee" width={20} height={20} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              {t('menu.categories.coffee')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.coffee.map(renderMenuItem)}
          </div>
        </section>

        {/* Tatlılar */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
              <Icon icon="lucide:cake" width={20} height={20} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              {t('menu.categories.desserts')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.desserts.map(renderMenuItem)}
          </div>
        </section>

        {/* İçecekler */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
              <Icon icon="lucide:glass-water" width={20} height={20} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              {t('menu.categories.beverages')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.beverages.map(renderMenuItem)}
          </div>
        </section>
      </main>

      {/* Footer CTA */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">
            {language === 'tr' ? 'Sipariş vermek ister misiniz?' : 'Would you like to order?'}
          </h3>
          <p className="text-gray-400 mb-6">
            {language === 'tr' ? 'Online sipariş verin veya bizi ziyaret edin' : 'Order online or visit us'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#" 
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-white text-gray-900 text-sm font-medium hover:bg-gray-100 transition-all"
            >
              {t('nav.orderOnline')}
            </a>
            <Link 
              to="/" 
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-all"
            >
              {language === 'tr' ? 'Ana Sayfaya Dön' : 'Back to Home'}
            </Link>
          </div>
        </div>
      </section>
    </div>
    </LanguageWrapper>
  );
}

