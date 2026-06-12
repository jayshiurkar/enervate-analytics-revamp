import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/enervate-logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About Us", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all duration-500 ${
        scrolled
          ? "bg-hero-bg/85 border-b border-glow/10 shadow-[0_8px_30px_-20px_hsl(var(--glow)/0.5)]"
          : "bg-hero-bg/40 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Enervate Analytics"
            className="w-16 h-16 object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <span className="font-heading font-semibold text-hero-foreground text-xl tracking-tight">
            Enervate <span className="text-gradient">Analytics</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-body text-sm tracking-wide transition-colors relative ${
                location.pathname === item.path
                  ? "text-glow"
                  : "text-hero-foreground/70 hover:text-hero-foreground"
              }`}
            >
              {item.label}
              {location.pathname === item.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-glow rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-5 py-2 rounded-lg bg-glow/10 border border-glow/30 text-glow text-sm font-medium transition-all duration-300 hover:bg-glow/20 hover:shadow-[0_0_24px_-6px_hsl(var(--glow)/0.6)]"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-hero-foreground"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Scroll progress indicator */}
      <motion.div
        style={{ scaleX: progress }}
        className="absolute bottom-0 left-0 right-0 h-px origin-left bg-gradient-to-r from-glow/40 via-glow to-glow/40"
      />

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-hero-bg/95 backdrop-blur-xl border-t border-glow/10"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`font-body text-sm py-2 ${
                    location.pathname === item.path
                      ? "text-glow"
                      : "text-hero-foreground/70"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="px-5 py-2.5 rounded-lg bg-glow/10 border border-glow/30 text-glow text-sm font-medium text-center"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
