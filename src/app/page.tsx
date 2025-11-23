import HeroSection from "@/components/hero-section/HeroSection.component";
import ServicesSection from "@/components/services-section/ServicesSection.component";
import AboutSection from "@/components/about-section/AboutSection.component";
import SkillsSection from "@/components/skills-section/SkillsSection.component";

export default function page() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <SkillsSection />
    </>
  );
}
