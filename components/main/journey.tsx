import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { FaArrowRight } from "react-icons/fa6";

const keys = ["flights", "stays", "experiences", "transfers"] as const;

export default function Journey() {
  const t = useTranslations("services");

  return (
    <section className="bg-sixth-background py-16 md:py-24 w-full">
      <div className="mx-auto max-w-310 px-4.5 md:px-8">
        <p className="mb-4 text-sm uppercase tracking-widest rtl:tracking-normal text-eighth-text">
          {t("eyebrow")}
        </p>

        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="font-heading text-[39px] text-secondary-background md:text-5xl">
            {t("title")}
          </h2>
          <Link
            href="/ServicesP"
            className="inline-flex items-center gap-1 font-medium text-secondary-background hover:opacity-80 "
          >
            {t("viewAll")}
            <FaArrowRight className="rtl:rotate-180" />
          </Link>
        </div>

        <p className="mt-4 max-w-xl text-4.5  text-eighth-text md:text-5 leading-8 font-heading mb-11">
          {t("description")}
        </p>

        <ul className="mt-12 grid grid-cols-1  sm:grid-cols-4 md:grid-cols-4 ">
          {keys.map((key, i) => (
            <li key={key}>
              <Link
                href={`/ServicesP`}
                className="group flex h-full min-h-56 flex-col  justify-between border-2 border-fifth-background bg-sixth-background p-6 transition hover:bg-third-background duration-200"
              >
                <span className="text-sm text-eighth-text">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-2xl text-secondary-background">
                  {t(`items.${key}`)}
                </h3>
                <FaArrowRight className=" rtl:rotate-180   self-end  " />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}