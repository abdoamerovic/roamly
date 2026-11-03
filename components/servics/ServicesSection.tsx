
"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { IoIosArrowRoundForward } from "react-icons/io";
import Form from "./form";
const serviceKeys = [
  "flights",
  "stays",
  "privateExperiences",
  "transfers",
  "travelInsurance",
  "visaAssistance",
  "customItineraries",
  "travelConcierge",
] as const;

export default function ServicesSection() {
  const t = useTranslations("servicesP");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section >
      <div className=" grid grid-cols-1  md:grid-cols-2 bg-fourth-background  w-full md:h-223   ">
        {serviceKeys.map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setIsOpen(true)}
            className="border p-6 text-start relative flex justify-evenly  border-[#79867D] hover:bg-tenth-text duration-300"
          >
            <p className=" text-[10px] leading-3.75 text-[#79867D] tracking-[1.4px] absolute top-3 left-3 ">{t(`items.${key}.id`)}</p>
            <div className=" w-90">
            <h3 className="text-[31px] leading-[34.1px] text-secondary-background font-heading mt-8">{t(`items.${key}.title`)}</h3>
            <p className="text-[16px] leading-6 text-eighth-text font-heading">
              {t.rich(`items.${key}.description`, { highlight: () => <br /> })}
            </p>
            </div>
            <span
              className="absolute inset-e-2 top-5 right-5  z-10 flex h-8 w-8 items-center justify-center rounded-2xl bg-fourth-background border border-[#79867D] hover:bg-secondary-background group"
              >
                <IoIosArrowRoundForward
                  className="text-xl transition-transform duration-300 group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5 group-hover:text-tenth-text"/>
            </span>
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-lg bg-[#dadbdb] p-8 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4"
            >
              ✕
            </button>
              <Form />
          </div>
        </div>
      )}
    </section>
  );
}
