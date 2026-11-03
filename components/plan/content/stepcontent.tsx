"use client";
import type { TripProduct, TripValues } from "@/lib/trip";
import type { ComponentType } from "react";
import StepDetails from "./stepDetials";
import ProductBook from "./Productbook";
import PaymentStep from "./paymentstep";

type StepContentProps = {
  currentStep: number;
  products: TripProduct[];
  values: TripValues;
  done: boolean;
  onChange: (v: TripValues) => void;
  onRemove: (id: string) => void;
  onNext: () => void;
  onBack: () => void;
};

export default function StepContent({
  currentStep,
  products,
  values,
  done,
  onChange,
  onRemove,
  onNext,
  onBack,
}: StepContentProps) {
  switch (currentStep) {
    case 0:
      {
        const ProductBookWithProps = ProductBook as unknown as ComponentType<{
          products: TripProduct[];
          onRemove: (id: string) => void;
        }>;
        return <ProductBookWithProps products={products} onRemove={onRemove} />;
      }
    case 1:
      return (
        <StepDetails
          values={values}
          onChange={onChange}
          onNext={onNext}
          onBack={onBack}
        />
      );
    case 2:
      return (
        <PaymentStep
          products={products}
          values={values}
          done={done}
          onBack={onBack}
        />
      );
    default:
      return null;
  }
}
