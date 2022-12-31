import { templateConfig } from "config.template";

const TRANSLATIONS = {
  seeMore: {
    en: "See more",
    pl: "Zobacz więcej"
  },
  nextPage: {
    en: "Next page",
    pl: "Następna strona"
  },
  previousPage: {
    en: "Previous page",
    pl: "Poprzednia strona"
  },
  notFound: {
    en: "Page not found",
    pl: "Strona nie znaleziona"
  },
  blog: {
    en: "Blog",
    pl: "Blog",
  },
  info: {
    en: "Info",
    pl: "Informacje",
  },
  author: {
    en: "Author",
    pl: "Autor",
  },
  tags: {
    en: "Tags",
    pl: "Tagi",
  },
  socials: {
    en: "Socials",
    pl: "Media społecznościowe",
  },
  contact: {
    en: "Contact",
    pl: "Kontakt",
  },
  usefulLinks: {
    en: "Useful links",
    pl: "Przydatne linki",
  },
  siteCreators: {
    en: "Site creators",
    pl: "Twórcy strony",
  },
  builtBy: {
    en: "Built by",
    pl: "Zbudowane przez",
  },
  announcement: {
    en: "Announcement",
    pl: "Ogłoszenie",
  }
}
export const t = (key: keyof typeof TRANSLATIONS) => TRANSLATIONS[key][templateConfig.lang]