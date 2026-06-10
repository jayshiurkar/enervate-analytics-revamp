import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import SystemsVisual from "@/components/SystemsVisual";
import MolecularField from "@/components/MolecularField";

const stats = [
  { value: "50+", label: "Assessments Delivered" },
  { value: "11", label: "Clients Served" },
  { value: "4", label: "Decision Frameworks" },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="Energy infrastructure" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-hero-bg/90 via-hero-bg/85 to-hero-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,hsl(var(--glow)/0.14),transparent_36%)]" />
      <div className="technical-grid absolute inset-0 opacity-40" />
      <MolecularField />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16 w-full">
      <div className="grid lg:grid-cols-[1.05fr_0.95fr] items-center gap-8 lg:gap-14">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-glow/20 bg-glow/5 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-glow mb-7">
          Engineering intelligence for consequential decisions
        </div>
        <h1 className="font-heading text-4xl md:text-6xl lg:text-[4.4rem] font-semibold text-hero-foreground leading-[1.03] max-w-3xl mb-6 tracking-[-0.045em]">
          Turn complexity into{" "}
          <span className="text-gradient">clear action.</span>
        </h1>

        <p className="text-hero-foreground/58 text-base md:text-lg max-w-xl mb-9 font-body leading-relaxed">
          Evidence-based engineering analysis for risk, safety, and next-generation energy systems, built to move critical projects forward.
        </p>

        <div className="flex flex-col sm:flex-row items-start gap-4 mb-14">
          <Link
            to="/services"
            className="px-7 py-3.5 rounded-lg bg-glow text-hero-bg font-heading font-semibold text-sm hover:brightness-110 transition-all flex items-center gap-2 glow-border"
          >
            Explore capabilities <ArrowRight size={16} />
          </Link>
          <Link
            to="/contact"
            className="px-7 py-3.5 rounded-lg border border-hero-foreground/15 text-hero-foreground/80 font-heading font-semibold text-sm hover:border-glow/40 hover:text-glow transition-all"
          >
            Discuss a project
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-3 max-w-xl">
          {stats.map((stat) => (
            <div key={stat.label} className="border-l border-glow/25 pl-4 py-1">
              <div className="font-heading text-2xl md:text-3xl font-semibold text-hero-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-hero-foreground/42 text-[10px] md:text-xs uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="hidden md:block"
      >
        <SystemsVisual />
      </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
