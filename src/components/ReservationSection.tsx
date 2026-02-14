import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { CalendarIcon, Check } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const timeSlots = ["18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"];
const occasions = ["Dinner", "Anniversary", "Birthday", "Engagement", "Business", "Celebration", "Other"];
const tablePrefs = ["No Preference", "Window", "Chef's Table", "Private Room"];

const ReservationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [date, setDate] = useState<Date>();
  const [guests, setGuests] = useState(2);
  const [time, setTime] = useState("");
  const [occasion, setOccasion] = useState("");
  const [table, setTable] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
    setTimeout(() => setConfirmed(false), 4000);
  };

  return (
    <section id="reservations" className="py-32 px-6 relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-center mb-16">
          <p className="text-xs tracking-[0.5em] uppercase text-primary font-body mb-6">Your Table Awaits</p>
          <h2 className="text-4xl md:text-6xl font-serif gold-gradient-text mb-4">Reservations</h2>
          <p className="font-cormorant text-muted-foreground text-lg italic">Dinner service: Tuesday – Saturday, 18:00 – 22:00</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="glass-panel rounded-2xl p-8 md:p-12"
        >
          {confirmed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-2">Reservation Confirmed</h3>
              <p className="font-cormorant text-muted-foreground">A confirmation has been sent to your email. We look forward to welcoming you.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Date */}
                <div>
                  <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body block mb-2">Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className={cn(
                        "w-full flex items-center gap-2 bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-sm font-body transition-colors",
                        date ? "text-foreground" : "text-muted-foreground"
                      )}>
                        <CalendarIcon className="w-4 h-4 text-primary/60" />
                        {date ? format(date, "PPP") : "Select date"}
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-card border-border" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(d) => d < new Date()}
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Guests */}
                <div>
                  <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body block mb-2">Guests</label>
                  <div className="flex items-center gap-3">
                    <button type="button" onClick={() => setGuests(Math.max(1, guests - 1))} className="w-10 h-10 rounded-xl border border-border/50 text-foreground hover:border-primary/30 transition-colors">−</button>
                    <span className="font-display text-lg text-primary w-8 text-center">{guests}</span>
                    <button type="button" onClick={() => setGuests(Math.min(12, guests + 1))} className="w-10 h-10 rounded-xl border border-border/50 text-foreground hover:border-primary/30 transition-colors">+</button>
                  </div>
                </div>

                {/* Time */}
                <div>
                  <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body block mb-2">Time</label>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map(t => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTime(t)}
                        className={cn(
                          "py-2 rounded-lg text-xs font-body border transition-all",
                          time === t
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border/30 text-muted-foreground hover:border-primary/20"
                        )}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Table */}
                <div>
                  <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body block mb-2">Table Preference</label>
                  <div className="grid grid-cols-2 gap-2">
                    {tablePrefs.map(p => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setTable(p)}
                        className={cn(
                          "py-2 rounded-lg text-xs font-body border transition-all",
                          table === p
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border/30 text-muted-foreground hover:border-primary/20"
                        )}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Occasion */}
              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body block mb-2">Occasion</label>
                <div className="flex flex-wrap gap-2">
                  {occasions.map(o => (
                    <button
                      key={o}
                      type="button"
                      onClick={() => setOccasion(o)}
                      className={cn(
                        "px-4 py-2 rounded-full text-xs font-body border transition-all",
                        occasion === o
                          ? "border-accent bg-accent/10 text-accent"
                          : "border-border/30 text-muted-foreground hover:border-accent/20"
                      )}
                    >
                      {o}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary/10 border border-primary/40 rounded-xl text-primary font-body text-sm tracking-[0.2em] uppercase hover-gold-glow hover:bg-primary/20 transition-all"
              >
                Confirm Reservation
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ReservationSection;
