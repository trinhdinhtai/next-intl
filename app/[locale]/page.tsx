import Client from "@/app/components/client";
import LocaleSwitcher from "@/app/components/locale-switcher";
import { useTranslation } from "@/i18n/server";

export default async function Home({
  params: { locale },
}: {
  params: {
    locale: string;
  };
}) {
  const { t } = await useTranslation(locale);

  return (
    <section className="py-24 container max-w-6xl mx-auto">
      <LocaleSwitcher />
      <h1 className="text-3xl font-bold mt-6">{t("title")}</h1>
      <p className="text-gray-500">{t("description")}</p>
      <Client />
    </section>
  );
}
