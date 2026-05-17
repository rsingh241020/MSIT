import { SiteFooter } from "@/components/shared/site-footer";
import { SiteNavbar } from "@/components/shared/site-navbar";
import { SiteShell } from "@/components/shared/site-shell";
import { AboutSection } from "@/sections/about-section";
import { CareersPreviewSection } from "@/sections/careers-preview-section";
import { ContactSection } from "@/sections/contact-section";
import { HeroSection } from "@/sections/hero-section";
import { PortfolioSection } from "@/sections/portfolio-section";
import { ServicesSection } from "@/sections/services-section";
import { TechnologiesSection } from "@/sections/technologies-section";
import { TestimonialsSection } from "@/sections/testimonials-section";
import { WhyChooseUsSection } from "@/sections/why-choose-us-section";

export default function HomePage() {
  return (
    <SiteShell>
      <SiteNavbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TechnologiesSection />
        <PortfolioSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <CareersPreviewSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </SiteShell>
  );
}
