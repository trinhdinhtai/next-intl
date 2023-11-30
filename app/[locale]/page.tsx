import { getI18n, getScopedI18n } from "@/i18n/server";

export default async function LocalePage() {
  const t = await getI18n();
  const t2 = await getScopedI18n("scope.more");

  return (
    <div className="mx-auto container py-8 space-y-4">
      <p>Hello: {t("hello")}</p>
      <p>
        Hello:{" "}
        {t("welcome", {
          name: "John",
        })}
      </p>
      <p>
        Hello (with React components):{" "}
        {t("welcome", {
          name: <strong>John</strong>,
        })}
      </p>

      <p>
        Hello (with nested):{" "}
        {t("about.you", {
          age: "23",
          name: "Doe",
        })}
      </p>

      <p>Using scope:</p>

      <p>{t2("test")}</p>

      <p>
        {t2("param", {
          param: "test",
        })}
      </p>

      <p>
        {t2("param", {
          param: <strong>test</strong>,
        })}
      </p>

      <p>{t2("and.more.test")}</p>

      <p>{t("missing.translation.in.vi")}</p>

      <p>
        {t("cows", {
          count: 1,
        })}
      </p>

      <p>
        {t("cows", {
          count: 2,
        })}
      </p>

      <p>
        {t2("stars", {
          count: 1,
        })}
      </p>

      <p>
        {t2("stars", {
          count: 2,
        })}
      </p>
    </div>
  );
}
