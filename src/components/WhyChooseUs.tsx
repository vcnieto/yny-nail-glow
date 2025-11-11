import { motion } from "framer-motion";
import { Award, Heart, Clock, Star } from "lucide-react";
import salonImage from "@/assets/salon-interior.jpg";

const benefits = [
  {
    icon: Award,
    title: "Experiencia y Precisión",
    description: "Más de 10 años cuidando las manos de nuestras clientas con técnicas profesionales.",
  },
  {
    icon: Heart,
    title: "Materiales de Alta Calidad",
    description: "Utilizamos los mejores productos del mercado para garantizar resultados duraderos.",
  },
  {
    icon: Clock,
    title: "Trato Personalizado",
    description: "Cada clienta es única. Nos adaptamos a tus necesidades y preferencias.",
  },
  {
    icon: Star,
    title: "Cita Rápida por WhatsApp",
    description: "Reserva tu cita de forma rápida y cómoda a través de WhatsApp.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-card">
              <img
                src={salonImage}
                alt="Interior del salón Y&Y en Valencia"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Por qué nuestras clientas nos eligen
              </h2>
              <p className="text-xl text-muted-foreground">
                Combinamos profesionalidad, calidad y un trato cercano para ofrecerte 
                la mejor experiencia en cada visita.
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4 bg-background rounded-2xl p-6 shadow-soft hover-lift"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
