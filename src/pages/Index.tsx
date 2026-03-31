import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PublicationsSection from "@/components/PublicationsSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-hero-bg">
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <PublicationsSection />
    <ContactCTA />
    <Footer />
  </div>
);

export default Index;
