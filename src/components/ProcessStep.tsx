import React from 'react';
import { cn } from '@/lib/utils';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  className?: string;
  animationDelay?: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  description,
  className,
  animationDelay,
}) => {
  return (
    <div 
      className={cn(
        'process-step opacity-0 animate-fade-in-up flex flex-col items-center gap-2',
        animationDelay,
        className
      )}
    >
      <div className="process-number bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center">{number}</div>
      <h3 className="font-bold text-xl mb-1 text-center">{title}</h3>
      <p className="text-xs text-gray-600 max-w-[200px] text-center">{description}</p>
    </div>
  );
};

export default ProcessStep;
