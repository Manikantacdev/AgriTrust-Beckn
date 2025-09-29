import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

// Import all pages
import HomePage from "./pages/HomePage";
import SearchResultsPage from "./pages/SearchResultsPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderStatusPage from "./pages/OrderStatusPage";
import OrdersHistoryPage from "./pages/OrdersHistoryPage";
import AboutNetworkPage from "./pages/AboutNetworkPage";
import ProviderOnboardingPage from "./pages/ProviderOnboardingPage";
import HelpSupportPage from "./pages/HelpSupportPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import SiggyMarketplacePage from "./pages/SiggyMarketplacePage";
import JomotoMarketplacePage from "./pages/JomotoMarketplacePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/search" element={<SearchResultsPage />} />
              <Route path="/service/:id" element={<ServiceDetailPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/order-status/:id" element={<OrderStatusPage />} />
              <Route path="/orders" element={<OrdersHistoryPage />} />
              <Route path="/about-network" element={<AboutNetworkPage />} />
              <Route path="/provider-onboarding" element={<ProviderOnboardingPage />} />
              <Route path="/help" element={<HelpSupportPage />} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/siggy" element={<SiggyMarketplacePage />} />
              <Route path="/jomoto" element={<JomotoMarketplacePage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
