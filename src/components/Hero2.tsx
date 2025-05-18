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
        "relative w-[90vw] h-[95vh] left-1/2 transition-all duration-1000 transform -translate-x-1/2 translate-y-10 rounded-3xl bg-cover bg-center pt-20 overflow-hidden",
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
        'w-full h-full absolute inset-0 bg-black',
        Scrolled ? 'rounded-none' : 'rounded-3xl'
      )} style={{opacity: 0.4}}></div>

      <div className="relative container-custom h-full flex flex-col justify-center items-center text-center">
        <div className={cn(
          "max-w-3xl transition-all transform px-4",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
        style={{ transitionDuration: `${animationDuration}ms` }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {heading}
          </h1>
          
          <p className="text-lg text-white/80 mb-8">
            {subheading}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <Button 
              className="bg-primary hover:bg-primary/90 text-white rounded-md py-3 px-6 flex items-center gap-2 min-w-[200px]"
              asChild
            >
              <a href={buttonLink}>
                <span>Download Product Catalog</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              className="hover:border-white  text-black hover:bg-transparent hover:text-white rounded-md py-3 px-6 min-w-[200px]"
              asChild
            >
              <a href={buttonLink}>
                Request a Quote
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
