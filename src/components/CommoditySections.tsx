import { Card } from "@/components/ui/card";
import { Triangle, Leaf, CircuitBoard, Zap } from "lucide-react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCards";
const CommoditySections = () => {
  const products = [
    {
      id: 1,
      title: "Minerals",
      icon: "diamond",
      image: "/minerals.svg",
      description: "We source and supply key minerals like Iron Ore, Bauxite, and Manganese for global industrial needs. Top products include Iron Ore Fines 62% and Calcined Bauxite.",
      color: "bg-blue-500",
      url: "minerals"
    },
    {
      id: 2,
      title: "Agricultural Products",
      icon: "leaf",
      image: "/agriculture.svg",
      description: "We export high-quality Rice, Wheat, Pulses, and Spices, promoting sustainability in global food trade. Top products include Basmati Rice, Wheat Flour, And Turmeric.",
      color: "bg-green-500",
      url: "agriculture-products"
    },
    {
      id: 3,
      title: "Energy Products",
      icon: "zap",
      image: "/energy.svg",
      description: "We trade bulk energy resources like Crude Oil, LNG, and Coal to support reliable global energy flow. Top products include Crude Oil, Pet Coke, and Thermal Coal.",
      color: "bg-orange-500",
      url: "energy-products"
    },
    {
      id: 4,
      title: "Metals",
      icon: "package",
      image: "/metals.svg",
      description: "We supply high-grade Copper, Aluminum, and Steel, tailored for construction and manufacturing needs. Top products include Copper Cathodes and Steel Billets.",
      color: "bg-red-500",
      url: "metals"
    }
  ];
  return (
    <section className="py-16 px-4 md:px-8 ">
          <div className="container mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-blue-800 mb-4"
            >
              What We Offer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto"
            >
              Enabling fair, efficient and transparent commodity flows worldwide.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {products.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </section>
  );
};

export default CommoditySections;
