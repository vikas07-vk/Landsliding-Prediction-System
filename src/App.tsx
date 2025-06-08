
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UnderConstruction from "./components/UnderConstruction";
import About from "./pages/About";
import Help from "./pages/Help";
import Dashboard from "./pages/Dashboard";
import Predict from "./pages/Predict";
import RiskMap from "./pages/RiskMap";
import Information from "./pages/Information";

const App = () => {
  // Create a new QueryClient instance inside the component
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/predict" element={<Predict />} />
                <Route path="/risk-map" element={<RiskMap />} />
                <Route path="/information" element={<Information />} />
                <Route path="/about" element={<About />} />
                <Route path="/help" element={<Help />} />
                <Route path="/research" element={<UnderConstruction />} />
                <Route path="/education" element={<UnderConstruction />} />
                <Route path="/data" element={<UnderConstruction />} />
                <Route path="/contact" element={<UnderConstruction />} />
                <Route path="/api" element={<UnderConstruction />} />
                <Route path="/publications" element={<UnderConstruction />} />
                <Route path="/privacy" element={<UnderConstruction />} />
                <Route path="/terms" element={<UnderConstruction />} />
                <Route path="/disclaimer" element={<UnderConstruction />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
