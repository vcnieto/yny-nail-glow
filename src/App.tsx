import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Sparkles, FootprintsIcon, Scissors } from "lucide-react";

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      // allow DOM to render before scrolling to anchor
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);
  return null;
};

const pricing = {
  MANICURA: [
    { name: "Manicura Normal", price: "8 €" },
    { name: "Manicura Permanente", price: "15 €" },
    { name: "Pintar color Normal", price: "5 €" },
    { name: "Pintar color permanente", price: "10 €" },
    { name: "Uñas de gel con color permanente", price: "25 €" },
    { name: "Uñas de porcelana con color permanente", price: "22 €" },
    { name: "Rellena de gel", price: "18 €" },
    { name: "Rellena de porcelana", price: "18 €" },
    { name: "Quitar gel / Porcelana", price: "5 €" },
    { name: "Quitar Permanente", price: "2 €" },
  ],
  DEPILACIÓN: [
    { name: "Cejas", price: "4 €" },
    { name: "Axilas", price: "4 €" },
    { name: "Piernas medias", price: "8 €" },
    { name: "Labio", price: "3 €" },
    { name: "Brazos", price: "8 €" },
    { name: "Piernas enteras", price: "13 €" },
  ],
  PEDICURA: [
    { name: "Solo cortar uñas", price: "5 €" },
    { name: "Pedicura normal si color", price: "12 €" },
    { name: "Pedicura normal con color o francesa", price: "15 €" },
    { name: "Solo pintar color normal", price: "5 €" },
    { name: "Solo pintar permanente", price: "12 €" },
    { name: "Quitar permanente", price: "3 €" },
    { name: "Pedicura permanente", price: "20 €" },
  ],
};

const Section = ({ title, items }: { title: string; items: { name: string; price: string }[] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <Card className="shadow-card border-border/50">
      <CardContent className="p-6 md:p-8">
        <h3 className="text-2xl font-bold text-foreground mb-6">{title}</h3>
        <div className="divide-y divide-border">
          {items.map((item) => (
            <div key={item.name} className="flex items-center justify-between py-3">
              <span className="text-foreground">{item.name}</span>
              <span className="text-primary font-semibold">{item.price}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const Servicios = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20 bg-background">
        {/* Hero */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm mb-4">Tarifas 2025</span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Nuestros Servicios</h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Cuidado profesional de manos y pies, y depilación. Elige tu servicio y reserva por WhatsApp.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <a href="#manicura" className="px-4 py-2 rounded-full border border-border hover:bg-secondary text-foreground text-sm transition-colors">Manicura</a>
                <a href="#depilacion" className="px-4 py-2 rounded-full border border-border hover:bg-secondary text-foreground text-sm transition-colors">Depilación</a>
                <a href="#pedicura" className="px-4 py-2 rounded-full border border-border hover:bg-secondary text-foreground text-sm transition-colors">Pedicura</a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sections */}
        <div className="container mx-auto px-4 space-y-8">
          <SectionBlock id="manicura" title="MANICURA" icon={Sparkles} items={pricing.MANICURA} />
          <SectionBlock id="depilacion" title="DEPILACIÓN" icon={Scissors} items={pricing.DEPILACIÓN} />
          <SectionBlock id="pedicura" title="PEDICURA" icon={FootprintsIcon} items={pricing.PEDICURA} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <a
              href="https://wa.me/34663510582?text=Hola,%20quiero%20pedir%20informaci%C3%B3n%20sobre%20los%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-accent shadow-soft font-semibold transition-colors"
            >
              Reservar por WhatsApp
              <span className="ml-2">→</span>
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

// Section block with icon and grid layout
const SectionBlock = ({
  id,
  title,
  icon: Icon,
  items,
}: {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  items: { name: string; price: string }[];
}) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-card/40 border border-border/60 rounded-2xl shadow-card overflow-hidden"
  >
    <div className="flex items-center gap-3 px-6 py-5 border-b border-border/60 bg-secondary/40">
      <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
    </div>
    <CardContent className="p-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {items.map((item) => (
          <div key={item.name} className="bg-background px-6 py-4 flex items-center justify-between">
            <span className="text-foreground">{item.name}</span>
            <span className="text-primary font-semibold text-lg">{item.price}</span>
          </div>
        ))}
      </div>
    </CardContent>
  </motion.section>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicios" element={<Servicios />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
