"use client";

import {
  Instagram,
  Mail,
  MapPin,
  Phone
} from "lucide-react";
import { FaSnapchat, FaXTwitter } from "react-icons/fa6";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import Logo from "@/components/ui/logo";
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

const Footer = () => {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "#about" },
    { label: t("services"), href: "#services" },
    { label: t("contactUs"), href: "#contact" }
  ];

  const services = [
    { label: t("marketing"), href: "#services" }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: `${siteConfig.links.instagram}`,
      label: "Instagram",
      target: "_blank"
    },
    {
      icon: FaXTwitter,
      href: `${siteConfig.links.x}`,
      label: "X (Twitter)",
      target: "_blank"
    },
    {
      icon: TikTokIcon,
      href: `${siteConfig.links.tiktok}`,
      label: "TikTok",
      target: "_blank"
    },
    {
      icon: FaSnapchat,
      href: `${siteConfig.links.snapchat}`,
      label: "Snapchat",
      target: "_blank"
    },
    {
      icon: Mail,
      href: `mailto:${siteConfig.support.email}`,
      label: "Email",
      target: "_blank"
    }
  ];

  return (
    <footer className="bg-secondary relative text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_1px)] bg-[length:40px_40px]" />
      </div>

      {/* Decorative Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-primary/10 absolute -start-40 top-0 h-96 w-96 rounded-full blur-[120px]" />
        <div className="bg-accent/10 absolute -end-40 bottom-0 h-96 w-96 rounded-full blur-[120px]" />
      </div>

      <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Company Info - Takes more space */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <Logo
              imgClassName="invert brightness-0 saturate-0 w-36 lg:w-44"
              className="mb-6"
            />
            <p className="mb-8 max-w-md text-base leading-relaxed text-gray-300">
              {t("companyDescription")}
            </p>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                {t("connectWithUs")}
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <m.a
                      key={social.label}
                      href={social.href}
                      target={social.target}
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

          {/* Quick Links */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center text-base text-gray-300 transition-colors hover:text-white"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="bg-primary absolute -bottom-1 start-0 h-px w-0 transition-all group-hover:w-full" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </m.div>

          {/* Services */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              {t("services")}
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="group inline-flex items-center text-base text-gray-300 transition-colors hover:text-white"
                  >
                    <span className="relative">
                      {service.label}
                      <span className="bg-primary absolute -bottom-1 start-0 h-px w-0 transition-all group-hover:w-full" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </m.div>

          {/* Contact Info */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              {t("contactUs")}
            </h3>
            <div className="space-y-4">
              <a
                href={`tel:${siteConfig.support.phone}`}
                className="group flex items-start gap-3 transition-colors hover:text-white"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/10 transition-colors group-hover:bg-white/15">
                  <Phone className="text-accent h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-300">{t("phone")}</div>
                  <div
                    className="text-sm text-white group-hover:text-white"
                    dir="ltr"
                  >
                    {siteConfig.support.phone}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.support.email}`}
                className="group flex items-start gap-3 transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/10 transition-colors group-hover:bg-white/15">
                  <Mail className="text-accent h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-300">{t("email")}</div>
                  <div className="text-sm text-white group-hover:text-white">
                    {siteConfig.support.email}
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <MapPin className="text-accent h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-300">{t("location")}</div>
                  <div className="text-sm text-white">{t("saudiArabia")}</div>
                </div>
              </div>
            </div>
          </m.div>
        </div>

        {/* Bottom Bar */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 border-t border-white/10 pt-8"
        >
          <div className="space-y-4 text-center">
            <p className="text-sm text-gray-300">
              {t("copyright", { year: currentYear })}
            </p>
            
            {/* License Information */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400">
              <div>
                <span className="text-gray-500">{t("license.number")}: </span>
                <span className="font-medium">{t("license.licenseNumber")}</span>
              </div>
              <div className="hidden sm:block">|</div>
              <div>
                <span className="text-gray-500">{t("license.licensedName")}: </span>
                <span className="font-medium">{t("license.companyName")}</span>
              </div>
              <div className="hidden sm:block">|</div>
              <div>
                <span className="text-gray-500">{t("license.activity")}: </span>
                <span className="font-medium">{t("license.activityDescription")}</span>
              </div>
            </div>
          </div>
        </m.div>
      </div>
    </footer>
  );
};

export default Footer;
