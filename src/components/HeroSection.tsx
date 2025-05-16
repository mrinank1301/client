import { Button } from "@/components/ui/button";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Hero1 from "./Hero1";
const HeroSection = () => {
  return (
    <div className="w-full bg-gray-50 animate-on-scroll">
      <Navbar/>
      {/* <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Commodities We Trade</h1>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          Your gateway to trusted global trade across key sectors. At Argosian Resources, we enable 
          seamless, transparent commodity transactions in Minerals, Agricultural Products, Metals, and 
          Energy.
        </p>
        <Button className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-8 py-2 rounded">
          Start Trading Today
        </Button>
      </div> */}
      <Hero1
      backgroundImage="/commodities.svg"
      tagline=""
      heading="Commodities We Trade"
      subheading="Your gateway to trusted global trade across key sectors. At Argosian Resources, we enable 
          seamless, transparent commodity transactions in Minerals, Agricultural Products, Metals, and 
          Energy."
      />
    </div>
  );
};

export default HeroSection;