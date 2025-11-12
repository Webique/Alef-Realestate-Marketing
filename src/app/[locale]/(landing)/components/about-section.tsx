"use client";

import { Award, Building2, Users } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import { AnimatedCounter } from "@/components/animated-counter";

export default function AboutSection() {
  const t = useTranslations("IndexPage.About");

  const stats = [
    { icon: Building2, value: 35, label: t("stats.sales") },
    { icon: Users, value: 60, label: t("stats.acceleration") },
    { icon: Award, value: 45, label: t("stats.contracts") }
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="border-primary/20 bg-primary/5 mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2">
            <Building2 className="text-primary h-4 w-4" />
            <span className="text-primary text-sm font-semibold">
              {t("badge")}
            </span>
          </div>

          <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>

          <p className="mb-12 text-lg leading-relaxed text-gray-600 sm:text-xl">
            {t("description")}
          </p>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="from-primary/20 to-primary/10 absolute -inset-1 rounded-2xl bg-gradient-to-r opacity-0 blur transition duration-300 group-hover:opacity-100" />
                <div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow duration-300 group-hover:shadow-lg">
                  <stat.icon className="text-primary mx-auto mb-4 h-10 w-10" />
                  <div className="mb-2 text-4xl font-bold text-gray-900">
                    <AnimatedCounter end={stat.value} />
                    <span>+</span>
                  </div>
                  <div className="text-sm font-medium text-gray-600">
                    {stat.label}
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}
