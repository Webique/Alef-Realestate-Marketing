export const siteConfig = {
  links: {
    instagram: "https://www.instagram.com/alefco_sa?igsh=MTFnemFkb3drZnljNQ==",
    x: "https://x.com/alefco_sa?s=11&t=p3IAjlRq8iB7It2iS5vwjA",
    snapchat: "https://snapchat.com/t/fEFP16wp",
    tiktok: "https://www.tiktok.com/@alefco_sa?_r=1&_t=ZS-91Yl0rm1LK4",
    whatsapp: "https://wa.me/966550500407",
    googleMapIframe:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3554.459151416646!2d49.65972517544313!3d27.015653576585947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDAwJzU2LjQiTiA0OcKwMzknNDQuMyJF!5e0!3m2!1sen!2seg!4v1761585102880!5m2!1sen!2seg",
    googleMap: "https://maps.app.goo.gl/RxmiMqY8CyTvDVNX7"
  },

  support: {
    phone: "+966550500407",
    email: "contact@alefRealestate.com",
    whatsapp: "+966550500407"
  },

  url: process.env.NEXT_PUBLIC_SITE_URL!,
  ogImage: `${process.env.NEXT_PUBLIC_SITE_URL!}/og.png`,
  twitter: "@alefRealestate"
};

export type SiteConfig = typeof siteConfig;
