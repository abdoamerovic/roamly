"use client";
import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { lang } from "@/types/products";
import useProduct from "@/hooks/product";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlinePlace } from "react-icons/md";
export default function Explore() {
  const t = useTranslations("explore");
  const lang = useLocale() as lang;
  const pro = useProduct(lang); 

  const [q, setQ] = useState("");
  const [category, setCategory] = useState("");

  const categories = useMemo(
    () => Array.from(new Set(pro.map((p) => p.category))),
    [pro]
  );
  const items = useMemo(() => {
    const text = q.trim().toLowerCase();
    return pro.filter(
      (p) =>
        (!category || p.category === category) &&
        (!text || `${p.name} ${p.place}`.toLowerCase().includes(text))
    );
  }, [pro, q, category]);

  const btn =
    "rounded-full border px-4 py-2 font-sans text-sm transition rtl:tracking-normal";
  const on = "border-secondary-background bg-secondary-background text-tenth-text";
  const off = "border-[#D9D8CE] text-primary-background";

  return (
    <div className="bg-third-background w-full">
      <section className="mx-auto grid w-full max-w-310 grid-cols-1 gap-11.5 px-4.5 py-12 md:gap-17 md:px-8 md:pt-16 md:pb-22.5">
        
        <div className="w-full">
          <p className="mb-5 font-sans text-[10px] font-medium leading-4 tracking-[1.98px] text-eighth-text rtl:tracking-normal">
            {t("eyebrow")}
          </p>
          <h1 className="font-heading text-[39px] leading-10.1 tracking-[-2.52px] text-secondary-background md:text-[54px] md:leading-15.25 md:tracking-[-2.87px] rtl:tracking-normal">
            {t.rich("title", {
              highlight: (c) => (
                <span className="text-eleventh-text">{c}</span>
              ),
            })}
          </h1>
          <p className="mt-6 font-heading text-base leading-7.5 text-eighth-text md:w-145">
            {t("description")}
          </p>
        </div>

        
        <div className="flex flex-col md:flex-row  justify-between">
          <label className="flex w-full md:w-110 items-center gap-3  border border-[#D9D8CE] px-4 py-3 md:max-w-md h-13.5">
            <IoIosSearch className="text-2xl text-eighth-text" />
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t("searchPlaceholder")}
              aria-label={t("searchPlaceholder")}
              className="w-full bg-transparent font-sans text-secondary-background outline-none"
            />
          </label>

          <div className=" mt-3 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setCategory("")}
              className={`${btn} ${!category ? on : off}  h-10 px-4 text-[10px]`}
            >
              {t("all")}
            </button>
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={`${btn} ${category === c ? on : off} h-10 px-4 text-[10px]` }
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex justify-between border-t border-[#D9D8CE] h-7 items-end"> 
            <span className=" text-[10px] font-sans leading-4.5 tracking-[1.4px] text-eighth-text">{t("destinationCount")}</span>
            <span className=" text-[10px] font-sans leading-4.5 tracking-[1.4px] text-eighth-text ">{t("countLabel")}</span>
        </div>

        {items.length === 0 ? (
          <p className="font-sans text-lg text-eighth-text">{t("empty")}</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((i) => (
              <Link key={i.id} href={`/Explore/${i.id}`} className="group block">
                <div className="relative aspect-4/5 w-full overflow-hidden ">
                  <Image
                    src={i.image}
                    alt={i.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className=" relative object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none 
                    motion-reduce:group-hover:scale-100"
                  />
                    <span
                    className="absolute inset-s-2.5 top-3 flex h-6 w-6 items-center justify-center bg-fourth-background text-center text-[10px] leading-4
                     tracking-[1.2px] text-secondary-background"
                    >
                    {String(i.id).padStart(2, "0")}
                    </span>

                    <span
                        className="absolute inset-e-2 bottom-3 z-10 flex h-8 w-8 items-center justify-center rounded-2xl bg-fourth-background"
                        >
                        <IoIosArrowRoundForward
                        className="text-xl transition-transform duration-300 group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5"/>
                    </span>
                </div>
                
                <div className="mt-4 flex justify-between  items-center">
                    <h3 className="mt-1 font-heading text-[26px] text-secondary-background leading-9.75">
                    {i.name}
                  </h3>
                  <span className="font-sans text-[10px] uppercase tracking-[1.98px] text-eighth-text rtl:tracking-normal">
                    {i.category}
                  </span>
                  
                  
                </div>
                <div className="flex flex-row items-center"><MdOutlinePlace  className="w-3 h-3 text-eighth-text"/><p className="font-sans text-sm text-eighth-text">{i.place}</p></div>
                
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
