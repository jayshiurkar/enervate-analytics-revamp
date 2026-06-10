import { motion } from "framer-motion";
import { Box, ExternalLink, FlaskConical, Gauge, Leaf, Zap } from "lucide-react";

const metrics = [
  { icon: FlaskConical, label: "Hydrogen purity", value: "99.99%" },
  { icon: Gauge, label: "Delivery pressure", value: "35 bar" },
  { icon: Leaf, label: "Operating emissions", value: "Zero" },
];

const HydrogenPlantShowcase = () => (
  <section className="relative overflow-hidden bg-hero-bg py-24 lg:py-32">
    <div className="technical-grid absolute inset-0 opacity-30" />
    <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-glow/10 blur-3xl" />
    <div className="relative mx-auto max-w-7xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
      >
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-glow/20 bg-white/70 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-glow shadow-sm backdrop-blur">
            <Box size={14} /> Interactive system model
          </div>
          <h2 className="max-w-3xl font-heading text-3xl font-semibold leading-tight tracking-[-0.04em] text-hero-foreground md:text-5xl">
            Explore a green hydrogen <span className="text-gradient">production system.</span>
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-hero-foreground/55">
          Rotate and inspect the system while live data layers connect physical equipment to engineering decisions.
        </p>
      </motion.div>

      <div className="grid gap-5 lg:grid-cols-[1fr_280px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-glow/15 bg-white shadow-[0_30px_100px_-50px_hsl(var(--glow)/0.45)]"
        >
          <iframe
            title="Interactive Creo Hydrogen Hub 3D model"
            className="absolute inset-0 h-full w-full"
            src="https://sketchfab.com/models/be71ed54e6674692845cbac18ef54bce/embed?autostart=1&preload=1&ui_theme=light&ui_infos=0&ui_help=0&ui_inspector=0&ui_settings=0&ui_watermark_link=0"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            allowFullScreen
          />

          <div className="pointer-events-none absolute inset-0 border-[12px] border-white/20" />
          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-glow/25"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[54%] w-[54%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-glow/15"
            animate={{ rotate: -360 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute left-5 top-5 rounded-xl border border-glow/15 bg-white/85 px-4 py-3 shadow-lg backdrop-blur-md"
          >
            <div className="mb-1 flex items-center gap-2 text-[9px] uppercase tracking-[0.18em] text-hero-foreground/45">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" /> Digital twin online
            </div>
            <div className="font-heading text-sm text-hero-foreground">Hydrogen hub simulation</div>
          </motion.div>

          <div className="pointer-events-none absolute bottom-5 left-5 right-5 flex justify-end">
            <div className="rounded-full border border-glow/15 bg-white/85 px-4 py-2 text-[9px] uppercase tracking-[0.16em] text-hero-foreground/50 shadow-lg backdrop-blur">
              Drag to rotate · Scroll to zoom
            </div>
          </div>
        </motion.div>

        <div className="grid gap-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-glow/15 bg-white p-5 shadow-[0_20px_50px_-35px_hsl(var(--glow)/0.45)]"
            >
              <div className="mb-7 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-glow/10 text-glow">
                  <metric.icon size={19} />
                </div>
                <motion.span
                  className="h-2 w-2 rounded-full bg-emerald-500"
                  animate={{ boxShadow: ["0 0 0 0 rgb(34 197 94 / 0.3)", "0 0 0 8px rgb(34 197 94 / 0)", "0 0 0 0 rgb(34 197 94 / 0)"] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.4 }}
                />
              </div>
              <div className="font-heading text-2xl font-semibold text-hero-foreground">{metric.value}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.12em] text-hero-foreground/45">{metric.label}</div>
            </motion.div>
          ))}

          <div className="rounded-2xl border border-glow/15 bg-gradient-to-br from-glow to-blue-700 p-5 text-white shadow-xl">
            <Zap size={20} className="mb-5" />
            <div className="mb-2 font-heading text-lg font-semibold">From renewable power to clean molecules.</div>
            <a
              href="https://sketchfab.com/3d-models/creo-hydrogen-hub-15-be71ed54e6674692845cbac18ef54bce"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-white/75 transition-colors hover:text-white"
            >
              Model by Creo / kcmedia <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HydrogenPlantShowcase;
