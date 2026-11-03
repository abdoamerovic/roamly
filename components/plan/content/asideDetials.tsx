"use client";
import { useLocale, useTranslations } from "next-intl";
import type { TripProduct } from "@/lib/trip";

type Props = {
  products: TripProduct[];
  step: number; // 0, 1 or 2
  done: boolean;
  adults?: number;
  onNext: () => void;
  onConfirm: () => void;
};

const mainBtn =
  "mt-6 w-full h-13 gap-4.5 p-4.5 font-sans text-[13px] leading-[19.5px] tracking-[0.26px] text-secondary-background rounded-[3px] bg-seventh-background transition hover:opacity-90 disabled:opacity-50";

export default function AsideDetails({
  products,
  step,
  done,
  adults = 2,
  onNext,
  onConfirm,
}: Props) {
  const locale = useLocale();
  const t = useTranslations("tripForm");
  const o = useTranslations("tripOverview");

  const money = (n: number) =>
    new Intl.NumberFormat(locale === "ar" ? "ar-EG" : "en-US", {
      style: "currency",
      currency: "EGP", // change to "USD" if prices are in dollars
      maximumFractionDigits: 0,
    }).format(n);

  const subtotal = products.reduce((sum, p) => sum + p.price, 0);
  const planningFee = 0; // complimentary
  const total = subtotal + planningFee;

  return (
    <aside className="h-fit w-full border-t-3 border-ninth-border bg-secondary-background p-8 md:max-w-92  md:sticky md:top-15 md:duration-200">
      <div className="flex justify-between gap-4 border-b border-seventh-background py-3">
        <p className="font-sans text-[11px] leading-[16.5px] tracking-[1.98px] text-ninth-border">
          {o("title")}
        </p>
        <span className="text-[10px] leading-3.75 text-eighth-text">
          {o("adults", { count: adults })}
        </span>
      </div>

      <dl className="mt-5 flex flex-col gap-3 font-sans text-sm">
        <div className="flex justify-between gap-4 border-b border-seventh-background py-3">
          <dt className="font-sans text-[11px] leading-[16.5px] text-eighth-text">
            {o("subtotal")}
          </dt>
          <dd className="font-heading text-[17px] leading-[25.5px] text-seventh-background">
            {money(subtotal)}
          </dd>
        </div>

        <div className="flex justify-between gap-4 border-b border-seventh-background py-3">
          <dt className="font-sans text-[11px] leading-[16.5px] text-eighth-text">
            {o("planningFee")}
          </dt>
          <dd className="font-heading text-[17px] leading-[25.5px] text-seventh-background">
            {planningFee === 0 ? o("complimentary") : money(planningFee)}
          </dd>
        </div>

        <div className="flex-col gap-4 py-3">
          <dt className="text-[11px] leading-[16.5px] text-eighth-text">
            {o("estimatedTotal")}
          </dt>
          <dd className="mt-1.25 font-heading text-[38px] leading-14.25 text-seventh-background">
            {money(total)}
          </dd>
        </div>
      </dl>

      {step === 0 && (
        <button type="button" onClick={onNext} className={mainBtn}>
          {o("continue")}
        </button>
      )}

      {step === 1 && (
        // submits the details form from outside so its validation runs first
        <button type="submit" form="details-form" className={mainBtn}>
          {t("next")}
        </button>
      )}

      {step === 2 && (
        <button
          type="button"
          onClick={onConfirm}
          disabled={done}
          className={mainBtn}
        >
          {t("confirm")}
        </button>
      )}

      <p className="mt-3 text-center font-sans text-[11px] leading-4.25 text-[#B9C5BA]">
        {o("noPayment")}
      </p>

      <div className="mt-6 flex justify-between gap-4 border-t border-seventh-background">
        <span className="py-2 font-sans text-[9px] leading-[13.5px] text-seventh-background">
          {o("secureBooking")}
        </span>
        <span className="py-2 text-end font-sans text-[9px] leading-[13.5px] text-seventh-background">
          {o("expertSupport")}
        </span>
      </div>
    </aside>
  );
}