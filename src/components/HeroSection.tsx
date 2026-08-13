import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import MolecularField from "@/components/MolecularField";
import CountUp from "@/components/CountUp";
import { EASE_OUT } from "@/lib/motion";
import hydrogenSystemVisual from "@/assets/hero/integrated-hydrogen-system.jpg";

const stats = [
  { value: 50, suffix: "+", label: "Assessments Delivered" },
  { value: 11, suffix: "", label: "Clients Served" },
  { value: 4, suffix: "", label: "Decision Frameworks" },
];

// Shared spring config so every scroll-linked transform decelerates together.
const SPRING = { stiffness: 90, damping: 28, mass: 0.5 } as const;

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Smooth the raw scroll progress so parallax glides instead of tracking
  // the scrollbar 1:1 (the main cause of the previous "jumpy" feel).
  const smooth = useSpring(scrollYProgress, SPRING);

  const modelY = useTransform(smooth, [0, 1], ["0%", "26%"]);
  const modelScale = useTransform(smooth, [0, 0.65, 1], [1.06, 0.94, 0.82]);
  const modelOpacity = useTransform(smooth, [0, 0.8, 1], [0.98, 0.64, 0.12]);
  const contentY = useTransform(smooth, [0, 1], ["0%", "14%"]);
  const contentOpacity = useTransform(smooth, [0, 0.72, 1], [1, 0.78, 0]);
  const ringRotate = useTransform(smooth, [0, 1], [0, 90]);
  const scanY = useTransform(smooth, [0, 1], ["14%", "84%"]);

  return (
    <section ref={sectionRef} className="relative flex min-h-[108vh] items-center overflow-hidden bg-hero-bg">
      <div className="absolute inset-0">
        <div className="technical-grid absolute inset-0 opacity-55" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,hsl(var(--glow)/0.12),transparent_42%)]" />
        <MolecularField />

        <motion.div
          style={{ y: modelY, scale: modelScale, opacity: modelOpacity }}
          className="absolute -right-[7%] top-[3%] hidden h-[94%] w-[68%] origin-center md:block"
        >
          {/* Soft luminous bed behind the model so it reads as lit, not pasted on. */}
          <div className="absolute left-[12%] right-[6%] top-[10%] bottom-[12%] rounded-[46%] bg-[radial-gradient(circle_at_50%_45%,hsl(var(--glow)/0.16),hsl(0_0%_100%/0.55)_38%,transparent_72%)] blur-2xl" />

          <motion.div
            className="model-vignette absolute inset-0"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={hydrogenSystemVisual}
              alt=""
              aria-hidden="true"
              loading="eager"
              className="pointer-events-none absolute inset-0 h-full w-full scale-[1.08] object-contain object-center mix-blend-multiply"
            />
          </motion.div>

          {/* Directional fades that tie the model into the page edges. */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-hero-bg via-hero-bg/10 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-hero-bg/40 via-transparent to-hero-bg" />

          <motion.div
            style={{ rotate: ringRotate }}
            className="pointer-events-none absolute left-[52%] top-[48%] h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-glow/20"
          />
          <motion.div
            style={{ rotate: ringRotate }}
            className="pointer-events-none absolute left-[52%] top-[48%] h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-glow/10"
          />
          <motion.div
            style={{ y: scanY }}
            className="pointer-events-none absolute left-[12%] right-[6%] top-0 h-px bg-gradient-to-r from-transparent via-glow/80 to-transparent shadow-[0_0_18px_hsl(var(--glow)/0.6)]"
          />
        </motion.div>
        <div className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-[78%] bg-gradient-to-r from-hero-bg via-hero-bg/92 to-transparent md:w-[60%]" />
      </div>

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE_OUT }}
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.1 }}
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-glow/20 bg-white/65 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-glow shadow-sm backdrop-blur"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-glow/60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-glow" />
              </span>
              Engineering intelligence for consequential decisions
            </motion.div>
            <h1 className="mb-6 max-w-3xl font-heading text-4xl font-semibold leading-[1.03] tracking-[-0.045em] text-hero-foreground md:text-6xl lg:text-[4.4rem]">
              Turn complexity into <span className="text-gradient">clear action.</span>
            </h1>

            <p className="mb-9 max-w-xl text-base leading-relaxed text-hero-foreground/65 md:text-lg">
              Evidence-based engineering analysis for risk, safety, and next-generation energy systems, built to move critical projects forward.
            </p>

            <div className="mb-14 flex flex-col items-start gap-4 sm:flex-row">
              <Link
                to="/services"
                className="group flex items-center gap-2 rounded-lg bg-glow px-7 py-3.5 font-heading text-sm font-semibold text-white shadow-[0_10px_40px_-12px_hsl(var(--glow)/0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_16px_48px_-12px_hsl(var(--glow)/0.8)]"
              >
                Explore capabilities
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="rounded-lg border border-hero-foreground/15 bg-white/45 px-7 py-3.5 font-heading text-sm font-semibold text-hero-foreground/80 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-glow/40 hover:text-glow"
              >
                Discuss a project
              </Link>
            </div>

            <div className="grid max-w-xl grid-cols-3 gap-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.5 + index * 0.12 }}
                  className="border-l border-glow/25 py-1 pl-4"
                >
                  <div className="mb-1 font-heading text-2xl font-semibold text-hero-foreground md:text-3xl">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[10px] uppercase tracking-wide text-hero-foreground/50 md:text-xs">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
};

export default HeroSection;
