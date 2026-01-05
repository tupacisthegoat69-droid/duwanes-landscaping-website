import { Star } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function GoogleReviews() {
  const t = useTranslations('Reviews');

  const reviews = [
    {
      text: t('review1'),
      author: t('review1Author'),
      rating: 5,
    },
    {
      text: t('review2'),
      author: t('review2Author'),
      rating: 5,
    },
    {
      text: t('review3'),
      author: t('review3Author'),
      rating: 5,
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            {t('subtitle')}
          </p>
          
          <a 
            href="https://www.google.com/search?sca_esv=e28bc2b1832d8428&hl=en-US&gl=us&output=search&kgmid=/g/11vxyxy06m&q=Duwane%27s+Landscaping+and+Lawn+Service&shndl=30&shem=ptotple,shrtsdl&source=sh/x/loc/act/m1/3&kgs=0dfbc29bee559223&utm_source=ptotple,shrtsdl,sh/x/loc/act/m1/3#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-6 py-2 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={20} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold text-gray-900">{t('googleRating')}</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">&ldquo;{review.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold">
                  {review.author.charAt(0)}
                </div>
                <span className="font-semibold text-gray-900">{review.author}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?sca_esv=e28bc2b1832d8428&hl=en-US&gl=us&output=search&kgmid=/g/11vxyxy06m&q=Duwane%27s+Landscaping+and+Lawn+Service&shndl=30&shem=ptotple,shrtsdl&source=sh/x/loc/act/m1/3&kgs=0dfbc29bee559223&utm_source=ptotple,shrtsdl,sh/x/loc/act/m1/3#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 font-semibold hover:text-green-700 transition-colors inline-flex items-center gap-2"
          >
            {t('readMore')} &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
