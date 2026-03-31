import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ContactCTA = () => (
  <section className="section-dark py-24">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-glow text-xs font-medium uppercase tracking-widest">From Data to Decisions</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-hero-foreground mt-3 mb-4">
          Ready to get <span className="text-gradient">started?</span>
        </h2>
        <p className="text-hero-foreground/50 text-lg max-w-xl mx-auto mb-8">
          Let us help you navigate the most complex engineering challenges. Reach out today.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-glow text-hero-bg font-heading font-semibold text-sm hover:brightness-110 transition-all glow-border"
        >
          Contact Us <ArrowRight size={16} />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default ContactCTA;
