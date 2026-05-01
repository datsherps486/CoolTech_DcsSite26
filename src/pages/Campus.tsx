import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Map as MapIcon, 
  Info, 
  X, 
  MapPin, 
  BookOpen, 
  Trophy, 
  Monitor, 
  Home, 
  Coffee 
} from "lucide-react";
import { cn } from "@/lib/utils";

const facilities = [
  {
    id: "academic-block",
    name: "Main Academic Block",
    description: "The heart of our institution, housing modern classrooms and administrative offices.",
    icon: BookOpen,
    top: "30%",
    left: "40%",
    color: "bg-primary",
  },
  {
    id: "it-lab",
    name: "Cyber Learning Hub",
    description: "State-of-the-art computer labs equipped with high-speed internet and AI research workstations.",
    icon: Monitor,
    top: "25%",
    left: "70%",
    color: "bg-emerald-500",
  },
  {
    id: "sports-complex",
    name: "Excellence Sports Complex",
    description: "Multi-purpose stadium and indoor courts for football, basketball, and traditional sports.",
    icon: Trophy,
    top: "65%",
    left: "20%",
    color: "bg-amber-500",
  },
  {
    id: "library",
    name: "Central Library",
    description: "A sanctuary for knowledge containing over 50,000 volumes and digital archives.",
    icon: MapPin,
    top: "55%",
    left: "55%",
    color: "bg-blue-500",
  },
  {
    id: "cafeteria",
    name: "Student Commons",
    description: "Dining hall and social space where students interact and share ideas.",
    icon: Coffee,
    top: "15%",
    left: "15%",
    color: "bg-rose-500",
  }
];

export default function Campus() {
  const [selectedFacility, setSelectedFacility] = useState<typeof facilities[0] | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] bg-primary/20 text-primary px-3 py-1 rounded-full border border-primary/30">Facility Tour</span>
            <div className="h-px flex-1 bg-border/30" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif italic mb-12 tracking-tighter leading-none bg-gradient-to-br from-foreground to-foreground/50 bg-clip-text text-transparent">
            Interactive<br/>Campus Map
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Map Container */}
            <div className="lg:col-span-8 relative aspect-[4/3] bg-secondary/10 rounded-[2rem] border border-border/50 overflow-hidden backdrop-blur-sm group shadow-2xl">
              {/* Decorative Map Background */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" className="text-foreground">
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              {/* Facility Markers */}
              {facilities.map((fac) => (
                <button
                  key={fac.id}
                  style={{ top: fac.top, left: fac.left }}
                  onClick={() => setSelectedFacility(fac)}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group/marker"
                >
                  <div className={cn(
                    "relative flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-300 group-hover/marker:scale-125 z-10",
                    fac.color,
                    selectedFacility?.id === fac.id ? "scale-125 ring-4 ring-white/20" : ""
                  )}>
                    <fac.icon className="w-5 h-5 text-white" />
                    
                    {/* Pulsing ring */}
                    <div className={cn(
                      "absolute inset-0 rounded-full animate-ping opacity-20",
                      fac.color
                    )} />
                  </div>
                  
                  {/* Tooltip Label */}
                  <div className="absolute top-14 left-1/2 -translate-x-1/2 opacity-0 group-hover/marker:opacity-100 transition-opacity bg-background/90 backdrop-blur-md px-3 py-1 rounded-full border border-border text-[10px] font-bold uppercase tracking-widest whitespace-nowrap z-20">
                    {fac.name}
                  </div>
                </button>
              ))}

              {/* Instructions */}
              <div className="absolute bottom-6 left-6 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 flex items-center gap-2">
                <MapIcon className="w-3 h-3" /> Select a location to explore details
              </div>
            </div>

            {/* Details Panel */}
            <div className="lg:col-span-4 space-y-6">
              <AnimatePresence mode="wait">
                {selectedFacility ? (
                  <motion.div
                    key={selectedFacility.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="p-8 rounded-3xl bg-secondary/5 border border-border/30 backdrop-blur-md border-l-4"
                    style={{ borderLeftColor: `var(--${selectedFacility.color.replace('bg-', '')})` }}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className={cn("p-3 rounded-2xl", selectedFacility.color, "bg-opacity-20")}>
                        <selectedFacility.icon className={cn("w-6 h-6", selectedFacility.color.replace('bg-', 'text-'))} />
                      </div>
                      <button 
                        onClick={() => setSelectedFacility(null)}
                        className="p-2 hover:bg-foreground/5 rounded-full transition-colors"
                      >
                        <X className="w-4 h-4 opacity-40" />
                      </button>
                    </div>

                    <h3 className="text-2xl font-serif italic mb-4">{selectedFacility.name}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                      {selectedFacility.description}
                    </p>

                    <div className="pt-6 border-t border-border/20">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4">Features & Capacity</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-foreground/5 rounded-xl">
                          <div className="text-xs font-bold opacity-60">Status</div>
                          <div className="text-[10px] uppercase font-bold text-emerald-500">Operational</div>
                        </div>
                        <div className="p-3 bg-foreground/5 rounded-xl">
                          <div className="text-xs font-bold opacity-60">WiFi</div>
                          <div className="text-[10px] uppercase font-bold text-blue-500">Gigabit Mesh</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-12 text-center border-2 border-dashed border-border/20 rounded-3xl"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Info className="w-8 h-8 text-primary/40" />
                    </div>
                    <h3 className="text-xl font-serif italic mb-2">Campus Explorer</h3>
                    <p className="text-sm text-foreground/40 italic">
                      Click on any marker in the campus map to view building specifications and facility details.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Campus Highlights Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20">
                  <div className="text-2xl font-serif italic">15+</div>
                  <div className="text-[9px] uppercase font-bold tracking-widest opacity-40">Modern Blocks</div>
                </div>
                <div className="p-6 bg-emerald-500/5 rounded-2xl border border-emerald-500/20">
                  <div className="text-2xl font-serif italic">40</div>
                  <div className="text-[9px] uppercase font-bold tracking-widest opacity-40">Green Acres</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
