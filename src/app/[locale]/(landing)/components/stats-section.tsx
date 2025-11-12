"use client";

import { Database, TrendingUp, Users, Zap } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

export default function StatsSection() {
  const t = useTranslations("IndexPage.Stats");

  const stats = [
    {
      icon: TrendingUp,
      value: t("sales.value"),
      label: t("sales.label"),
      gradient: "from-[#8B7355] to-[#A89B8C]"
    },
    {
      icon: Zap,
      value: t("acceleration.value"),
      label: t("acceleration.label"),
      gradient: "from-[#4A5D4F] to-[#6B8E7D]"
    },
    {
      icon: Users,
      value: t("referrals.value"),
      label: t("referrals.label"),
      gradient: "from-[#A89B8C] to-[#C4B5A0]"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="border-primary/20 bg-primary/5 mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2">
            <TrendingUp className="text-primary h-4 w-4" />
            <span className="text-primary text-sm font-semibold">
              {t("badge")}
            </span>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
        </m.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div
                className="absolute -inset-1 rounded-3xl bg-gradient-to-r opacity-0 blur transition duration-300 group-hover:opacity-100"
                style={{
                  backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`
                }}
              />
              <div className="relative h-full rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-300 group-hover:shadow-xl">
                <div
                  className={`mx-auto mb-6 inline-flex rounded-2xl bg-gradient-to-r ${stat.gradient} p-4`}
                >
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="mb-2 text-5xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-600">
                  {stat.label}
                </div>
              </div>
            </m.div>
          ))}
        </div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="border-primary/20 bg-primary/5 mx-auto inline-flex items-center gap-3 rounded-2xl border px-6 py-4">
            <Database className="text-primary h-6 w-6" />
            <span className="text-base font-medium text-gray-700">
              {t("database.label")}
            </span>
          </div>
        </m.div>
      </div>
    </section>
  );
}
