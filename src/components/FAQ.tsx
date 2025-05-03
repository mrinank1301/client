
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, MapPin, Phone, Mail } from 'lucide-react';

const faqItems = [
  {
    question: "What types of goods can you transport?",
    answer: "We transport a wide range of goods including general cargo, perishables, dangerous goods, oversized items, and high-value merchandise. Our specialized equipment and expertise allow us to handle various types of cargo safely and efficiently."
  },
  {
    question: "How do I track my shipment?",
    answer: "You can track your shipment through our online tracking system by entering your tracking number on our website. Alternatively, you can contact our customer service team who will provide you with real-time updates on your shipment status."
  },
  {
    question: "What documents are required for international shipping?",
    answer: "International shipments typically require commercial invoices, packing lists, certificates of origin, shipping declarations, and sometimes specific permits depending on the nature of goods and destination country. Our team will guide you through the documentation process."
  },
  {
    question: "What are your delivery times?",
    answer: "Delivery times vary based on the shipping method, destination, and any customs clearance required. Air freight typically takes 1-5 business days, sea freight 15-60 days, and ground transportation 1-10 days depending on distance. We offer expedited services for time-sensitive deliveries."
  },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-secondary-dark text-white" id="faq">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div 
                  key={index} 
                  className="border border-gray-700 rounded-lg overflow-hidden"
                >
                  <button
                    className="flex justify-between items-center w-full p-4 text-left font-medium"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{item.question}</span>
                    {activeIndex === index ? (
                      <Minus className="w-5 h-5 text-primary" />
                    ) : (
                      <Plus className="w-5 h-5 text-primary" />
                    )}
                  </button>
                  
                  <div 
                    className="overflow-hidden transition-all duration-300"
                    style={{ 
                      maxHeight: activeIndex === index ? '200px' : '0',
                      opacity: activeIndex === index ? 1 : 0,
                    }}
                  >
                    <div className="p-4 pt-0 text-gray-300">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2 bg-secondary p-8 rounded-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-full mr-4">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Our Location</h3>
                  <p className="text-gray-300">123 Logistics Avenue, Shipping District, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-full mr-4">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Call Us</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-full mr-4">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email Us</h3>
                  <p className="text-gray-300">info@deliverlogistics.com</p>
                </div>
              </div>
            </div>
            
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary mb-4"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary mb-4"
              ></textarea>
              <button 
                type="submit" 
                className="btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
