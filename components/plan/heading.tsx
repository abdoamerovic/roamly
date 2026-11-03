import { useTranslations } from "next-intl"

export default function Heading(){
    const t=useTranslations("booking")
    return(
        <section className="bg-third-background w-full ">
            <div className="mx-auto max-w-295  py-10  px-2 md:px-0 ">
                <p className="mb-5 text-[11px] font-sans leading-4.25 tracking-[1.98px] font-semibold text-[#738078] ">{t("title")}</p>
                <h1 className="font-heading text-balance text-secondary-background text-[51px] leading-12 tracking-[-2.29px]
                 md:text-[65px] md:leading-18 md:tracking-[-2.91px] ">{t("heading")}</h1>
                <p className="mb-5 text-[20px] font-heading leading-7.5  font-semibold text-[#738078] mt-6 ">{t("description")}</p>
                 </div>
                 </section>
    )}