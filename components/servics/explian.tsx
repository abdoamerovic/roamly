import { useTranslations } from "next-intl"
import ServicesSection from "@/components/servics/ServicesSection"
export default function Explian(){
    const t=useTranslations("servicesP")
    return(
        <section className="bg-third-background w-full ">
            <div className="mx-auto max-w-295  py-10  px-3 md:px-6">
                <p className="mb-5 text-[11px] font-sans leading-4.25 tracking-[1.98px] font-semibold text-[#738078] ">{t("eyebrow")}</p>
                <h1 className="font-heading text-balance text-secondary-background text-[51px] leading-12 tracking-[-2.29px]
                 md:text-[77px] md:leading-18 md:tracking-[-3.4px] rtl:tracking-normal">
                    {t.rich("title", {
                    highlight: (chunks) => (
                    <span className="text-fifth-background">{chunks}</span>
                    ),
                    br: () => <br />,
                    })}
                </h1>
                <p className=" font-[22px] leading-7.5 font-heading mt-6 text-eighth-text"> {t.rich("description",{
                    highlight: () => (
                     <>
                        <br/>
                    </>
                    ),

                })}</p>
                
                <section className=" mt-22">
                    <p className="mb-5 text-[11px] font-sans leading-4.25 tracking-[1.98px] text-eighth-text ">{t("chooseService")}</p>
                    <ServicesSection/>
                </section>
                
            </div>
        </section>
    )
}