"use client";

import { fallbackLng, languages } from "@/i18n/config";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LocaleSwitcher() {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";

    const pathnameIsMissingLocale = languages.every(
      (locale) =>
        !pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}`
    );

    if (pathnameIsMissingLocale) {
      if (locale === fallbackLng) return pathName;
      return `/${locale}${pathName}`;
    } else {
      if (locale === fallbackLng) {
        const segments = pathName.split("/");
        const isHome = segments.length === 2;
        if (isHome) return "/";

        segments.splice(1, 1);
        return segments.join("/");
      }

      const segments = pathName.split("/");
      segments[1] = locale;
      return segments.join("/");
    }
  };

  return (
    <ul className="flex gap-x-3">
      {languages.map((locale) => {
        return (
          <li key={locale}>
            <Link
              href={redirectedPathName(locale)}
              className="rounded-md border bg-black px-3 py-2 text-white"
            >
              {locale}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
