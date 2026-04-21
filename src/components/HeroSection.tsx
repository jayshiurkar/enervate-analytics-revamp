import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "50+", label: "Assessments Delivered" },
  { value: "11", label: "Clients Served" },
  { value: "4", label: "Scientific Publications" },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="Energy infrastructure" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-hero-bg/70 via-hero-bg/50 to-hero-bg" />
      <div className="absolute inset-0 bg-gradient-to-r from-hero-bg/80 via-transparent to-hero-bg/80" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-hero-foreground leading-tight max-w-3xl mx-auto mb-6">
          Knowledge that drives{" "}
          <span className="text-gradient">action.</span>
          <br />
          Actions that empower{" "}
          <span className="text-gradient">decisions.</span>
        </h1>

        <p className="text-hero-foreground/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body">
          Need answers before you decide? Evidence-based engineering analysis for risk, safety, and energy systems.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Link
            to="/services"
            className="px-8 py-3.5 rounded-lg border border-hero-foreground/20 text-hero-foreground/80 font-heading font-semibold text-sm hover:border-hero-foreground/40 hover:text-hero-foreground transition-all flex items-center gap-2"
          >
            Explore Our Services <ArrowRight size={16} />
          </Link>
          <a
            href="https://scholar.google.com/citations?user=eUUXQ80AAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-lg border border-hero-foreground/20 text-hero-foreground/80 font-heading font-semibold text-sm hover:border-glow/40 hover:text-glow transition-all"
          >
            View Publications
          </a>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="grid grid-cols-3 gap-6 max-w-2xl mx-auto"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="glass-card rounded-xl px-6 py-5">
            <div className="font-heading text-3xl md:text-4xl font-bold text-gradient mb-1">
              {stat.value}
            </div>
            <div className="text-hero-foreground/50 text-xs md:text-sm">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
