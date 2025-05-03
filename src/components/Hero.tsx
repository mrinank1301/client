
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="relative min-h-screen bg-cover bg-center pt-24"
      style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1577416412292-137610e13804?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
      }}
    >
      <div className="absolute inset-0 bg-secondary-dark opacity-60"></div>
      
      <div className="relative container-custom h-full flex flex-col justify-center py-20">
        <div className={cn(
          "max-w-2xl transition-all duration-1000 transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Exporting your goods worldwide.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Fast, reliable shipping solutions for businesses of all sizes. Let us handle your logistics needs so you can focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-primary hover:bg-primary-light text-white py-6 px-8 rounded-md text-lg font-medium">
              Get Started
            </Button>
            <Button variant="outline" className="border-2 border-white text-white py-6 px-8 rounded-md text-lg font-medium hover:bg-white hover:text-secondary-dark">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
