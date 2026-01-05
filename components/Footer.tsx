import { Link } from '@/i18n/routing';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Navbar');

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-green-500 mb-4">Duwane&apos;s Landscaping</h3>
            <p className="text-gray-400 mb-4">
              {t('description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" title="Facebook" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" title="Instagram" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Twitter" title="Twitter" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-green-500 transition-colors">
                  {tNav('home')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-green-500 transition-colors">
                  {tNav('services')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-green-500 transition-colors">
                  {tNav('about')}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-green-500 transition-colors">
                  {tNav('gallery')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-green-500 transition-colors">
                  {tNav('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contactUs')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-green-500 mt-1" size={20} />
                <span className="text-gray-400">
                  123 Garden Lane<br />
                  Springfield, IL 62704
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-green-500" size={20} />
                <a href="tel:+12144503335" className="text-gray-400 hover:text-white transition-colors">
                  (214) 450-3335
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-green-500" size={20} />
                <a href="mailto:info@duwaneslandscaping.com" className="text-gray-400 hover:text-white transition-colors">
                  info@duwaneslandscaping.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Duwane&apos;s Landscaping and Lawn Service. {t('rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
