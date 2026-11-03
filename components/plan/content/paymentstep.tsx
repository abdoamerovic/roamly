"use client";
import { useMemo } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import type { TripProduct, TripValues } from "@/lib/trip";
import Checked from "@/components/plan/checked";

type Props = {
  products: TripProduct[];
  values: TripValues;
  done: boolean;
  onBack: () => void;
};

function makeReference() {
  const d = new Date();
  const yy = String(d.getFullYear()).slice(2);
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `RML-${yy}${mm}${dd}`;
}

export default function PaymentStep({ products, values, done, onBack }: Props) {
  const locale = useLocale();
  const t = useTranslations("ensurepayment");
  const f = useTranslations("signpayment");

  const reference = useMemo(() => (done ? makeReference() : ""), [done]);

  if (done) return <Checked reference={reference} />;

  const money = (n: number) =>
    new Intl.NumberFormat(locale === "ar" ? "ar-EG" : "en-US", {
      style: "currency",
      currency: "EGP",
      maximumFractionDigits: 0,
    }).format(n);

  const rows: [string, string][] = [
    [f("nameLabel"), values.name],
    [f("emailLabel"), values.email],
    [f("phoneLabel"), values.phone],
    [f("countryLabel"), values.country],
  ];

  return (
    <div className="w-full border border-[#D9D8CE] bg-fourth-background p-8 md:p-16">
      <p className="font-sans text-[13px] uppercase leading-5 tracking-[2px] text-eleventh-text rtl:tracking-normal">
        {t("confirmStep")}
      </p>

      <h2 className="mt-8 font-heading text-[48px] font-bold leading-none tracking-[-1.5px] text-secondary-background md:text-[64px] rtl:tracking-normal">
        {t("confirmTitle")}
      </h2>

      <p className="mt-10 font-sans text-xl leading-8 text-eleventh-text">
        {t("confirmDescription")}
      </p>

      <h3 className="mt-12 font-sans text-[11px] uppercase leading-4 tracking-[1.4px] text-eleventh-text rtl:tracking-normal">
        {t("contactDetails")}
      </h3>

      <dl className="mt-4 flex flex-col">
        {rows.map(([label, value]) => (
          <div
            key={label}
            className="flex justify-between gap-4 border-b border-[#D9D8CE] py-4"
          >
            <dt className="font-sans text-[11px] uppercase leading-4 tracking-[1.4px] text-eleventh-text rtl:tracking-normal">
              {label}
            </dt>
            <dd className="break-all font-sans text-base text-secondary-background">
              {value}
            </dd>
          </div>
        ))}
      </dl>

      <ul className="mt-10 flex flex-col">
        {products.map((p) => (
          <li
            key={p.id}
            className="flex items-center gap-5 border-b border-[#D9D8CE] py-4"
          >
            <Image
              src={p.image}
              alt={p.name}
              width={80}
              height={80}
              className="h-20 w-20 shrink-0 object-cover"
            />
            <p className="flex-1 font-heading text-xl text-secondary-background">
              {p.name}
            </p>
            <p className="font-sans text-base text-secondary-background">
              {money(p.price)}
            </p>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={onBack}
        className="mt-12 border-b border-[#9DB09F] pb-3 font-sans text-base font-medium text-secondary-background transition hover:opacity-70"
      >
        {t("backToDetails")}
      </button>
    </div>
  );
}