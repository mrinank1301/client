import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Minerals from "./pages/Comodities/Minerals";
import AgricultureProducts from "./pages/Comodities/AgricultureProducts";
import Metals from "./pages/Comodities/Metals";
import Energyproducts from "./pages/Comodities/Energyproducts";
import Servicespage from "./pages/Servicespage";
import Contact from "./pages/Contact";
import Aboutus from "./pages/Aboutus";
import Comodities from "./pages/Comodities";
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
            <Route path="/minerals" element={<Minerals />} />
            <Route path="/agriculture-products" element={<AgricultureProducts />} />
            <Route path="/metals" element={<Metals/>}/>
            <Route path="/energy-products" element={<Energyproducts/>}/>
            <Route path="/comodities" element={<Comodities/>}/>
            <Route path="/services" element={<Servicespage/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/aboutus" element={<Aboutus/>}/>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
