"use client";

import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";

export default function PartnersSection() {
  const logos = [1, 2, 3, 4, 5, 6];

  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-12 text-sm font-semibold uppercase tracking-wider text-gray-500">
            شركاء النجاح
          </p>

          <div className="relative">
            {/* Gradient Overlays */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />

            {/* Logos Grid */}
            <div className="grid grid-cols-3 items-center gap-8 md:grid-cols-6 md:gap-12">
              {logos.map((logo, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative flex items-center justify-center"
                >
                  <div className="relative h-16 w-full grayscale transition-all duration-300 hover:grayscale-0">
                    <ExportedImage
                      src={`/images/logos/${logo}.png`}
                      alt={`Partner ${logo}`}
                      width={120}
                      height={60}
                      className="h-full w-full object-contain opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
