import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const location = useLocation();
  const submitted = new URLSearchParams(location.search).get("sent") === "1";

  return (
    <div className="min-h-screen bg-hero-bg">
      <Navbar />
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-glow text-xs font-medium uppercase tracking-widest">Get in Touch</span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-hero-foreground mt-3">
              Contact <span className="text-gradient">Us</span>
            </h1>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="font-heading text-2xl font-bold text-hero-foreground mb-6">
                Let's discuss your project
              </h2>
              <p className="text-hero-foreground/50 mb-10 leading-relaxed">
                Contact us today to discuss how we can support your hydrogen safety, risk assessment, and energy system needs.
              </p>

              <div className="flex flex-col gap-6">
                <a href="mailto:services@enervateanalytics.ca" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-glow/10 border border-glow/20 flex items-center justify-center group-hover:bg-glow/20 transition-colors">
                    <Mail size={18} className="text-glow" />
                  </div>
                  <div>
                    <div className="text-hero-foreground/40 text-xs uppercase tracking-wider">Email</div>
                    <div className="text-hero-foreground font-medium">services@enervateanalytics.ca</div>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-glow/10 border border-glow/20 flex items-center justify-center">
                    <MapPin size={18} className="text-glow" />
                  </div>
                  <div>
                    <div className="text-hero-foreground/40 text-xs uppercase tracking-wider">Address</div>
                    <div className="text-hero-foreground font-medium">Edmonton, Alberta, Canada</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {submitted && (
                <div className="mb-5 rounded-xl border border-emerald-500/20 bg-emerald-500/8 px-4 py-3 text-sm text-emerald-700">
                  Thank you. Your inquiry has been sent to our services team.
                </div>
              )}
              <form
                action="https://formsubmit.co/services@enervateanalytics.ca"
                method="POST"
                className="glass-card rounded-2xl p-8 space-y-5"
              >
                <input type="hidden" name="_subject" value="New Enervate Analytics website inquiry" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://www.enervateanalytics.ca/#/contact?sent=1" />
                <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
                <div>
                  <label htmlFor="name" className="text-hero-foreground/60 text-sm font-medium mb-1.5 block">Name *</label>
                  <input
                    id="name"
                    name="name"
                    required
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-surface-darker border border-hero-foreground/10 text-hero-foreground placeholder:text-hero-foreground/30 focus:outline-none focus:border-glow/40 transition-colors text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-hero-foreground/60 text-sm font-medium mb-1.5 block">Email *</label>
                  <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-surface-darker border border-hero-foreground/10 text-hero-foreground placeholder:text-hero-foreground/30 focus:outline-none focus:border-glow/40 transition-colors text-sm"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-hero-foreground/60 text-sm font-medium mb-1.5 block">Project context</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-surface-darker border border-hero-foreground/10 text-hero-foreground placeholder:text-hero-foreground/30 focus:outline-none focus:border-glow/40 transition-colors text-sm resize-none"
                    placeholder="What decision or challenge can we help with?"
                  />
                </div>
                <p className="text-hero-foreground/35 text-xs leading-relaxed">
                  Your inquiry will be delivered directly to our services inbox.
                </p>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg bg-glow text-hero-bg font-heading font-semibold text-sm hover:brightness-110 transition-all glow-border flex items-center justify-center gap-2"
                >
                  Send Inquiry <Send size={16} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
