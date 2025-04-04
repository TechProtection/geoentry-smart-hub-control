
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 transition-transform duration-300 btn-animate h-full flex flex-col">
      <div className="h-12 w-12 bg-techguard-100 rounded-lg text-techguard-600 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  );
};

export default FeatureCard;
