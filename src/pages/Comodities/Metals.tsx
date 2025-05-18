import Footer from '@/components/Footer';
import Hero1 from '@/components/Hero1';
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { Check, Globe, Shield, Truck, Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Hero2 from '@/components/Hero2';


const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function Metals() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    product: "",
    quantity: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Form submission logic would go here
  };
  const faqItems = [
    {
      question: "What services does Argosian Resources provide?",
      answer: "We specialize in international commodity trading, procurement, and end-to-end logistics management. Our services include sourcing, transportation, warehousing, and delivery of a wide range of commodities."
    },
    {
      question: "Which commodities do you trade?",
      answer: "We deal in various commodities including minerals, metals, agricultural products, and energy resources, ensuring quality and compliance with global standards."
    },
    {
      question: "In how many countries do you operate?",
      answer: "Argosian Resources proudly serves clients in over 50 countries across Asia, Europe, Africa, and the Americas, enabling seamless global trade."
    },
    {
      question: "How do you ensure the quality of the commodities?",
      answer: "We partner with certified suppliers and conduct strict quality control checks at every stage of the supply chain to guarantee high standards and customer satisfaction."
    },
    {
      question: "What industries do you serve?",
      answer: "We cater to industries such as manufacturing, construction, agriculture, energy, and more, delivering tailored commodity solutions based on each client’s unique needs."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
        <div className="min-h-screen bg-gray-50 overflow-hidden">
        <Hero2
      backgroundImage="/metal-hero.svg"
      tagline=""
      heading="Global Supply of High Performance Industrial Metals"
      subheading="Copper, Aluminum, and Steel tailored for manufacturing and infrastructure."
      />
      <div className="py-12 bg-white">
        <Navbar/>
      {/* Header Section */}
      <motion.header 
        className="py-16 text-center px-4"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-2">About Our Metals Offerings</h1>
        <p className="text-gray-600">Quality metals sourced globally for your industrial needs</p>
      </motion.header>

      {/* Features Section */}
      <motion.section 
        className="py-16 px-4 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div className="text-center shadow-md p-8 rounded-lg" variants={fadeInUp}>
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-50  flex items-center justify-center">
                <Shield className="text-blue-600" size={24} />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Quality Assurance</h3>
            <p className="text-sm text-gray-600">
              Rigorous testing and quality control measures ensure our metals meet international standards.
            </p>
          </motion.div>

          <motion.div className="text-center shadow-md p-8 rounded-lg" variants={fadeInUp}>
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                <Globe className="text-blue-600" size={24} />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Global Sourcing</h3>
            <p className="text-sm text-gray-600">
              Strategic partnerships with mines across continents ensure consistent supply regardless of market fluctuations.
            </p>
          </motion.div>

          <motion.div className="text-center shadow-md p-8 rounded-lg" variants={fadeInUp}>
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                <Truck className="text-blue-600" size={24} />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Logistics Excellence</h3>
            <p className="text-sm text-gray-600">
              End-to-end supply chain management with optimized shipping routes for timely delivery.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Products Section */}
      <motion.section 
        className="py-16 px-4 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-2">Top Metal Products</h2>
            <p className="text-gray-600">Premium industrial metals sourced from trusted mines worldwide</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden">
                <div className="h-48 overflow-hidden bg-gray-200">
                  <img src="/copper.svg" alt="Copper" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-4">Copper</h3>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="font-medium">Purity:</div>
                    <div className="text-right">99.97% - 99.99%</div>
                    
                    <div className="font-medium">Size:</div>
                    <div className="text-right">Standard LME specifications</div>
                    
                    <div className="font-medium">Packaging:</div>
                    <div className="text-right">Bundled and strapped</div>
                    
                    <div className="font-medium">Usage:</div>
                    <div className="text-right">Electrical, Industrial, Export</div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden">
                <div className="h-48 overflow-hidden bg-gray-200">
                  <img src="/steel.svg" alt="Steel" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-4 ">Steel billets</h3>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="font-medium">Grade:</div>
                    <div className="text-right">ASTM A615 / AISI Standards</div>
                    
                    <div className="font-medium">Size:</div>
                    <div className="text-right">100x100 mm / 130x130 mm</div>
                    
                    <div className="font-medium">Length:</div>
                    <div className="text-right">6–12 meters</div>
                    
                    <div className="font-medium">Usage:</div>
                    <div className="text-right">Construction, Rolling Mills</div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden">
                <div className="h-48 overflow-hidden bg-gray-200">
                  <img src="/aluminium.svg" alt="Aluminum" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-4">Aluminum</h3>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="font-medium">Purity:</div>
                    <div className="text-right">99.97%</div>
                    
                    <div className="font-medium">Grade:</div>
                    <div className="text-right">A7 or ADC12</div>
                    
                    <div className="font-medium">Usage:</div>
                    <div className="text-right">Die Casting, Transport</div>
                    
                    <div className="font-medium">Packaging:</div>
                    <div className="text-right">Strapped Bundles</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section 
        className="py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
       <img src="/metal-map.svg" alt="" />
      </motion.section>

      {/* Additional Info Section */}
     

      {/* FAQ and Contact Form Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* FAQ Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
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
                    <div className="p-4 pt-0 text-secondary-dark">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>  
            </motion.div>

            {/* Contact Form Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-bold mb-6">Metal Inquiry Form</h2>
              <p className="mb-6 text-gray-600">Contact us today for pricing, specifications, and availability</p>
              
              <form onSubmit={handleSubmit} className="shadow-md p-8 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <Input 
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <Input 
                      id="company"
                      name="company"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">Product of Interest</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a Metal" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="copper">Copper</SelectItem>
                        <SelectItem value="steel">Steel</SelectItem>
                        <SelectItem value="aluminum">Aluminum</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity Required</label>
                    <Input 
                      id="quantity"
                      name="quantity"
                      placeholder="E.g. 5 tons, 10 containers"
                      value={formData.quantity}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <Textarea 
                    id="message"
                    name="message"
                    placeholder="Please provide additional details about your requirements"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Submit Inquiry
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
      </div>
      <Footer/>
    </div>
     
  );
}

export default Metals;
