"use client";

import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { FaSnapchat, FaXTwitter } from "react-icons/fa6";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

import { siteConfig } from "@/config/site";

// TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a4.85 4.85 0 0 0 4.09-4.9c0-.26-.03-.52-.07-.78Z" />
  </svg>
);

export default function ContactSection() {
  const t = useTranslations("IndexPage.Contact");

  return (
    <section
      id="contact"
      className="from-secondary to-secondary/80 relative overflow-hidden bg-gradient-to-br py-20 lg:py-32"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_1px)] bg-[length:40px_40px]" />
      </div>

      {/* Decorative Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-primary/20 absolute -start-20 top-20 h-96 w-96 rounded-full blur-[120px]" />
        <div className="bg-accent/20 absolute -end-20 bottom-20 h-96 w-96 rounded-full blur-[120px]" />
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

            {/* Contact Info */}
            <div className="mb-10 space-y-4">
              <a
                href={`tel:${siteConfig.support.phone}`}
                className="group flex items-center gap-4 text-white/90 transition-colors hover:text-white"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 transition-colors group-hover:bg-white/15">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-white/60">{t("callUs")}</div>
                  <div dir="ltr" className="font-semibold">
                    {siteConfig.support.phone}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.support.email}`}
                className="group flex items-center gap-4 text-white/90 transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 transition-colors group-hover:bg-white/15">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-white/60">{t("email")}</div>
                  <div className="font-semibold">
                    {siteConfig.support.email}
                  </div>
                </div>
              </a>

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

            {/* Social Media Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                {t("connectWithUs")}
              </h4>
              <div className="flex gap-3">
                {[
                  {
                    icon: Instagram,
                    href: siteConfig.links.instagram,
                    label: "Instagram"
                  },
                  {
                    icon: FaXTwitter,
                    href: siteConfig.links.x,
                    label: "X (Twitter)"
                  },
                  {
                    icon: TikTokIcon,
                    href: siteConfig.links.tiktok,
                    label: "TikTok"
                  },
                  {
                    icon: FaSnapchat,
                    href: siteConfig.links.snapchat,
                    label: "Snapchat"
                  }
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <m.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white/5 transition-all hover:bg-white/10"
                      aria-label={social.label}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="relative z-10 h-5 w-5 text-white" />
                      <div className="from-primary to-accent absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity group-hover:opacity-20" />
                    </m.a>
                  );
                })}
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
                  <div className="text-primary mb-2 text-3xl font-bold">
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
