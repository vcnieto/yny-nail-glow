import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import fondoInicio from "@/assets/FONDO INICIO.png";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      {/* Background image */}
      <img
        src={fondoInicio}
        alt="Fondo de inicio Y&Y Salón de Uñas"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay to ensure readability */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 bg-background/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-card"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Belleza en cada <span className="text-primary">detalle</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Cuidamos tus uñas con los mejores productos y la máxima dedicación. Experiencia profesional en manicura, pedicura y depilación en Valencia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => (window.location.href = "/servicios")}
                className="bg-primary text-primary-foreground hover:bg-accent shadow-soft text-lg px-8"
              >
                Ver Servicios
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  window.open(
                    "https://wa.me/34663510582?text=Hola,%20me%20gustaría%20reservar%20una%20cita",
                    "_blank"
                  )
                }
                className="border-2 border-primary text-primary hover:bg-secondary text-lg px-8"
              >
                Reservar por WhatsApp
              </Button>
            </div>
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 pt-6 border-t border-border">
              <div>
                <p className="text-sm text-muted-foreground">Teléfono</p>
                <a
                  href="tel:663510582"
                  className="text-lg font-semibold text-primary hover:text-accent transition-colors"
                >
                  663 510 582
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Horario</p>
                <p className="text-lg font-semibold text-foreground">Lun–Vie 10:00–20:00 · Sáb 10:00–17:00</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
