import { getSiteUrl } from '@/lib/site';

export default function JsonLd() {
  const siteUrl = getSiteUrl().origin;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LandscapingAndGardeningBusiness',
    name: "Duwane's Landscaping and Lawn Service",
    description: 'Professional landscaping services in Springfield. Lawn care, garden design, hardscaping, and maintenance.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Garden Lane',
      addressLocality: 'Springfield',
      addressRegion: 'IL',
      postalCode: '62704',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 39.7817, // Example coordinates for Springfield, IL
      longitude: -89.6501,
    },
    url: siteUrl,
    telephone: '+12144503335',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    priceRange: '$$',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
