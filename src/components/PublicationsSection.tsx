import { motion } from "framer-motion";
import { ExternalLink, BookOpen } from "lucide-react";

const PublicationsSection = () => (
  <section className="section-dark py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/0 via-glow/5 to-surface-dark/0" />
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="w-16 h-16 rounded-2xl bg-glow/10 border border-glow/20 flex items-center justify-center mx-auto mb-6">
          <BookOpen size={28} className="text-glow" />
        </div>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-hero-foreground mb-4">
          Peer-Reviewed <span className="text-gradient">Research</span>
        </h2>
        <p className="text-hero-foreground/50 text-lg max-w-xl mx-auto mb-8">
          Our work is backed by rigorous scientific research published in leading journals.
        </p>
        <a
          href="https://scholar.google.com/citations?user=eUUXQ80AAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-glow/10 border border-glow/30 text-glow font-heading font-semibold text-sm hover:bg-glow/20 transition-all"
        >
          View Our Publications <ExternalLink size={16} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default PublicationsSection;
