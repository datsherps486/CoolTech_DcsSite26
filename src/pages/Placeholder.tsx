
export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="container mx-auto px-6 py-24 text-center min-h-[60vh] flex flex-col justify-center">
      <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60 mb-4 block">Section</span>
      <h1 className="text-4xl md:text-6xl font-serif italic mb-6 tracking-tighter bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">{title}</h1>
      <p className="text-xl text-foreground/60 max-w-xl mx-auto italic border-l border-primary/20 pl-6 text-left">
        This portal section is currently undergoing a digital transformation. Stay tuned for advanced AI integrations and interactive content.
      </p>
    </div>
  )
}
