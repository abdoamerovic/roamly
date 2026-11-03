"use client";
import { useTranslations } from "next-intl";
type StepsProps = {
  currentStep: number;
  onSelect?: (step: number) => void;
};

const KEYS = ["stepItinerary", "stepDetails", "stepConfirm"] as const;

export default function Steps({ currentStep, onSelect }: StepsProps) {
  const t = useTranslations("tripForm");

  return (
    <ol className="grid grid-cols-3 border-b border-[#D9D8CE]">
      {KEYS.map((key, i) => {
        const n = i + 1;
        const done = n < currentStep;
        const current = n === currentStep;

        const content = (
          <>
            <span className="text-[11px] text-[#C9A66B]">
              {done ? "✓" : String(n).padStart(2, "0")}
            </span>
            <span className={current ? "font-medium" : ""}>{t(key)}</span>
          </>
        );

        const cls = `-mb-px flex w-full items-center gap-3 border-b-2 py-5 text-start font-sans text-sm ${
          done
            ? "border-secondary-background text-secondary-background"
            : current
              ? "border-transparent text-secondary-background"
              : "border-transparent text-eighth-text"
        }`;

        return (
          <li key={key} aria-current={current ? "step" : undefined}>
            {done && onSelect ? (
              <button
                type="button"
                onClick={() => onSelect(n)}
                className={`${cls} transition hover:opacity-70`}
              >
                {content}
              </button>
            ) : (
              <div className={cls}>{content}</div>
            )}
          </li>
        );
      })}
    </ol>
  );
}