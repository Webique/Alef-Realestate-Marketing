"use client";

import {
  Database,
  Megaphone,
  Percent,
  Share2,
  TrendingUp,
  Users
} from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function SpeedSection() {
  const t = useTranslations("IndexPage.Speed");

  const features = [
    { icon: Users, text: t("features.team") },
    { icon: TrendingUp, text: t("features.followup") },
    { icon: Megaphone, text: t("features.promotion") },
    { icon: Database, text: t("features.database") },
    { icon: Percent, text: t("features.financing") },
    { icon: Share2, text: t("features.reach") }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary))_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Image */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative Elements */}
              <div className="bg-primary/10 absolute -end-6 -top-6 h-40 w-40 rounded-3xl" />
              <div className="bg-accent/10 absolute -bottom-6 -start-6 h-40 w-40 rounded-3xl" />

              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <ExportedImage
                  src="/images/4.jpeg"
                  alt="Fast Execution"
                  width={600}
                  height={700}
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <m.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -end-6 top-1/2 -translate-y-1/2 rounded-2xl border border-white/20 bg-white/95 p-6 shadow-xl backdrop-blur-sm"
              >
                <div className="text-center">
                  <div className="text-primary mb-2 text-4xl font-bold">
                    60%
                  </div>
                  <div className="text-sm font-medium text-gray-600">
                    تسريع وتيرة البيع
                  </div>
                </div>
              </m.div>
            </div>
          </m.div>

          {/* Right - Content */}
          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="border-primary/20 bg-primary/5 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2">
              <TrendingUp className="text-primary h-4 w-4" />
              <span className="text-primary text-sm font-semibold">
                {t("badge")}
              </span>
            </div>

            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              {t("title")}
            </h2>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="hover:border-primary/30 group flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:shadow-md"
                >
                  <div className="bg-primary/10 group-hover:bg-primary/20 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg transition-colors">
                    <feature.icon className="text-primary h-5 w-5" />
                  </div>
                  <p className="pt-1.5 text-base font-medium text-gray-700">
                    {feature.text}
                  </p>
                </m.div>
              ))}
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
