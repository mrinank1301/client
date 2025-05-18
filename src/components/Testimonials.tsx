
import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Testimonial data
const testimonials = [
  {
    stars: 5,
    quote: "I have been using FastGo cargo logistic & transportation services for over a year now and I am extremely satisfied with their service. They are efficient, reliable, and always deliver on time. I highly recommend them to anyone in need of logistics services.",
    name: "JOHN DOE",
    position: "BUSINESS OWNER",
    featured: true,
    darkBg: false
  },
  {
    stars: 5,
    quote: "I was very impressed with FastGo handling of my recent shipment. They went above and beyond to ensure my cargo arrived safely and on time. I will definitely be using their services again in the future.",
    name: "JANE SMITH",
    position: "FREELANCE CONSULTANT",
    featured: false,
    darkBg: false
  },
  {
    stars: 5,
    quote: "I was very impressed with FastGo handling of my recent shipment. They went above and beyond to ensure my cargo arrived safely and on time. I will definitely be using their services again in the future.",
    name: "MICHAEL JOHNSON",
    position: "CEO",
    featured: false,
    darkBg: false
  },
  {
    stars: 5,
    quote: "I was very impressed with FastGo handling of my recent shipment. They went above and beyond to ensure my cargo arrived safely and on time. I will definitely be using their services again in the future.",
    name: "SARAH LEE",
    position: "ONLINE RETAILER",
    featured: false,
    darkBg: false
  }
];

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedTestimonials, setAnimatedTestimonials] = useState<boolean[]>(
    Array(testimonials.length).fill(false)
  );

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

    const section = document.getElementById("testimonials-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      testimonials.forEach((_, index) => {
        setTimeout(() => {
          setAnimatedTestimonials((prev) => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }, 200 * (index + 1));
      });
    }
  }, [isVisible]);

  const renderStars = (count: number) => {
    return Array.from({ length: count }).map((_, index) => (
      <Star key={index} className="h-6 w-6 text-blue-600 fill-blue-600" />
    ));
  };

  return (
    <div id="testimonials-section" className="bg-gray-50 py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="lg:col-span-1">
            <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <p className="text-blue-600 font-medium mb-2">TESTIMONIALS</p>
              <h2 className="text-[2.5rem] font-bold text-[#0a1951] leading-tight mb-12">
                OUR CLIENTS SPEAK<br />FOR US
              </h2>
            </div>
            
            <div className="relative mt-6">
              <div 
                className={`relative bg-[#0a1951] bg-[url('/testimonial.svg')] bg-cover bg-center text-white rounded-lg p-8 mb-8 transition-all duration-700 transform ${
                  animatedTestimonials[0] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                {/* Empty content */}
                <div className="h-48"></div>
                {/* Quote mark */}
                <div className="absolute -right-6 -top-9 bg-blue-600 p-4 rounded-md">
                  <Quote className="h-16 w-16 text-white" fill="white" />
                </div>
              </div>
              
              {/* Business owner testimonial directly below the blue card */}
              <Card 
                className={`bg-secondary-dark rounded-lg shadow-sm transition-all duration-700 transform ${
                  animatedTestimonials[0] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {renderStars(testimonials[0].stars)}
                  </div>
                  <p className="text-white mb-6">
                    {testimonials[0].quote}
                  </p>
                  <p className="font-bold text-white">
                    {testimonials[0].name}, {testimonials[0].position}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="lg:col-span-1 flex flex-col space-y-9">
            {/* Three other testimonial cards */}
            {testimonials.slice(1).map((testimonial, index) => (
              <div 
                key={index}
                className={`bg-white rounded-lg p-6 shadow-sm transition-all duration-700 transform ${
                  animatedTestimonials[index + 1] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <div className="flex mb-4">
                  {renderStars(testimonial.stars)}
                </div>
                <p className="text-gray-700 mb-6">
                  {testimonial.quote}
                </p>
                <p className="font-bold text-[#0a1951]">
                  {testimonial.name}, {testimonial.position}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;