import React, { useEffect } from 'react';
import { Button } from "../components/ui/button";
import ServiceCard from '../components/ServiceCard';
import IndustryCard from '../components/IndustryCard';
import ProcessStep from '../components/ProcessStep';
import {
  MarketResearchIcon, 
  PriceDiscoveryIcon, 
  LogisticsCoordinationIcon,
  ContractRiskIcon,
  SupplierBuyerIcon,
  DedicatedTradingIcon,
  SteelPlantsIcon,
  AgriExportersIcon,
  EnergyTradersIcon
} from '../components/ServiceIcons';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Hero1 from '@/components/Hero1';
import { Helmet } from 'react-helmet-async';

const Servicespage = () => {
  useEffect(() => {
    // Function to check if elements are in view
    const checkIfInView = () => {
      const elements = document.querySelectorAll('.animate-fade-in-up, .animate-fade-in');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const inView = (
          rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
        
        if (inView) {
          element.classList.add('opacity-100');
        }
      });
    };

    // Trigger the check on load
    checkIfInView();
    
    // Add event listener for scroll
    window.addEventListener('scroll', checkIfInView);
    
    // Cleanup the event listener
    return () => window.removeEventListener('scroll', checkIfInView);
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Services - Argosian</title>
        <meta name="description" content="Explore our comprehensive range of services designed to meet your needs. Professional solutions tailored to your requirements." />
        <meta name="keywords" content="services, solutions, professional services, business solutions" />
        <link rel="canonical" href="https://argosianresources.com/services" />
      </Helmet>
      <div className="min-h-screen w-full overflow-hidden">
        <Navbar/>
        <Hero1
        backgroundImage="/services.svg"
        tagline=""
        heading="Our Services"
        subheading="Seamless Commodity Trading Services Backed by Research, Compliance & Global Reach"
        />

        {/* Services Section */}
        <section className="py-16 px-4 bg-[#f5f5f5]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Service Card 1 */}
              <ServiceCard 
                icon={<MarketResearchIcon />}
                title="Market Research & Intelligence"
                description="Make smart trading decisions with our commodity insights."
                features={[
                  'Real-time pricing trends',
                  'Global market forecasts',
                  'Regional sourcing intelligence'
                ]}
                linkText="Learn More"
                linkUrl="#"
                animationDelay="animation-delay-100"
              />

              {/* Service Card 2 */}
              <ServiceCard 
                icon={<PriceDiscoveryIcon />}
                title="Uncovering fair market value"
                description="Get competitive and transparent commodity pricing."
                features={[
                  'Benchmark prices',
                  'Negotiation support',
                  'Access to networks'
                ]}
                linkText="Explore Pricing Tools"
                linkUrl="#"
                animationDelay="animation-delay-200"
              />

              {/* Service Card 3 */}
              <ServiceCard 
                icon={<LogisticsCoordinationIcon />}
                title="Logistics Coordination"
                description="Global delivery with verified partners."
                features={[
                  'Sea, rail, and inland logistics',
                  'Customs documentation',
                  'Export/Import compliance'
                ]}
                linkText="View Shipping Process"
                linkUrl="#"
                animationDelay="animation-delay-300"
              />

              {/* Service Card 4 */}
              <ServiceCard 
                icon={<ContractRiskIcon />}
                title="Contract & Risk Management"
                description="Trade securely with verified legal frameworks."
                features={[
                  'Smart contracts',
                  'Transactional insurance',
                  'Dispute resolution'
                ]}
                linkText="Understand Our Process"
                linkUrl="#"
                animationDelay="animation-delay-400"
              />

              {/* Service Card 5 */}
              <ServiceCard 
                icon={<SupplierBuyerIcon />}
                title="Supplier & Buyer Verification"
                description="We verify every partner before onboarding."
                features={[
                  'Due diligence',
                  'Documentation checks',
                  'Trusted sourcing'
                ]}
                linkText="Partner Onboarding Info"
                linkUrl="#"
                animationDelay="animation-delay-500"
              />

              {/* Service Card 6 */}
              <ServiceCard 
                icon={<DedicatedTradingIcon />}
                title="Dedicated Trading Support"
                description="Get expert help from enquiry to execution."
                features={[
                  'Assigned managers',
                  'Matchmaking',
                  'Post-trade reporting'
                ]}
                linkText="Meet Our Team"
                linkUrl="#"
                animationDelay="animation-delay-600"
              />
            </div>
          </div>
        </section>

        {/* Industry Solutions Section */}
        <section className="py-16 px-4 bg-lightBlue">
          <div className="max-w-5xl mx-auto text-center mb-12 ">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 opacity-0 animate-fade-in">
              Tailored Solutions for Every Industry
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Industry Card 1 */}
              <IndustryCard 
                icon={<SteelPlantsIcon />}
                title="Steel Plants & Foundries"
                description="Bulk iron ore, bauxite, and coke solutions"
                animationDelay="animation-delay-100"
              />

              {/* Industry Card 2 */}
              <IndustryCard 
                icon={<AgriExportersIcon />}
                title="Agri-Exporters"
                description="End-to-end rice, wheat, and spice trading"
                animationDelay="animation-delay-200"
              />

              {/* Industry Card 3 */}
              <IndustryCard 
                icon={<EnergyTradersIcon />}
                title="Energy Traders"
                description="Bulk LNG, coal, and crude procurement"
                animationDelay="animation-delay-300"
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-blue-600 hover:bg-blue-800 text-white px-8 py-2 opacity-0 animate-fade-in animation-delay-400">
              Industry Solutions Page
            </Button>
          </div>
        </section>

        {/* Process Steps Section */}
        <section className="py-16 px-4 bg-[#f5f5f5]">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 opacity-0 animate-fade-in">
              From Inquiry to Delivery
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
              <ProcessStep 
                number={1}
                title="Inquiry & Need Assessment"
                description="Initial consultation and requirement gathering"
                animationDelay="animation-delay-100"
              />
              
              <ProcessStep 
                number={2}
                title="Buyer/Seller Matching"
                description="Finding the perfect trading partners"
                animationDelay="animation-delay-200"
              />
              
              <ProcessStep 
                number={3}
                title="Contract Finalization"
                description="Legal documentation and agreements"
                animationDelay="animation-delay-300"
              />
              
              <ProcessStep 
                number={4}
                title="Logistics & Delivery"
                description="Coordinated shipping and handling"
                animationDelay="animation-delay-400"
              />
              
              <ProcessStep 
                number={5}
                title="Post-Trade Support"
                description="Ongoing assistance and reporting"
                animationDelay="animation-delay-500"
              />
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-16 px-4 bg-lightBlue">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 opacity-0 animate-fade-in">
              Trusted By Industry <span className='bg-blue-300  p-2 rounded-sm'>Leaders</span>
            </h2>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
};

export default Servicespage;
