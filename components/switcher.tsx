"use client";

import { useChangeLocale } from "@/i18n/client";

export function Switch() {
  const changeLocale = useChangeLocale();

  return (
    <>
      <button type="button" onClick={() => changeLocale("en")}>
        EN
      </button>
      <button type="button" onClick={() => changeLocale("vi")}>
        VI
      </button>
    </>
  );
}
