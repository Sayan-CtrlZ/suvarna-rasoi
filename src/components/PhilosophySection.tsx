import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
          The Art of Darkness
        </motion.h2>

        <div className="gold-separator mb-12" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl font-cormorant text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8"
        >
          At Aurelia Noir, we believe cuisine is the highest form of artistic expression. 
          Each dish is a canvas — painted with rare ingredients sourced from the world's most 
          pristine terroirs, composed with architectural precision, and served as a moment 
          of transcendence.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-base font-cormorant italic text-primary/70 max-w-2xl mx-auto"
        >
          "We do not merely serve food. We orchestrate an awakening — a symphony of flavor, 
          texture, and emotion that lingers long after the final course."
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {[
            { title: "Terroir", desc: "Ingredients traced to their origin — each element tells a story of earth, season, and heritage." },
            { title: "Alchemy", desc: "Ancient techniques fused with molecular innovation — where tradition meets the avant-garde." },
            { title: "Ritual", desc: "Every course is a ceremony — served with intention, reverence, and choreographed precision." },
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
