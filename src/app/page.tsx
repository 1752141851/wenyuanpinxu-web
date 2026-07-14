import { SiteHeader } from "@/components/layout/site-header";
import { CompanyIntroSection } from "@/components/sections/company-intro-section";
import { BusinessValueSection } from "@/components/sections/business-value-section";
import { CapabilityMatrix } from "@/components/sections/capability-matrix";
import { CooperationSection } from "@/components/sections/cooperation-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ServiceValueGrid } from "@/components/sections/service-value-grid";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <CompanyIntroSection />
      <ServiceValueGrid />
      <BusinessValueSection />
      <CapabilityMatrix />
      <CooperationSection />
    </main>
  );
}
