"use client";

import { useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "@/i18n/navigation";
import { useLocale,useTranslations } from "next-intl";

type Props = {
  links: readonly { href: string; label: string }[];
};

export default function MobileMenu({ links }: Props) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const t=useTranslations("nav")
  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="flex size-11 items-center justify-center rounded-sm border border-[#D9D8CE]"
      >
        {open ? (
          <RxCross2 className="text-2xl text-secondary-background" />
        ) : (
          <RxHamburgerMenu className="text-2xl text-secondary-background" />
        )}
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full z-50 border-t border-[#D9D8CE] bg-third-background px-4.5 pb-6 pt-2 shadow-card"
        >
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={close}
                  className="block border-b border-[#D9D8CE]/60 py-4 text-base text-eighth-text hover:text-secondary-background"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/plan-trip"
            onClick={close}
            className="mt-6 flex h-13 w-full items-center justify-center gap-2 rounded-sm bg-primary-background font-medium text-seventh-background"
          >
            <span>{t("planTrip")}</span>
            <IoIosArrowRoundForward className="text-xl rtl:rotate-180" />
          </Link>
        </div>
      )}
    </div>
  );
}