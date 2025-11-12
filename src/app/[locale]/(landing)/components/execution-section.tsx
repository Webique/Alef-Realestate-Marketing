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
        <div className="bg-primary/5 absolute end-0 top-0 h-96 w-96 rounded-full blur-3xl" />
        <div className="bg-accent/5 absolute bottom-0 start-0 h-96 w-96 rounded-full blur-3xl" />
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
            <div className="border-primary/20 bg-primary/5 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2">
              <Handshake className="text-primary h-4 w-4" />
              <span className="text-primary text-sm font-semibold">
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
                  <div className="from-primary to-accent flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br shadow-lg">
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
              <div className="border-primary/20 from-primary/5 rounded-2xl border bg-gradient-to-br to-transparent p-6">
                <div className="text-primary mb-2 text-3xl font-bold">100%</div>
                <div className="text-sm font-medium text-gray-600">
                  {t("stats.satisfaction")}
                </div>
              </div>
              <div className="border-primary/20 from-accent/5 rounded-2xl border bg-gradient-to-br to-transparent p-6">
                <div className="text-primary mb-2 text-3xl font-bold">24/7</div>
                <div className="text-sm font-medium text-gray-600">
                  {t("stats.support")}
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
              <div className="border-primary/20 absolute -start-6 -top-6 h-full w-full rounded-3xl border-2" />

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
                  <div className="from-primary to-accent flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br">
                    <CheckCircle2 className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-600">
                      {t("stats.deals")}
                    </div>
                    <div className="text-secondary text-2xl font-bold">
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
