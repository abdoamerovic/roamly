import { useTranslations } from "next-intl";

type StepsProps = {
  currentStep: number;
  onSelect?: (step: number) => void;
};

const KEYS = ["stepItinerary", "stepDetails", "stepConfirm"] as const;

export default function Steps({ currentStep, onSelect }: StepsProps) {
  const t = useTranslations("tripForm");

  return (
    <ol className="flex gap-4">
      {KEYS.map((key, index) => {
        const number = index + 1;
        const done = number < currentStep;
        const current = number === currentStep;
        const reached = number <= currentStep;

        const labelCls = `block pb-2 text-start font-sans text-[11px] uppercase tracking-[1.4px] rtl:tracking-normal ${
          reached ? "text-secondary-background" : "text-eighth-text"
        }`;
        const label = `${String(number).padStart(2, "0")} ${t(key)}`;

        return (
          <li
            key={key}
            className="flex-1"
            aria-current={current ? "step" : undefined}
          >
            {done && onSelect ? (
              <button
                type="button"
                onClick={() => onSelect(number)}
                className={`${labelCls} w-full transition hover:opacity-70`}
              >
                {label}
              </button>
            ) : (
              <span className={labelCls}>{label}</span>
            )}

            <div className="h-1 bg-[#D9D8CE]">
              <div
                className={`h-full w-full transition-colors ${
                  reached ? "bg-secondary-background" : "bg-transparent"
                }`}
              />
            </div>
          </li>
        );
      })}
    </ol>
  );
}
