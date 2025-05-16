import { LineChart, ShieldCheck, Truck, FileCheck } from "lucide-react";

const BenefitCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string 
}) => {
  return (
    <div className="flex items-start animate-on-scroll">
      <div className="mr-4 text-blue-600">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Transparent pricing & deal structures",
      description: "Clear and competitive pricing with no hidden fees"
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: "Verified supplier network",
      description: "Thoroughly vetted partners you can trust"
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Full documentation",
      description: "SGS, REACH, ISO certified processes"
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Global logistics",
      description: "Real-time tracking and efficient delivery"
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Secure payments",
      description: "Protected transactions and escrow services"
    }
  ];

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-12 animate-on-scroll">
        Why Trade With Argosian?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;
