import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "An ethereal experience — every course was a revelation. Aurelia Noir redefines what fine dining can be.",
    author: "The Michelin Guide",
    role: "Official Review",
  },
  {
    quote: "Chef Vittori's artistry transcends cuisine. This is not dinner — it is a performance, a meditation, a journey through flavor.",
    author: "Elena Dubois",
    role: "Le Monde Gastronomique",
  },
  {
    quote: "In twenty years of reviewing the world's finest restaurants, nothing has moved me quite like the Aurelia Noir experience.",
    author: "James Harrington",
    role: "The World's 50 Best",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-center mb-20">
          <p className="text-xs tracking-[0.5em] uppercase text-primary font-body mb-6">Acclaim</p>
          <h2 className="text-4xl md:text-6xl font-serif gold-gradient-text">What They Say</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.2 }}
              className="glass-panel rounded-2xl p-8 flex flex-col justify-between"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="w-3 h-3 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-cormorant text-foreground/80 text-lg italic leading-relaxed mb-8">"{t.quote}"</p>
              <div>
                <p className="font-display text-sm tracking-[0.15em] text-primary">{t.author}</p>
                <p className="text-xs text-muted-foreground font-body">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
