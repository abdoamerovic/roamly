"use client";
import { useId, useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";

const field =
  "w-full border border-eleventh-text bg-[#D9D8CE] px-4 py-3 font-sans text-secondary-background outline-none focus:border-secondary-background";
const label =
  "mb-2 block font-sans text-[11px] leading-4 uppercase tracking-[1.4px] text-eighth-text rtl:tracking-normal";

export default function Form({ onCancel }: { onCancel?: () => void }) {
  const t = useTranslations("privateExperienceForm");
  const id = useId();
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); // stop the page from reloading
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log(data); // replace with a real request later
    setSent(true);
  }

  if (sent) {
    return (
      <p className="py-8 font-sans text-lg text-secondary-background">
        {t("success")}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <h2 className="font-heading text-[30px] leading-9 text-secondary-background">
          {t("heading")}
        </h2>
        <p className="mt-3 font-sans text-[14px] leading-6 text-eleventh-text">
          {t("description")}
        </p>
      </div>

      <div>
        <label htmlFor={`${id}-name`} className={label}>
          {t("name")}
        </label>
        <input
          id={`${id}-name`}
          name="name"
          type="text"
          required
          autoComplete="name"
          className={field}
        />
      </div>

      <div>
        <label htmlFor={`${id}-email`} className={label}>
          {t("email")}
        </label>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          className={field}
        />
      </div>

      <div>
        <label htmlFor={`${id}-message`} className={label}>
          {t("tripDetails")}
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={4}
          className={field}
        />
      </div>

      <div className="flex ">
        <button
          type="button"
          onClick={onCancel}
          className="h-8 w-3/10 mr-3 border border-secondary-background px-6 text-[11px]  font-sans text-primary-background transition hover:opacity-80 "
        >
          {t("cancel")}
        </button>
        <button
          type="submit"
          className="h-8 w-2/3 bg-secondary-background px-6 font-sans text-[11px] text-tenth-text transition hover:opacity-90"
        >
          {t("send")}
        </button>
      </div>
    </form>
  );
}
