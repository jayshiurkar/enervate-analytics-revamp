import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";

/**
 * Wraps each routed page so navigation cross-fades and lifts gently
 * instead of snapping, giving the site a smooth, considered feel.
 */
const PageTransition = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.45, ease: EASE_OUT }}
  >
    {children}
  </motion.div>
);

export default PageTransition;
