
import { motion } from "motion/react"
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  LineChart, Line, PieChart, Pie, Cell 
} from "recharts"

const enrollmentData = [
  { year: "2021", students: 850 },
  { year: "2022", students: 920 },
  { year: "2023", students: 980 },
  { year: "2024", students: 1050 },
  { year: "2025", students: 1120 },
  { year: "2026", students: 1200 },
]

const performanceData = [
  { subject: "Mathematics", score: 85 },
  { subject: "Science", score: 82 },
  { subject: "English", score: 88 },
  { subject: "History", score: 78 },
  { subject: "Arts", score: 92 },
  { subject: "IT", score: 95 },
]

const participationData = [
  { name: "Sports", value: 400 },
  { name: "Arts & Culture", value: 300 },
  { name: "Science Club", value: 200 },
  { name: "Leadership", value: 100 },
]

const COLORS = ["oklch(0.75 0.18 175)", "oklch(0.6 0.15 160)", "oklch(0.5 0.12 190)", "oklch(0.4 0.1 220)"]

export default function Statistics() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] bg-primary/20 text-primary px-3 py-1 rounded-full border border-primary/30">Analytics</span>
            <div className="h-px flex-1 bg-border/30" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif italic mb-12 tracking-tighter leading-none bg-gradient-to-br from-foreground to-foreground/50 bg-clip-text text-transparent">
            School<br/>Performance Metrics
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Enrollment Growth */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-secondary/5 border border-border/30 backdrop-blur-sm"
            >
              <h3 className="text-xl font-serif italic mb-6 text-primary">Student Enrollment Growth</h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={enrollmentData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="oklch(0.5 0.03 210 / 0.1)" />
                    <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "var(--foreground)", opacity: 0.5 }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "var(--foreground)", opacity: 0.5 }} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: "var(--card)", borderRadius: "1rem", border: "1px solid var(--border)", boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)" }}
                      cursor={{ fill: "var(--primary)", opacity: 0.05 }}
                    />
                    <Bar dataKey="students" fill="oklch(0.75 0.18 175)" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-4 text-xs text-foreground/50 italic">Steady increase in enrollment reflecting institutional trust and community growth.</p>
            </motion.div>

            {/* Academic Performance */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-3xl bg-secondary/5 border border-border/30 backdrop-blur-sm"
            >
              <h3 className="text-xl font-serif italic mb-6 text-primary">Academic Excellence by Subject</h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="oklch(0.5 0.03 210 / 0.1)" />
                    <XAxis dataKey="subject" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "var(--foreground)", opacity: 0.5 }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "var(--foreground)", opacity: 0.5 }} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: "var(--card)", borderRadius: "1rem", border: "1px solid var(--border)", boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)" }}
                    />
                    <Line type="monotone" dataKey="score" stroke="oklch(0.75 0.18 175)" strokeWidth={3} dot={{ r: 4, fill: "oklch(0.75 0.18 175)" }} activeDot={{ r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-4 text-xs text-foreground/50 italic">Aggregate scores demonstrating balanced academic strength across diverse disciplines.</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Extracurricular Participation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 p-8 rounded-3xl bg-secondary/5 border border-border/30 backdrop-blur-sm flex flex-col md:flex-row items-center"
            >
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-serif italic mb-6 text-primary">Extracurricular Engagement</h3>
                <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                  Participation in non-academic activities remains a core pillar of our holistic development strategy.
                </p>
                <div className="space-y-3">
                  {participationData.map((item, index) => (
                    <div key={item.name} className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                      <span className="text-xs font-bold uppercase tracking-widest text-foreground/60">{item.name}</span>
                      <span className="text-xs font-mono ml-auto opacity-40">{item.value}+ Active Members</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="h-[300px] w-full md:w-1/2">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={participationData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {participationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 gap-4">
              {[
                { label: "Teacher Ratio", value: "1:25", sub: "Individual Attention" },
                { label: "Graduation Rate", value: "98%", sub: "Academic Success" },
                { label: "Clubs & Societies", value: "32+", sub: "Campus Life" },
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-primary/5 border border-primary/20 flex flex-col justify-center"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60 mb-1">{stat.label}</span>
                  <div className="text-3xl font-serif italic text-foreground">{stat.value}</div>
                  <span className="text-[9px] opacity-40 mt-1">{stat.sub}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
