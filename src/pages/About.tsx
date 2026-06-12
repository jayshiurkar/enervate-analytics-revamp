import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Microscope } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const highlights = [
  { icon: Microscope, title: "Research-Driven", desc: "Rigorous, peer-reviewed methods grounded in leading energy and safety science." },
  { icon: Users, title: "Expert Team", desc: "Seasoned engineers specializing in hydrogen safety and energy systems." },
  { icon: Award, title: "50+ Assessments", desc: "Proven track record delivering complex engineering analyses." },
];

const About = () => (
  <div className="min-h-screen bg-hero-bg">
    <Navbar />
    <section className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <span className="text-glow text-xs font-medium uppercase tracking-widest">About Us</span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-hero-foreground mt-3 mb-6">
            About <span className="text-gradient">Enervate Analytics</span>
          </h1>
          <p className="text-hero-foreground/60 text-lg leading-relaxed mb-4">
            Enervate Analytics is dedicated to providing engineering consulting that meets the most complex challenges in the energy sector.
          </p>
          <p className="text-hero-foreground/60 text-lg leading-relaxed mb-10">
            Our team of experts works tirelessly to deliver innovative solutions in hydrogen safety and energy system evaluations. We combine rigorous scientific research with practical engineering to help our clients make informed, evidence-based decisions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-glow text-hero-bg font-heading font-semibold text-sm hover:brightness-110 transition-all glow-border"
          >
            Contact Us <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.12 }}
              className="group glass-card hover-lift rounded-2xl p-8 hover:border-glow/30"
            >
              <div className="w-12 h-12 rounded-xl bg-glow/10 border border-glow/20 flex items-center justify-center mb-5 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105">
                <item.icon size={22} className="text-glow" />
              </div>
              <h3 className="font-heading text-lg font-bold text-hero-foreground mb-2">{item.title}</h3>
              <p className="text-hero-foreground/50 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default About;
