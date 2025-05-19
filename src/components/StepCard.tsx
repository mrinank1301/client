import React from 'react';
import { cn } from '@/lib/utils';

interface StepCardProps {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const StepCard = ({ step, title, description, icon, className }: StepCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 h-full w-44  mx-auto",
        className
      )}
    >
      <div className="flex flex-col">
        <div className="text-gray-400 mb-4">
          {icon}
        </div>
        <div className="text-sm text-gray-500 mb-2">STEP {step}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-800">{description}</p>
      </div>
    </div>
  );
};

export default StepCard;