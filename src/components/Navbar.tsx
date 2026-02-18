import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoSrc from "@/assets/images/logo1.jpeg";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Equipment", href: "#equipment" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const navbarHeight = 80; // Approximate navbar height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-background/95 backdrop-blur-lg shadow-sm border-b border-border"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center gap-3">
          <img src={logoSrc} alt="Western Apiaries" className="h-10 w-auto object-contain" />
          <div className="hidden sm:block font-heading text-2xl font-bold tracking-wide">
            <span className={scrolled ? "text-foreground" : "text-background"}>Western</span>{" "}
            <span className="text-gradient-honey">Apiaries</span>
          </div>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-body text-sm font-medium transition-colors ${scrolled
                  ? "text-muted-foreground hover:text-primary"
                  : "text-background/80 hover:text-background"
                  }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="tel:0704866322"
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-body text-sm font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all"
            >
              Call Us
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden ${scrolled ? "text-foreground" : "text-background"}`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-lg border-b border-border overflow-hidden"
          >
            <ul className="px-6 py-6 space-y-5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block font-body text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="tel:0704866322"
                  className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-body text-sm font-semibold"
                >
                  Call Us
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
