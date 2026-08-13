import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedServiceIcon from "@/components/AnimatedServiceIcon";
import wildfireImg from "@/assets/wildfire-service.jpg";
import energyImg from "@/assets/energy-service.jpg";
import safetyImg from "@/assets/safety-service.jpg";
import technoImg from "@/assets/techno-economic.jpg";
import wildfireIcon from "@/assets/animated-icons/forest-fire.gif";
import energyIcon from "@/assets/animated-icons/renewable-energy.gif";
import safetyIcon from "@/assets/animated-icons/shield.gif";
import analyticsIcon from "@/assets/animated-icons/analytics.gif";

type Service = {
  icon: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  anchor: string;
  tag: string;
};

const services: Service[] = [
  {
    icon: wildfireIcon,
    number: "01",
    title: "Wildfire Response",
    subtitle: "Evacuation Planning & Risk-Informed Techniques",
    description: "Evidence-based analysis helps communities plan evacuations and manage fire risk when every second matters.",
    image: wildfireImg,
    anchor: "wildfire",
    tag: "Response modeling",
  },
  {
    icon: energyIcon,
    number: "02",
    title: "Next-Generation Energy Systems",
    subtitle: "Feasibility, Design & Integration",
    description: "Guide new energy systems from concept to compliant, safe, decision-ready design.",
    image: energyImg,
    anchor: "energy",
    tag: "Hydrogen systems",
  },
  {
    icon: safetyIcon,
    number: "03",
    title: "Health, Safety & Environmental Impact",
    subtitle: "Assessment & Compliance",
    description: "Protect people, facilities, and approvals with rigorous analysis tailored to each operating context.",
    image: safetyImg,
    anchor: "safety",
    tag: "Risk intelligence",
  },
  {
    icon: analyticsIcon,
    number: "04",
    title: "Techno-Economic Analysis",
    subtitle: "Engineering & Financial Feasibility",
    description: "Connect engineering realities with financial outcomes to support confident investment decisions.",
    image: technoImg,
    anchor: "techno",
    tag: "Decision economics",
  },
];

const AnimatedServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(460px circle at ${mouseX}px ${mouseY}px, hsl(var(--glow) / 0.16), transparent 58%)`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 38, rotateX: 4 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, delay: index * 0.08 }}
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        mouseX.set(event.clientX - bounds.left);
        mouseY.set(event.clientY - bounds.top);
      }}
      className="group relative overflow-hidden rounded-[1.4rem] border border-glow/10 bg-surface-dark/50"
    >
      <motion.div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: spotlight }} />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-glow/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative grid min-h-[350px] md:grid-cols-[0.9fr_1.1fr]">
        <div className="relative z-10 flex flex-col p-6 md:p-8">
          <div className="mb-12 flex items-center justify-between">
            <span className="font-heading text-xs tracking-[0.2em] text-glow/70">{service.number}</span>
            <span className="rounded-full border border-glow/15 bg-glow/5 px-3 py-1.5 text-[9px] uppercase tracking-[0.16em] text-hero-foreground/45">
              {service.tag}
            </span>
          </div>

          <div className="mt-auto">
            <div className="mb-4 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-3">
              <AnimatedServiceIcon src={service.icon} alt={`${service.title} animated icon`} />
            </div>
            <h3 className="mb-2 max-w-sm font-heading text-xl font-semibold leading-tight text-hero-foreground md:text-2xl">
              {service.title}
            </h3>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.1em] text-glow/70">{service.subtitle}</p>
            <p className="mb-6 max-w-md text-sm leading-relaxed text-hero-foreground/45">{service.description}</p>
            <Link to={`/services#${service.anchor}`} className="inline-flex items-center gap-2 text-sm font-medium text-hero-foreground transition-colors hover:text-glow">
              Explore capability
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="relative min-h-64 overflow-hidden md:min-h-full">
          <motion.img
            src={service.image}
            alt={service.title}
            loading="lazy"
            width={1536}
            height={1024}
            className="absolute inset-0 h-full w-full object-cover opacity-90 saturate-[0.9] mix-blend-multiply"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-dark/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/25 via-transparent to-surface-dark/5" />
          <div className="technical-grid absolute inset-0 opacity-20" />

          <motion.div
            className="absolute inset-y-0 w-px bg-gradient-to-b from-transparent via-glow to-transparent opacity-40"
            animate={{ left: ["8%", "92%", "8%"] }}
            transition={{ duration: 9 + index, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="absolute bottom-5 right-5 rounded-lg border border-glow/15 bg-surface-darker/70 px-4 py-2 backdrop-blur-md">
            <div className="font-heading text-xs tracking-wide text-hero-foreground/80">{service.subtitle}</div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const ServicesSection = () => (
  <section className="section-dark relative overflow-hidden py-24 lg:py-32">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--glow)/0.08),transparent_38%)]" />
    <div className="relative mx-auto max-w-7xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"
      >
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-glow">Capabilities in motion</span>
          <h2 className="mt-3 max-w-2xl font-heading text-3xl font-semibold tracking-[-0.035em] text-hero-foreground md:text-5xl">
            Analysis built around the <span className="text-gradient">decision.</span>
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-hero-foreground/42">
          Move through each capability to see how Enervate turns complex systems into practical, defensible action.
        </p>
      </motion.div>

      <div className="grid gap-5">
        {services.map((service, index) => <AnimatedServiceCard key={service.title} service={service} index={index} />)}
      </div>
    </div>
  </section>
);

export default ServicesSection;
