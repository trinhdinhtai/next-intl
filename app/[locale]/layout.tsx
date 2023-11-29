import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Locale } from "@/i18n/config";
import Header from "@/app/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: Locale;
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Header locale={locale} />
        {children}
      </body>
    </html>
  );
}