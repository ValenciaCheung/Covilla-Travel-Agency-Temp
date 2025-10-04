import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { DestinationsSection } from "@/components/DestinationsSection";
import BenefitsSection from "@/components/BenefitsSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { VacationTabsSection } from "@/components/VacationTabsSection";
import { CTASection } from "@/components/CTASection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { AboutSection } from "@/components/AboutSection";
import { TeamSection } from "@/components/TeamSection";
import { BlogSection } from "@/components/BlogSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <HeroSection />
      <DestinationsSection />
      <BenefitsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <VacationTabsSection />
      <CTASection />
      <HowItWorksSection />
      <AboutSection />
      <TeamSection />
      <BlogSection />
      <Footer />
    </main>
  );
}
