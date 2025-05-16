import { Card } from "@/components/ui/card";
import { Triangle, Leaf, CircuitBoard, Zap } from "lucide-react";

const CommoditySections = () => {
  const commodities = [
    {
      title: "Minerals",
      icon: <Triangle className="h-6 w-6 text-blue-600" />,
      description: "We source and supply Iron Ore, Bauxite, Manganese",
      products: ["Iron Ore Fines 62%", "Calcined Bauxite"],
      origins: ["India", "Brazil", "Australia"],
      linkText: "View Mineral Listings",
      color: "text-blue-600"
    },
    {
      title: "Agricultural Products",
      icon: <Leaf className="h-6 w-6 text-green-600" />,
      description: "Rice, Wheat, Pulses, and Spices for export markets",
      products: ["Basmati Rice", "Wheat Flour", "Turmeric"],
      origins: ["India", "Vietnam"],
      linkText: "View Agri Commodities",
      color: "text-green-600"
    },
    {
      title: "Metals",
      icon: <CircuitBoard className="h-6 w-6 text-blue-600" />,
      description: "Copper, Aluminum, Steel — quality assured",
      products: ["Copper Cathodes", "Steel Billets"],
      origins: ["Middle East", "India"],
      linkText: "View Metal Products",
      color: "text-blue-600"
    },
    {
      title: "Energy Products",
      icon: <Zap className="h-6 w-6 text-purple-600" />,
      description: "Crude Oil, LNG, Coal — bulk energy trading",
      products: ["Crude Oil", "Pet Coke", "Thermal Coal"],
      origins: ["GCC", "Russia"],
      linkText: "Explore Energy Sector",
      color: "text-purple-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
      {commodities.map((item, index) => (
        <Card 
          key={index}
          className="p-6 bg-white shadow-sm hover:shadow-md transition-shadow animate-on-scroll"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex gap-4">
          <div className="mb-4">
            {item.icon}
          </div>
          <h3 className="text-lg font-bold mb-2">{item.title}</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">{item.description}</p>
          
          <div className="mb-4">
            <p className="text-md font-bold  mb-1">Top Products:</p>
            <p className="text-sm">{item.products.join(", ")}</p>
          </div>
          
          <div className="mb-4">
            <p className="text-md font-bold  mb-1">Origins:</p>
            <p className="text-sm">{item.origins.join(", ")}</p>
          </div>
          
          <a 
            href="#" 
            className={`text-sm font-medium ${item.color} hover:underline mt-2 inline-block`}
          >
            {item.linkText}
          </a>
        </Card>
      ))}
    </div>
  );
};

export default CommoditySections;
