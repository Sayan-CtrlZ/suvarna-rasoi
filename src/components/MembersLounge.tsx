import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Crown, Lock } from "lucide-react";

const MembersLounge = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-center mb-16">
          <Crown className="w-8 h-8 text-primary mx-auto mb-4" />
          <p className="text-xs tracking-[0.5em] uppercase text-primary font-body mb-6">By Invitation Only</p>
          <h2 className="text-4xl md:text-5xl font-serif gold-gradient-text mb-4">Member's Lounge</h2>
          <p className="font-cormorant text-muted-foreground text-lg italic">Exclusive access to private tastings, pre-release menus, and bespoke experiences</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="max-w-md mx-auto glass-panel rounded-2xl p-8"
        >
          <div className="flex items-center gap-2 mb-6">
            <Lock className="w-4 h-4 text-primary/60" />
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body">VIP Access</span>
          </div>
          <form onSubmit={e => e.preventDefault()} className="space-y-5">
            <div>
              <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body block mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-foreground font-body text-sm focus:border-primary/50 focus:outline-none transition-colors placeholder:text-muted-foreground/40"
              />
            </div>
            <div>
              <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body block mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-foreground font-body text-sm focus:border-primary/50 focus:outline-none transition-colors placeholder:text-muted-foreground/40"
              />
            </div>
            <button className="w-full py-4 bg-primary/10 border border-primary/40 rounded-xl text-primary font-body text-sm tracking-[0.2em] uppercase hover-gold-glow hover:bg-primary/20 transition-all">
              Enter the Lounge
            </button>
            <p className="text-center text-xs text-muted-foreground font-body">
              Not a member? <button className="text-primary underline-offset-4 hover:underline">Request an invitation</button>
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default MembersLounge;
