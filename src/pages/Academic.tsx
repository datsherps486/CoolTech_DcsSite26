
import { BookOpen } from "lucide-react"

export default function Academic() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] bg-primary/20 text-primary px-3 py-1 rounded-full border border-primary/30">Curriculum</span>
            <div className="h-px flex-1 bg-border/30" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif italic mb-12 tracking-tighter leading-none bg-gradient-to-br from-foreground to-foreground/50 bg-clip-text text-transparent">
            Cambridge<br/>Learning Paths
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 font-sans leading-relaxed mb-20 max-w-2xl border-l-4 border-primary pl-8 italic">
            We follow the prestigious Cambridge International curriculum, providing a world-class education that prepares students for life.
          </p>
          
          <div className="grid gap-0 border-t border-border/30">
            {[
              { id: "01", title: "Cambridge Primary", age: "5 to 11", desc: "Focusing on English, Maths, and Science with a focus on inquiry-based learning." },
              { id: "02", title: "Cambridge Lower Secondary", age: "11 to 14", desc: "Building a foundation for high school while developing analytical skills." },
              { id: "03", title: "IGCSE & A Levels", age: "14 to 19", desc: "Advanced study for university entrance with a wide range of subject choices." },
            ].map((section) => (
              <section key={section.id} className="grid md:grid-cols-12 py-12 border-b border-border/30 hover:bg-primary/5 transition-all group rounded-2xl px-4 -mx-4">
                <div className="md:col-span-1 text-2xl font-serif italic text-primary/30 group-hover:text-primary transition-colors">
                  {section.id}.
                </div>
                <div className="md:col-span-5">
                  <h2 className="text-3xl font-serif font-medium mb-2 text-foreground group-hover:text-primary transition-colors">{section.title}</h2>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary/40 mb-4 md:mb-0">Ages {section.age}</p>
                </div>
                <div className="md:col-span-6">
                  <p className="text-foreground/70 font-sans leading-relaxed">{section.desc}</p>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
