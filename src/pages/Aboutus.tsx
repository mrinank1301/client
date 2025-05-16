import { useState, useEffect } from "react";
import MissionValues from "../components/MissionValues";
import TeamSection from "../components/TeamSection";
import GlobalNetwork from "../components/GlobalNetwork";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import Hero1 from "@/components/Hero1";
import { ArrowRight } from "lucide-react";
import { Helmet } from 'react-helmet-async';

const Aboutus = () => {
  const [animatedItems, setAnimatedItems] = useState<boolean[]>([false, false, false, false]);

  useEffect(() => {
    // Trigger animations in sequence with slight delays
    const timeouts = [
      setTimeout(() => setAnimatedItems(prev => [true, prev[1], prev[2], prev[3]]), 300),
      setTimeout(() => setAnimatedItems(prev => [prev[0], true, prev[2], prev[3]]), 600),
      setTimeout(() => setAnimatedItems(prev => [prev[0], prev[1], true, prev[3]]), 900),
      setTimeout(() => setAnimatedItems(prev => [prev[0], prev[1], prev[2], true]), 1200)
    ];

    return () => timeouts.forEach(timeout => clearTimeout(timeout));
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us - Argosian</title>
        <meta name="description" content="Learn more about our company, our mission, values, and the team behind our success. Discover why customers choose us for their needs." />
        <meta name="keywords" content="about us, company history, our team, mission statement, company values" />
        <link rel="canonical" href="https://argosianresources.com/about" />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
        <Hero1
        backgroundImage="/about.svg"
        tagline=""
        heading="About Us"
        subheading="A trusted global commodity trading intermediary with over two decades of expertise in connecting suppliers and buyers across minerals, agricultural
                    products, metals, and energy."
        buttonText="Get In Touch"
        buttonLink="/contact"
        buttonIcon={<ArrowRight className="w-4 h-4" />}
        />
        <div className="max-w-[1200px] mx-auto px-6 py-10">
          <section className={`transition-all duration-700 transform ${animatedItems[0] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <MissionValues />
          </section>

          <section className={`mt-20 transition-all duration-700 transform ${animatedItems[1] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <TeamSection />
          </section>

          <section className={`mt-20 transition-all duration-700 transform ${animatedItems[2] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <GlobalNetwork />
          </section>
        </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Aboutus;