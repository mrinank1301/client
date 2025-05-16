
import React from 'react';
import { ChevronRight, Ship, Truck, Plane, Train } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const serviceCards = [
  {
    title: 'Market Research & Intelligence',
    description: '',
    icon: Plane,
    color: 'bg-blue-500',
  },
  {
    title: 'Price Discovery',
    description: '',
    icon: Train,
    color: 'bg-red-500',
  },
  {
    title: 'Logistics Coordination',
    description: '',
    icon: Ship,
    color: 'bg-green-500',
  },
  {
    title: 'Contract Negotiation & Risk Management',
    description: '',
    icon: Truck,
    color: 'bg-yellow-600',
  },
];

const serviceTypes = [
  { name: 'Minerals', icon: Truck, active: true },
  { name: 'Agricultural Products', icon: Ship, active:false  },
  { name: 'Metals', icon: Ship, active: true },
  { name: 'Energy Products', icon: Truck, active: false },
];

const Services: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

 

  return (
    <>
      <section className="py-16 bg-white" id="services">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-8 mb-12"
          >
            <div className="w-full md:w-1/2">
              <div className="flex items-center">
                <span className="bg-blue-500 h-10 w-1 mr-4 rounded"></span>
                <h2 className="text-lg font-medium text-primary">
                Your Trusted Partner in Global Commodity Trading
                </h2>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mt-4 text-blue-900">
              Minimize Risk. Maximize Value.
              </h3>
              <div className="flex items-center mt-6 mb-6 gap-4">
                <div className="bg-primary rounded-full p-3">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <span className="font-semibold"> 300+ Successful Trading Partnerships</span>
              </div>
              <button className="btn-outline flex items-center">
                Discover Opportunities <ChevronRight className="w-4 h-4 ml-2" />
              </button>
            </div>
            
            <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden h-[180px]">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                  alt="Shipping Container" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg bg-primary flex items-center justify-center p-8 h-[180px]">
                <div className="text-center text-white">
                  <h3 className="text-xl font-bold mb-2">Real-Time Tracking</h3>
                  <p>Track your shipments in real-time</p>
                </div>
              </div>
              <div className="rounded-lg bg-accent flex items-center justify-center p-8 h-[180px]">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2 text-primary">Fast Delivery</h3>
                  <p>Express shipping worldwide</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden h-[180px]">
                <img 
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                  alt="Logistics Team" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-4 bg-muted">
        <div className="container-custom relative left-1/2 transform -translate-x-1/2">
          <div className="flex overflow-x-auto py-4 gap-16 no-scrollbar">
            {serviceTypes.map((service, index) => (
              <div 
                key={index} 
                className={cn(
                  "flex flex-col items-center justify-center min-w-[200px] py-4 px-6 rounded-lg transition-all cursor-pointer",
                  service.active ? "bg-primary text-white hover:bg-blue-800" : "bg-white hover:bg-accent"
                )}
              >
                <service.icon className={cn(
                  "w-8 h-8 mb-2",
                  service.active ? "text-white" : "text-primary"
                )} />
                <span className="text-sm font-medium text-center whitespace-nowrap">{service.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            className="flex flex-col md:flex-row gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div className="w-full md:w-1/3" variants={itemVariants}>
              <div className="flex items-center mb-4">
                <span className="bg-blue-500 h-10 w-1 mr-4 rounded"></span>
                <h2 className="text-lg font-medium text-primary">Our Services</h2>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-blue-900">
                Comprehensive Commodity Trading Solutions
              </h3>
              <p className="text-gray-600 mb-6">
              Argosian Resources connects buyers and sellers globally with trusted, transparent commodity trading—spanning minerals, metals, agriculture, and energy. We simplify the entire trade process, offering market insights, fair pricing, secure contracts, and reliable logistics.
              </p>
              <button className="btn-outline flex items-center">
                View All Services <ChevronRight className="w-4 h-4 ml-2" />
              </button>
            </motion.div>

            <motion.div 
              className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={containerVariants}
            >
              {serviceCards.map((service, index) => (
                <motion.div 
                  key={index} 
                  className="service-card shadow-lg"
                  variants={itemVariants}
                >
                  <div className={`service-icon ${service.color} mb-4`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <a href="/services" className="text-primary flex items-center font-medium">
                    Learn More <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
