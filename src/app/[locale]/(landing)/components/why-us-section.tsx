"use client";

import {
  Award,
  BarChart,
  FileText,
  Shield,
  Sparkles,
  Target
} from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

export default function WhyUsSection() {
  const t = useTranslations("IndexPage.WhyUs");

  const features = [
    {
      icon: Sparkles,
      title: t("features.branding.title"),
      description: t("features.branding.description")
    },
    {
      icon: Shield,
      title: t("features.trust.title"),
      description: t("features.trust.description")
    },
    {
      icon: Target,
      title: t("features.advertising.title"),
      description: t("features.advertising.description")
    },
    {
      icon: FileText,
      title: t("features.portfolio.title"),
      description: t("features.portfolio.description")
    },
    {
      icon: BarChart,
      title: t("features.reports.title"),
      description: t("features.reports.description")
    }
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="border-primary/20 bg-primary/5 mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2">
            <Award className="text-primary h-4 w-4" />
            <span className="text-primary text-sm font-semibold">
              {t("badge")}
            </span>
          </div>

          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>

          <p className="text-lg text-gray-600">{t("subtitle")}</p>
        </m.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="hover:border-primary/30 h-full rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-lg">
                <div className="bg-primary/10 mb-4 inline-flex rounded-xl p-3">
                  <feature.icon className="text-primary h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
