import { TopSection } from "@/components/TopSection";
import { VideoSection } from "@/components/VideoSection";
import { FooterSection } from "@/components/FooterSection";
import { ClientSection } from "@/components/ClientsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactUsSection } from "@/components/ContactUsSection";

export default function Home() {
  return (
    <main>
      <TopSection />
      <ServicesSection />
      <VideoSection />
      <ClientSection />
      <ContactUsSection />
      <FooterSection />
    </main>
  );
}
