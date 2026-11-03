"use client";

import { IoIosArrowRoundForward } from "react-icons/io";
import { Link, usePathname } from "@/i18n/navigation";
import LanguageSwitcher from "./languageSwitcher";
import MobileMenu from "./MobileMenu";
import { Suspense } from "react";
import { useLocale, useTranslations } from "next-intl";

export default function Navbar() {
  const locale = useLocale();
  const pathname = usePathname();

  const h = locale === "en" ? "Home" : "الرئيسية";
  const e = locale === "en" ? "Explore" : "استكشاف";
  const s = locale === "en" ? "Services" : "خدمات";
  const m = locale === "en" ? "My trip" : "رحلتي";
  const links = [
    { href: "/", label: h },
    { href: "/Explore", label: e },
    { href: "/ServicesP", label: s },
    { href: "/planner", label: m },
  ] as const;
  const t = useTranslations("nav");
  
  return (
    <nav className="relative bg-third-background border-b border-[#79867D]">
      <div className="mx-auto flex h-20 w-full max-w-310 items-center gap-6 px-4.5 md:px-7">
        <Link href="/" className="flex items-center">
          <span className="font-heading text-[27px] tracking-[-1.25px] text-secondary-background after:text-3xl after:text-[#c97b07] after:content-['.']">
            Roamly
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden flex-1 items-center justify-center gap-10 text-[14px] text-eighth-text md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative pb-2 transition hover:text-secondary-background after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-secondary-background after:rounded-full after:transition-transform after:duration-300 ${
                    isActive
                      ? "text-secondary-background font-medium after:scale-100"
                      : "hover:text-secondary-background after:scale-0"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="ms-auto flex items-center gap-3 md:ms-0">
          
          <Link
            href="/planner"
            className="hidden h-13 items-center justify-center gap-2 rounded-sm bg-primary-background px-6 font-medium text-seventh-background md:inline-flex"
          >
            <span>{t("planTrip")}</span>
            <IoIosArrowRoundForward className="text-xl rtl:rotate-180" />
          </Link>
          <Suspense fallback={<div className="h-10 w-16" />}>
            <LanguageSwitcher />
          </Suspense>
          <MobileMenu links={links} />
        </div>
      </div>
    </nav>
  );
}