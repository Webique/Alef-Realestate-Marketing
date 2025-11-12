"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

import { siteConfig } from "@/config/site";

export default function ContactSection() {
  const t = useTranslations("IndexPage.Contact");

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-[#2C2C2C] to-[#1A1A1A] py-20 lg:py-32"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_1px)] bg-[length:40px_40px]" />
      </div>

      {/* Decorative Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -start-20 top-20 h-96 w-96 rounded-full bg-[#8B7355]/20 blur-[120px]" />
        <div className="absolute -end-20 bottom-20 h-96 w-96 rounded-full bg-[#A89B8C]/20 blur-[120px]" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Start - Content */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <Phone className="h-4 w-4 text-white" />
              <span className="text-sm font-semibold text-white">
                {t("badge")}
              </span>
            </div>

            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {t("title")}
            </h2>

            <p className="mb-10 text-lg text-white/80 sm:text-xl">
              {t("description")}
            </p>

            {/* Contact Info */}
            <div className="mb-10 space-y-4">
              <div className="flex items-center gap-4 text-white/90">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-white/60">{t("callUs")}</div>
                  <div dir="ltr" className="font-semibold">
                    {siteConfig.support.phone}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-white/90">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-white/60">{t("email")}</div>
                  <div className="font-semibold">
                    {siteConfig.support.email}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-white/90">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-white/60">{t("location")}</div>
                  <div className="font-semibold">{t("saudiArabia")}</div>
                </div>
              </div>
            </div>
          </m.div>

          {/* End - Image */}
          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -end-6 -top-6 h-full w-full rounded-3xl border-2 border-white/20" />

              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <ExportedImage
                  src="/images/Generated Image September 05, 2025 - 11_10PM.jpeg"
                  alt="Contact ALEF Real Estate"
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
                className="absolute -bottom-6 -start-6 rounded-2xl border border-white/20 bg-white p-6 shadow-xl"
              >
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-[#8B7355]">
                    24/7
                  </div>
                  <div className="text-sm font-medium text-gray-600">
                    {t("available")}
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
