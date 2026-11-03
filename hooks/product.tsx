"use client"
import { prod } from "@/data/product"
import {lang} from "@/types/products"
import { useMemo } from "react"

export default function useProduct(lang:lang){
    return useMemo(()=>
    prod.map((p)=>({
        ...p,
        place: p.place[lang],
        name: p.name[lang],
        specialist: p.specialist[lang],
        why: p.why[lang],
        important: p.important[lang],
        more: p.more[lang],
        bestTime: p.bestTime[lang],
        day: p.day[lang],
        category: p.category[lang],
        
    })),
    [lang]
    )
}