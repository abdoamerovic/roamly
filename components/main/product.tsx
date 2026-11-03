import { useLocale, useTranslations } from "next-intl";
import { IoIosArrowRoundForward } from "react-icons/io";
import { prod } from "@/data/product";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { lang } from "@/types/products";

export default function FourProduct() {
  const t = useTranslations("destinations");
  const locale = useLocale() as lang;

  return (
    <div className="bg-third-background w-full">
      <div className="bg-third-background mx-auto flex w-full max-w-310 flex-col gap-22.5 px-5 py-17.5 pb-22.5 pt-18 md:pt-23 md:pb-30">
        <section className="grid w-full grid-cols-1 md:grid-cols-[1fr_auto] md:items-end md:gap-x-8">
          <p className="mb-5 font-sans text-[10px] leading-4.1 tracking-[1.98px] text-eighth-text rtl:tracking-normal md:col-span-2">
            {t("eyebrow")}
          </p>

          <h2 className=" h-8 mb-15 font-heading text-[39px] leading-12.1 tracking-[-1.66px] text-secondary-background md:text-[51px] md:leading-13.5 md:tracking-[-1.79px] rtl:tracking-normal ">
            {t("title")}
          </h2>

          <Link
            href="/Explore"
            className="group   inline-flex h-13 items-center gap-2 justify-self-start border-b border-primary-background text-base font-medium tracking-[0.26px]
             text-primary-background transition-transform duration-300 hover:-translate-y-1 rtl:tracking-normal motion-reduce:transition-none 
             motion-reduce:hover:translate-y-0  md:justify-self-end pt-8 md:pt-2 md:mb-3"
          >
            {t("viewAll")}
            <IoIosArrowRoundForward className="text-2xl transition-transform duration-300 group-hover:translate-x-2 rtl:rotate-180 rtl:group-hover:-translate-x-2" />
          </Link>
        </section>

            <div className="grid grid-cols-1 gap-6 pb-8 sm:grid-cols-2 lg:grid-cols-4">
      {prod.slice(0, 4).map((p) => (
        <article
          key={p.id}
          className="md:nth-2:translate-y-8 md:nth-4:translate-y-8"
        >
          <Link href={`/Explore/${p.id}`} className="group block">
            <div className="relative aspect-4/5 w-full overflow-hidden">
              <Image
                src={p.image}
                alt={p.name[locale]}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />

              <span className="absolute inset-s-2.5 top-3 flex h-7 w-7 items-center justify-center bg-third-background text-[10px]">
                {String(p.id).padStart(2, "0")}
              </span>

              <span className="absolute inset-e-2 bottom-3 flex h-7 w-7 items-center justify-center rounded-full bg-fourth-background">
                <IoIosArrowRoundForward className="text-xl transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1 motion-reduce:transition-none" />
              </span>
            </div>

            <div className="mt-4">
              <div className="flex w-full items-start justify-between gap-3">
                <h3 className="mt-1 font-heading text-xl text-secondary-background rtl:tracking-normal">
                  {p.name[locale]}
                </h3>
                <span className="pt-2.5 font-sans text-[10px] uppercase tracking-[1.98px] text-eighth-text rtl:tracking-normal">
                  {p.category[locale]}
                </span>
              </div>

              <p className="font-sans text-sm text-eighth-text">
                {p.place[locale]}
              </p>
            </div>
          </Link>
        </article>
      ))}
      </div>
      </div>
    </div>
  );
}
