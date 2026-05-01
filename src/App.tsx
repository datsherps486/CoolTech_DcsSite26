/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { Navbar } from "@/components/Navbar"
import { GraduationCap } from "lucide-react"
import Home from "@/pages/Home"
import About from "@/pages/About"
import Academic from "@/pages/Academic"
import Statistics from "@/pages/Statistics"
import Campus from "@/pages/Campus"
import PlaceholderPage from "@/pages/Placeholder"

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground relative overflow-hidden flex flex-col font-sans">
        {/* Persistent Atmospheric Glows */}
        <div className="fixed top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-0" />
        <div className="fixed bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px] pointer-events-none -z-0" />
        
        <Navbar />
        <main className="flex-1 relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academic" element={<Academic />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/campus" element={<Campus />} />
            <Route path="/events" element={<PlaceholderPage title="Events" />} />
            <Route path="/alumni" element={<PlaceholderPage title="Alumni" />} />
            <Route path="/staff" element={<PlaceholderPage title="Staff Directory" />} />
            <Route path="/students" element={<PlaceholderPage title="Student Life" />} />
          </Routes>
        </main>
        
        <footer className="border-t border-border/30 py-16 bg-secondary/10 mt-0 backdrop-blur-md">
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60 mb-4 block">Institutional Vision</span>
              <h3 className="font-serif italic text-3xl mb-4 tracking-tighter text-foreground">"Empowering the next generation with AI and Excellence."</h3>
              <div className="flex gap-4 mt-8">
                <div className="w-10 h-10 bg-primary/20 flex items-center justify-center text-primary font-bold text-sm rounded-xl border border-primary/30">
                  <GraduationCap className="h-5 w-5" />
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-6 text-primary/40">Directory</h4>
              <ul className="space-y-3 text-xs font-medium uppercase tracking-widest">
                <li><Link to="/" className="hover:text-primary transition-colors text-foreground/60">Global Office</Link></li>
                <li><Link to="/academic" className="hover:text-primary transition-colors text-foreground/60">Academic Paths</Link></li>
                <li><Link to="/events" className="hover:text-primary transition-colors text-foreground/60">Event Catalog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-6 text-primary/40">HQ</h4>
              <p className="text-xs text-foreground/60 leading-relaxed font-medium uppercase tracking-wider">
                123 Education Lane<br />
                Learning City, State 45678<br />
                Cambridge AI Lab
              </p>
            </div>
          </div>
          <div className="container mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-widest text-foreground/30">
            <div className="flex gap-6">
              <span>© {new Date().getFullYear()} Cambridge AI Lab</span>
              <span>Cloud Hosted</span>
            </div>
            <div className="flex gap-6">
               <span className="flex items-center gap-2 text-primary/40">Official District Member</span>
               <span className="flex items-center gap-2 text-primary/60">Excellence in Education</span>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}
