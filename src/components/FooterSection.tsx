import { useState } from "react";
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

const FooterSection = () => {
  const [email, setEmail] = useState("");

  return (
    <footer id="contact" className="pt-32 pb-12 px-6 border-t border-border/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Logo */}
          <div className="md:col-span-1">
            <h3 className="font-display text-xl tracking-[0.3em] gold-gradient-text mb-4">AURELIA NOIR</h3>
            <p className="font-cormorant text-muted-foreground text-sm leading-relaxed">
              Three Michelin Stars<br />Where darkness meets divinity
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-primary font-body mb-4">Contact</h4>
            <div className="space-y-3">
              <p className="flex items-center gap-2 text-sm text-muted-foreground font-body"><MapPin className="w-3 h-3 text-primary/60" />12 Rue de l'Élégance, Paris 75008</p>
              <p className="flex items-center gap-2 text-sm text-muted-foreground font-body"><Phone className="w-3 h-3 text-primary/60" />+33 1 42 68 99 00</p>
              <p className="flex items-center gap-2 text-sm text-muted-foreground font-body"><Mail className="w-3 h-3 text-primary/60" />reservations@aurelianoir.com</p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-primary font-body mb-4">Hours</h4>
            <div className="space-y-2 text-sm text-muted-foreground font-body">
              <p>Tuesday – Saturday</p>
              <p>Dinner: 18:00 – 22:00</p>
              <p className="text-xs text-muted-foreground/60 mt-2">Closed Sunday & Monday</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-primary font-body mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground font-body mb-4">Receive exclusive invitations and seasonal menus.</p>
            <form onSubmit={e => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
                className="flex-1 bg-background/50 border border-border/50 rounded-lg px-3 py-2 text-foreground font-body text-sm focus:border-primary/50 focus:outline-none transition-colors placeholder:text-muted-foreground/40"
              />
              <button className="px-4 py-2 border border-primary/40 rounded-lg text-primary text-xs font-body hover:bg-primary/10 transition-all">
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Social & Bottom */}
        <div className="gold-separator mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/50 font-body">© 2025 Aurelia Noir. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground/50 hover:text-primary transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="text-muted-foreground/50 hover:text-primary transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="text-muted-foreground/50 hover:text-primary transition-colors"><Mail className="w-4 h-4" /></a>
          </div>
          <p className="text-xs text-muted-foreground/50 font-body">Privacy · Terms · Accessibility</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
