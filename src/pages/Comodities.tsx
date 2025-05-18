import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BenefitsSection from "../components/BenefitsSection";
import HeroSection from "../components/HeroSection";
import ActionSection from "../components/ActionSection";
import CommoditySections from "../components/CommoditySections";
import Footer from "@/components/Footer";

export default function Index() {
  const [animatedElements, setAnimatedElements] = useState<NodeListOf<Element> | null>(null);

  useEffect(() => {
    // Initialize animation observer after component mounts
    const elements = document.querySelectorAll('.animate-on-scroll');
    setAnimatedElements(elements);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => {
      observer.observe(el);
    });

    return () => {
      if (animatedElements) {
        animatedElements.forEach(el => {
          observer.unobserve(el);
        });
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      <HeroSection />
      <div className="container mx-auto px-4 py-12">
        <CommoditySections />
        <BenefitsSection />
        <ActionSection />
      </div>
      <Footer/>
    </div>
  );
}
