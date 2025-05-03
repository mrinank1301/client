
import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-16 bg-secondary-dark text-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-gray-300">Stay updated with the latest news and offers</p>
          </div>
          
          <div className="w-full md:w-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-80 px-4 py-3 bg-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-r-md transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
