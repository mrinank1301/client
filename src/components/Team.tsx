
import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Robert Johnson',
    position: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
    color: 'bg-blue-500',
  },
  {
    name: 'Sarah Parker',
    position: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=776&q=80',
    color: 'bg-purple-500',
  },
  {
    name: 'John Walker',
    position: 'Operations Manager',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
    color: 'bg-green-500',
  },
  {
    name: 'Emily Wilson',
    position: 'Finance Officer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=922&q=80',
    color: 'bg-yellow-500',
  },
];

const Team: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="team">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
            Meet Our Special Support Team Members!
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our dedicated team of professionals is committed to providing the best logistics and shipping services for your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4 relative">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
                <div className={`absolute -top-6 right-4 ${member.color} p-2 rounded-full shadow`}>
                  <Mail className="text-white w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
