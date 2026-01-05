'use client';

import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

const Hero = () => {
  const t = useTranslations('Home');

  return (
    <div className="relative bg-green-900 h-[600px] flex items-center">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        {/* Placeholder for actual image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center sm:text-left max-w-2xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t('heroTitle')}
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            {t('heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+12144503335"
              className="bg-green-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-green-700 transition-colors text-center"
            >
              {t('callQuote')}
            </a>
            <Link
              href="/contact"
              className="bg-white text-green-900 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              {t('freeEstimate')}
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
