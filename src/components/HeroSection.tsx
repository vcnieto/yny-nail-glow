import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-nails.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center pt-20 gradient-soft">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Belleza en cada{" "}
              <span className="text-primary">detalle</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Cuidamos tus uñas con los mejores productos y la máxima dedicación. 
              Experiencia profesional en manicura, pedicura y depilación en Valencia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("servicios")}
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
                <p className="text-lg font-semibold text-foreground">
                  Lun-Sáb: 10:00 - 21:00
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-glow">
              <img
                src={heroImage}
                alt="Manicura profesional en Y&Y Salón de Uñas Valencia"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-background rounded-2xl p-6 shadow-card border border-border"
            >
              <p className="text-4xl font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground">Años de experiencia</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
