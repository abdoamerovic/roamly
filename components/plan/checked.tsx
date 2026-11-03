import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

type Props = {
  reference: string;
};

export default function Checked({ reference }: Props) {
  const t = useTranslations("successpayment");

  return (
    <div className="mx-auto w-full max-w-238 border border-[#D9D8CE] bg-fourth-background px-8 py-20 text-center shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:px-32">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-secondary-background">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-fourth-background"
          aria-hidden="true"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </div>

      <p className="mt-8 font-sans text-xs font-medium uppercase leading-4 tracking-[2px] text-eleventh-text rtl:tracking-normal">
        {t("eyebrow")}
      </p>

      <h1 className="mt-6 font-heading text-[48px] font-bold leading-none tracking-[-1.5px] text-secondary-background md:text-[72px] rtl:tracking-normal">
        {t("title")}
      </h1>

      <p className="mx-auto mt-8 max-w-xl font-sans text-xl leading-8 text-eleventh-text">
        {t("description")}
      </p>

      <div className="mt-10 inline-flex items-center gap-6 border border-[#D9D8CE] px-6 py-4 font-sans text-sm">
        <span className="text-eleventh-text">{t("reference")}</span>
        <span className="font-medium text-secondary-background">
          {reference}
        </span>
      </div>

      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex h-15 items-center gap-4 rounded-[3px] bg-secondary-background px-6 font-sans text-sm font-medium text-fourth-background transition hover:opacity-90"
        >
          {t("cta")}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="rtl:rotate-180"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}