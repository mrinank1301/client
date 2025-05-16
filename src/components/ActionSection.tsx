import { Button } from "@/components/ui/button";
import { Mail, ListOrdered } from "lucide-react";

const ActionSection = () => {
  return (
    <div className="bg-blue-700 text-white rounded-lg p-10 text-center mb-12 animate-on-scroll">
      <h2 className="text-3xl font-bold mb-6">Start Trading Today</h2>
      <p className="text-lg opacity-90 mb-8">
        Whether you're a buyer or supplier, our team ensures you get the best value with zero hassle.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button className="bg-white text-blue-700 hover:bg-gray-100 flex items-center gap-2">
          <Mail className="h-4 w-4" />
          Request a Quote
        </Button>
        <Button className="bg-transparent border border-white text-white hover:bg-blue-800 flex items-center gap-2">
          <ListOrdered className="h-4 w-4" />
          List Your Commodity
        </Button>
      </div>
    </div>
  );
};

export default ActionSection;