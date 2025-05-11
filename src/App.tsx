
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Course from "./pages/dashboard/Course";
import AI from "./pages/dashboard/AI";

// Placeholder para las páginas que implementaremos después
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-screen flex items-center justify-center bg-[#0D0D18] text-white">
    <div className="text-center p-6">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <p>Esta página será implementada próximamente.</p>
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/course" element={<Course />} />
          <Route path="/dashboard/test" element={<PlaceholderPage title="Test de Conocimientos" />} />
          <Route path="/dashboard/ai" element={<AI />} />
          <Route path="/dashboard/analyzer" element={<PlaceholderPage title="Analizador de Acciones" />} />
          <Route path="/dashboard/portfolio" element={<PlaceholderPage title="Tu Cartera" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
