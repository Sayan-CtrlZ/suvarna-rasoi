import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Philosophy", id: "philosophy" },
  { label: "Tasting Menu", id: "tasting-menu" },
  { label: "Chef's Table", id: "chef's-table" },
  { label: "Experiences", id: "experiences" },
  { label: "Gallery", id: "gallery" },
  { label: "Private Events", id: "private-events" },
  { label: "Reservations", id: "reservations" },
  { label: "Journal", id: "journal" },
  { label: "Contact", id: "contact" }
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled
          ? "bg-background/70 backdrop-blur-2xl border-b border-gold/20"
          : "bg-transparent"
          }`}
      >
        <div className="w-full py-3 flex items-center justify-between">
          <button onClick={() => scrollTo("home")} className="font-display text-lg md:text-xl tracking-[0.3em] gold-gradient-text pl-4">
            SUVARNA RASOI
          </button>

          <div className="hidden lg:flex items-center justify-evenly flex-1 px-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-all duration-300 font-body hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-foreground pr-4"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent transition-opacity duration-700 ${scrolled ? "opacity-100" : "opacity-0"}`} />
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl pt-24 px-8 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(item.id)}
                  className="text-lg tracking-[0.2em] uppercase text-foreground/80 hover:text-primary transition-all duration-300 text-left font-body hover:translate-x-2 hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.6)]"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
