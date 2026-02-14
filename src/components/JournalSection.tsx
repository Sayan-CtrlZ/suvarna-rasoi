import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-dish.jpg";
import interiorImage from "@/assets/restaurant-interior.jpg";

const posts = [
  { title: "The Ritual of Truffle Season", excerpt: "As autumn descends upon Périgord, we journey to the ancient oak forests...", date: "November 2025", image: heroImage, category: "Terroir" },
  { title: "A Conversation with Sake Master Hiroshi Tanaka", excerpt: "In this intimate exchange, we explore the parallels between sake and sculpture...", date: "October 2025", image: interiorImage, category: "Dialogue" },
  { title: "Behind the Dish: Wagyu Obsidian", excerpt: "The creation of our signature course — from Miyazaki's pastures to your plate...", date: "September 2025", image: heroImage, category: "Process" },
];

const JournalSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="journal" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-center mb-16">
          <p className="text-xs tracking-[0.5em] uppercase text-primary font-body mb-6">Chronicles</p>
          <h2 className="text-4xl md:text-6xl font-serif gold-gradient-text">Culinary Journal</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-2xl mb-5">
                <img src={post.image} alt={post.title} className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-accent font-body">{post.category}</span>
              <h3 className="font-serif text-xl text-foreground mt-2 mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
              <p className="font-cormorant text-muted-foreground text-sm mb-3">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground font-body">{post.date}</span>
                <ArrowRight className="w-4 h-4 text-primary/0 group-hover:text-primary transition-all duration-300 group-hover:translate-x-1" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JournalSection;
