import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("footer");

  const columns = [
    {
      title: t("discover"),
      links: [
        { label: t("allDestinations"), href: "/destinations" },
        { label: t("coastalEscapes"), href: "/coastal-escapes" },
        { label: t("cityGuides"), href: "/city-guides" },
      ],
    },
    {
      title: t("plan"),
      links: [
        { label: t("myTrip"), href: "/my-trip" },
        { label: t("services"), href: "/services" },
        { label: t("getInTouch"), href: "/contact" },
      ],
    },
  ];

  return (
    <footer className="bg-secondary-background py-4 text-white">
      <div className="mx-auto flex w-full max-w-310 flex-col gap-12 px-4.5 py-9 md:flex-row md:gap-25 md:px-7">
        <div className="flex w-full flex-col items-start gap-2.5">
          <Link href="/" className="flex">
            <span className="font-heading text-3.75 tracking-[-1.25px] text-tenth-text after:text-3xl after:text-[#c97b07] after:content-['.']">
              Roamly
            </span>
          </Link>
          <p className="font-heading text-4.5 text-fifth-background">
            {t("tagline")}
          </p>
        </div>

        <div className="flex w-full flex-row items-start gap-12 md:pt-12">
          {columns.map((col) => (
            <nav
              key={col.title}
              aria-label={col.title}
              className="flex w-full flex-col gap-2 md:w-1/2"
            >
              <span className="text-eleventh-text">{col.title}</span>
              <ul className="flex flex-col gap-1">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-dm-sans text-3 text-eighth-text transition-colors duration-300 hover:text-tenth-text"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <hr className="mx-auto my-4 max-w-295 border-t border-gray-700" />

      <div className="mx-auto flex w-full max-w-310 flex-row justify-between px-4.5 md:px-7">
        <span className="text-2.5 text-eleventh-text">
          {t("copyright")}
        </span>
        <span className="text-2.5 text-eleventh-text">{t("madeFor")}</span>
      </div>
    </footer>
  );
}