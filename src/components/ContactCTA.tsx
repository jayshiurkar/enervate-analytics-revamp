import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { EASE_OUT } from "@/lib/motion";

const ContactCTA = () => (
  <section className="section-dark relative overflow-hidden py-28">
    {/* Layered, restrained backdrop — depth without noise. */}
    <div className="technical-grid absolute inset-0 opacity-30" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--glow)/0.14),transparent_55%)]" />
    <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-glow/40 to-transparent" />

    <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: EASE_OUT }}
      >
        <span className="text-xs font-medium uppercase tracking-[0.22em] text-glow">From Data to Decisions</span>
        <h2 className="mb-4 mt-3 font-heading text-3xl font-bold text-hero-foreground md:text-5xl">
          Ready to get <span className="text-gradient">started?</span>
        </h2>
        <p className="mx-auto mb-9 max-w-xl text-lg text-hero-foreground/50">
          Let us help you navigate the most complex engineering challenges. Reach out today.
        </p>
        <Link
          to="/contact"
          className="group inline-flex items-center gap-2 rounded-lg bg-glow px-8 py-3.5 font-heading text-sm font-semibold text-white shadow-[0_10px_40px_-12px_hsl(var(--glow)/0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_16px_48px_-12px_hsl(var(--glow)/0.85)]"
        >
          Contact Us
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default ContactCTA;
