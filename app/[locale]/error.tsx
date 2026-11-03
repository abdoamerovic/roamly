"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  const t = useTranslations("common");

  useEffect(() => {
    // Send to your logging service here (Sentry, etc.)
    console.error(error);
  }, [error]);

  return (
    <div
      role="alert"
      className="flex min-h-[60vh] w-full flex-1 items-center justify-center bg-third-background px-6 py-16"
    >
      <div className="w-full max-w-xl border border-[#D9D8CE] bg-fourth-background p-8 text-center md:p-16">
        <p className="font-sans text-[13px] uppercase leading-5 tracking-[2px] text-eleventh-text rtl:tracking-normal">
          {t("errorLabel")}
        </p>

        <h1 className="mt-6 font-heading text-[40px] font-bold leading-none tracking-[-1.5px] text-secondary-background md:text-[48px] rtl:tracking-normal">
          {t("errorTitle")}
        </h1>

        <p className="mt-6 font-sans text-base leading-7 text-eleventh-text">
          {t("errorDescription")}
        </p>

        <button
          type="button"
          onClick={reset}
          className="mt-10 h-13 bg-primary-background px-8 font-medium text-seventh-background transition hover:opacity-80"
        >
          {t("tryAgain")}
        </button>
      </div>
    </div>
  );
}