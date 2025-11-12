import type { Locale } from "next-intl";

import { setRequestLocale } from "next-intl/server";
import { use } from "react";

import WhatsAppFloat from "@/components/whats-app-float";

import ContactSection from "./components/contact-section";
import ExecutionSection from "./components/execution-section";
import PricingSection from "./components/pricing-section";
import ServicesSection from "./components/services-section";
import SpeedSection from "./components/speed-section";

export default function IndexPage({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  return (
    <main>
      {/* <HeroSection /> */}
      {/* <AboutSection /> */}
      {/* <StatsSection /> */}
      {/* <WhyUsSection /> */}
      <SpeedSection />
      <ExecutionSection />
      <ServicesSection />
      <PricingSection />
      <ContactSection />
      <WhatsAppFloat />
    </main>
  );
}
