'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Gallery() {
  // Placeholder images from Unsplash
  const images = [
    { src: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=2069&auto=format&fit=crop', alt: 'Beautiful garden path' },
    { src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2032&auto=format&fit=crop', alt: 'Manicured lawn' },
    { src: 'https://images.unsplash.com/photo-1598902168854-110351d92770?q=80&w=2070&auto=format&fit=crop', alt: 'Patio design' },
    { src: 'https://images.unsplash.com/photo-1605117882932-f9e32b03ef3c?q=80&w=2070&auto=format&fit=crop', alt: 'Flower bed' },
    { src: 'https://images.unsplash.com/photo-1557429287-b2e26467fc2b?q=80&w=1935&auto=format&fit=crop', alt: 'Backyard landscaping' },
    { src: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&w=2070&auto=format&fit=crop', alt: 'Stone walkway' },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-green-900 py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Our Work</h1>
        <p className="text-xl text-green-100 max-w-2xl mx-auto">
          Browse through our portfolio of completed projects.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
            >
              {/* Using a simple div with background image for simplicity with external URLs, 
                  but Next.js Image is better for optimization if domains are configured */}
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${image.src})` }}
                role="img"
                aria-label={image.alt}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Like What You See?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Let us create a beautiful outdoor space for you too.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-green-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors"
        >
          Start Your Project
        </Link>
      </div>
    </div>
  );
}
