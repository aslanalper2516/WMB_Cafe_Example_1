import { useLanguage } from '../context/LanguageContext';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LanguageWrapper from '../components/LanguageWrapper';
import FranchiseCard from '../components/FranchiseCard';
import StepCard from '../components/StepCard';
import InvestmentTable from '../components/InvestmentTable';
import SuccessStoryCard from '../components/SuccessStoryCard';

export default function FranchisePage() {
  const { t, language } = useLanguage();

  const whyCards = [
    {
      icon: 'lucide:map-pin',
      title: t('franchise.page.whyCards.location.title'),
      description: t('franchise.page.whyCards.location.description'),
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop',
    },
    {
      icon: 'lucide:graduation-cap',
      title: t('franchise.page.whyCards.training.title'),
      description: t('franchise.page.whyCards.training.description'),
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop',
    },
    {
      icon: 'lucide:award',
      title: t('franchise.page.whyCards.brand.title'),
      description: t('franchise.page.whyCards.brand.description'),
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop',
    },
    {
      icon: 'lucide:chef-hat',
      title: t('franchise.page.whyCards.recipes.title'),
      description: t('franchise.page.whyCards.recipes.description'),
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1600&auto=format&fit=crop',
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: t('franchise.page.processSteps.step1.title'),
      description: t('franchise.page.processSteps.step1.description'),
    },
    {
      number: 2,
      title: t('franchise.page.processSteps.step2.title'),
      description: t('franchise.page.processSteps.step2.description'),
    },
    {
      number: 3,
      title: t('franchise.page.processSteps.step3.title'),
      description: t('franchise.page.processSteps.step3.description'),
    },
    {
      number: 4,
      title: t('franchise.page.processSteps.step4.title'),
      description: t('franchise.page.processSteps.step4.description'),
    },
    {
      number: 5,
      title: t('franchise.page.processSteps.step5.title'),
      description: t('franchise.page.processSteps.step5.description'),
    },
  ];

  const successStories = [
    {
      quote: t('franchise.page.stories.story1.quote'),
      name: t('franchise.page.stories.story1.name'),
      location: t('franchise.page.stories.story1.location'),
      image: t('franchise.page.stories.story1.image'),
    },
    {
      quote: t('franchise.page.stories.story2.quote'),
      name: t('franchise.page.stories.story2.name'),
      location: t('franchise.page.stories.story2.location'),
      image: t('franchise.page.stories.story2.image'),
    },
    {
      quote: t('franchise.page.stories.story3.quote'),
      name: t('franchise.page.stories.story3.name'),
      location: t('franchise.page.stories.story3.location'),
      image: t('franchise.page.stories.story3.image'),
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
                <span className="hidden sm:inline">{t('nav.franchise')}</span>
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative h-[75vh] min-h-[600px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop"
              alt={language === 'tr' ? 'WMB Cafe mağaza' : 'WMB Cafe storefront'}
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.85) contrast(1.1) saturate(1.1)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/85 via-secondary/50 to-transparent"></div>
          </div>
          <div className="relative z-10 h-full flex items-end">
            <div className="max-w-7xl mx-auto px-6 pb-16 md:pb-24 w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                  {t('franchise.page.heroTitle')}
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mb-10">
                  {t('franchise.page.heroSubtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#application"
                    className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-lg bg-primary text-white text-base font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
                  >
                    {t('franchise.page.startApplication')}
                    <Icon icon="lucide:arrow-right" width={20} height={20} strokeWidth={2} />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-lg bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white text-base font-semibold hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                  >
                    <Icon icon="lucide:download" width={20} height={20} strokeWidth={2} />
                    {t('franchise.page.downloadGuide')}
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Franchise Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary mb-4">
                {t('franchise.page.whyTitle')}
              </h2>
              <p className="text-lg text-text-muted max-w-2xl mx-auto">
                {language === 'tr'
                  ? '35 yıllık deneyimimizle, franchise işletmenizi başarıya götürecek her şeyi sağlıyoruz.'
                  : 'With our 35 years of experience, we provide everything to lead your franchise business to success.'}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyCards.map((card, index) => (
                <FranchiseCard
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Franchise Process Section */}
        <section className="py-24 md:py-32 bg-premium-gradient">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary mb-4">
                {t('franchise.page.processTitle')}
              </h2>
              <p className="text-lg text-text-muted max-w-2xl mx-auto">
                {language === 'tr'
                  ? 'Başvurunuzdan açılışa kadar rehberlik edeceğiz'
                  : "We'll guide you from application to opening"}
              </p>
            </motion.div>

            <div className="relative">
              {processSteps.map((step, index) => (
                <StepCard
                  key={index}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  index={index}
                  isLast={index === processSteps.length - 1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Investment & Requirements Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary mb-4">
                {t('franchise.page.investmentTitle')}
              </h2>
              <p className="text-lg text-text-muted max-w-2xl mx-auto">
                {language === 'tr'
                  ? 'Yatırım gereksinimlerimiz ve beklentilerimiz'
                  : 'Our investment requirements and expectations'}
              </p>
            </motion.div>

            <InvestmentTable language={language} />
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-24 md:py-32 bg-premium-gradient">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary mb-4">
                {t('franchise.page.storiesTitle')}
              </h2>
              <p className="text-lg text-text-muted max-w-2xl mx-auto">
                {language === 'tr'
                  ? 'Mevcut franchise işletmecilerimizin deneyimleri'
                  : 'Experiences from our current franchisees'}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {successStories.map((story, index) => (
                <SuccessStoryCard
                  key={index}
                  quote={story.quote}
                  name={story.name}
                  location={story.location}
                  image={story.image}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Multi-Step Application CTA Section */}
        <section id="application" className="py-24 md:py-32 bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] opacity-50"></div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {t('franchise.page.ctaTitle')}
              </h2>
              <p className="text-xl text-gray-300 mb-10">
                {t('franchise.page.ctaSubtitle')}
              </p>
              <Link
                to="/#franchise"
                className="inline-flex items-center justify-center gap-2 h-16 px-12 rounded-lg bg-primary text-white text-lg font-semibold hover:bg-primary-dark transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
              >
                {t('franchise.page.ctaButton')}
                <Icon icon="lucide:arrow-right" width={24} height={24} strokeWidth={2} />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </LanguageWrapper>
  );
}

