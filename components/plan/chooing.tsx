"use client";
import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { FaPlus } from "react-icons/fa6";
import { Link } from "@/i18n/navigation";
import useProduct from "@/hooks/product";
import type { lang } from "@/types/products";
import { emptyValues, type TripProduct, type TripValues } from "@/lib/trip";
import { useTripStore } from "@/store/trip";
import Steps from "./steps";
import Empty from "./empty";
import StepContent from "./content/stepcontent";
import AsideDetails from "./content/asideDetials";
import Checked from "./checked";
import Heading from "./heading";

function makeReference() {
  const d = new Date();
  const yy = String(d.getFullYear()).slice(2);
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `RML-${yy}${mm}${dd}`;
}

export default function Choosing({ ids }: { ids: string[] }) {
  const locale = useLocale() as lang;
  const t = useTranslations("tripOverview");
  const pro = useProduct(locale);
  const remove = useTripStore((s) => s.remove);

  const [step, setStep] = useState(0);
  const [values, setValues] = useState<TripValues>(emptyValues);
  const [done, setDone] = useState(false);
  const [reference, setReference] = useState("");

  const products = useMemo(
    () =>
      ids
        .map((id) => pro.find((p) => String(p.id) === id))
        .filter((p): p is TripProduct => !!p),
    [ids, pro]
  );

  function confirm() {
    setReference(makeReference());
    setDone(true);
  }

  if (done) {
    return (
      <div className="mx-auto w-full max-w-295 px-4.5 py-10 md:px-8">
        <Checked reference={reference} />
      </div>
    );
  }

  if (products.length === 0) return <Empty />;

  return (
    <div className="mx-auto w-full max-w-295 px-2 py-10 ">
      <Heading/>
      <Steps currentStep={step + 1} onSelect={(n: number) => setStep(n - 1)} />

      <div className="mt-10 flex flex-col gap-10 md:flex-row">
        <div className="flex-1">
          <StepContent
            currentStep={step}
            products={products}
            values={values}
            done={done}
            onChange={setValues}
            onRemove={remove}
            onNext={() => setStep((s) => Math.min(s + 1, 2))}
            onBack={() => setStep((s) => Math.max(s - 1, 0))}
          />

          {step === 0 && (
            <Link
              href="/Explore"
              className="group mt-3 flex h-20 w-full items-center gap-5 border border-dashed border-[#B8B8AB] px-5 transition hover:bg-fourth-background"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#B8B8AB] text-secondary-background transition group-hover:border-secondary-background">
                <FaPlus aria-hidden="true" className="text-sm" />
              </span>
              <span className="font-sans text-[13px] font-medium text-secondary-background">
                {t("addAnaotherDestination")}
              </span>
            </Link>
          )}
        </div>

        <AsideDetails
          products={products}
          step={step}
          done={done}
          onNext={() => setStep((s) => Math.min(s + 1, 2))}
          onConfirm={confirm}
        />
      </div>
    </div>
  );
}