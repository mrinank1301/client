import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export interface Hero1Props {
  backgroundImage: string;
  tagline: string;
  heading: string;
  subheading: string;
  buttonText?: string;
  buttonLink?: string;
  buttonIcon?: React.ReactNode;
  overlayOpacity?: number;
  animationDuration?: number;
  className?: string;
}

const Hero1: React.FC<Hero1Props> = ({
  backgroundImage = '/ship.jpg',
  tagline = "LET'S MOVE FORWARD.",
  heading = "Exporting your goods worldwide.",
  subheading = "Streamlining your logistics with transport solutions",
  buttonText = "Get In Touch",
  buttonLink = "#contact",
  buttonIcon = <ArrowRight className="w-4 h-4" />,
  overlayOpacity = 0.3,
  animationDuration = 1000,
  className = "",
}) => {
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
      className={cn(
        "relative w-[90vw] h-[95vh] left-1/2 transition-all duration-1000 transform -translate-x-1/2 translate-y-10 rounded-3xl bg-cover bg-center pt-20",
        Scrolled? "w-screen h-[100vh] rounded-none translate-y-0" : "w[90vw] h-[95vh]",
        className
      )}
      style={{ 
        backgroundImage: `url("${backgroundImage}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className={cn(
        'w-full h-full absolute inset-0 bg-gradient-to-t from-secondary-dark to-transparent',
        Scrolled ? 'rounded-none' : 'rounded-3xl'
      )} style={{opacity: overlayOpacity}}></div>

      <div className="relative container-custom h-full flex flex-col justify-end py-20 mt-14">
        <div className="flex flex-col gap-0 pb-10 md:flex-row md:gap-6 items-center">
          <div className='w-full'>
            <div className={cn(
              "max-w-2xl transition-all transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDuration: `${animationDuration}ms` }}
            >
              <h1 className="text-5xl w-full md:text-7xl font-bold text-white mb-6 leading-tight">
                {heading}
              </h1>
            </div>
          </div>

          <div className={cn(
            "flex flex-col items-center gap-6 mt-8 transition-all transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={{ transitionDuration: `${animationDuration}ms` }}
          >
            <div className="flex items-center gap-6 mt-8">
              <div className="w-24 h-0.5 bg-primary ml-28"></div>
              <p className="text-lg text-white">
                {subheading}
              </p>
            </div>
            <div className="hidden lg:block">
              <button className="bg-blue-600 hover:bg-white hover:text-secondary-dark text-white rounded-md py-3 px-5 flex items-center gap-3 transition-colors">
                {buttonText}
                {buttonIcon}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
