
export default function About() {
  return (
    <div className="container mx-auto px-6 py-24 text-center min-h-[60vh] flex flex-col justify-center">
      <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60 mb-4 block">Institutional History</span>
      <h1 className="text-4xl md:text-6xl font-serif italic mb-8 tracking-tighter bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">About Our School</h1>
      <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed border-l-2 border-primary/20 pl-8 text-left italic">
        Dedicated to academic excellence and character building since 1995. We take pride in our rich heritage and our commitment to preparing students for a globalized world, now enhanced by state-of-the-art AI learning tools.
      </p>
    </div>
  )
}
