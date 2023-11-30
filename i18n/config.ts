export const fallbackLng = "en";
export const languages = [fallbackLng, "vi"];
export const defaultNS = "translation";
export const cookieName = "i18next";
export type Locale = (typeof languages)[number];

export function getOptions(
  lng = fallbackLng,
  ns: string | string[] = defaultNS
) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
