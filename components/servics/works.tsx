import { useTranslations } from "next-intl";

const steps = ["tellUs", "reviewOptions", "travelConfidently"] as const;

export default function Works() {
  const t = useTranslations("servicesP");

  return (
    <section className="mx-auto mb-26 mt-18.75 w-full max-w-295 border-16 border-third-background bg-primary-background md:mt-20 md:border-0">
      <div className="px-6 py-10.5 sm:px-7 md:px-16">
        <p className="mb-5 font-sans text-[11px] leading-[16.5px] tracking-[1.98px] text-[#B9C5BA] rtl:tracking-normal">
          {t("howItWorks.title")}
        </p>

        <div className="flex flex-col md:mt-10 md:flex-row md:gap-13">
          {steps.map((step) => (
            <article
              key={step}
              className="flex-1 border-t border-[#B9C5BA]"
            >
              <span className="font-sans text-[10px] leading-3.75 tracking-[1.4px] text-[#AEBBB2] rtl:tracking-normal">
                {t(`howItWorks.steps.${step}.number`)}
              </span>
              <h2 className="mt-2.5 font-heading text-[25px] leading-[27.5px] text-seventh-background">
                {t(`howItWorks.steps.${step}.title`)}
              </h2>
              <p className="pb-3.5 font-sans text-[13px] leading-[20.8px] text-[#B9C5BA]">
                {t(`howItWorks.steps.${step}.description`)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}