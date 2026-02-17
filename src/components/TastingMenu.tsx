import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const courses = [
  {
    course: "Amuse-Bouche",
    name: "Saffron Pani Puri",
    desc: "Crispy semolina spheres, tamarind water infused with Kashmiri saffron, mint air, pomegranate pearls",
    wine: "Kesar Thandai (Saffron & Almond Elixir)",
    allergens: ["Gluten", "Nuts"],
    origin: "Inspired by Mumbai Street Food",
    price: "Included"
  },
  {
    course: "First Course",
    name: "Tandoori Scallops",
    desc: "Hand-dived scallops, Kashmiri chili glaze, charred in clay tandoor, yogurt foam, edible marigold",
    wine: "Mango Lassi Royale",
    allergens: ["Shellfish", "Dairy"],
    origin: "Kerala Coast & Kashmir Valley",
    price: "Included"
  },
  {
    course: "Second Course",
    name: "Truffle Khichdi",
    desc: "Aged basmati & moong dal, black truffle from Himalayas, aged ghee, crispy curry leaves",
    wine: "Darjeeling First Flush Tea",
    allergens: ["Dairy", "Gluten"],
    origin: "Gujarat & Himalayan Foothills",
    price: "Included"
  },
  {
    course: "Main Course",
    name: "Raan-e-Sikandari",
    desc: "Slow-roasted Rajasthani lamb leg, saffron jus, caramelized onions, seasonal root vegetables, naan crisps",
    wine: "Amrut Fusion Single Malt",
    allergens: ["Dairy", "Gluten"],
    origin: "Rajasthan",
    price: "Included"
  },
  {
    course: "Pre-Dessert",
    name: "Rose & Cardamom Kulfi",
    desc: "Traditional kulfi infused with Kannauj rose essence, green cardamom, pistachio crumble, silver leaf",
    wine: "Rose Sharbat with Basil Seeds",
    allergens: ["Dairy", "Nuts"],
    origin: "Uttar Pradesh",
    price: "Included"
  },
  {
    course: "Grand Dessert",
    name: "Saffron Rasgulla Sphere",
    desc: "Deconstructed rasgulla, saffron-infused syrup sphere, condensed milk foam, 24k gold leaf, edible jasmine",
    wine: "Alphonso Mango Wine",
    allergens: ["Dairy"],
    origin: "West Bengal & Maharashtra",
    price: "Included"
  },
];

const CourseItem = ({ course, index }: { course: typeof courses[0], index: number }) => {
  const ref = useRef(null);
  const [hoveredIdx, setHoveredIdx] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setHoveredIdx(true)}
      onMouseLeave={() => setHoveredIdx(false)}
      className="group relative min-h-[200px] flex flex-col"
    >
      <div className="gold-separator" />
      <div className="relative py-8 px-4 md:px-8 rounded-2xl transition-all duration-500 hover:bg-primary/5 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:border hover:border-primary/30 hover:scale-[1.02] flex-1">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="flex-1">
            <p className="text-xs tracking-[0.3em] uppercase text-primary/60 font-body mb-2">{course.course}</p>
            <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-2">{course.name}</h3>
            <p className="font-cormorant text-muted-foreground text-base leading-relaxed">{course.desc}</p>
          </div>

          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={hoveredIdx ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
            className="md:text-right overflow-hidden"
          >
            <p className="text-xs tracking-[0.2em] uppercase text-accent font-body mb-1">Beverage Pairing</p>
            <p className="font-cormorant text-foreground/70 text-sm mb-2">{course.wine}</p>
            <p className="text-xs text-muted-foreground font-body mb-1">Origin: {course.origin}</p>
            <div className="flex gap-2 md:justify-end mt-2">
              {course.allergens.map(a => (
                <span key={a} className="text-[10px] tracking-wider uppercase px-2 py-0.5 border border-primary/20 rounded-full text-primary/60">{a}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const TastingMenu = () => {
  const ref = useRef(null);

  return (
    <section id="tasting-menu" className="py-32 px-6 relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[0.5em] uppercase text-primary font-body mb-6">The Journey</p>
          <h2 className="text-4xl md:text-6xl font-serif gold-gradient-text mb-4">Indian Tasting Menu</h2>
          <p className="font-cormorant text-muted-foreground text-lg italic">Six-Course Degustation — ₹18,000 per guest</p>
          <p className="font-cormorant text-muted-foreground text-sm mt-2">Beverage pairing available — ₹8,500 supplementary</p>
        </motion.div>

        <div className="space-y-0">
          {courses.map((c, i) => (
            <CourseItem key={i} course={c} index={i} />
          ))}
          <div className="gold-separator" />
        </div>
      </div>
    </section>
  );
};

export default TastingMenu;
