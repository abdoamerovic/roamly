"use client";
import { useState, type SyntheticEvent } from "react";
import { useTranslations } from "next-intl";
import {
  validateDetails,
  type TripErrors,
  type TripValues,
} from "@/lib/trip";

type Props = {
  values: TripValues;
  onChange: (v: TripValues) => void;
  onNext: () => void;
  onBack: () => void;
};

const fields: {
  name: keyof TripValues | "phone" | "country";
  type: string;
  autoComplete: string;
}[] = [
  { name: "name", type: "text", autoComplete: "name" },
  { name: "email", type: "email", autoComplete: "email" },
  { name: "phone", type: "tel", autoComplete: "tel" },
  { name: "country", type: "text", autoComplete: "country-name" },
];

const labelCls =
  "mb-3 block font-sans text-[11px] leading-4 uppercase tracking-[1.4px] text-eleventh-text rtl:tracking-normal";

type FieldName = keyof TripValues | "phone" | "country";

export default function StepDetails({ values, onChange, onNext, onBack }: Props) {
  const t = useTranslations("signpayment");
  const [errors, setErrors] = useState<TripErrors>({});

  function change(name: FieldName, value: string) {
    onChange({ ...values, [name]: value } as TripValues);
    setErrors((p) => ({ ...p, [name]: undefined }));
  }

  function submit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validateDetails(values);
    setErrors(found);
    if (Object.keys(found).length === 0) onNext();
  }

  return (
    // id lets the Next button in the aside submit this form from outside
    <form
      id="details-form"
      onSubmit={submit}
      noValidate
      className="w-full border border-[#D9D8CE] bg-fourth-background p-8 md:p-16"
    >
      <p className="font-sans text-[13px] uppercase leading-5 tracking-[2px] text-eleventh-text rtl:tracking-normal">
        {t("step")}
      </p>

      <h2 className="mt-8 font-heading text-[48px] font-bold leading-none tracking-[-1.5px] text-secondary-background md:text-[64px] rtl:tracking-normal">
        {t("title")}
      </h2>

      <p className="mt-10 font-sans text-xl leading-8 text-eleventh-text">
        {t("description")}
      </p>

      <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2">
        {fields.map(({ name, type, autoComplete }) => {
          const error = errors[name as keyof TripValues];
          return (
            <div key={name}>
              <label htmlFor={name} className={labelCls}>
                {t(`${name}Label`)}
              </label>
              <input
                id={name}
                name={name}
                type={type}
                autoComplete={autoComplete}
                value={values?.[name as keyof TripValues] ?? ""}
                onChange={(e) => change(name, e.target.value)}
                aria-invalid={!!error}
                aria-describedby={error ? `${name}-error` : undefined}
                className={`h-17.5 w-full border bg-[#FFFEFA] px-4 font-sans text-base text-secondary-background outline-none transition focus:border-secondary-background focus:ring-4 focus:ring-secondary-background/10 ${
                  error ? "border-red-600" : "border-[#D9D8CE]"
                }`}
              />
              {error && (
                <p
                  id={`${name}-error`}
                  className="mt-2 font-sans text-sm text-red-600"
                >
                  {error === "email" ? t("errorEmail") : t("errorRequired")}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <button
        type="button"
        onClick={onBack}
        className="mt-12 border-b border-[#9DB09F] pb-3 font-sans text-base font-medium text-secondary-background transition hover:opacity-70"
      >
        {t("backToItinerary")}
      </button>
    </form>
  );
}