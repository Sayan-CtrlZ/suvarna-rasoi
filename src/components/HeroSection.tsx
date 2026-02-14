import { motion } from "framer-motion";
import heroImage from "@/assets/hero-dish.jpg";
import interiorImage from "@/assets/restaurant-interior.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={interiorImage} alt="Aurelia Noir dining room" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      {/* Floating gold particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
            animate={{ y: [-20, 20, -20], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xs tracking-[0.5em] uppercase text-primary font-body mb-6"
        >
          ★ ★ ★ Michelin Three Stars
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-9xl font-display tracking-[0.2em] gold-gradient-text mb-4"
        >
          AURELIA NOIR
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="w-48 h-[1px] mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mb-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-lg md:text-xl font-cormorant italic text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          Where culinary artistry meets the poetry of darkness — an odyssey for the senses
        </motion.p>

        {/* Hero dish image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mb-12"
        >
          <img src={heroImage} alt="Signature dish" className="w-full h-full object-cover rounded-full cinematic-shadow" />
          <div className="absolute inset-0 rounded-full border border-primary/20" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#reservations" className="group relative px-8 py-4 border border-primary/50 rounded-2xl font-body text-sm tracking-[0.2em] uppercase text-primary hover-gold-glow transition-all duration-500 hover:bg-primary/10">
            Reserve a Table
          </a>
          <a href="#tasting-menu" className="px-8 py-4 bg-primary/10 border border-primary/20 rounded-2xl font-body text-sm tracking-[0.2em] uppercase text-foreground/80 hover:bg-primary/20 transition-all duration-500">
            View Tasting Journey
          </a>
          <a href="#private-events" className="px-8 py-4 border border-border/50 rounded-2xl font-body text-sm tracking-[0.2em] uppercase text-muted-foreground hover:border-primary/30 hover:text-foreground transition-all duration-500">
            Private Dining
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 border border-primary/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
