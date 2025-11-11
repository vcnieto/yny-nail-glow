import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, FootprintsIcon, Scissors } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Manicura",
    description: "Desde manicura clásica hasta uñas de gel y porcelana con acabado profesional.",
    features: [
      "Manicura normal",
      "Manicura permanente",
      "Uñas de gel",
      "Uñas de porcelana",
      "Diseños personalizados",
    ],
    priceFrom: "15€",
  },
  {
    icon: FootprintsIcon,
    title: "Pedicura",
    description: "Cuidado completo de tus pies con productos de alta calidad y técnicas profesionales.",
    features: [
      "Pedicura normal",
      "Pedicura francesa",
      "Pedicura permanente",
      "Tratamiento hidratante",
      "Masaje relajante",
    ],
    priceFrom: "20€",
  },
  {
    icon: Scissors,
    title: "Depilación",
    description: "Depilación profesional con cera de calidad para una piel suave y cuidada.",
    features: [
      "Cejas",
      "Labio superior",
      "Axilas",
      "Piernas completas",
      "Brazos",
    ],
    priceFrom: "5€",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios de belleza para el cuidado de tus manos y pies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover-lift shadow-card border-border/50 overflow-hidden group">
                <CardContent className="p-8">
                  <div className="mb-6 w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground">Desde</p>
                    <p className="text-3xl font-bold text-primary">
                      {service.priceFrom}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="/servicios"
            className="inline-flex items-center text-primary hover:text-accent font-semibold text-lg transition-colors"
          >
            Ver todos los precios
            <span className="ml-2">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
