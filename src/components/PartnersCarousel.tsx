import { motion } from "framer-motion";
import albertaGovernment from "@/assets/partners/alberta-government.png";
import albertaInfrastructure from "@/assets/partners/alberta-infrastructure.png";
import albertaInnovates from "@/assets/partners/alberta-innovates.png";
import insightRisk from "@/assets/partners/insight-risk.png";
import strathconaCounty from "@/assets/partners/strathcona-county.png";
import sturgeonCounty from "@/assets/partners/sturgeon-county.png";
import transitionAccelerator from "@/assets/partners/transition-accelerator.png";

const partners = [
  { name: "Alberta Government", logo: albertaGovernment },
  { name: "Alberta Infrastructure", logo: albertaInfrastructure },
  { name: "Alberta Innovates", logo: albertaInnovates },
  { name: "Insight Risk", logo: insightRisk },
  { name: "Strathcona County", logo: strathconaCounty },
  { name: "Sturgeon County", logo: sturgeonCounty },
  { name: "The Transition Accelerator", logo: transitionAccelerator },
];

const PartnersCarousel = () => (
  <section className="relative overflow-hidden border-y border-glow/10 bg-white py-16">
    <div className="mx-auto mb-10 max-w-7xl px-6 text-center">
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xs font-medium uppercase tracking-[0.22em] text-glow"
      >
        Working across Alberta
      </motion.span>
      <h2 className="mt-3 font-heading text-2xl font-semibold tracking-[-0.025em] text-hero-foreground md:text-3xl">
        Trusted by public, industry, and innovation partners.
      </h2>
    </div>

    <div className="partner-mask relative">
      <div className="partner-track flex w-max items-center gap-5">
        {[...partners, ...partners].map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="flex h-28 w-64 shrink-0 items-center justify-center rounded-2xl border border-glow/10 bg-hero-bg px-7 shadow-[0_18px_45px_-38px_hsl(var(--glow)/0.5)]"
          >
            <img src={partner.logo} alt={partner.name} className="max-h-16 max-w-full object-contain opacity-75 grayscale-[15%]" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersCarousel;
