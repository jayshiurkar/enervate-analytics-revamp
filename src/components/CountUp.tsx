import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

type CountUpProps = {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

/**
 * Counts up to a target the first time it scrolls into view — a restrained,
 * professional touch for headline metrics.
 */
const CountUp = ({ value, suffix = "", duration = 1.6, className }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        node.textContent = `${Math.round(latest)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, value, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
};

export default CountUp;
