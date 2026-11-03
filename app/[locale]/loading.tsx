import { useTranslations } from "next-intl";

function Bone({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`animate-pulse rounded-sm bg-[#D9D8CE] motion-reduce:animate-none ${className}`}
    />
  );
}

export default function Loading() {
  const t = useTranslations("common");

  return (
    <div
      role="status"
      aria-busy="true"
      className="flex w-full flex-1 flex-col items-center bg-third-background"
    >
      <span className="sr-only">{t("loading")}</span>

      <section className="mx-auto w-full max-w-295 px-6 py-16 md:px-16 md:py-24">
        <Bone className="h-3 w-32" />
        <Bone className="mt-8 h-12 w-full max-w-xl md:h-16" />
        <Bone className="mt-4 h-12 w-3/4 max-w-md md:h-16" />
        <Bone className="mt-8 h-5 w-full max-w-lg" />
        <Bone className="mt-3 h-5 w-2/3 max-w-sm" />
        <Bone className="mt-10 h-13 w-44" />
      </section>
      <section className="mx-auto w-full max-w-295 px-6 pb-16 md:px-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-4">
              <Bone className="aspect-4/5 w-full" />
              <Bone className="h-6 w-3/4" />
              <Bone className="h-4 w-full" />
              <Bone className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto w-full max-w-295 px-6 pb-16 md:px-16">
        <Bone className="h-3 w-28" />
        <div className="mt-10 flex flex-col gap-8 md:flex-row md:gap-13">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex-1 border-t border-[#D9D8CE] pt-3">
              <Bone className="h-3 w-6" />
              <Bone className="mt-3 h-7 w-2/3" />
              <Bone className="mt-3 h-4 w-full" />
              <Bone className="mt-2 h-4 w-5/6" />
            </div>
          ))}
        </div>
      </section>

      {/* Planning */}
      <section className="mx-auto mb-26 w-full max-w-295 px-6 md:px-16">
        <Bone className="h-64 w-full md:h-80" />
      </section>
    </div>
  );
}