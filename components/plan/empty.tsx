
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FiMapPin } from "react-icons/fi";

const Empty = () => {
  const t = useTranslations("empty");

  return (
    <div className="bg-fourth-background min-h-133 flex items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center text-center px-4">
        <div className="w-15.5 h-15.5 mb-5 mt-7 border border-eighth-text rounded-full flex items-center justify-center">
          <FiMapPin className="w-6 h-6" />
        </div>

        <p className="font-sans text-[11px] leading-[16.5px] tracking-[1.98px] text-[#738078]">
          {t("status")}
        </p>

        <h1 className="text-[42px] leading-[44.1px] tracking-[-1.47px] text-secondary-background">
          {t("title")}
        </h1>

        <p className="text-[16px] leading-[25.6px] mt-5 mb-6 text-eighth-text">
          {t("description")}
        </p>

        <Link
          href="/Explore"
          className="inline-flex items-center justify-center px-8 py-4 text-[11px] leading-[19.5px] tracking-[0.26px] font-sans bg-primary-background text-seventh-background"
        >
          {t("button")}
        </Link>
      </div>
    </div>
  );
};

export default Empty;
