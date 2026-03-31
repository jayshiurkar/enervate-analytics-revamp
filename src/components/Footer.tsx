import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="section-dark border-t border-glow/10">
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-glow/20 border border-glow/40 flex items-center justify-center font-heading font-bold text-glow text-lg">
              EA
            </div>
            <span className="font-heading font-semibold text-hero-foreground text-lg">
              Enervate Analytics
            </span>
          </div>
          <p className="text-hero-foreground/50 text-sm leading-relaxed max-w-xs">
            Engineering consulting for the most complex challenges in the energy sector.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-hero-foreground mb-4 text-sm uppercase tracking-wider">
            Quick Links
          </h4>
          <div className="flex flex-col gap-3">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Contact", path: "/contact" },
              { label: "Publications", href: "https://scholar.google.com/citations?user=eUUXQ80AAAAJ&hl=en" },
            ].map((item) =>
              "href" in item ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-hero-foreground/50 hover:text-glow text-sm transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  className="text-hero-foreground/50 hover:text-glow text-sm transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-hero-foreground mb-4 text-sm uppercase tracking-wider">
            Contact
          </h4>
          <div className="flex flex-col gap-3 text-sm text-hero-foreground/50">
            <a href="tel:7808854862" className="flex items-center gap-2 hover:text-glow transition-colors">
              <Phone size={14} /> +1 780-885-4862
            </a>
            <a href="mailto:services@enervateanalytics.ca" className="flex items-center gap-2 hover:text-glow transition-colors">
              <Mail size={14} /> services@enervateanalytics.ca
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={14} /> Edmonton, Alberta, Canada
            </span>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-hero-foreground/10 text-center text-hero-foreground/30 text-xs">
        © {new Date().getFullYear()} Enervate Analytics. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
