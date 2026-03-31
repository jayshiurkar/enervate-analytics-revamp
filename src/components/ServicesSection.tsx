import { motion } from "framer-motion";
import { Flame, Zap, Shield, BarChart3 } from "lucide-react";
import wildfireImg from "@/assets/wildfire-service.jpg";
import energyImg from "@/assets/energy-service.jpg";
import safetyImg from "@/assets/safety-service.jpg";
import technoImg from "@/assets/techno-economic.jpg";

const services = [
  {
    icon: Flame,
    title: "Wildfire Response",
    subtitle: "Evacuation Planning & Risk-Informed Techniques",
    description: "In an unfortunate wildfire event, every second matters. Our evidence-based analysis helps communities plan evacuations and manage fire risk.",
    image: wildfireImg,
  },
  {
    icon: Zap,
    title: "Next-Generation Energy Systems",
    subtitle: "Feasibility, Design & Integration",
    description: "Guide your vision from concept to compliant & safe design. We specialize in hydrogen safety and clean energy system evaluations.",
    image: energyImg,
  },
  {
    icon: Shield,
    title: "Health, Safety & Environmental Impact",
    subtitle: "Assessment & Compliance",
    description: "Protect your workforce and workspace. Strengthen project approvals and stakeholder trust with tailored insights for your industry.",
    image: safetyImg,
  },
  {
    icon: BarChart3,
    title: "Techno-Economic Analysis",
    subtitle: "Engineering & Financial Feasibility",
    description: "Evaluating the economic viability of energy projects with rigorous engineering and financial modeling.",
    image: technoImg,
  },
];

const ServicesSection = () => (
  <section className="section-dark py-24 lg:py-32">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-glow text-xs font-medium uppercase tracking-widest">What We Do</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-hero-foreground mt-3">
          Our <span className="text-gradient">Services</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group glass-card rounded-2xl overflow-hidden hover:border-glow/30 transition-all duration-500"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent" />
              <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-glow/20 backdrop-blur-sm border border-glow/30 flex items-center justify-center">
                <service.icon size={20} className="text-glow" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-heading text-xl font-bold text-hero-foreground mb-1">
                {service.title}
              </h3>
              <p className="text-glow text-sm font-medium mb-3">{service.subtitle}</p>
              <p className="text-hero-foreground/50 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
