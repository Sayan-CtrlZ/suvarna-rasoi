import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Wine, Filter } from "lucide-react";

const wines = [
  { name: "Château Margaux 2015", region: "Bordeaux", year: 2015, type: "Red", pairing: "Wagyu Obsidian", price: "€890", notes: "Velvety tannins, blackcurrant, violet, mineral finish" },
  { name: "Domaine de la Romanée-Conti", region: "Burgundy", year: 2018, type: "Red", pairing: "Noir Truffle Ceremony", price: "€3,200", notes: "Ethereal complexity, red fruit, earth, extraordinary length" },
  { name: "Krug Clos du Mesnil 2006", region: "Champagne", year: 2006, type: "Champagne", pairing: "Golden Caviar Cloud", price: "€1,450", notes: "Precise, chalky minerality, white flowers, infinite bubbles" },
  { name: "Screaming Eagle 2019", region: "Napa Valley", year: 2019, type: "Red", pairing: "Private Dining", price: "€4,500", notes: "Opulent cassis, dark chocolate, seamless oak integration" },
  { name: "Montrachet Grand Cru 2017", region: "Burgundy", year: 2017, type: "White", pairing: "Saffron Veil", price: "€1,800", notes: "Golden richness, hazelnut, honey, impeccable acidity" },
  { name: "Penfolds Grange 2017", region: "South Australia", year: 2017, type: "Red", pairing: "Wagyu Obsidian", price: "€780", notes: "Dark fruit, spice, mocha, formidable structure" },
];

const regions = ["All", "Bordeaux", "Burgundy", "Champagne", "Napa Valley", "South Australia"];
const types = ["All", "Red", "White", "Champagne"];

const WineCellar = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  const filtered = wines.filter(w =>
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
          <h2 className="text-4xl md:text-6xl font-serif gold-gradient-text mb-4">Virtual Wine Cellar</h2>
          <p className="font-cormorant text-muted-foreground text-lg italic">Over 2,400 labels from the world's most revered estates</p>
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
              className={`text-xs tracking-[0.15em] uppercase font-body px-4 py-2 rounded-full border transition-all duration-300 ${
                selectedRegion === r
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border/30 text-muted-foreground hover:border-primary/30"
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
              className={`text-xs tracking-[0.15em] uppercase font-body px-4 py-2 rounded-full border transition-all duration-300 ${
                selectedType === t
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-border/30 text-muted-foreground hover:border-accent/30"
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
              className="glass-panel rounded-2xl p-6 hover-gold-glow group cursor-pointer"
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
