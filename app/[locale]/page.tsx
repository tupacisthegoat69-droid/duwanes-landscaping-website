import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import GoogleReviews from '@/components/GoogleReviews';
import { Shovel, Scissors, Droplets, Ruler } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');

  const services = [
    {
      title: t('servicesList.design.title'),
      description: t('servicesList.design.description'),
      icon: <Ruler size={40} />,
      link: '/services#design',
    },
    {
      title: t('servicesList.lawnCare.title'),
      description: t('servicesList.lawnCare.description'),
      icon: <Scissors size={40} />,
      link: '/services#lawn-care',
    },
    {
      title: t('servicesList.hardscaping.title'),
      description: t('servicesList.hardscaping.description'),
      icon: <Shovel size={40} />,
      link: '/services#hardscaping',
    },
    {
      title: t('servicesList.irrigation.title'),
      description: t('servicesList.irrigation.description'),
      icon: <Droplets size={40} />,
      link: '/services#irrigation',
    },
  ];

  return (
    <div className="bg-white">
      <Hero />

      {/* Services Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('servicesTitle')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('servicesSubtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors"
          >
            {t('viewAllServices')}
          </Link>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden shadow-xl">
               {/* Placeholder for trust image */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2006&auto=format&fit=crop')] bg-cover bg-center"></div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('whyChooseTitle')}</h2>
            <p className="text-lg text-gray-600 mb-6">
              {t('whyChooseSubtitle')}
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-700">{t('licensed')}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-700">{t('quality')}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-700">{t('freeConsult')}</span>
              </li>
            </ul>
            <Link
              href="/about"
              className="text-green-600 font-semibold hover:text-green-700 transition-colors"
            >
              {t('learnMore')} &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <GoogleReviews />

      {/* CTA Section */}
      <section className="bg-green-900 py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">{t('ctaTitle')}</h2>
        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
          {t('ctaSubtitle')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:+12144503335"
            className="bg-white text-green-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            Call (214) 450-3335
          </a>
          <Link
            href="/contact"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-green-900 transition-colors"
          >
            {t('requestQuote')}
          </Link>
        </div>
      </section>
    </div>
  );
}
