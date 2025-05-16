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
    description: "Upholding the highest standards of conduct, ethics, and professionalism in all our actions and decisions."
  },
  {
    icon: <img src="/excellence.svg" alt="Excellence" className="h-6 w-6 text-blue-600" />,
    title: "Excellence",
    description: "Committed to delivering exceptional quality in everything we do and continuously improving our work."
  },
  {
    icon: <img src="/trust.svg" alt="Trust" className="h-6 w-6 text-blue-600" />,
    title: "Trust",
    description: "Building relationships founded on reliability, consistency, and open communication."
  },
  {
    icon: <img src="/Innovation.svg" alt="Innovation" className="h-6 w-6 text-blue-600" />,
    title: "Innovation",
    description: "Embracing creative solutions and implementing new ideas to address complex challenges."
  },
  {
    icon: <img src="/customer.svg" alt="Customer-first" className="h-6 w-6 text-blue-600" />,
    title: "Customer-first",
    description: "Prioritizing client needs and expectations to deliver personalized and impactful solutions."
  },
  {
    icon: <img src="/collaboration.svg" alt="Collaboration" className="h-6 w-6 text-blue-600" />,
    title: "Collaboration",
    description: "Working together seamlessly across teams to achieve shared goals and create greater value."
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
            className={`bg-gray-50 rounded-lg p-6 transition-all duration-500 transform ${
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