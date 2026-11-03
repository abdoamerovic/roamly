import Link from "next/link"
import { IoIosArrowRoundForward } from "react-icons/io";
import { useTranslations } from "next-intl"
export default function Planning(){
    const t =useTranslations("cta")
    return(
        <div className=" pb-12 w-full md:w-295   ">
            <div className=" bg-secondary-background max-w-295 gap-22.5 py-17.5 mb-30 md:px-19  px-7 mx-auto grid grid-cols-1 md:grid-cols-2 ">
                <div className="text-start">
                    <p className=" text-2.5 font-sans text-third-background md:mb-5">{t("eyebrow")}</p>
                    <h1 className="font-heading  text-seventh-background tracking-[-2.52px] leading-16 md:text-[72px] text-[49px]  text-font ">{t.rich("title",{
                        highlight: (c) => (
                            <>
                            <br/>
                        <span>{c}</span>
                    </>)
                    })}</h1>
                </div>
                <div className=" sm:mb-5">
                    <p className="font-bold text-[18px] text-[#D5DED7] leading-7.5 mb-7.5">{t("description")}</p>
                   <Link
                         href="/planner"
                         className="group inline-flex h-13 items-center gap-2 rounded-sm bg-tenth-text px-5.5 text-base font-medium tracking-[0.26px] w-full  justify-center
                         text-primary-background transition-transform duration-300 hover:-translate-y-1 rtl:tracking-normal motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                        >
                        {t("button")}
                        <IoIosArrowRoundForward className="text-2xl transition-transform duration-300 group-hover:translate-x-2 rtl:rotate-180 rtl:group-hover:-translate-x-2" />
                    </Link>
                </div>
            </div>

        </div>

    )
} 