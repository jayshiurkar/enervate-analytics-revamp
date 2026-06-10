import { motion } from "framer-motion";

type AnimatedServiceIconProps = {
  src: string;
  alt: string;
  size?: "sm" | "lg";
};

const AnimatedServiceIcon = ({ src, alt, size = "sm" }: AnimatedServiceIconProps) => (
  <motion.div
    animate={{ y: [0, -3, 0], opacity: [0.72, 0.95, 0.72] }}
    transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
    className={`${size === "lg" ? "h-14 w-14" : "h-11 w-11"} overflow-hidden rounded-xl border border-glow/20 bg-glow/8 p-1 shadow-sm`}
  >
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-contain opacity-80 mix-blend-multiply saturate-[0.7] contrast-[0.9]"
      loading="lazy"
    />
  </motion.div>
);

export default AnimatedServiceIcon;
