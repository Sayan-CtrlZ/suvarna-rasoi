import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import heroImage from "@/assets/hero-dish.jpg";
import interiorImage from "@/assets/restaurant-interior.jpg";
import chefImage from "@/assets/chef-portrait.jpg";

const images = [
  { src: heroImage, alt: "Signature dish", span: "md:col-span-2 md:row-span-2" },
  { src: interiorImage, alt: "Dining room", span: "" },
  { src: chefImage, alt: "Chef at work", span: "" },
  { src: interiorImage, alt: "Bar area", span: "md:col-span-2" },
  { src: heroImage, alt: "Plating", span: "" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-center mb-16">
          <p className="text-xs tracking-[0.5em] uppercase text-primary font-body mb-6">Visual Stories</p>
          <h2 className="text-4xl md:text-6xl font-serif gold-gradient-text">Gallery</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group ${img.span}`}
              onClick={() => setLightbox(i)}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full min-h-[200px] object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-8"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-foreground/60 hover:text-foreground"><X size={24} /></button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl cinematic-shadow"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
