export const templateConfig: TemplateConfig = {
  lang: "pl",
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color
  themeColor: "#000000"
};

export interface TemplateConfig {
  lang: "pl" | "en";
  themeColor: string;
}