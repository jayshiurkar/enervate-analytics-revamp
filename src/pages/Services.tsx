import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedServiceIcon from "@/components/AnimatedServiceIcon";
import wildfireImg from "@/assets/wildfire-service.jpg";
import energyImg from "@/assets/energy-service.jpg";
import safetyImg from "@/assets/safety-service.jpg";
import technoImg from "@/assets/techno-economic.jpg";
import wildfireIcon from "@/assets/animated-icons/forest-fire.gif";
import energyIcon from "@/assets/animated-icons/renewable-energy.gif";
import safetyIcon from "@/assets/animated-icons/shield.gif";
import analyticsIcon from "@/assets/animated-icons/analytics.gif";

const services = [
  {
    id: "wildfire",
    icon: wildfireIcon,
    title: "Wildfire Response",
    subtitle: "Evacuation Planning & Risk-Informed Techniques",
    description:
      "In an unfortunate wildfire event, every second matters. Our evidence-based analysis helps communities plan evacuations and manage fire risk with precision.",
    details: [
      "Community evacuation modeling and planning",
      "Fire spread simulation and risk mapping",
      "Emergency response optimization",
      "Post-event damage assessment and analysis",
    ],
    image: wildfireImg,
  },
  {
    id: "energy",
    icon: energyIcon,
    title: "Next-Generation Energy Systems",
    subtitle: "Feasibility, Design & Integration",
    description:
      "Guide your vision from concept to compliant & safe design. We specialize in hydrogen safety and clean energy system evaluations.",
    details: [
      "Hydrogen safety assessments and compliance",
      "Clean energy system feasibility studies",
      "System integration and design optimization",
      "Regulatory compliance and permitting support",
    ],
    image: energyImg,
  },
  {
    id: "safety",
    icon: safetyIcon,
    title: "Health, Safety & Environmental Impact",
    subtitle: "Assessment & Compliance",
    description:
      "Protect your workforce and workspace. Strengthen project approvals and stakeholder trust with tailored insights for your industry.",
    details: [
      "Quantitative risk assessments (QRA)",
      "Environmental impact assessments",
      "Hazard identification and analysis (HAZID/HAZOP)",
      "Safety management system development",
    ],
    image: safetyImg,
  },
  {
    id: "techno",
    icon: analyticsIcon,
    title: "Techno-Economic Analysis",
    subtitle: "Engineering & Financial Feasibility",
    description:
      "Evaluating the economic viability of energy projects with rigorous engineering and financial modeling.",
    details: [
      "Capital and operating cost estimation",
      "Financial modeling and sensitivity analysis",
      "Market assessment and competitive positioning",
      "Investment decision support",
    ],
    image: technoImg,
  },
];

const Services = () => (
  <div className="min-h-screen bg-hero-bg">
    <Navbar />
    <section className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-glow text-xs font-medium uppercase tracking-widest">
            What We Do
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-hero-foreground mt-3 mb-4">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-hero-foreground/60 text-lg max-w-2xl mx-auto">
            We provide specialized engineering consulting across critical domains
            in the energy sector.
          </p>
        </motion.div>

        <div className="space-y-24">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-72 lg:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hero-bg/80 to-transparent" />
                  <div className="absolute top-5 left-5">
                    <AnimatedServiceIcon src={service.icon} alt={`${service.title} animated icon`} size="lg" />
                  </div>
                </div>
              </div>

              <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-hero-foreground mb-2">
                  {service.title}
                </h2>
                <p className="text-glow text-sm font-medium mb-4">
                  {service.subtitle}
                </p>
                <p className="text-hero-foreground/55 text-base leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-3 text-hero-foreground/60 text-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-glow mt-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-glow/10 border border-glow/30 text-glow text-sm font-medium hover:bg-glow/20 transition-all"
                >
                  Discuss This Service <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Services;
