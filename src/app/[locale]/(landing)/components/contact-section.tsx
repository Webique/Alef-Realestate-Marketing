"use client";

import { ArrowRight, Phone } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function ContactSection() {
  const t = useTranslations("IndexPage.Contact");

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/90 py-20 lg:py-32">
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />

      <div className="container relative mx-auto px-4 sm:px-6">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <Phone className="h-4 w-4 text-white" />
            <span className="text-sm font-semibold text-white">{t("badge")}</span>
          </div>

          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>

          <p className="mb-10 text-lg text-white/90 sm:text-xl">
            {t("description")}
          </p>

          <Button
            className="h-auto rounded-full border-2 border-white bg-white px-10 py-4 text-lg font-bold text-primary shadow-2xl transition-all hover:bg-white/90 has-[>svg]:px-5"
            asChild
          >
            <m.a
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group"
            >
              {t("title")}
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
            </m.a>
          </Button>
        </m.div>
      </div>
    </section>
  );
}
