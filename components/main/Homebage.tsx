import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "@/i18n/navigation";

export default function Homepage() {
  const t = useTranslations("hero");

  return (
    <div className="bg-third-background">
  <section className="mx-auto grid w-full max-w-310 grid-cols-1 items-center gap-11.5 px-4.5 py-12 md:grid-cols-2 md:gap-17 md:px-8 md:pt-16 md:pb-22.5">
    <div className=" w-full  grid grid-cols-1">
      <p className="mb-5 font-sans text-sm uppercase tracking-widest rtl:tracking-normal text-eighth-text">
        {t("eyebrow")}
      </p>

      <h1 className="font-heading text-hero text-balance text-secondary-background text-[51px]">
        {t.rich("title", {
          highlight: (chunks) => (
            <>
              <br />
              <span className="text-fifth-background">{chunks}</span>
            </>
          ),
        })}
      </h1>

      <p className="mt-6 max-w-xl font-sans text-lg leading-8 text-eighth-text font-bold">
        {t("description")}
      </p>

      <Link
        href="/Explore"
        className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-secondary-background px-6 py-3.5
         font-heading text-tenth-text transition hover:opacity-90 w-full md:w-60"
      >
        {t("cta")}
        <FaArrowRight className="rtl:rotate-180" />
      </Link>
    </div>

    <div className="relative aspect-628/580 w-full shadow-card">
  <Image
    src="/images/main/hero-coast.jpg"
    alt="home badge Image"
    fill
    priority
    sizes="(min-width: 768px) 50vw, 100vw"
    className="object-cover"
  />

  <div className="absolute bottom-0 inset-e-0 -me-2 flex h-25 w-[min(16.25rem,calc(100%-2rem))] translate-y-4 flex-col
   items-center justify-center border-t-2 border-yellow-500 bg-fourth-background text-center md:-me-8 shadow-card">
  <p className="text-[10px] uppercase tracking-[0.15em] text-eighth-text rtl:tracking-normal">
    {t("featuredLabel")}
  </p>
  <p className="font-heading text-base text-secondary-background">
    {t("featuredTitle")}
  </p>
</div>
</div>
  </section>
  </div>
  );
}