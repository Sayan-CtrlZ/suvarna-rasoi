import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import chefImage from "@/assets/chef-portrait.jpg";

const awards = [
  { year: "2014", title: "First Michelin Star" },
  { year: "2017", title: "Second Michelin Star" },
  { year: "2020", title: "Third Michelin Star" },
  { year: "2022", title: "Asia's 50 Best — #5" },
  { year: "2024", title: "Indian Culinary Excellence Award" },
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
            className="relative group cursor-pointer"
          >
            <img
              src={chefImage}
              alt="Executive Chef"
              className="w-full aspect-[3/4] object-cover rounded-2xl cinematic-shadow transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-[0_30px_80px_-20px_rgba(212,175,55,0.4)]"
            />
            <div className="absolute inset-0 rounded-2xl border border-primary/10 group-hover:border-primary/30 transition-colors duration-500" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-primary/20 rounded-2xl group-hover:border-primary/40 transition-all duration-500 group-hover:w-28 group-hover:h-28" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif gold-gradient-text mb-2">Chef Vikram Malhotra</h2>
            <p className="text-sm tracking-[0.3em] uppercase text-accent font-body mb-8">Executive Chef & Creative Director</p>

            <p className="font-cormorant text-muted-foreground text-lg leading-relaxed mb-8">
              Born in the vibrant heartland of Punjab, Chef Malhotra's culinary journey began in his grandmother's
              kitchen, where ancient recipes were passed down through generations. After mastering traditional
              Indian techniques and training under legendary chefs across India, he ventured to study French
              haute cuisine and Japanese kaiseki, forging a unique philosophy that honors Indian heritage while
              embracing global innovation.
            </p>

            <blockquote className="border-l-2 border-primary/40 pl-6 mb-10">
              <p className="font-cormorant italic text-foreground/80 text-xl">
                "Each dish is a prayer to our ancestors — written in the language of spices, fire, and devotion."
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
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="flex items-center gap-4 py-3 border-b border-border/30 cursor-pointer transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:shadow-[0_4px_20px_rgba(212,175,55,0.15)] rounded-lg px-2 -mx-2"
                >
                  <span className="font-display text-sm text-primary w-16 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]">{a.year}</span>
                  <span className="font-body text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{a.title}</span>
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
