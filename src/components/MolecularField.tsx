import { motion } from "framer-motion";

const molecules = [
  { x: "8%", y: "18%", size: 42, duration: 8, delay: 0 },
  { x: "18%", y: "72%", size: 28, duration: 10, delay: 1.5 },
  { x: "44%", y: "12%", size: 24, duration: 9, delay: 2 },
  { x: "72%", y: "22%", size: 36, duration: 11, delay: 0.8 },
  { x: "88%", y: "68%", size: 30, duration: 8.5, delay: 2.8 },
];

const MolecularField = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    {molecules.map((molecule, index) => (
      <motion.div
        key={`${molecule.x}-${molecule.y}`}
        className="absolute opacity-20"
        style={{ left: molecule.x, top: molecule.y, width: molecule.size, height: molecule.size }}
        animate={{ y: [0, -18, 0], x: [0, index % 2 ? 9 : -9, 0], rotate: [0, 14, 0] }}
        transition={{ duration: molecule.duration, delay: molecule.delay, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 50 50" className="h-full w-full">
          <line x1="14" y1="28" x2="35" y2="14" stroke="hsl(var(--glow))" strokeWidth="1" />
          <line x1="14" y1="28" x2="38" y2="36" stroke="hsl(var(--glow))" strokeWidth="1" />
          <circle cx="14" cy="28" r="6" fill="hsl(var(--surface-dark))" stroke="hsl(var(--glow))" />
          <circle cx="35" cy="14" r="4" fill="hsl(var(--glow))" />
          <circle cx="38" cy="36" r="5" fill="hsl(var(--surface-dark))" stroke="hsl(var(--glow))" />
        </svg>
      </motion.div>
    ))}
  </div>
);

export default MolecularField;
