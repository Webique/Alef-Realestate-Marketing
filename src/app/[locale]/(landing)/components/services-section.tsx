"use client";

import {
  Building,
  Database,
  FileCheck,
  FileText,
  Megaphone,
  Palette,
  PartyPopper,
  Smartphone,
  Store,
  Target,
  TrendingUp,
  Users
} from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

export default function ServicesSection() {
  const t = useTranslations("IndexPage.Services");

  const services = [
    { icon: Building, text: t("list.office") },
    { icon: Users, text: t("list.staff") },
    { icon: TrendingUp, text: t("list.management") },
    { icon: Database, text: t("list.database") },
    { icon: Megaphone, text: t("list.advertising") },
    { icon: Smartphone, text: t("list.digital") },
    { icon: PartyPopper, text: t("list.launch") },
    { icon: FileCheck, text: t("list.legal") },
    { icon: Palette, text: t("list.design") },
    { icon: Store, text: t("list.exhibition") },
    { icon: Target, text: t("list.campaigns") },
    { icon: FileText, text: t("list.reports") }
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 lg:py-32"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary))_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="border-primary/20 bg-primary/5 mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2">
            <Building className="text-primary h-4 w-4" />
            <span className="text-primary text-sm font-semibold">
              {t("badge")}
            </span>
          </div>

          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>

          <p className="text-lg text-gray-600">{t("subtitle")}</p>
        </m.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="hover:border-primary/30 flex h-full items-start gap-3 rounded-xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:shadow-lg">
                <div className="from-primary to-accent flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br">
                  <service.icon className="h-5 w-5 text-white" />
                </div>
                <p className="pt-1 text-sm font-medium leading-relaxed text-gray-700">
                  {service.text}
                </p>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
