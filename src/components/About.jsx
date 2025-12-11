import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-full blur-2xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop" 
                alt="Bakery History" 
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-6">
              {t('about.title')}
            </h2>
            <div className="space-y-6 text-gray-500 font-light">
              <p>
                {t('about.description1')}
              </p>
              <p>
                {t('about.description2')}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-10 pt-10 border-t border-gray-200">
              <div>
                <span className="block text-3xl font-semibold text-gray-900 tracking-tight">
                  35+
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wide mt-1">
                  {t('about.years')}
                </span>
              </div>
              <div>
                <span className="block text-3xl font-semibold text-gray-900 tracking-tight">
                  12
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wide mt-1">
                  {t('about.locations')}
                </span>
              </div>
              <div>
                <span className="block text-3xl font-semibold text-gray-900 tracking-tight">
                  10k+
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wide mt-1">
                  {t('about.happyGuests')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
