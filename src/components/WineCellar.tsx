import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Wine, Filter } from "lucide-react";

const beverages = [
    { name: "Kesar Thandai Supreme", region: "Uttar Pradesh", year: 2024, type: "Traditional", pairing: "Saffron Pani Puri", price: "₹850", notes: "Saffron, almonds, rose petals, cardamom, served chilled with silver leaf" },
    { name: "Amrut Fusion Single Malt", region: "Bangalore", year: 2019, type: "Whisky", pairing: "Raan-e-Sikandari", price: "₹4,200", notes: "Peated Indian barley, tropical fruit notes, spice complexity, smooth finish" },
    { name: "Darjeeling First Flush", region: "West Bengal", year: 2024, type: "Tea", pairing: "Truffle Khichdi", price: "₹1,200", notes: "Delicate floral notes, muscatel character, golden liquor, spring harvest" },
    { name: "Mango Lassi Royale", region: "Punjab", year: 2024, type: "Traditional", pairing: "Tandoori Scallops", price: "₹650", notes: "Alphonso mango, cultured yogurt, cardamom, saffron threads" },
    { name: "Sula Riesling Reserve", region: "Nashik", year: 2022, type: "Wine", pairing: "Saffron Pani Puri", price: "₹2,800", notes: "Crisp acidity, tropical fruit, floral aromatics, balanced sweetness" },
    { name: "Rose Sharbat Elixir", region: "Kannauj", year: 2024, type: "Traditional", pairing: "Rose & Cardamom Kulfi", price: "₹750", notes: "Pure rose essence, basil seeds, lime, served with crushed ice" },
];

const regions = ["All", "Punjab", "Bangalore", "West Bengal", "Uttar Pradesh", "Nashik", "Kannauj"];
const types = ["All", "Traditional", "Whisky", "Tea", "Wine"];

const WineCellar = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const [selectedRegion, setSelectedRegion] = useState("All");
    const [selectedType, setSelectedType] = useState("All");

    const filtered = beverages.filter(w =>
        (selectedRegion === "All" || w.region === selectedRegion) &&
        (selectedType === "All" || w.type === selectedType)
    );

    return (
        <section id="experiences" className="py-32 px-6 relative" ref={ref}>
            <div className="max-w-6xl mx-auto">
                <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-center mb-16">
                    <p className="text-xs tracking-[0.5em] uppercase text-primary font-body mb-6">
                        <Wine className="inline w-4 h-4 mr-2" />The Collection
                    </p>
                    <h2 className="text-4xl md:text-6xl font-serif gold-gradient-text mb-4">Beverage Gallery</h2>
                    <p className="font-cormorant text-muted-foreground text-lg italic">Curated Indian beverages from traditional elixirs to premium spirits</p>
                </motion.div>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap items-center justify-center gap-3 mb-12"
                >
                    <Filter className="w-4 h-4 text-primary/60" />
                    {regions.map(r => (
                        <button
                            key={r}
                            onClick={() => setSelectedRegion(r)}
                            className={`text-xs tracking-[0.15em] uppercase font-body px-4 py-2 rounded-full border transition-all duration-300 hover:scale-105 ${selectedRegion === r
                                ? "border-primary bg-primary/10 text-primary shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                                : "border-border/30 text-muted-foreground hover:border-primary/30 hover:bg-primary/5 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                                }`}
                        >
                            {r}
                        </button>
                    ))}
                    <div className="w-px h-6 bg-border/30 mx-2" />
                    {types.map(t => (
                        <button
                            key={t}
                            onClick={() => setSelectedType(t)}
                            className={`text-xs tracking-[0.15em] uppercase font-body px-4 py-2 rounded-full border transition-all duration-300 hover:scale-105 ${selectedType === t
                                ? "border-accent bg-accent/10 text-accent shadow-[0_0_20px_rgba(255,107,107,0.3)]"
                                : "border-border/30 text-muted-foreground hover:border-accent/30 hover:bg-accent/5 hover:shadow-[0_0_15px_rgba(255,107,107,0.2)]"
                                }`}
                        >
                            {t}
                        </button>
                    ))}
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filtered.map((w, i) => (
                        <motion.div
                            key={w.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.4 + i * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="glass-panel rounded-2xl p-6 hover-gold-glow group cursor-pointer transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(212,175,55,0.3)]"
                        >
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">{w.name}</h3>
                                    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body">{w.region} · {w.year}</p>
                                </div>
                                <span className="font-display text-sm text-primary">{w.price}</span>
                            </div>
                            <p className="font-cormorant text-muted-foreground text-sm mb-3">{w.notes}</p>
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] tracking-wider uppercase px-2 py-0.5 border border-primary/20 rounded-full text-primary/60">Pairs with: {w.pairing}</span>
                                <span className="text-[10px] tracking-wider uppercase px-2 py-0.5 border border-accent/20 rounded-full text-accent/60">{w.type}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WineCellar;
