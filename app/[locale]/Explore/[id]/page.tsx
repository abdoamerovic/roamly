import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import Details from "@/components/explore/details";
import Breadcrumb from "@/components/explore/breadcramb";
import { prod } from "@/data/product";
import type { lang } from "@/types/products";

type Params = Promise<{ locale: string; id: string }>;

export function generateStaticParams() {
  return prod.map((p) => ({ id: String(p.id) }));
}

// Reads params, so it lives inside Suspense
async function DetailsContent({ params }: { params: Params }) {
  const { locale, id } = await params;

  const product = prod.find((p) => String(p.id) === id);
  if (!product) notFound();

  const t = await getTranslations({ locale, namespace: "explore" });

  return (
    <div className=" bg-third-background p-4">
      <div className="mx-auto max-w-295 pt-4">
        <Breadcrumb
          items={[
            { title: t("breadcrumb"), href: "/Explore" },
            { title: product.name[locale as lang] },
          ]}
        />
      </div>
      <Details id={id} />
    </div>
  );
}

export default function DetailsP({ params }: { params: Params }) {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <DetailsContent params={params} />
    </Suspense>
  );
}
