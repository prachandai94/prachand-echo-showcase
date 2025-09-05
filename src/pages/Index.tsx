import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import HearUsSection from "@/components/HearUsSection";
import ArtistRosterSection from "@/components/ArtistRosterSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <HearUsSection />
      <ArtistRosterSection />
      <ContactSection />
    </main>
  );
};

export default Index;
