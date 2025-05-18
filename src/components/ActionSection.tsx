import { Button } from "@/components/ui/button";
import { Mail, ListOrdered } from "lucide-react";
import { motion } from "framer-motion";

const ActionSection = () => {
  return (
    <section className="relative overflow-hidden py-8 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-blue-600 text-white p-12 md:p-20 flex flex-col justify-center items-center text-center md:text-left md:items-start"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Trading Today</h2>
              <p className="text-lg mb-8">
                Whether you're a buyer or supplier, our team ensures you get the best value with zero hassle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" className="bg-white text-blue-600 hover:bg-gray-100">
                  Request a Quote
                </Button>
                <Button className="bg-blue-700 hover:bg-blue-800">
                  List your commodity
                </Button>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-gray-200 min-h-[300px]"
            >
              <img 
                src="/banner.svg" 
                alt="Cargo ship" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionSection;