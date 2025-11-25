"use client";

import { Building2, Database, FileText, TrendingUp, Zap } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useLocale, useTranslations } from "next-intl";

export default function AboutSection() {
  const locale = useLocale();
  const t = useTranslations("IndexPage.About");
  const tStats = useTranslations("IndexPage.Stats");

  const stats = [
    {
      icon: TrendingUp,
      value: tStats("sales.value"),
      label: tStats("sales.label"),
      suffix: locale === "ar" ? "مليون" : undefined,
      gradient: "from-primary to-accent"
    },
    {
      icon: Zap,
      value: tStats("acceleration.value"),
      label: tStats("acceleration.label"),
      gradient: "from-primary to-accent"
    },
    {
      icon: FileText,
      value: tStats("contracts.value"),
      label: tStats("contracts.label"),
      suffix: locale === "ar" ? "مليون" : undefined,
      gradient: "from-accent to-accent/80"
    }
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-20 lg:py-32"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_hsl(var(--primary))_1px,_transparent_1px)] bg-[length:40px_40px]" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-4xl text-center"
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
        </m.div>

        {/* Stats Section */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-16 max-w-3xl"
        >
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
              {tStats("title")}
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {stats.map((stat, index) => {
              return (
                <m.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
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
                    <div className="mb-2 text-sm font-medium text-gray-600 leading-relaxed">
                      {stat.label}
                    </div>
                    <div className="text-4xl font-bold text-gray-900">
                      {stat.value}
                      {stat.suffix && <span className="text-2xl"> {stat.suffix}</span>}
                    </div>
                  </div>
                </m.div>
              );
            })}
          </div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="border-primary/20 bg-primary/5 mx-auto inline-flex items-center gap-3 rounded-2xl border px-6 py-4">
              <Database className="text-primary h-6 w-6" />
              <span className="text-base font-medium text-gray-700">
                {tStats("database.label")}
              </span>
            </div>
          </m.div>
        </m.div>

        {/* Image Gallery */}
        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {[
            "/images/5876045e-1b24-42d5-9e26-b8bfe3fe808c.jpg",
            "/images/84ab8c3c-326a-48b6-a19d-2498bc8127c7.jpg",
            "/images/f8760d66-72f6-4fe1-85f3-20c160926438.jpg",
            "/images/Generated Image September 03, 2025 - 11_25PM.jpeg"
          ].map((src, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <ExportedImage
                src={src}
                alt={`ALEF Real Estate Project ${index + 1}`}
                width={300}
                height={300}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
