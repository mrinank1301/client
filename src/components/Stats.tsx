
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: 50, label: 'Countries Served', suffix: '+' },
  { value: 10000, label: 'Successful Transactions', suffix: '+' },
  { value: 15, label: 'Industry Expertise', suffix: '+ Yrs' },
];

const CounterAnimation: React.FC<{ target: number; suffix: string; duration?: number }> = ({ 
  target, 
  suffix, 
  duration = 2000 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  // Format large numbers
  const formatValue = (value: number) => {
    if (value >= 1000) {
      return (value / 1000).toFixed(0) + 'k';
    }
    return value;
  };

  useEffect(() => {
    let observer: IntersectionObserver;
    let timeout: NodeJS.Timeout;
    
    const element = document.getElementById('stats-section');
    
    if (element) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      
      observer.observe(element);
    }
    
    return () => {
      if (observer) {
        observer.disconnect();
      }
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const increment = Math.floor(target / 15);
    const timer = setInterval(() => {
      start += increment;
      if (start > target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, duration / 15);
    
    return () => clearInterval(timer);
  }, [target, duration, isVisible]);

  return (
    <span>{formatValue(count)}{suffix}</span>
  );
};

const Stats: React.FC = () => {
  return (
    <section id="stats-section" className="py-16 bg-primary text-white w-[90vw] relative left-1/2 transform -translate-x-1/2 rounded-2xl ">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-10 md:mb-0 md:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Driving Global Trade Since 2010</h2>
              <p className="text-blue-200">
              With a strong foundation in international commodity trading and logistics, Argosian Resources connects markets, delivers value, and builds lasting partnerships across the globe.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:w-2/3">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-4xl md:text-5xl font-bold mb-2">
                  <CounterAnimation target={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-blue-200">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
