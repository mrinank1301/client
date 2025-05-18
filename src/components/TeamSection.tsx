import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

// Team members data
const teamMembers = [
  {
    name: "Raju Mehta",
    position: "Co-founder & CEO",
    bio: "Passionate about technology and innovation. With over 15 years of experience in the industry, Raju has led multiple successful startups and established ventures."
  },
  {
    name: "Priya Sharma",
    position: "Co-founder & CTO",
    bio: "Tech enthusiast with deep expertise in building scalable systems. Prior to this role, Priya led engineering teams at several Fortune 500 companies and tech startups."
  },
  {
    name: "Arya Patel",
    position: "Head of Product",
    bio: "Experienced product manager with a passion for creating user-centered experiences. Previously, Arya managed product teams at various tech companies and startups."
  },
  {
    name: "Raju Mehta",
    position: "Co-founder & CEO",
    bio: "Passionate about technology and innovation. With over 15 years of experience in the industry, Raju has led multiple successful startups and established ventures."
  },
  {
    name: "Priya Sharma",
    position: "Co-founder & CTO",
    bio: "Tech enthusiast with deep expertise in building scalable systems. Prior to this role, Priya led engineering teams at several Fortune 500 companies and tech startups."
  },
  {
    name: "Arya Patel",
    position: "Head of Product",
    bio: "Experienced product manager with a passion for creating user-centered experiences. Previously, Arya managed product teams at various tech companies and startups."
  }
];

const TeamSection = () => {
  const [animatedMembers, setAnimatedMembers] = useState<boolean[]>(Array(teamMembers.length).fill(false));
  const [isVisible, setIsVisible] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById("team-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      teamMembers.forEach((_, index) => {
        setTimeout(() => {
          setAnimatedMembers(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }, 150 * (index + 1));
      });
    }
  }, [isVisible]);

  return (
    <div id="team-section">
      <div id="stats-section" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left side - Image */}
          <div className="w-full lg:w-1/2">
            <img 
              src="/about-team.svg" 
              alt="Modern workspace with desk and plants" 
              className="rounded-md shadow-md w-full h-auto"
            />
          </div>
          
          {/* Right side - Stats */}
          <div className="w-full lg:w-1/2" ref={ref}>
            <div className="text-blue-600 font-medium mb-3">
              We've helped hundreds of companies
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-10">
              We're only just getting started on our journey
            </h2>
            
            <div className="grid grid-cols-2 gap-8">
              {/* Stat 1 */}
              <div className="flex flex-col">
                <div className="text-4xl md:text-4xl lg:text-5xl font-bold text-blue-600">
                  {inView ? (
                    <CountUp end={400} suffix="+" duration={3.5} />
                  ) : "400+"}
                </div>
                <div className="text-gray-600 mt-2">Projects completed</div>
              </div>
              
              {/* Stat 2 */}
              <div className="flex flex-col">
                <div className="text-4xl md:text-4xl lg:text-5xl font-bold text-blue-600">
                  {inView ? (
                    <CountUp end={600} suffix="%" duration={3.5} />
                  ) : "600%"}
                </div>
                <div className="text-gray-600 mt-2">Return on investment</div>
              </div>
              
              {/* Stat 3 */}
              <div className="flex flex-col">
                <div className="text-4xl md:text-4xl lg:text-5xl font-bold text-blue-600">
                  {inView ? (
                    <CountUp end={10} suffix="k" duration={3.5} />
                  ) : "10k"}
                </div>
                <div className="text-gray-600 mt-2">Global downloads</div>
              </div>
              
              {/* Stat 4 */}
              <div className="flex flex-col">
                <div className="text-4xl md:text-4xl lg:text-5xl font-bold text-blue-600">
                  {inView ? (
                    <CountUp end={200} suffix="+" duration={3.5} />
                  ) : "200+"}
                </div>
                <div className="text-gray-600 mt-2">5-star reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};



export default TeamSection;