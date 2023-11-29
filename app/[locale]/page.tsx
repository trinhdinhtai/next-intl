import Client from "@/app/components/client";
import { Locale } from "@/i18n/config";
import { getDictionary } from "@/lib/dictionary";

export default async function Home({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const { page } = await getDictionary(locale);

  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-3xl font-bold">{page.home.title}</h1>
        <p className="text-gray-500">{page.home.description}</p>
      </div>

      <Client />
    </section>
  );
}
