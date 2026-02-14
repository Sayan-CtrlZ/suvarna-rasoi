import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Priya Sharma",
        title: "Food Critic, The Times of India",
        text: "Suvarna Rasoi is a revelation. Chef Vikram's mastery of spices and his innovative approach to traditional Indian cuisine creates an unforgettable dining experience. Each course is a journey through India's rich culinary heritage.",
        rating: 5,
    },
    {
        name: "Rajesh Mehta",
        title: "Michelin Inspector",
        text: "The attention to detail, the quality of ingredients, and the sheer artistry on every plate justify the three Michelin stars. The Raan-e-Sikandari is perhaps the finest lamb dish I've experienced in my career.",
        rating: 5,
    },
    {
        name: "Ananya Kapoor",
        title: "Culinary Journalist",
        text: "What sets Suvarna Rasoi apart is the seamless blend of tradition and innovation. The Saffron Pani Puri amuse-bouche alone is worth the visit. This is Indian fine dining at its absolute pinnacle.",
        rating: 5,
    },
];

const Testimonials = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="testimonials" className="py-32 px-6 relative" ref={ref}>
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    className="text-center mb-16"
                >
                    <p className="text-xs tracking-[0.5em] uppercase text-primary font-body mb-6">Acclaim</p>
                    <h2 className="text-4xl md:text-6xl font-serif gold-gradient-text">What They Say</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3 + i * 0.15 }}
                            className="glass-panel rounded-2xl p-8 hover-gold-glow"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(t.rating)].map((_, j) => (
                                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                                ))}
                            </div>
                            <p className="font-cormorant text-muted-foreground text-base leading-relaxed mb-6 italic">
                                "{t.text}"
                            </p>
                            <div>
                                <p className="font-display text-sm text-foreground">{t.name}</p>
                                <p className="text-xs text-muted-foreground font-body mt-1">{t.title}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
