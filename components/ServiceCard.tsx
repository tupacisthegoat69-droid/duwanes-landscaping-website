import { Link } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
}

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col h-full">
      <div className="text-green-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <Link
        href={link}
        className="text-green-600 font-semibold flex items-center gap-2 hover:text-green-700 transition-colors"
      >
        Learn More <ArrowRight size={16} />
      </Link>
    </div>
  );
};

export default ServiceCard;
