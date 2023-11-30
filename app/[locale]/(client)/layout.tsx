import I18nProvider from "@/components/provider/i18n-provider";

export interface LocaleLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  return (
    <I18nProvider locale={locale}>
      <div className="mx-auto container py-8">{children}</div>
    </I18nProvider>
  );
}
