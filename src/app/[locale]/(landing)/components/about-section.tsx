"use client";

import { Award, Building2, Users } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
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
      className="relative overflow-hidden bg-white py-20 lg:py-32"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_#8B7355_1px,_transparent_1px)] bg-[length:40px_40px]" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#8B7355]/20 bg-[#8B7355]/5 px-4 py-2">
            <Building2 className="h-4 w-4 text-[#8B7355]" />
            <span className="text-sm font-semibold text-[#8B7355]">
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
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#8B7355]/20 to-[#A89B8C]/10 opacity-0 blur transition duration-300 group-hover:opacity-100" />
                <div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow duration-300 group-hover:shadow-lg">
                  <stat.icon className="mx-auto mb-4 h-10 w-10 text-[#8B7355]" />
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
