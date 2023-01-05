export const templateConfig: TemplateConfig = {
  lang: "pl",
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color
  themeColor: "#000000",
  title: {
    short: "Elektronik",
    long: "CKZIU NR2 ELEKTRONIK w Zielonej Górze",
  }
};

export interface TemplateConfig {
  lang: "pl" | "en";
  themeColor: string;
  title: {
    short: string;
    long: string;
  }
}