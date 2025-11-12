import type { Locale } from "next-intl";

import { setRequestLocale } from "next-intl/server";
import { use } from "react";

import WhatsAppFloat from "@/components/whats-app-float";

import AboutSection from "./components/about-section";
import ContactSection from "./components/contact-section";
import HeroSection from "./components/hero-section";
import PricingSection from "./components/pricing-section";
import ServicesSection from "./components/services-section";
import StatsSection from "./components/stats-section";
import WhyUsSection from "./components/why-us-section";

export default function IndexPage({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <WhyUsSection />
      <ServicesSection />
      <PricingSection />
      <ContactSection />
      <WhatsAppFloat />
    </main>
  );
}
