import { motion } from "framer-motion";
import { Atom, ShieldCheck, TrendingUp, Waves } from "lucide-react";
import { EASE_OUT } from "@/lib/motion";

const signals = [
  { icon: Waves, label: "Process behavior", value: "Flow, heat & reaction modeling" },
  { icon: ShieldCheck, label: "Safety barriers", value: "Hazard & consequence analysis" },
  { icon: TrendingUp, label: "Economic outcomes", value: "Cost & feasibility trade-offs" },
];

const ChemicalProcessSection = () => (
  <section className="section-dark relative py-24 lg:py-32 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(var(--glow)/0.1),transparent_35%)]" />
    <div className="technical-grid absolute inset-0 opacity-20" />
    <div className="relative max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 text-glow text-xs font-medium uppercase tracking-[0.22em] mb-5">
            <Atom size={15} /> Process intelligence
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-hero-foreground leading-tight tracking-[-0.035em] mb-6">
            See the whole system.
            <span className="text-gradient block">Understand every interaction.</span>
          </h2>
          <p className="text-hero-foreground/52 leading-relaxed max-w-xl mb-9">
            From molecule-scale behavior to facility-wide consequences, our analysis connects process conditions, safety barriers, and economic outcomes.
          </p>

          <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-3">
            {signals.map((signal, index) => (
              <motion.div
                key={signal.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.15 + index * 0.1 }}
                className="glass-card hover-lift rounded-xl px-4 py-3.5 flex items-center gap-4 hover:border-glow/30"
              >
                <div className="h-9 w-9 shrink-0 rounded-lg bg-glow/10 border border-glow/20 flex items-center justify-center">
                  <signal.icon size={17} className="text-glow" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-[0.16em] text-hero-foreground/35">{signal.label}</div>
                  <div className="font-heading text-sm text-hero-foreground">{signal.value}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="glass-card relative rounded-3xl p-4 md:p-8 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-glow/5 to-transparent" />
          <svg viewBox="0 0 720 460" className="relative w-full" role="img" aria-label="Animated chemical process flow diagram">
            <defs>
              <linearGradient id="vessel-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--glow))" stopOpacity="0.06" />
                <stop offset="100%" stopColor="hsl(var(--glow))" stopOpacity="0.28" />
              </linearGradient>
              <filter id="process-glow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>

            <g stroke="hsl(var(--glow) / 0.42)" fill="none" strokeWidth="2">
              <path d="M68 300 H165 V232 H264" />
              <path d="M350 232 H430 V132 H520" />
              <path d="M350 265 H430 V350 H548" />
              <path d="M590 132 H652 V350 H625" />
            </g>

            {[
              { path: "M68 300 H165 V232 H264", delay: 0 },
              { path: "M350 232 H430 V132 H520", delay: 0.8 },
              { path: "M350 265 H430 V350 H548", delay: 1.5 },
              { path: "M590 132 H652 V350 H625", delay: 2.2 },
            ].map((flow) => (
              <motion.path
                key={flow.path}
                d={flow.path}
                fill="none"
                stroke="hsl(var(--glow))"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="2 22"
                animate={{ strokeDashoffset: [0, -48] }}
                transition={{ duration: 2.4, delay: flow.delay, repeat: Infinity, ease: "linear" }}
                filter="url(#process-glow)"
              />
            ))}

            <g>
              <rect x="30" y="265" width="76" height="70" rx="10" fill="hsl(var(--surface-darker))" stroke="hsl(var(--glow) / 0.5)" />
              <motion.path d="M46 312 C58 280 78 326 91 286" fill="none" stroke="hsl(var(--glow))" strokeWidth="2" animate={{ pathLength: [0.4, 1, 0.4] }} transition={{ duration: 3, repeat: Infinity }} />
              <text x="68" y="354" textAnchor="middle" fill="hsl(var(--hero-foreground) / 0.45)" fontSize="9" letterSpacing="1.5">FEED</text>
            </g>

            <g>
              <path d="M278 140 Q307 112 336 140 V330 Q307 358 278 330 Z" fill="url(#vessel-fill)" stroke="hsl(var(--glow) / 0.65)" strokeWidth="2" />
              <motion.path d="M279 270 Q307 250 335 270 V330 Q307 358 279 330 Z" fill="hsl(var(--glow) / 0.22)" animate={{ d: ["M279 270 Q307 250 335 270 V330 Q307 358 279 330 Z", "M279 250 Q307 270 335 250 V330 Q307 358 279 330 Z", "M279 270 Q307 250 335 270 V330 Q307 358 279 330 Z"] }} transition={{ duration: 4, repeat: Infinity }} />
              {[190, 230, 270, 310].map((y, index) => (
                <motion.circle key={y} cx={296 + (index % 2) * 20} cy={y} r="3" fill="hsl(var(--glow))" animate={{ cy: [y + 20, y - 20], opacity: [0, 1, 0] }} transition={{ duration: 2.4, delay: index * 0.45, repeat: Infinity }} />
              ))}
              <text x="307" y="122" textAnchor="middle" fill="hsl(var(--hero-foreground) / 0.55)" fontSize="10" letterSpacing="1.8">REACTOR</text>
            </g>

            <g>
              <path d="M525 72 Q555 48 585 72 V270 Q555 294 525 270 Z" fill="hsl(var(--surface-darker) / 0.8)" stroke="hsl(var(--glow) / 0.65)" strokeWidth="2" />
              {[105, 140, 175, 210, 245].map((y) => <line key={y} x1="526" y1={y} x2="584" y2={y} stroke="hsl(var(--glow) / 0.25)" />)}
              <motion.rect x="526" y="190" width="58" height="78" fill="url(#vessel-fill)" animate={{ y: [190, 150, 190], height: [78, 118, 78] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
              <text x="555" y="50" textAnchor="middle" fill="hsl(var(--hero-foreground) / 0.55)" fontSize="10" letterSpacing="1.8">SEPARATION</text>
            </g>

            <g>
              <circle cx="585" cy="350" r="40" fill="hsl(var(--surface-darker))" stroke="hsl(var(--glow) / 0.65)" strokeWidth="2" />
              <motion.g style={{ transformOrigin: "585px 350px" }} animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
                <path d="M585 316 L596 344 L585 350 Z M619 350 L591 361 L585 350 Z M585 384 L574 356 L585 350 Z M551 350 L579 339 L585 350 Z" fill="hsl(var(--glow) / 0.55)" />
              </motion.g>
              <circle cx="585" cy="350" r="7" fill="hsl(var(--glow))" />
              <text x="585" y="414" textAnchor="middle" fill="hsl(var(--hero-foreground) / 0.55)" fontSize="10" letterSpacing="1.8">COMPRESSION</text>
            </g>

            {[
              { x: 165, y: 232, text: "FT-21" },
              { x: 430, y: 132, text: "PT-08" },
              { x: 430, y: 350, text: "TT-14" },
            ].map((tag, index) => (
              <motion.g key={tag.text} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.7 + index * 0.2 }}>
                <circle cx={tag.x} cy={tag.y} r="13" fill="hsl(var(--surface-dark))" stroke="hsl(var(--glow))" />
                <text x={tag.x} y={tag.y + 3} textAnchor="middle" fill="hsl(var(--glow))" fontSize="6">{tag.text}</text>
              </motion.g>
            ))}
          </svg>
          <div className="relative flex items-center justify-between border-t border-glow/10 pt-4 text-[10px] uppercase tracking-[0.18em] text-hero-foreground/35">
            <span>Integrated process view</span>
            <span>Illustrative schematic</span>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ChemicalProcessSection;
