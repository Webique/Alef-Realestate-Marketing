"use client";

import { Handshake, TrendingUp } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

export default function PricingSection() {
  const t = useTranslations("IndexPage.Pricing");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          <div className="mb-6 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2">
              <Handshake className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">{t("badge")}</span>
            </div>

            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              {t("title")}
            </h2>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl sm:p-12">
            <div className="mb-8 flex items-center justify-center">
              <div className="rounded-2xl bg-gradient-to-r from-primary to-accent p-4">
                <TrendingUp className="h-12 w-12 text-white" />
              </div>
            </div>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              {t("description")}
            </p>

            <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-6">
              <p className="text-base leading-relaxed text-gray-700">
                {t("model")}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-center">
                <div className="text-sm font-semibold text-primary">لا تكاليف مسبقة</div>
                <div className="mt-1 text-xs text-gray-600">Zero Upfront Costs</div>
              </div>
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-center">
                <div className="text-sm font-semibold text-primary">نسبة من المبيعات</div>
                <div className="mt-1 text-xs text-gray-600">% of Sales</div>
              </div>
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-center">
                <div className="text-sm font-semibold text-primary">شراكة حقيقية</div>
                <div className="mt-1 text-xs text-gray-600">True Partnership</div>
              </div>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
