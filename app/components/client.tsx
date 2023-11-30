"use client";

import { useTranslation } from "@/i18n/client";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Client() {
  const params = useParams();
  const { t } = useTranslation(params.locale as string);
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>{t("counter", { count: counter })}</p>
      <p>{t("counter_with_parameter", { counter: counter })}</p>
    </div>
  );
}
