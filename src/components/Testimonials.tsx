
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Thomas Hart',
    position: 'CEO, Global Imports',
    comment: 'Working with Deliver has transformed our international shipping operations. Their efficient solutions and reliable service have saved us time and money.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    rating: 5,
  },
  {
    id: 2,
    name: 'Amanda Chen',
    position: 'Logistics Manager, Tech Innovations',
    comment: 'The team at Deliver consistently exceeds our expectations. Their attention to detail and customer service is unmatched in the industry.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
    rating: 5,
  },
  {
    id: 3,
    name: 'Michael Rodriguez',
    position: 'Supply Chain Director, Retail Group',
    comment: 'We\'ve been using Deliver for our shipping needs for over 5 years now. They have never let us down and always find solutions to our complex logistical challenges.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
    rating: 4,
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-muted">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-secondary-dark text-white p-8 md:p-12 rounded-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900 to-transparent opacity-70"></div>
            <svg className="absolute bottom-0 right-0 text-blue-800 opacity-20 w-64 h-64" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M45.3,-76.2C58.4,-69.7,68.9,-55.5,74.8,-40.6C80.7,-25.7,82,-10.1,78.7,4.1C75.4,18.3,67.5,31,57.9,41.5C48.2,51.9,36.8,60,24.1,67.6C11.5,75.1,-2.3,82.2,-13.9,79.4C-25.6,76.5,-35,63.7,-42.7,51.7C-50.4,39.7,-56.3,28.5,-63.1,15.6C-69.9,2.7,-77.7,-11.8,-76.7,-26.1C-75.7,-40.4,-66.1,-54.4,-53.1,-61.1C-40.1,-67.9,-23.7,-67.3,-5.9,-67C11.9,-66.7,32.2,-82.6,45.3,-76.2Z" transform="translate(100 100)" />
            </svg>
          </div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Clients Say About us</h2>
                <div className="flex gap-4 mt-8">
                  <button 
                    onClick={prevTestimonial}
                    className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <div className="relative overflow-hidden">
                  <div 
                    className="transition-transform duration-500 ease-in-out flex"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                  >
                    {testimonials.map((testimonial) => (
                      <div 
                        key={testimonial.id}
                        className="min-w-full p-4"
                      >
                        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
                          <div className="flex items-center gap-2 mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-400'}`} 
                                fill={i < testimonial.rating ? 'currentColor' : 'none'} 
                              />
                            ))}
                          </div>
                          <p className="text-gray-200 mb-6">"{testimonial.comment}"</p>
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden">
                              <img 
                                src={testimonial.image} 
                                alt={testimonial.name} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-bold">{testimonial.name}</h4>
                              <p className="text-sm text-gray-300">{testimonial.position}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
