"use client";

import { useChangeLocale, useCurrentLocale } from "@/i18n/client";
import Link from "next/link";

export function Header() {
  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  return (
    <header className="sticky border-b border-gray-500 py-2">
      <nav className="flex items-center justify-between container mx-auto">
        <span className="text-2xl">Next.js i18n</span>

        <div className="flex gap-2 items-center ">
          <Link href="/">Home</Link>
          <Link href="/client">Client</Link>
          <button
            type="button"
            onClick={() => changeLocale("en")}
            className={`p-2 rounded-sm ${
              currentLocale === "en" ? "bg-gray-600" : ""
            }`}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => changeLocale("vi")}
            className={`p-2 rounded-sm ${
              currentLocale === "vi" ? "bg-gray-600" : ""
            }`}
          >
            VI
          </button>
        </div>
      </nav>
    </header>
  );
}
