import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "vi"],
  defaultLocale: "en",
  localeDetection: true,
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
    "/dashboard": {
      en: "/dashboard",
      vi: "/dashboard",
    },
  },
});
