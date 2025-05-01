
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Testing from "./pages/Testing";

/**
 * App Component
 * 
 * The root component of the application that sets up:
 * - React Query for data fetching
 * - Toast notifications (both types)
 * - Tooltips
 * - Routing with React Router
 * 
 * @returns {JSX.Element} The complete application with providers and routes
 */
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Toast notification systems */}
      <Toaster />
      <Sonner />
      
      {/* Routing configuration */}
      <BrowserRouter>
        <Routes>
          {/* Main route */}
          <Route path="/" element={<Index />} />
          <Route path="/testing" element={<Testing />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          
          {/* 404 catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
