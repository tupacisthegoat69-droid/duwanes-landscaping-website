import { Link } from '@/i18n/routing';
import { CheckCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('About');

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-green-900 py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">{t('title')}</h1>
        <p className="text-xl text-green-100 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('storyTitle')}</h2>
            <p className="text-lg text-gray-600 mb-6">
              {t('storyP1')}
            </p>
            <p className="text-lg text-gray-600 mb-6">
              {t('storyP2')}
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">{t('valuesTitle')}</h3>
            <ul className="space-y-4">
              {[
                'quality',
                'reliability',
                'integrity',
                'customerFocus'
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{t(`values.${item}`)}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:w-1/2 w-full">
             <div className="grid grid-cols-1 gap-6">
                <div className="bg-gray-200 h-64 rounded-lg w-full relative overflow-hidden">
                    {/* Placeholder */}
                    <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500">Team Photo</div>
                </div>
                <div className="bg-gray-100 p-8 rounded-lg border-l-4 border-green-600">
                    <p className="text-xl italic text-gray-700 mb-4">
                    &ldquo;{t('testimonial')}&rdquo;
                    </p>
                    <p className="font-bold text-gray-900">{t('testimonialAuthor')}</p>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('ctaTitle')}</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          {t('ctaSubtitle')}
        </p>
        <Link
          href="/contact"
          className="inline-block bg-green-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors"
        >
          {t('ctaButton')}
        </Link>
      </div>
    </div>
  );
}
