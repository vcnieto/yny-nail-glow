import { motion } from "framer-motion";
import img1 from "@/assets/1.png";
import img2 from "@/assets/2.png";
import img3 from "@/assets/3.png";
import img4 from "@/assets/4.png";
import img5 from "@/assets/5.png";
import img6 from "@/assets/6.png";

const galleryImages = [
  { src: img1, alt: "Trabajo 1 - Y&Y", title: "Trabajo 1" },
  { src: img2, alt: "Trabajo 2 - Y&Y", title: "Trabajo 2" },
  { src: img3, alt: "Trabajo 3 - Y&Y", title: "Trabajo 3" },
  { src: img4, alt: "Trabajo 4 - Y&Y", title: "Trabajo 4" },
  { src: img5, alt: "Trabajo 5 - Y&Y", title: "Trabajo 5" },
  { src: img6, alt: "Trabajo 6 - Y&Y", title: "Trabajo 6" },
];

const GallerySection = () => {
  // Duplicate images to create a seamless loop
  const marqueeImages = [...galleryImages, ...galleryImages];

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

        {/* Infinite marquee wrapper */}
        <div className="relative overflow-hidden group">
          <div className="marquee-track flex items-stretch gap-6 will-change-transform">
            {marqueeImages.map((image, idx) => (
              <div
                key={`${image.alt}-${idx}`}
                className="shrink-0 basis-full md:basis-1/3 lg:basis-1/4"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-card aspect-square">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:[animation-play-state:paused] hover:scale-105"
                  />
                  <div className="absolute inset-0 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Local styles for marquee animation */}
        <style>
          {`
            .marquee-track {
              animation: marquee-scroll 25s linear infinite;
            }
            .group:hover .marquee-track {
              animation-play-state: paused;
            }
            @keyframes marquee-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default GallerySection;
