import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import { Suspense } from "react";
import { routing } from "@/i18n/routing";
import "@/app/globals.css";
import Footer from "@/components/main/layout/Footer";
import Navbar from "@/components/main/layout/Navbar";
import TripHydrator from "@/components/TripHydrator";

const Dmserif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const Dmsan = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  const isArabic = locale === "ar";

  const title = isArabic
    ? "Roamly | اكتشف وجهتك القادمة"
    : "Roamly | Discover Your Next Journey";

  return {
    
    title: {
      default: title,
      template: "%s | Roamly",
    },
    description: isArabic
      ? "اكتشف وجهات مميزة وصمم رحلتك القادمة مع Roamly."
      : "Discover curated destinations and create your perfect journey with Roamly.",
    applicationName: "Roamly",
    openGraph: {
      title,
      description: isArabic
        ? "اكتشف وجهات مميزة وصمم رحلتك القادمة."
        : "Explore beautiful destinations and plan your next journey.",
      siteName: "Roamly",
      type: "website",
      locale: isArabic ? "ar" : "en",
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
  icon: "/images/main/OIG3.png",
},
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${Dmserif.variable} ${Dmsan.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        <Suspense>
          <NextIntlClientProvider locale={locale}>
            <TripHydrator />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </Suspense>
      </body>
    </html>
  );
}