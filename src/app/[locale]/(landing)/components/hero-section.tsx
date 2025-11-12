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
    <section className="bg-background relative min-h-screen w-full overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_hsl(var(--primary))_1px,_transparent_1px)] bg-[length:40px_40px]" />
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
          className="bg-primary absolute -start-20 top-20 h-96 w-96 rounded-full blur-[120px]"
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
          className="bg-accent absolute -end-20 bottom-20 h-96 w-96 rounded-full blur-[120px]"
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
                <div className="from-primary to-accent absolute -inset-1 rounded-full bg-gradient-to-r opacity-20 blur transition duration-300 group-hover:opacity-30" />
                <div className="border-primary/30 relative flex items-center gap-2 rounded-full border bg-white px-5 py-2.5 shadow-sm">
                  <Building2 className="text-primary h-4 w-4" />
                  <span className="text-primary text-sm font-semibold">
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
              className="text-secondary mb-6 text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl"
            >
              {t("title")}
            </m.h1>

            {/* Subtitle */}
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-primary mb-4 text-lg font-medium sm:text-xl"
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
                className="bg-secondary hover:bg-secondary/90 group h-auto rounded-full px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl"
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
                className="border-secondary text-secondary hover:bg-secondary h-auto rounded-full border-2 bg-transparent px-8 py-4 text-base font-semibold transition-all hover:text-white"
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
              <div className="border-primary/20 flex items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-sm">
                <Home className="text-primary h-4 w-4" />
                <span className="text-sm font-medium text-gray-700">
                  احترافية عالية
                </span>
              </div>
              <div className="border-primary/20 flex items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-sm">
                <Sparkles className="text-primary h-4 w-4" />
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
              <div className="bg-primary/10 absolute -start-6 -top-6 h-32 w-32 rounded-3xl" />
              <div className="bg-accent/10 absolute -bottom-6 -end-6 h-32 w-32 rounded-3xl" />

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
                className="absolute -bottom-6 -start-6 rounded-2xl border border-white/20 bg-white/95 p-6 shadow-xl backdrop-blur-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-primary flex h-12 w-12 items-center justify-center rounded-full">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-secondary text-2xl font-bold">35+</div>
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
        className="absolute bottom-8 start-1/2 z-20 -translate-x-1/2"
      >
        <m.a
          href="#about"
          className="hover:text-primary flex flex-col items-center gap-2 text-gray-600 transition-colors"
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
            <m.div className="bg-primary h-2 w-2 rounded-full" />
          </m.div>
        </m.a>
      </m.div>
    </section>
  );
}
