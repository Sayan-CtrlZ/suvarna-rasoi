import { useState } from "react";
import { Flame, TreePine } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const modes = [
  { id: "default", label: "Classic", icon: null },
  { id: "candlelight", label: "Candlelight", icon: Flame },
  { id: "emerald-night", label: "Emerald Night", icon: TreePine },
] as const;

const AmbientToggle = () => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<string>("default");

  const applyMode = (id: string) => {
    document.documentElement.classList.remove("candlelight", "emerald-night");
    if (id !== "default") document.documentElement.classList.add(id);
    setMode(id);
    setOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-14 right-0 glass-panel rounded-xl p-3 space-y-1 min-w-[160px]"
          >
            {modes.map(m => (
              <button
                key={m.id}
                onClick={() => applyMode(m.id)}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-body tracking-wider transition-all ${
                  mode === m.id ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {m.icon && <m.icon className="w-3 h-3" />}
                {m.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-primary hover-gold-glow"
        title="Ambient Mode"
      >
        <Flame className="w-4 h-4" />
      </button>
    </div>
  );
};

export default AmbientToggle;
