import { useEffect, useState } from "react";
import { 
  Shield, 
  Award, 
  LockKeyhole, 
  Lightbulb, 
  Eye, 
  UsersRound 
} from "lucide-react";

const values = [
  {
    icon: <img src="/integrity.svg" alt="Integrity" className="h-6 w-6 text-blue-600" />,
    title: "Integrity",
    description: "Upholding the highest standards of business ethics in all our dealings."
  },
  {
    icon: <img src="/excellence.svg" alt="Excellence" className="h-6 w-6 text-blue-600" />,
    title: "Excellence",
    description: "Continuously improving our services & operations to deliver superior results."
  },
  {
    icon: <img src="/trust.svg" alt="Trust" className="h-6 w-6 text-blue-600" />,
    title: "Trust",
    description: "Building lasting relationships based on reliability and transparency."
  },
  {
    icon: <img src="/Innovation.svg" alt="Innovation" className="h-6 w-6 text-blue-600" />,
    title: "Innovation",
    description: "Embracing technologies & approaches to optimize trading outcomes."
  },
  {
    icon: <img src="/customer.svg" alt="Customer-first" className="h-6 w-6 text-blue-600" />,
    title: "Customer-first",
    description: "Prioritizing client needs by delivering tailored solutions & exceptionalservice."
  },
  {
    icon: <img src="/collaboration.svg" alt="Collaboration" className="h-6 w-6 text-blue-600" />,
    title: "Collaboration",
    description: "Fostering teamwork and communication to achieve success."
  },
];

const MissionValues = () => {
  const [animatedCards, setAnimatedCards] = useState<boolean[]>(Array(values.length).fill(false));

  useEffect(() => {
    // Animate cards with a staggered effect
    values.forEach((_, index) => {
      setTimeout(() => {
        setAnimatedCards(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, 200 * (index + 1));
    });
  }, []);

  return (
    <div>
      <h2 className="text-4xl font-bold text-center text-blue-900">Our mission & Values</h2>
      <p className="text-center text-gray-600 mt-5 mb-10">
        Enabling fair, efficient and transparent commodity flows worldwide.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((value, index) => (
          <div 
            key={value.title} 
            className={`bg-blue-50 rounded-lg p-6 transition-all duration-500 transform ${
              animatedCards[index] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex items-start mb-4">
              {value.icon}
              <h3 className="ml-3 font-semibold text-blue-900">{value.title}</h3>
            </div>
            <p className="text-sm text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionValues;