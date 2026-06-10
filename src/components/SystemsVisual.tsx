import { motion } from "framer-motion";

const nodes = [
  { x: 52, y: 82, label: "Risk" },
  { x: 198, y: 44, label: "Safety" },
  { x: 320, y: 120, label: "Design" },
  { x: 210, y: 216, label: "Economics" },
  { x: 72, y: 236, label: "Response" },
];

const paths = [
  "M52 82 L198 44 L320 120",
  "M320 120 L210 216 L72 236 L52 82",
  "M52 82 L210 216",
  "M198 44 L210 216",
  "M72 236 L320 120",
];

const SystemsVisual = () => (
  <div className="relative aspect-square max-w-[560px] mx-auto">
    <div className="absolute inset-[8%] rounded-full border border-glow/10 animate-[spin_32s_linear_infinite]" />
    <div className="absolute inset-[18%] rounded-full border border-dashed border-glow/20 animate-[spin_24s_linear_infinite_reverse]" />
    <div className="absolute inset-[29%] rounded-full bg-glow/10 blur-3xl" />

    <svg
      viewBox="0 0 370 290"
      className="absolute inset-0 h-full w-full overflow-visible"
      role="img"
      aria-label="Connected engineering decision system"
    >
      <defs>
        <linearGradient id="systems-line" x1="0" x2="1">
          <stop offset="0%" stopColor="hsl(var(--glow))" stopOpacity="0.1" />
          <stop offset="50%" stopColor="hsl(var(--glow))" stopOpacity="0.8" />
          <stop offset="100%" stopColor="hsl(var(--glow))" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {paths.map((path, index) => (
        <motion.path
          key={path}
          d={path}
          fill="none"
          stroke="url(#systems-line)"
          strokeWidth="1"
          strokeDasharray="5 8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.25 + index * 0.12 }}
        />
      ))}

      {nodes.map((node, index) => (
        <g key={node.label}>
          <motion.circle
            cx={node.x}
            cy={node.y}
            r="14"
            fill="hsl(var(--surface-dark))"
            stroke="hsl(var(--glow))"
            strokeWidth="1"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.65 + index * 0.1 }}
          />
          <motion.circle
            cx={node.x}
            cy={node.y}
            r="4"
            fill="hsl(var(--glow))"
            animate={{ r: [3, 5, 3], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.35 }}
          />
          <text
            x={node.x}
            y={node.y + 28}
            fill="hsl(var(--hero-foreground) / 0.55)"
            textAnchor="middle"
            fontSize="8"
            letterSpacing="1.2"
          >
            {node.label.toUpperCase()}
          </text>
        </g>
      ))}

      <motion.circle
        cx="184"
        cy="140"
        r="38"
        fill="hsl(var(--surface-dark) / 0.9)"
        stroke="hsl(var(--glow) / 0.55)"
        strokeWidth="1"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
      />
      <text x="184" y="137" fill="hsl(var(--hero-foreground))" textAnchor="middle" fontSize="12" fontWeight="600">
        EVIDENCE
      </text>
      <text x="184" y="151" fill="hsl(var(--glow))" textAnchor="middle" fontSize="8" letterSpacing="1.5">
        TO ACTION
      </text>
    </svg>

    <div className="absolute bottom-[7%] right-[2%] glass-card rounded-xl px-4 py-3">
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-hero-foreground/45">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
        Systems intelligence
      </div>
      <div className="mt-1 font-heading text-sm text-hero-foreground">Decision-ready analysis</div>
    </div>
  </div>
);

export default SystemsVisual;
