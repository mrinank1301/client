import React from 'react';
import { cn } from '@/lib/utils';

interface IndustryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  animationDelay?: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({
  icon,
  title,
  description,
  className,
  animationDelay,
}) => {
  return (
    <div 
      className={cn(
        'service-card opacity-0 animate-fade-in-up shadow-lg ',
        animationDelay,
        className
      )}
    >
      <div className="service-icon">{icon}</div>
      <h3 className="service-header font-bold text-xl mb-5">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default IndustryCard;
