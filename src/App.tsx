
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EcommercePlatform from "./pages/portfolio/EcommercePlatform";
import MobileBankingApp from "./pages/portfolio/MobileBankingApp";
import DashboardAnalytics from "./pages/portfolio/DashboardAnalytics";
import SocialMediaPlatform from "./pages/portfolio/SocialMediaPlatform";
import HealthcareManagement from "./pages/portfolio/HealthcareManagement";
import AiChatbotPlatform from "./pages/portfolio/AiChatbotPlatform";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio/e-commerce-platform" element={<EcommercePlatform />} />
          <Route path="/portfolio/mobile-banking-app" element={<MobileBankingApp />} />
          <Route path="/portfolio/dashboard-analytics" element={<DashboardAnalytics />} />
          <Route path="/portfolio/social-media-platform" element={<SocialMediaPlatform />} />
          <Route path="/portfolio/healthcare-management" element={<HealthcareManagement />} />
          <Route path="/portfolio/ai-chatbot-platform" element={<AiChatbotPlatform />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
