import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">Y&Y</span>
              </div>
              <span className="text-xl font-semibold">Y&Y Salón de Uñas</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Centro de estética en Valencia especializado en el cuidado profesional de manos y pies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection("inicio")}
                className="block text-background/80 hover:text-primary transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="block text-background/80 hover:text-primary transition-colors"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("galeria")}
                className="block text-background/80 hover:text-primary transition-colors"
              >
                Galería
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="block text-background/80 hover:text-primary transition-colors"
              >
                Contacto
              </button>
            </div>
          </div>

          {/* Contact and Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <div className="space-y-2 text-background/80">
              <p>C/ José Aguilar, 57-bj izq</p>
              <p>Valencia</p>
              <a href="tel:663510582" className="hover:text-primary transition-colors">
                663 510 582
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>© 2025 Y&Y Salón de Uñas · Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
