"use client";

import { Home } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function HeroSection() {
  const t = useTranslations("IndexPage.Hero");

  return (
    <section className="from-primary/3 via-primary/8 to-primary/20 relative w-full bg-gradient-to-b py-20 lg:h-screen lg:min-h-[680px] lg:py-24 2xl:h-[780px]">
      {/* Diagonal Curved Line SVG */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <path
          d="M 0 80 Q 30 40, 50 45 T 100 20"
          stroke="currentColor"
          strokeWidth="55"
          fill="none"
          className="text-primary/5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          {/* Top Subtitle */}
          <m.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-center text-xl text-gray-700 sm:text-2xl md:text-3xl"
          >
            {t("subtitle")}
          </m.p>

          {/* Large Company Name */}
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <h1 className="text-center text-[3.5rem] font-black uppercase leading-none tracking-tighter text-gray-900 sm:text-[4.5rem] md:text-[5.5rem] lg:text-[7.5rem] xl:text-[8.5rem]">
              {t("title")}
            </h1>
          </m.div>

          {/* Content Grid */}
          <div className="mt-[-89px] grid grid-cols-1 gap-8 lg:grid-cols-[1fr_2fr_1fr] lg:gap-12">
            {/* Start Side Content */}
            <m.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col space-y-6 pt-20 text-center lg:pt-40 lg:text-start"
            >
              <p className="text-sm leading-relaxed text-gray-800 sm:text-base">
                {t("description")}
              </p>
              <Button
                className="mx-auto h-auto w-fit rounded-full bg-[#FAF34F] px-6 py-3 text-sm font-semibold text-gray-900 transition-all hover:bg-[#FAF34F]/90 lg:mx-0"
                asChild
              >
                <a
                  href={siteConfig.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("cta")}
                </a>
              </Button>
            </m.div>

            {/* Center - Hero Image */}
            <m.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative z-10 flex items-end justify-center"
            >
              <ExportedImage
                src="/images/hero.png"
                alt="ALEF Real Estate - Modern Architecture"
                width={800}
                height={900}
                className="h-auto w-full max-w-md object-contain lg:max-w-lg xl:max-w-lg 2xl:max-w-3xl"
                priority
              />
            </m.div>

            {/* End Side Feature Tags */}
            <m.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col space-y-6 lg:pt-40"
            >
              <div className="flex flex-wrap items-center justify-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-full border border-black">
                  <Home className="h-4 w-4 text-gray-700" />
                </div>
                <div className="flex items-center rounded-full border border-black px-4 py-2">
                  <span className="text-sm font-medium text-gray-800">
                    {t("features.professionalism")}
                  </span>
                </div>
                <div className="flex items-center rounded-full border border-black px-4 py-2">
                  <span className="text-sm font-medium text-gray-800">
                    {t("features.results")}
                  </span>
                </div>
                <div className="flex items-center rounded-full border border-black px-4 py-2">
                  <span className="text-sm font-medium text-gray-800">
                    {t("features.service")}
                  </span>
                </div>
                <a
                  href="#about"
                  className="text-sm font-medium text-gray-800 underline transition-colors hover:text-gray-900"
                >
                  {t("learnMore")}
                </a>
              </div>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
}
