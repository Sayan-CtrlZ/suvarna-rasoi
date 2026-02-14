import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";
import interiorImage from "@/assets/restaurant-interior.jpg";

const PrivateDining = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", guests: "", date: "", message: "" });

  return (
    <section id="private-events" className="py-32 px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-center mb-20">
          <p className="text-xs tracking-[0.5em] uppercase text-primary font-body mb-6">Exclusive</p>
          <h2 className="text-4xl md:text-6xl font-serif gold-gradient-text mb-4">Private Dining & Events</h2>
          <p className="font-cormorant text-muted-foreground text-lg italic max-w-2xl mx-auto">
            Bespoke culinary experiences crafted for life's most extraordinary moments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <img
              src={interiorImage}
              alt="Private dining room"
              className="w-full aspect-[4/3] object-cover rounded-2xl cinematic-shadow mb-8"
            />
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { label: "The Noir Suite", cap: "Up to 12 guests" },
                { label: "The Gold Room", cap: "Up to 24 guests" },
                { label: "Full Venue", cap: "Up to 60 guests" },
              ].map((room, i) => (
                <div key={i} className="glass-panel rounded-xl p-4">
                  <h4 className="font-display text-xs tracking-[0.2em] text-primary mb-1">{room.label}</h4>
                  <p className="text-xs text-muted-foreground font-body">{room.cap}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            <div className="glass-panel rounded-2xl p-8">
              <h3 className="font-serif text-2xl text-foreground mb-6">Inquire About Private Dining</h3>
              <form className="space-y-5" onSubmit={e => e.preventDefault()}>
                {[
                  { key: "name", label: "Full Name", type: "text" },
                  { key: "email", label: "Email Address", type: "email" },
                  { key: "guests", label: "Number of Guests", type: "number" },
                  { key: "date", label: "Preferred Date", type: "date" },
                ].map(field => (
                  <div key={field.key}>
                    <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body block mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      value={formData[field.key as keyof typeof formData]}
                      onChange={e => setFormData(prev => ({ ...prev, [field.key]: e.target.value }))}
                      className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-foreground font-body text-sm focus:border-primary/50 focus:outline-none transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body block mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    rows={3}
                    className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-foreground font-body text-sm focus:border-primary/50 focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary/10 border border-primary/40 rounded-xl text-primary font-body text-sm tracking-[0.2em] uppercase hover-gold-glow hover:bg-primary/20 transition-all">
                  <Send className="w-4 h-4" /> Send Inquiry
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PrivateDining;
