import HeroSection from "@/components/hero-section/HeroSection.component";
import ServicesSection from "@/components/services-section/ServicesSection.component";
import AboutSection from "@/components/about-section/AboutSection.component";
import SkillsSection from "@/components/skills-section/SkillsSection.component";
import PortfolioSection from "@/components/portfolio-section/PortfolioSection.component";
import ContactSection from "@/components/contact-section/ContactSection.component";

export default function page() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}
