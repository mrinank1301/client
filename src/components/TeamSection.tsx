import { useState, useEffect } from "react";

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
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
      <h2 className="text-4xl font-bold text-center text-blue-900">Meet our team</h2>
      <p className="text-center text-gray-600 mt-5 mb-10">
        Our brilliance is simple — it's a team of diverse, creative people who are fueled by a
        desire to deliver exceptional work each day.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <div 
            key={index}
            className={`bg-white rounded-lg p-6 shadow-sm transition-all duration-500 transform ${
              animatedMembers[index] ? "scale-100 opacity-100" : "scale-95 opacity-0"
            } hover:-translate-y-1 hover:shadow-md`}
          >
            <div className="flex flex-col items-center mb-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden mb-4">
                {/* Placeholder for profile image */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <img src="/avatar.svg" alt="avatar" />
                </div>
              </div>
              <h3 className="font-semibold text-blue-900">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.position}</p>
            </div>
            <p className="text-sm text-gray-600 text-center">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;