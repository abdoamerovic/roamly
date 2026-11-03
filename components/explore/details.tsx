"use client";

import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import useProduct from "@/hooks/product";
import type { lang } from "@/types/products";
import { Link } from "@/i18n/navigation";
import { useTripStore } from "@/store/trip";

export default function Details({ id }: { id: string }) {
  const locale = useLocale() as lang;
  const pro = useProduct(locale);
  const add = useTripStore((s) => s.add); // saves the id in the store

  const why = locale === "en" ? "why we love it" : "لماذا نحبه";
  const know = locale === "en" ? "good to Know" : "من الجيد معرفة";
  const best = locale === "en" ? "Best Time to Visit" : "افضل وقت للزيارة";
  const stay = locale === "en" ? "Ideal stay" : "مدة الإقامة المثالية";
  const available = locale === "en" ? "Typical weather" : "الطقس المعتاد";
  const btn = locale === "en" ? "view in my trip" : "عرضها فى رحلتى";
  const imp = locale === "en" ? "Important Information" : "معلومات مهمة";
  const destination = pro.find((item) => String(item.id) === id);

  if (!destination) {
    notFound();
  }

  return (
    <main className=" bg-third-background w-full">
      <div className="mx-auto max-w-295  py-10 ">
        <p className=" text-[11px]  leading-[16.5px] tracking-[1.98px]  text-eighth-text font-sans rtl:tracking-normal">
          {destination.place}
        </p>
        <h1 className="mb-4 text-[54px] leading-14 tracking-[-2.9px] md:text-[108px] md:leading-30 md:tracking-[-5.75px] rtl:tracking-normal font-heading text-secondary-background md:relative  md:z-10">
          {destination.name}
        </h1>

        <p className="mb-4 text-[16px] leading-6 text-eighth-text mt-4.5  md:relative  md:z-10">
          {destination.more}
        </p>

        <div className="relative mb-6 h-87.5 w-full overflow-hidden md:-mt-20 ">
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover md:mb-8"
          />
        </div>
        <div className=" flex flex-col md:flex-row md:gap-35 pt-5 pb-31">
          <div>
            <p className=" mb-5 font-sans text-[11px] leading-[16.5px] tracking-[1.98px]  text-eighth-text rtl:tracking-normal">
              {why}
            </p>
            <h2 className=" text-[51px] leading-[53.6px] tracking-[-1.79px] rtl:tracking-normal font-heading text-secondary-background ">
              {imp}
            </h2>
            <p className=" text-[20px] leading-8.25 text-eighth-text font-heading">
              {destination.why}
            </p>
            <p className=" text-[20px] leading-8.25 text-eighth-text font-heading">
              {destination.important}
            </p>
          </div>

          <aside className=" w-full md:max-w-92  p-7.5 bg-fourth-background border-[#D9D8CE]">
            <p className="text-[11px] tracking-[1.98px] leading-[16.5px]  text-[#738078] font-bold rtl:tracking-normal">
              {know}
            </p>
            <div className=" py-4.25 border-b border-[#738078] flex justify-between">
              <p className="mb-2 mt-6 text-[11px] leading-[16.5px] font-sans">{best}</p>
              <h2 className=" text-[17px] font-heading leading-[25.5px] text-secondary-background mt-4.5">
                {destination.bestTime}
              </h2>
            </div>
            <div className=" py-4.25 border-b border-[#738078] flex justify-between">
              <p className="mb-2 mt-6 text-[11px] leading-[16.5px] font-sans">{stay}</p>
              <h2 className=" text-[17px] font-heading leading-[25.5px] text-secondary-background mt-4.5">
                {destination.day}
              </h2>
            </div>
            <div className=" py-4.25 border-b border-[#738078] flex justify-between ">
              <p className="mb-2 mt-6 text-[11px] leading-[16.5px] font-sans">{available}</p>
              <h2 className=" text-[17px] font-heading leading-[25.5px] text-secondary-background mt-4.5">
                {destination.weather}
              </h2>
            </div>

            {/* href has no ?id= anymore: the id is saved in the store on click */}
            <Link
              href="/planner"
              onClick={() => add(id)}
              className="flex items-center justify-center  bg-sixth-background mt-6.5 text-secondary-background text-[13px] leading-[19.5px]
             tracking-[0.26px] rtl:tracking-normal font-sans border border-fifth-background w-full md:w-77 h-13 group
            gap-3"
            >
              {btn}
              <IoIosArrowRoundForward
                aria-hidden="true"
                className=" transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180
           rtl:group-hover:-translate-x-1"
              />
            </Link>
            
          </aside>
        </div>
      </div>
    </main>
  );
}
