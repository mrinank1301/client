
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="relative min-h-screen bg-cover bg-center pt-20"
      style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("public/lovable-uploads/6c59d1dd-c7e0-4430-af73-8404dd043326.png")',
        backgroundPosition: 'center 30%'
      }}
    >
      <div className="absolute inset-0 bg-secondary-dark opacity-40"></div>
      
      <div className="relative container-custom h-full flex flex-col justify-end py-20">
        <div className="flex flex-col gap-6 pb-32">
          <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white py-2.5 px-6 rounded-full transition-colors w-fit text-sm">
            LET'S MOVE FORWARD.
          </button>
          
          <div className={cn(
            "max-w-2xl transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Exporting your goods worldwide.
            </h1>
            
            <div className="flex items-center gap-6 mt-8">
              <div className="w-24 h-0.5 bg-primary"></div>
              <p className="text-lg text-white">
                Streamlining your logistics with transport solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
