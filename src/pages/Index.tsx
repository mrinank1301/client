import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import FAQ from '@/components/FAQ';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    // Add smooth scrolling behavior to the entire document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    toast({
      title: "Welcome to Delivar",
      description: "Your trusted partner for global shipping solutions.",
      duration: 1000,
    });
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, [toast]);

  return (
    <>
      <Helmet>
        <title>Argosian - Global Commodity Trading Solutions</title>
        <meta name="description" content="Leading global commodity trading intermediary specializing in minerals, agricultural products, metals, and energy. Connect with trusted suppliers and buyers worldwide." />
        <meta name="keywords" content="commodity trading, global trade, minerals trading, agricultural products, metals trading, energy trading" />
        <link rel="canonical" href="https://argosianresources.com" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Argosian - Global Commodity Trading Solutions" />
        <meta property="og:description" content="Leading global commodity trading intermediary specializing in minerals, agricultural products, metals, and energy." />
        <meta property="og:url" content="https://argosianresources.com" />
        <meta property="og:image" content="https://argosianresources.com/og-image.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Argosian - Global Commodity Trading Solutions" />
        <meta name="twitter:description" content="Leading global commodity trading intermediary specializing in minerals, agricultural products, metals, and energy." />
        <meta name="twitter:image" content="https://argosianresources.com/twitter-image.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Argosian" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Stats />
          <Testimonials />
          <FAQ />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
