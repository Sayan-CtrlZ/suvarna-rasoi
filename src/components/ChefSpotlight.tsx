import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import chefImage from "@/assets/chef-portrait.jpg";

const awards = [
  { year: "2012", title: "First Michelin Star" },
  { year: "2016", title: "Second Michelin Star" },
  { year: "2019", title: "Third Michelin Star" },
  { year: "2021", title: "World's 50 Best — #7" },
  { year: "2024", title: "James Beard Lifetime Achievement" },
];

const ChefSpotlight = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="chef's-table" className="py-32 px-6 relative overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-xs tracking-[0.5em] uppercase text-primary font-body mb-6 text-center"
        >
          The Visionary
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="relative"
          >
            <img
              src={chefImage}
              alt="Executive Chef"
              className="w-full aspect-[3/4] object-cover rounded-2xl cinematic-shadow"
            />
            <div className="absolute inset-0 rounded-2xl border border-primary/10" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-primary/20 rounded-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif gold-gradient-text mb-2">Chef Marcello Vittori</h2>
            <p className="text-sm tracking-[0.3em] uppercase text-accent font-body mb-8">Executive Chef & Creative Director</p>

            <p className="font-cormorant text-muted-foreground text-lg leading-relaxed mb-8">
              Born in the rolling hills of Tuscany, Chef Vittori's journey began in his grandmother's kitchen. 
              After training under the masters of French haute cuisine and Japanese kaiseki, he forged a 
              philosophy that bridges continents — where the soul of Italian terroir meets the precision of 
              Eastern minimalism.
            </p>

            <blockquote className="border-l-2 border-primary/40 pl-6 mb-10">
              <p className="font-cormorant italic text-foreground/80 text-xl">
                "Each plate is a love letter to the earth — written in the language of fire, time, and intention."
              </p>
            </blockquote>

            <div className="space-y-0">
              <p className="text-xs tracking-[0.3em] uppercase text-primary/60 font-body mb-4">Awards & Recognitions</p>
              {awards.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-4 py-3 border-b border-border/30"
                >
                  <span className="font-display text-sm text-primary w-16">{a.year}</span>
                  <span className="font-body text-sm text-muted-foreground">{a.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChefSpotlight;
