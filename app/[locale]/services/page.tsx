import { Shovel, Scissors, Droplets, Ruler } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      id: 'design',
      title: 'Landscaping Design',
      description: 'Our expert designers work with you to create a custom landscape plan that fits your lifestyle and budget. From initial concept to final installation, we handle every detail.',
      features: ['3D Renderings', 'Plant Selection', 'Hardscape Planning', 'Lighting Design'],
      icon: <Ruler size={48} />,
    },
    {
      id: 'lawn-care',
      title: 'Lawn Care & Maintenance',
      description: 'Keep your lawn looking its best year-round with our comprehensive maintenance packages. We offer weekly mowing, fertilization, aeration, and more.',
      features: ['Weekly Mowing', 'Fertilization & Weed Control', 'Aeration & Overseeding', 'Seasonal Cleanups'],
      icon: <Scissors size={48} />,
    },
    {
      id: 'hardscaping',
      title: 'Hardscaping',
      description: 'Enhance your outdoor living space with beautiful and functional hardscapes. We specialize in patios, walkways, retaining walls, and fire pits.',
      features: ['Paver Patios', 'Walkways & Driveways', 'Retaining Walls', 'Fire Pits & Outdoor Kitchens'],
      icon: <Shovel size={48} />,
    },
    {
      id: 'irrigation',
      title: 'Irrigation Systems',
      description: 'Ensure your plants get the water they need with a custom irrigation system. We install, repair, and maintain sprinkler and drip systems.',
      features: ['System Installation', 'Repairs & Maintenance', 'Spring Start-up', 'Winterization'],
      icon: <Droplets size={48} />,
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-green-900 py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
        <p className="text-xl text-green-100 max-w-2xl mx-auto">
          Professional landscaping solutions tailored to your needs.
        </p>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-24">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
              <div className="md:w-1/2">
                <div className="bg-green-50 p-8 rounded-full inline-block mb-6 text-green-600">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors"
                >
                  Request a Quote
                </Link>
              </div>
              <div className="md:w-1/2 w-full">
                <div className="aspect-video bg-gray-200 rounded-lg shadow-lg overflow-hidden relative">
                   {/* Placeholder image */}
                   <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500">
                     Image for {service.title}
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Not Sure What You Need?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Give us a call and we can discuss your project and recommend the best services for your property.
        </p>
        <a
          href="tel:+12144503335"
          className="inline-block bg-green-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors"
        >
          Call (214) 450-3335
        </a>
      </div>
    </div>
  );
}
