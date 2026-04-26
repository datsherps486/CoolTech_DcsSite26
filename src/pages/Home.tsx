
import { ArrowRight, ChevronRight } from "lucide-react"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"

import { ACADEMIC_EVENTS } from "@/data/events"

export default function Home() {
  const navItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Academic", href: "/academic" },
    { title: "Events", href: "/events" },
    { title: "Alumni", href: "/alumni" },
    { title: "Staff", href: "/staff" },
    { title: "Students", href: "/students" },
  ]

  // Filter for events in April and May 2026
  const upcomingEvents = ACADEMIC_EVENTS.filter(e => {
    const date = new Date(e.date);
    const month = date.getMonth(); // 3 = April, 4 = May
    return date.getFullYear() === 2026 && (month === 3 || month === 4);
  });

  return (
    <div className="flex flex-col min-h-screen bg-background relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -z-10" />

      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 relative z-10">
        {/* Left Column: Quick Access */}
        <div className="md:col-span-3 bg-secondary/10 p-6 md:p-8 flex flex-col gap-10 border-r border-border/50 order-2 md:order-1 backdrop-blur-sm">
          <div className="sticky top-28">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-8 text-primary/60">Quick Access</h3>
            <nav className="flex flex-col gap-0 border-t border-border/30">
              {navItems.map((item) => (
                <Link 
                  key={item.title} 
                  to={item.href}
                  className="group flex items-center justify-between py-4 border-b border-border/30 hover:bg-primary/5 transition-colors"
                >
                  <span className="text-xs font-bold uppercase tracking-[0.2em] group-hover:pl-2 group-hover:text-primary transition-all duration-300">
                    {item.title}
                  </span>
                  <ChevronRight className="h-3 w-3 opacity-20 group-hover:opacity-100 group-hover:translate-x-1 group-hover:text-primary transition-all" />
                </Link>
              ))}
            </nav>
            
            <div className="mt-16 p-6 border border-dashed border-border/40 rounded-xl bg-primary/5">
              <span className="text-[9px] font-bold uppercase tracking-widest mb-2 block text-primary">Announcement</span>
              <p className="text-[10px] leading-relaxed font-serif italic font-medium text-foreground/70">
                The Annual Parent-Teacher Conference is scheduled for May 15th, 2026.
              </p>
            </div>
          </div>
        </div>

        {/* Center Column: Hero & DCS Foundations (Main Content) */}
        <div className="md:col-span-6 p-6 md:p-10 border-b md:border-b-0 order-1 md:order-2">
          <div className="mb-12">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/70 mb-3 block"
            >
              Established Foundations
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-7xl font-serif leading-[0.95] mb-6 tracking-tighter bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent"
            >
              Vision &<br/>Character
            </motion.h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 mb-12">
              <div className="space-y-3 p-6 rounded-2xl bg-secondary/5 border border-border/30 hover:border-primary/30 transition-colors">
                <h3 className="text-[10px] font-bold uppercase border-b border-border/30 pb-2 tracking-widest flex items-center gap-2 text-primary">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_rgba(var(--primary),0.5)]"></span> Vision
                </h3>
                <p className="text-xs italic font-serif leading-relaxed text-foreground/80">
                  "To educate and equip learners with competencies for the 21st century, prioritizing holistic development so they become caring, dependable, and honest human beings."
                </p>
              </div>
              <div className="space-y-3 p-6 rounded-2xl bg-secondary/5 border border-border/30 hover:border-primary/30 transition-colors">
                <h3 className="text-[10px] font-bold uppercase border-b border-border/30 pb-2 tracking-widest flex items-center gap-2 text-primary">
                   <span className="w-1.5 h-1.5 border border-primary rounded-full"></span> Mission
                </h3>
                <p className="text-xs font-sans leading-relaxed text-foreground/70">
                  To provide a safe, supportive, and conducive learning environment through a whole-school approach that promotes responsibility, respect, and resilience.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10">
            <section>
              <h3 className="text-[10px] font-bold uppercase border-b border-border/30 pb-2 mb-4 tracking-widest text-primary/60">School Goals</h3>
              <ul className="space-y-3">
                {[
                  { label: "01", value: "Nurture students with moral values" },
                  { label: "02", value: "Strengthen student etiquette (Driglam)" },
                  { label: "03", value: "Produce Disciplined, Caring citizens" },
                  { label: "04", value: "Collaborative success with parents" },
                ].map((item) => (
                  <li key={item.label} className="flex gap-3 border-b border-border/10 pb-2 group">
                    <span className="font-serif italic text-[10px] text-primary/40 group-hover:text-primary transition-colors">{item.label}</span>
                    <span className="text-[11px] font-medium leading-tight text-foreground/90">{item.value}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-[10px] font-bold uppercase border-b border-border/30 pb-2 mb-4 tracking-widest text-primary/60">Core Principle</h3>
              <div className="relative group overflow-hidden rounded-2xl p-0.5">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-emerald-500 opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-secondary/10 backdrop-blur-md p-5 space-y-4 rounded-[14px]">
                  <p className="text-xl font-serif italic text-center border-b border-primary/20 pb-3 text-primary">
                    "Lue, Nga, Yi sum gi drig"
                  </p>
                  <div className="grid grid-cols-3 gap-1 text-[8px] uppercase tracking-widest font-bold text-center opacity-80 text-foreground">
                    <div>Physical<br/>Discipline</div>
                    <div>Verbal<br/>Discipline</div>
                    <div>Mind<br/>Discipline</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          
          <div className="mt-12 flex gap-4">
            <Button size="lg" className="rounded-full px-10 py-6 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] active:scale-95 text-xs uppercase tracking-[0.2em] font-bold shadow-xl shadow-primary/20 transition-all">
              View Learning Paths <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-10 py-6 border-border hover:bg-secondary/10 text-xs uppercase tracking-[0.2em] font-bold transition-all">
              Explore History
            </Button>
          </div>
        </div>

        {/* Right Column: Academic Dashboard */}
        <div className="md:col-span-3 p-6 md:p-8 flex flex-col gap-8 order-3 bg-secondary/5 border-l border-border/50 overflow-y-auto max-h-[calc(100vh-5rem)] scrollbar-hide">
          <div className="">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-8 text-primary/60">Upcoming 2026</h3>
            <div className="flex flex-col gap-8">
              {upcomingEvents.map((event, idx) => (
                <div key={idx} className="relative pl-6 border-l border-primary/20 group hover:border-primary transition-colors">
                  <div className="absolute -left-[4.5px] top-0 w-2 h-2 bg-primary/20 rounded-full group-hover:bg-primary group-hover:shadow-[0_0_8px_rgba(var(--primary),0.5)] transition-all" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-primary/50 block mb-1">
                    {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </span>
                  <p className="text-xs font-medium leading-tight text-foreground/90 group-hover:text-primary transition-colors">
                    {event.title}
                  </p>
                  <span className={cn(
                    "text-[7px] font-bold uppercase px-2 py-0.5 rounded-full mt-2 inline-block tracking-tighter",
                    event.type === 'holiday' ? "bg-secondary/20 text-muted-foreground border border-border" : "bg-primary/20 text-primary border border-primary/30"
                  )}>
                    {event.type}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-8 border-t border-border/30">
              <Link to="/events" className="text-[10px] font-bold uppercase tracking-widest text-primary hover:text-primary/80 flex items-center gap-2 transition-colors">
                Full 2026 Calendar <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
