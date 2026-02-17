import { motion } from "framer-motion";
import heroImage from "@/assets/hero-dish (2).jpg";
import interiorImage from "@/assets/restaurant-interior.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={interiorImage} alt="Suvarna Rasoi dining room" className="w-full h-full object-cover opacity-80 brightness-125" />
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

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xs tracking-[0.5em] uppercase text-primary font-body mb-4"
        >
          ★ ★ ★ Michelin Three Stars
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display tracking-[0.2em] gold-gradient-text mb-3"
        >
          SUVARNA RASOI
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="w-32 h-[1px] mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mb-6"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-base md:text-lg font-cormorant italic text-muted-foreground max-w-xl mx-auto mb-8"
        >
          Where ancient Indian culinary traditions meet modern artistry — a journey through spice and soul
        </motion.p>

        {/* Hero dish image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-6"
        >
          <img src={heroImage} alt="Signature dish" className="w-full h-full object-cover rounded-full cinematic-shadow" />
          <div className="absolute inset-0 rounded-full border border-primary/20" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a href="#reservations" className="group relative px-6 py-3 border border-primary/50 rounded-2xl font-body text-xs tracking-[0.2em] uppercase text-primary hover-gold-glow transition-all duration-500 hover:bg-primary/10">
            Reserve a Table
          </a>
          <a href="#tasting-menu" className="px-6 py-3 bg-primary/10 border border-primary/20 rounded-2xl font-body text-xs tracking-[0.2em] uppercase text-foreground/80 hover:bg-primary/20 transition-all duration-500">
            View Tasting Journey
          </a>
          <a href="#private-events" className="px-6 py-3 border border-border/50 rounded-2xl font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:border-primary/30 hover:text-foreground transition-all duration-500">
            Private Events
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
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
