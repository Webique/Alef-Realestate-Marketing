"use client";

import { ArrowRight, Building2, Home, Sparkles } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function HeroSection() {
  const t = useTranslations("IndexPage.Hero");

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#F5F3EF]">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_#8B7355_1px,_transparent_1px)] bg-[length:40px_40px]" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <m.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-[#8B7355] blur-[120px]"
        />
        <m.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.08, 0.12, 0.08]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-[#A89B8C] blur-[120px]"
        />
      </div>

      <div className="container relative mx-auto flex min-h-screen items-center px-4 py-32 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            {/* Badge */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6 inline-flex"
            >
              <div className="group relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#8B7355] to-[#A89B8C] opacity-20 blur transition duration-300 group-hover:opacity-30" />
                <div className="relative flex items-center gap-2 rounded-full border border-[#8B7355]/30 bg-white px-5 py-2.5 shadow-sm">
                  <Building2 className="h-4 w-4 text-[#8B7355]" />
                  <span className="text-sm font-semibold text-[#8B7355]">
                    {t("subtitle")}
                  </span>
                </div>
              </div>
            </m.div>

            {/* Main Title */}
            <m.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-6 text-5xl font-bold leading-tight text-[#2C2C2C] sm:text-6xl lg:text-7xl"
            >
              {t("title")}
            </m.h1>

            {/* Subtitle */}
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-4 text-lg font-medium text-[#8B7355] sm:text-xl"
            >
              {t("subtitle")}
            </m.p>

            {/* Description */}
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-8 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg"
            >
              {t("description")}
            </m.p>

            {/* CTA Buttons */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button
                className="group h-auto rounded-full bg-[#2C2C2C] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#1A1A1A] hover:shadow-xl"
                asChild
              >
                <a
                  href={siteConfig.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("cta")}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 rtl:ml-0 rtl:mr-2 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                </a>
              </Button>

              <Button
                className="h-auto rounded-full border-2 border-[#2C2C2C] bg-transparent px-8 py-4 text-base font-semibold text-[#2C2C2C] transition-all hover:bg-[#2C2C2C] hover:text-white"
                asChild
              >
                <a href="#about">{t("learnMore")}</a>
              </Button>
            </m.div>

            {/* Feature Tags */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <div className="flex items-center gap-2 rounded-full border border-[#8B7355]/20 bg-white px-4 py-2 shadow-sm">
                <Home className="h-4 w-4 text-[#8B7355]" />
                <span className="text-sm font-medium text-gray-700">
                  احترافية عالية
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-[#8B7355]/20 bg-white px-4 py-2 shadow-sm">
                <Sparkles className="h-4 w-4 text-[#8B7355]" />
                <span className="text-sm font-medium text-gray-700">
                  نتائج مضمونة
                </span>
              </div>
            </m.div>
          </m.div>

          {/* Right Image */}
          <m.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -left-6 -top-6 h-32 w-32 rounded-3xl bg-[#8B7355]/10" />
              <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-3xl bg-[#A89B8C]/10" />

              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <ExportedImage
                  src="/images/hero.jpeg"
                  alt="ALEF Real Estate - Modern Architecture"
                  width={700}
                  height={800}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>

              {/* Floating Card */}
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 rounded-2xl border border-white/20 bg-white/95 p-6 shadow-xl backdrop-blur-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8B7355]">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#2C2C2C]">35+</div>
                    <div className="text-sm text-gray-600">
                      مليون ريال مبيعات
                    </div>
                  </div>
                </div>
              </m.div>
            </div>
          </m.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <m.a
          href="#about"
          className="flex flex-col items-center gap-2 text-gray-600 transition-colors hover:text-[#8B7355]"
        >
          <m.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-xs font-medium uppercase tracking-widest"
          >
            {t("scrollText")}
          </m.span>
          <m.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-gray-300 p-1"
          >
            <m.div className="h-2 w-2 rounded-full bg-[#8B7355]" />
          </m.div>
        </m.a>
      </m.div>
    </section>
  );
}
