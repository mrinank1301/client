import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  linkText: string;
  linkUrl: string;
  className?: string;
  animationDelay?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  linkText,
  linkUrl,
  className,
  animationDelay,
}) => {
  return (
    <div 
      className={cn(
        'service-card opacity-0 animate-fade-in-up shadow-lg p-10',
        animationDelay,
        className
      )}
    >
      <div className="service-icon size-12">{icon}</div>
      <h3 className="service-header font-bold text-xl">{title}</h3>
      <p className="service-description text-gray-600 text-md py-4">{description}</p>
      
      <div className="feature-list flex flex-col gap-2 ">
        {features.map((feature, index) => (
          <div key={index} className="feature-item flex items-center gap-2">
            <Check size={18} className="feature-check" />
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>
      <div className="mt-8">
      <a href={linkUrl} className="link-with-arrow  ">
        {linkText} <span className="ml-1">→</span>
      </a>
      </div>
    </div>
  );
};

export default ServiceCard;
