import { motion } from "framer-motion";
import manicure1 from "@/assets/manicure-1.jpg";
import pedicure1 from "@/assets/pedicure-1.jpg";
import nailArt1 from "@/assets/nail-art-1.jpg";
import frenchManicure from "@/assets/french-manicure.jpg";
import heroNails from "@/assets/hero-nails.jpg";
import salonInterior from "@/assets/salon-interior.jpg";

const galleryImages = [
  {
    src: manicure1,
    alt: "Manicura con gel y diseño elegante",
    title: "Manicura Gel",
  },
  {
    src: pedicure1,
    alt: "Pedicura profesional con esmalte rosa",
    title: "Pedicura Spa",
  },
  {
    src: nailArt1,
    alt: "Nail art con diseño floral",
    title: "Nail Art",
  },
  {
    src: frenchManicure,
    alt: "Manicura francesa clásica",
    title: "Francesa",
  },
  {
    src: heroNails,
    alt: "Diseño de uñas personalizado",
    title: "Diseño Especial",
  },
  {
    src: salonInterior,
    alt: "Interior del salón Y&Y",
    title: "Nuestro Salón",
  },
];

const GallerySection = () => {
  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Trabajos Recientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre algunos de nuestros trabajos más destacados y déjate inspirar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-card hover-lift aspect-square"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary-foreground">
                    {image.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
