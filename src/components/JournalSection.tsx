import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-dish.jpg";
import heroImage2 from "@/assets/hero-dish (2).jpg";
import spicesImage from "@/assets/spices-display.jpg";

const posts = [
    { title: "The Sacred Art of Spice Blending", excerpt: "Journey through the ancient markets of Kerala, where we source the finest cardamom and peppercorns...", date: "November 2025", image: spicesImage, category: "Heritage" },
    { title: "A Conversation with Master Chef Vikram", excerpt: "In this intimate exchange, we explore the fusion of traditional Indian techniques with modern innovation...", date: "October 2025", image: heroImage2, category: "Dialogue" },
    { title: "Behind the Dish: Raan-e-Sikandari", excerpt: "The creation of our signature course — from Rajasthan's royal kitchens to your plate...", date: "September 2025", image: heroImage, category: "Process" },
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
                            whileHover={{ y: -12 }}
                            className="group cursor-pointer transition-all duration-500 hover:drop-shadow-[0_20px_40px_rgba(212,175,55,0.2)]"
                        >
                            <div className="overflow-hidden rounded-2xl mb-5 relative">
                                <img src={post.image} alt={post.title} className="w-full aspect-[4/3] object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75" />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
