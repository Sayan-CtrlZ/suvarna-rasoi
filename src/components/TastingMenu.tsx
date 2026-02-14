import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const courses = [
  {
    course: "Amuse-Bouche",
    name: "Golden Caviar Cloud",
    desc: "Oscietra caviar suspended in champagne foam, 24k gold leaf, micro dill",
    wine: "Dom Pérignon Vintage 2012",
    allergens: ["Dairy", "Fish"],
    origin: "Caspian Sea & Champagne, France",
    price: "Included"
  },
  {
    course: "First Course",
    name: "Saffron Veil",
    desc: "Hand-dived scallop carpaccio, Kashmir saffron emulsion, yuzu pearls, edible flowers",
    wine: "Puligny-Montrachet 2019",
    allergens: ["Shellfish"],
    origin: "Scotland & Kashmir, India",
    price: "Included"
  },
  {
    course: "Second Course",
    name: "Noir Truffle Ceremony",
    desc: "Black Périgord truffle risotto, aged Parmigiano foam, truffle jus reduction",
    wine: "Barolo Riserva 2016",
    allergens: ["Dairy", "Gluten"],
    origin: "Périgord, France & Piemonte, Italy",
    price: "Included"
  },
  {
    course: "Main Course",
    name: "Wagyu Obsidian",
    desc: "A5 Miyazaki wagyu, charcoal-smoked bone marrow, black garlic purée, seasonal root vegetables",
    wine: "Penfolds Grange 2017",
    allergens: ["Dairy"],
    origin: "Miyazaki, Japan",
    price: "Included"
  },
  {
    course: "Pre-Dessert",
    name: "Emerald Interlude",
    desc: "Matcha sorbet, white chocolate crémeux, crystallized mint, shiso leaf",
    wine: "Tokaji Aszú 5 Puttonyos",
    allergens: ["Dairy"],
    origin: "Kyoto, Japan",
    price: "Included"
  },
  {
    course: "Grand Dessert",
    name: "Aurelia's Gold",
    desc: "Valrhona dark chocolate sphere, passion fruit heart, 24k gold dust, edible orchid",
    wine: "Château d'Yquem 2015",
    allergens: ["Dairy", "Gluten"],
    origin: "France & Ecuador",
    price: "Included"
  },
];

const TastingMenu = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="tasting-menu" className="py-32 px-6 relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[0.5em] uppercase text-primary font-body mb-6">The Journey</p>
          <h2 className="text-4xl md:text-6xl font-serif gold-gradient-text mb-4">Tasting Menu</h2>
          <p className="font-cormorant text-muted-foreground text-lg italic">Six-Course Degustation — €420 per guest</p>
          <p className="font-cormorant text-muted-foreground text-sm mt-2">Wine pairing available — €280 supplementary</p>
        </motion.div>

        <div className="space-y-0">
          {courses.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group relative"
            >
              <div className="gold-separator" />
              <div className="py-8 px-4 md:px-8 rounded-2xl transition-all duration-500 hover:bg-card/40">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-xs tracking-[0.3em] uppercase text-primary/60 font-body mb-2">{c.course}</p>
                    <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-2">{c.name}</h3>
                    <p className="font-cormorant text-muted-foreground text-base leading-relaxed">{c.desc}</p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={hoveredIdx === i ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                    className="md:text-right overflow-hidden"
                  >
                    <p className="text-xs tracking-[0.2em] uppercase text-accent font-body mb-1">Wine Pairing</p>
                    <p className="font-cormorant text-foreground/70 text-sm mb-2">{c.wine}</p>
                    <p className="text-xs text-muted-foreground font-body mb-1">Origin: {c.origin}</p>
                    <div className="flex gap-2 md:justify-end mt-2">
                      {c.allergens.map(a => (
                        <span key={a} className="text-[10px] tracking-wider uppercase px-2 py-0.5 border border-primary/20 rounded-full text-primary/60">{a}</span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="gold-separator" />
        </div>
      </div>
    </section>
  );
};

export default TastingMenu;
