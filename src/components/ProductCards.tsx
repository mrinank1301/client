import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Diamond, Leaf, Zap, Package } from "lucide-react";

interface ProductProps {
  product: {
    id: number;
    title: string;
    icon: string;
    image: string;
    description: string;
    color: string;
    url: string;
  };
  index: number;
}

const ProductCard = ({ product, index }: ProductProps) => {
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case "diamond": return <Diamond className="h-6 w-6 text-blue-500" />;
      case "leaf": return <Leaf className="h-6 w-6 text-blue-500" />;
      case "zap": return <Zap className="h-6 w-6 text-blue-500" />;
      case "package": return <Package className="h-6 w-6 text-blue-500" />;
      default: return <Diamond className="h-6 w-6 text-blue-500" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden h-full">
        <div className="h-72 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            {getIcon(product.icon)}
            <h3 className="text-xl font-bold">{product.title}</h3>
          </div>
          <p className="text-gray-600 mb-6 text-sm">
            {product.description}
          </p>
          <Button 
            className={`w-full ${product.icon === 'diamond' || product.icon === 'zap' ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
            variant="default"
            onClick={() => {
              window.location.href = `/${product.url}`;
            }}
          >
            Learn more
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProductCard;