import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import MolecularField from "@/components/MolecularField";

const stats = [
  { value: "50+", label: "Assessments Delivered" },
  { value: "11", label: "Clients Served" },
  { value: "4", label: "Decision Frameworks" },
];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const modelY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const modelScale = useTransform(scrollYProgress, [0, 0.65, 1], [1.08, 0.92, 0.78]);
  const modelRotate = useTransform(scrollYProgress, [0, 1], [0, -4]);
  const modelOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [0.78, 0.52, 0.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.76, 1], [1, 0.8, 0]);
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 125]);
  const scanY = useTransform(scrollYProgress, [0, 1], ["12%", "88%"]);

  return (
    <section ref={sectionRef} className="relative flex min-h-[108vh] items-center overflow-hidden bg-hero-bg">
      <div className="absolute inset-0">
        <div className="technical-grid absolute inset-0 opacity-55" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,hsl(var(--glow)/0.12),transparent_40%)]" />
        <MolecularField />

        <motion.div
          style={{ y: modelY, scale: modelScale, rotate: modelRotate, opacity: modelOpacity }}
          className="absolute -right-[8%] top-[4%] hidden h-[92%] w-[68%] origin-center md:block"
        >
          <div className="absolute inset-0 rounded-[50%] bg-white/50 blur-3xl" />
          <iframe
            title="Animated hydrogen production system"
            className="pointer-events-none absolute inset-0 h-full w-full scale-[1.22] mix-blend-multiply"
            src="https://sketchfab.com/models/be71ed54e6674692845cbac18ef54bce/embed?autostart=1&preload=1&ui_theme=light&ui_infos=0&ui_help=0&ui_inspector=0&ui_settings=0&ui_controls=0&ui_stop=0&ui_watermark=0&ui_watermark_link=0"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            tabIndex={-1}
            aria-hidden="true"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-hero-bg via-hero-bg/30 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-hero-bg/30 via-transparent to-hero-bg" />

          <motion.div
            style={{ rotate: ringRotate }}
            className="pointer-events-none absolute left-[52%] top-[49%] h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-glow/25"
          />
          <motion.div
            style={{ y: scanY }}
            className="pointer-events-none absolute left-[10%] right-[4%] top-0 h-px bg-gradient-to-r from-transparent via-glow to-transparent shadow-[0_0_18px_hsl(var(--glow)/0.7)]"
          />
        </motion.div>
        <div className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-[76%] bg-gradient-to-r from-hero-bg via-hero-bg/95 to-transparent md:w-[62%]" />

        <motion.div
          style={{ y: modelY, opacity: contentOpacity }}
          className="pointer-events-none absolute right-[4%] top-[28%] hidden rounded-xl border border-glow/15 bg-white/80 px-4 py-3 shadow-xl backdrop-blur-md lg:block"
        >
          <div className="mb-1 flex items-center gap-2 text-[9px] uppercase tracking-[0.18em] text-hero-foreground/45">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" /> Digital twin online
          </div>
          <div className="font-heading text-sm text-hero-foreground">Hydrogen production system</div>
        </motion.div>
      </div>

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-glow/20 bg-white/65 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-glow shadow-sm backdrop-blur">
              Engineering intelligence for consequential decisions
            </div>
            <h1 className="mb-6 max-w-3xl font-heading text-4xl font-semibold leading-[1.03] tracking-[-0.045em] text-hero-foreground md:text-6xl lg:text-[4.4rem]">
              Turn complexity into <span className="text-gradient">clear action.</span>
            </h1>

            <p className="mb-9 max-w-xl text-base leading-relaxed text-hero-foreground/65 md:text-lg">
              Evidence-based engineering analysis for risk, safety, and next-generation energy systems, built to move critical projects forward.
            </p>

            <div className="mb-14 flex flex-col items-start gap-4 sm:flex-row">
              <Link
                to="/services"
                className="glow-border flex items-center gap-2 rounded-lg bg-glow px-7 py-3.5 font-heading text-sm font-semibold text-white transition-all hover:brightness-110"
              >
                Explore capabilities <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="rounded-lg border border-hero-foreground/15 bg-white/45 px-7 py-3.5 font-heading text-sm font-semibold text-hero-foreground/80 backdrop-blur transition-all hover:border-glow/40 hover:text-glow"
              >
                Discuss a project
              </Link>
            </div>

            <div className="grid max-w-xl grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="border-l border-glow/25 py-1 pl-4">
                  <div className="mb-1 font-heading text-2xl font-semibold text-hero-foreground md:text-3xl">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-wide text-hero-foreground/50 md:text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      <a
        href="https://sketchfab.com/3d-models/creo-hydrogen-hub-15-be71ed54e6674692845cbac18ef54bce"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-7 right-7 z-20 hidden items-center gap-2 text-[9px] uppercase tracking-[0.15em] text-hero-foreground/35 transition-colors hover:text-glow md:flex"
      >
        3D model by Creo / kcmedia <ExternalLink size={11} />
      </a>
    </section>
  );
};

export default HeroSection;
