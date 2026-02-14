import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import spicesImage from "@/assets/spices-display.jpg";
import tandoorImage from "@/assets/tandoor-cooking.jpg";

const PhilosophySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="philosophy" className="py-32 px-6 relative" ref={ref}>
      <div className="max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-xs tracking-[0.5em] uppercase text-primary font-body mb-6"
        >
          Our Philosophy
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl font-serif gold-gradient-text mb-12"
        >
          The Art of Spice & Soul
        </motion.h2>

        <div className="gold-separator mb-12" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl font-cormorant text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8"
        >
          At Suvarna Rasoi, we honor the ancient wisdom of Indian cuisine while embracing modern innovation.
          Each dish is a celebration of India's rich culinary heritage — crafted with rare spices from
          the Himalayas to Kerala, composed with precision, and served as a moment of pure transcendence.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-base font-cormorant italic text-primary/70 max-w-2xl mx-auto"
        >
          "We do not merely serve food. We weave stories of heritage, tradition, and love —
          a symphony of spices that awakens the soul and honors our ancestors."
        </motion.p>

        {/* Visual Elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative overflow-hidden rounded-2xl"
          >
            <img src={spicesImage} alt="Indian spices" className="w-full aspect-[16/10] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
              <p className="text-sm tracking-[0.2em] uppercase text-primary font-body">The Spice Collection</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="relative overflow-hidden rounded-2xl"
          >
            <img src={tandoorImage} alt="Tandoor cooking" className="w-full aspect-[16/10] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
              <p className="text-sm tracking-[0.2em] uppercase text-primary font-body">Traditional Tandoor</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {[
            { title: "Heritage", desc: "Ancient recipes passed through generations — each dish tells a story of regional authenticity and cultural pride." },
            { title: "Spice Alchemy", desc: "Mastery of spice blending from mild to complex — where Ayurvedic wisdom meets culinary innovation." },
            { title: "Ritual", desc: "Traditional cooking methods honored — tandoor flames, dum pukht slow cooking, and the sacred art of tempering." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 + i * 0.2 }}
              className="glass-panel rounded-2xl p-8 hover-gold-glow"
            >
              <h3 className="font-display text-lg tracking-[0.2em] text-primary mb-4">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
