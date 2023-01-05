import { templateConfig } from "config.template";

const TRANSLATIONS = {
  readMore: {
    en: "Read more",
    pl: "Czytaj dalej"
  },
  seeMoreArticles: {
    en: "See more articles",
    pl: "Zobacz więcej artykułów"
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
  },
  events: {
    en: "Events",
    pl: "Wydarzenia",
  },
  noEventsThisDay: {
    en: "There are no events on this day",
    pl: "Nie ma żadnych wydarzeń w tym dniu",
  },
  chooseDate: {
    en: "Choose date",
    pl: "Wybierz datę",
  },
  previousDay: {
    en: "Previous day",
    pl: "Poprzedni dzień",
  },
  nextDay: {
    en: "Next day",
    pl: "Następny dzień",
  }
}
export const t = (key: keyof typeof TRANSLATIONS) => TRANSLATIONS[key][templateConfig.lang]