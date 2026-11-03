// hooks/useSelectedProducts.ts
"use client";
import { useMemo } from "react";
import { useLocale } from "next-intl";
import useProduct from "@/hooks/product";
import { useTripStore } from "@/store/trip";
import type { lang } from "@/types/products";

export function useSelectedProducts() {
  const locale = useLocale() as lang;
  const all = useProduct(locale);
  const ids = useTripStore((s) => s.ids);

  return useMemo(() => {
    const products = all.filter((p) => ids.includes(String(p.id)));
    const subtotal = products.reduce((sum, p) => sum + p.price, 0);
    return { products, subtotal, total: subtotal };
  }, [all, ids]);
}