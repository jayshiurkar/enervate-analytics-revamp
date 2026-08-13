import { motion } from "framer-motion";
import { Factory, Hospital, LockKeyhole, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import { fadeUp, staggerContainer } from "@/lib/motion";

type Project = {
  number: string;
  title: string;
  location: string;
  sectors: string[];
  summary: string;
  scope: string[];
  services: string[];
  icon: LucideIcon;
};

const projects: Project[] = [
  {
    number: "01",
    title: "Techno-Economic & Lifecycle Assessment for Alberta Healthcare Infrastructure",
    location: "Alberta, Canada",
    sectors: ["Healthcare", "Hydrogen", "Clean Energy"],
    summary:
      "For a major greenfield healthcare development, Enervate Analytics evaluated how hydrogen and other low-carbon technologies could advance decarbonization while preserving the reliability and resilience required for critical operations.",
    scope: [
      "Modelled annual and seasonal electrical, heating, cooling, and critical loads.",
      "Compared conventional, CHP, hydrogen-ready, delivered-hydrogen, and onsite-production pathways.",
      "Assessed lifecycle cost, NPV, emissions, and energy-price and policy sensitivities.",
      "Evaluated hydrogen supply, storage, site safety, resilience, and phased implementation.",
    ],
    services: [
      "Techno-Economic Analysis",
      "Lifecycle Assessment",
      "Energy Modelling",
      "Hydrogen Safety",
      "Decarbonization Strategy",
    ],
    icon: Hospital,
  },
  {
    number: "02",
    title: "Hydrogen Safety & Quantitative Risk Assessment for Industrial Applications",
    location: "Mining & heavy industry",
    sectors: ["Hydrogen", "Mining", "Process Safety"],
    summary:
      "A comprehensive assessment of hydrogen use across mobile equipment, fuelling systems, storage infrastructure, confined environments, and industrial processes, translated into practical safeguards for future deployment.",
    scope: [
      "Modelled releases, accumulation, fire, explosion, and escalation scenarios.",
      "Evaluated delayed ignition, confined releases, and deflagration-to-detonation transition.",
      "Reviewed safeguards, detection, ventilation, emergency isolation, and operating practices.",
    ],
    services: [
      "Quantitative Risk Assessment",
      "Consequence Modelling",
      "Fire & Explosion Analysis",
      "Regulatory Gap Assessment",
    ],
    icon: Factory,
  },
  {
    number: "03",
    title: "Hydrogen Storage, Escalation & Critical Infrastructure Risk Assessment",
    location: "Critical infrastructure",
    sectors: ["Hydrogen", "Storage Safety", "QRA"],
    summary:
      "Specialized analysis of high-pressure hydrogen storage systems focused on fire exposure, cylinder response, secondary escalation, and the effectiveness of pressure-relief and protection systems.",
    scope: [
      "Examined storage configuration, separation, thermal exposure, and release direction.",
      "Modelled how an initiating event could interact with adjacent equipment and escalate.",
      "Developed risk-informed guidance for siting, safeguards, separation, and emergency planning.",
    ],
    services: [
      "Hydrogen Storage Safety",
      "Domino Risk",
      "Thermal Escalation",
      "Risk-Informed Siting",
    ],
    icon: ShieldCheck,
  },
];

const Projects = () => (
  <div className="min-h-screen bg-hero-bg">
    <Navbar />

    <main>
      <section className="relative overflow-hidden pt-36 pb-20">
        <div className="technical-grid absolute inset-0 pointer-events-none" />
        <div className="absolute -top-32 right-0 w-[32rem] h-[32rem] rounded-full bg-glow/[0.06] blur-3xl pointer-events-none" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="relative max-w-7xl mx-auto px-6"
        >
          <motion.span variants={fadeUp} className="text-glow text-xs font-medium uppercase tracking-[0.22em]">
            Applied Engineering
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="font-heading text-4xl md:text-6xl font-bold text-hero-foreground mt-4 max-w-3xl"
          >
            Selected <span className="text-gradient">Projects</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-hero-foreground/60 text-lg leading-relaxed mt-6 max-w-2xl">
            Engineering studies that turn complex energy, safety, and infrastructure questions into practical decisions.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 mt-8 text-hero-foreground/45 text-sm"
          >
            <LockKeyhole size={15} className="text-glow" />
            Summaries are intentionally high-level to protect confidential project findings.
          </motion.div>
        </motion.div>
      </section>

      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.number}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, delay: index * 0.06 }}
                className="glass-card hover-lift relative overflow-hidden rounded-2xl p-7 md:p-10"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-glow/60 via-glow/15 to-transparent" />
                <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-9 lg:gap-14">
                  <div>
                    <div className="flex items-start justify-between gap-5 mb-7">
                      <div className="w-12 h-12 rounded-xl bg-glow/[0.08] border border-glow/15 flex items-center justify-center text-glow">
                        <Icon size={23} strokeWidth={1.6} />
                      </div>
                      <span className="font-heading text-4xl font-light text-glow/20">{project.number}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.sectors.map((sector) => (
                        <span
                          key={sector}
                          className="px-3 py-1 rounded-full bg-glow/[0.06] border border-glow/10 text-glow text-[11px] font-medium uppercase tracking-wider"
                        >
                          {sector}
                        </span>
                      ))}
                    </div>

                    <h2 className="font-heading text-2xl md:text-3xl font-semibold text-hero-foreground leading-tight">
                      {project.title}
                    </h2>
                    <p className="text-glow/80 text-sm font-medium mt-3">{project.location}</p>
                    <p className="text-hero-foreground/58 text-[15px] leading-relaxed mt-5">
                      {project.summary}
                    </p>
                  </div>

                  <div className="lg:border-l lg:border-glow/10 lg:pl-12">
                    <p className="text-hero-foreground/40 text-xs font-medium uppercase tracking-[0.18em] mb-5">
                      Project Focus
                    </p>
                    <ul className="space-y-4">
                      {project.scope.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-hero-foreground/60 text-sm leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-glow mt-2 flex-none" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-x-4 gap-y-2 mt-7 pt-6 border-t border-glow/10">
                      {project.services.map((service) => (
                        <span key={service} className="text-hero-foreground/42 text-xs">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <ContactCTA />
    </main>

    <Footer />
  </div>
);

export default Projects;
