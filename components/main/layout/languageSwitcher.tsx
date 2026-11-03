"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const toggleLang = () => {
    router.replace(pathname, { locale: locale === "ar" ? "en" : "ar" });
  };

  return (
    <button
      onClick={toggleLang}
      title="تغيير اللغة / Change language"
      className="flex h-9.5 min-w-15.25 items-center justify-center rounded-2xl border border-[#D9D8CE] px-3 font-dm-sans text-[11px] font-bold text-primary-background transition-colors duration-300 hover:border-primary-background"
    >
      {locale === "ar" ? "English" : "العربية"}
    </button>
  );
}