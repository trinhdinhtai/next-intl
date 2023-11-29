import { Locale } from "@/i18n/config";
import CustomLink from "./custom-link";

import { getDictionary } from "@/lib/dictionary";
import LocaleSwitcher from "@/app/components/locale-switcher";

export default async function Header({ locale }: { locale: Locale }) {
  const { navigation } = await getDictionary(locale);

  return (
    <header className="py-6">
      <nav className="container flex items-center justify-between">
        <ul className="flex gap-x-8">
          <li>
            <CustomLink href="/" lang={locale}>
              {navigation.home}
            </CustomLink>
          </li>
          <li>
            <CustomLink href="/about" lang={locale}>
              {navigation.about}
            </CustomLink>
          </li>
        </ul>
        <LocaleSwitcher />
      </nav>
    </header>
  );
}
