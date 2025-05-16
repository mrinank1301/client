
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [Scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className={cn("relative w-[90vw] h-[95vh] left-1/2 transition-all duration-1000 transform -translate-x-1/2 translate-y-10 rounded-3xl  bg-cover bg-center pt-20",
        Scrolled? "w-screen h-[100vh] bg-cover bg-center rounded-none translate-y-0" : "w[90vw] h-[95vh] bg-cover bg-center"
      )}
      style={{ 
        backgroundImage: ' url("/ship.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
   <div className={cn(
  'w-full h-full absolute inset-0 bg-gradient-to-t from-secondary-dark to-transparent  rounded-3xl',
  Scrolled
    ? 'bg-gradient-to-t from-secondary-dark to-transparent  rounded-none'
    : 'bg-gradient-to-t from-secondary-dark to-transparent  rounded-3xl'
)} style={{opacity: 0.3}}></div>


      <div className="relative container-custom h-full flex flex-col justify-end py-20 mt-14 ">
        <div className="flex flex-col gap-0 pb-10 md:flex-row md:gap-6">
        <div>
          <button className=" border border-white text-white py-2.5 px-6 rounded-full transition-colors w-fit text-sm">
            LET'S MOVE FORWARD.
          </button>
          <div className={cn(
            "max-w-2xl transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Exporting your goods worldwide.
            </h1>
          </div>
          </div>

          <div className={cn("flex flex-col items-center gap-6 mt-8 transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}>
            <div className="flex items-center gap-6 mt-8 ">
              <div className="w-24 h-0.5 bg-primary ml-28"></div>
              <p className="text-lg text-white">
                Streamlining your logistics with transport solutions
              </p>
              </div>
              <div className="hidden lg:block ml-6">
          <button className="bg-blue-600 hover:bg-white hover:text-secondary-dark text-white rounded-md py-3 px-5 flex items-center gap-3 transition-colors">
            Get In Touch
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
