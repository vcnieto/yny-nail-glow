import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleNav = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      scrollToSection(id);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-background/60 backdrop-blur-md border-b border-border/40"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="/#inicio"
            onClick={handleNav("inicio")}
            className="flex items-center space-x-2 group"
          >
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-primary-foreground font-bold text-lg">Y&Y</span>
            </div>
            <span className="text-xl font-semibold text-foreground">
              Y&Y Salón de Uñas
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/#inicio"
              onClick={handleNav("inicio")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </a>
            <a
              href="/servicios"
              className="text-foreground hover:text-primary transition-colors"
            >
              Servicios
            </a>
            <a
              href="/#galeria"
              onClick={handleNav("galeria")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Galería
            </a>
            <a
              href="/#opiniones"
              onClick={handleNav("opiniones")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Opiniones
            </a>
            <a
              href="/#contacto"
              onClick={handleNav("contacto")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:663510582" className="text-foreground hover:text-primary transition-colors">
              <Phone className="w-5 h-5" />
            </a>
            <Button
              onClick={() =>
                window.open(
                  "https://wa.me/34663510582?text=Hola,%20me%20gustaría%20reservar%20una%20cita",
                  "_blank"
                )
              }
              className="bg-primary text-primary-foreground hover:bg-accent shadow-soft"
            >
              Reservar Cita
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <a
              href="/#inicio"
              onClick={handleNav("inicio")}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Inicio
            </a>
            <a
              href="/servicios"
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Servicios
            </a>
            <a
              href="/#galeria"
              onClick={handleNav("galeria")}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Galería
            </a>
            <a
              href="/#opiniones"
              onClick={handleNav("opiniones")}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Opiniones
            </a>
            <a
              href="/#contacto"
              onClick={handleNav("contacto")}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Contacto
            </a>
            <Button
              onClick={() =>
                window.open(
                  "https://wa.me/34663510582?text=Hola,%20me%20gustaría%20reservar%20una%20cita",
                  "_blank"
                )
              }
              className="bg-primary text-primary-foreground hover:bg-accent w-full"
            >
              Reservar Cita
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
