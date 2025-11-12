"use client";

import { CheckCircle2, FileCheck, Handshake, MapPin } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function ExecutionSection() {
  const t = useTranslations("IndexPage.Execution");

  const features = [
    { icon: MapPin, text: t("features.office") },
    { icon: Handshake, text: t("features.journey") },
    { icon: CheckCircle2, text: t("features.experience") },
    { icon: FileCheck, text: t("features.documents") }
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-32">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute end-0 top-0 h-96 w-96 rounded-full bg-[#8B7355]/5 blur-3xl" />
        <div className="absolute bottom-0 start-0 h-96 w-96 rounded-full bg-[#A89B8C]/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Content */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#8B7355]/20 bg-[#8B7355]/5 px-4 py-2">
              <Handshake className="h-4 w-4 text-[#8B7355]" />
              <span className="text-sm font-semibold text-[#8B7355]">
                {t("badge")}
              </span>
            </div>

            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              {t("title")}
            </h2>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#8B7355] to-[#A89B8C] shadow-lg">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="pt-2">
                    <p className="text-base font-medium leading-relaxed text-gray-700">
                      {feature.text}
                    </p>
                  </div>
                </m.div>
              ))}
            </div>

            {/* Stats Cards */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 grid grid-cols-2 gap-4"
            >
              <div className="rounded-2xl border border-[#8B7355]/20 bg-gradient-to-br from-[#8B7355]/5 to-transparent p-6">
                <div className="mb-2 text-3xl font-bold text-[#8B7355]">
                  100%
                </div>
                <div className="text-sm font-medium text-gray-600">
                  رضا العملاء
                </div>
              </div>
              <div className="rounded-2xl border border-[#8B7355]/20 bg-gradient-to-br from-[#A89B8C]/5 to-transparent p-6">
                <div className="mb-2 text-3xl font-bold text-[#8B7355]">
                  24/7
                </div>
                <div className="text-sm font-medium text-gray-600">
                  دعم متواصل
                </div>
              </div>
            </m.div>
          </m.div>

          {/* Right - Image */}
          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative Grid */}
              <div className="absolute -start-6 -top-6 h-full w-full rounded-3xl border-2 border-[#8B7355]/20" />

              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <ExportedImage
                  src="/images/19c72df0-fb90-49d2-8713-146c93dd633d.jpg"
                  alt="Deal Execution"
                  width={600}
                  height={700}
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* Floating Element */}
              <m.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-6 -start-6 rounded-2xl border border-white/20 bg-white/95 p-6 shadow-xl backdrop-blur-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#8B7355] to-[#A89B8C]">
                    <CheckCircle2 className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-600">
                      صفقات منجزة
                    </div>
                    <div className="text-2xl font-bold text-[#2C2C2C]">
                      500+
                    </div>
                  </div>
                </div>
              </m.div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
