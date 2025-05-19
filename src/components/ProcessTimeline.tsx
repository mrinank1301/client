import React from 'react';
import StepCard from './StepCard';
import { 
  Settings, Users, FileText, 
  Camera, Smartphone, Hand, MessageSquare 
} from 'lucide-react';

const ProcessTimeline = () => {
  const steps = [
    {
      step: 1,
      title: 'Setting design goals',
      description: '',
      icon: <Settings className="w-5 h-5" />
    },
    {
      step: 2,
      title: 'Conducting user research',
      description: '',
      icon: <Users className="w-5 h-5" />
    },
    {
      step: 3,
      title: 'Creating a wireframe',
      description: '',
      icon: <FileText className="w-5 h-5" />
    },
    {
      step: 4,
      title: 'Developing the visual design',
      description: '',
      icon: <Camera className="w-5 h-5" />
    },
    {
      step: 5,
      title: 'Prototype',
      description: '',
      icon: <Smartphone className="w-5 h-5" />
    },
    {
      step: 6,
      title: 'Handing over to developers',
      description: '',
      icon: <Hand className="w-5 h-5" />
    },
    {
      step: 7,
      title: 'Gathering user feedback',
      description: '',
      icon: <MessageSquare className="w-5 h-5" />
    }
  ];

  return (
    <div className="w-full px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 md:gap-8 lg:gap-36">
          {steps.map((step, index) => (
            <div 
              key={step.step}
              className="animate-fade-in w-full"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <StepCard 
                step={step.step}
                title={step.title}
                description={step.description}
                icon={step.icon}
                className=" max-w-44 h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessTimeline;
