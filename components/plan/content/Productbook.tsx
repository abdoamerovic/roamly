"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

import { useSelectedProducts } from "@/hooks/useSelectedProducts";
import { useTripStore } from "@/store/trip";

export default function ProductBook() {
  const t = useTranslations("tripForm");
  const locale = useLocale();

  const { products } = useSelectedProducts();
  const onRemove = useTripStore((s) => s.remove);


  return (
    <div className="flex flex-col gap-4">
      {products.map((product) => (


        <div
          key={product.id}
          className="grid grid-cols-2 gap-6 border border-[#D9D8CE] bg-fourth-background p-4 md:grid-cols-3"
        >
          <div className="relative col-span-1 h-64 w-42.5 overflow-hidden md:h-75 md:w-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(min-width: 768px) 33vw, 170px"
              className="object-cover"
            />
            <span className="absolute inset-s-2.5 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-secondary-background text-center text-[10px] leading-4 tracking-[1.2px] text-tenth-text">
              {String(product.id).padStart(2, "0")}
            </span>
          </div>

          <div className="col-span-1 md:col-span-2">
            <div className="flex justify-between gap-3">
              <div >
                <p className="font-sans text-[11px] uppercase leading-[16.5px] tracking-[1.98px] text-eighth-text rtl:tracking-normal">
                  {product.place}
                </p>
                <h2 className="font-heading text-[22px] md:text-[38px] leading-10.1 text-secondary-background rtl:tracking-normal ">
                  {product.name}
                </h2>
              </div>

              {product.price > 0 && (
                <div className="text-end">
                  <p className="font-sans text-[9px] leading-[13.5px] text-eighth-text">
                    {t("from")}
                  </p>
                  <p className="font-heading text-[22px] leading-8 text-secondary-background">
                    {(product.price)}{locale === "ar" ? " جنيه" : " EGP"}
                  </p>
                  <p className="font-sans text-[9px] leading-[13.5px] text-eighth-text">
                    {t("per")}
                  </p>
                </div>
              )}
            </div>

            <p className="mb-4 mt-5 font-sans text-[12px] leading-4.5 text-secondary-background">
              {t("dates")}
            </p>
            <div className="mb-6 flex flex-col">
              <span className="my-1 font-sans text-[10px] leading-4 text-eighth-text">
                {t("stay")} {t("transfer")}
              </span>
              <span className="my-1 font-sans text-[10px] leading-4 text-eighth-text">
                {t("changes")}
              </span>
            </div>

            <div className="mt-3 flex justify-between border-t border-eighth-text pt-3">
              <Link
                href={`/Explore/${product.id}`}
                className="font-sans text-[10px] leading-4 text-secondary-background underline"
              >
                {t("viewDestination")}
              </Link>
              <button
                type="button"
                onClick={() => onRemove(String(product.id))}
                className="font-sans text-[10px] leading-4 text-eighth-text transition hover:text-secondary-background"
              >
                {t("remo")}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
