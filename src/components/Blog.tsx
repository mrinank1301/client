
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The Role of AI in Modern Warehousing',
    excerpt: 'How artificial intelligence is transforming warehouse management and efficiency.',
    image: 'https://images.unsplash.com/photo-1566177229446-9d135500ae0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
    date: 'May 15, 2023',
    category: 'Technology',
  },
  {
    id: 2,
    title: 'Sustainable Logistics: The Future of Shipping',
    excerpt: 'Exploring eco-friendly practices in the logistics industry to reduce carbon footprint.',
    image: 'https://images.unsplash.com/photo-1504432842672-1a79f78e4084?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    date: 'April 22, 2023',
    category: 'Sustainability',
  },
  {
    id: 3,
    title: 'COVID-19: How It Changed Global Supply Chains Forever',
    excerpt: 'The lasting impact of the pandemic on international logistics and supply chain management.',
    image: 'https://images.unsplash.com/photo-1620883360732-0e752dac9a00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    date: 'March 10, 2023',
    category: 'Industry News',
  },
  {
    id: 4,
    title: 'Last Mile Delivery: Innovations to Watch in 2023',
    excerpt: 'The latest advancements revolutionizing the final leg of the delivery process.',
    image: 'https://images.unsplash.com/photo-1601972599720-36938d4ecd31?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
    date: 'February 5, 2023',
    category: 'Innovation',
  },
];

const Blog: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="blog">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Updated Blogs & News</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Stay informed with the latest industry insights, trends, and updates from our expert team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute top-0 left-0 bg-primary text-white py-1 px-3 text-xs uppercase font-semibold z-10">
                  {post.category}
                </div>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 hover:text-primary transition-colors">
                  <a href="#">{post.title}</a>
                </h3>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <a href="#" className="text-primary font-medium hover:underline">Read More</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
