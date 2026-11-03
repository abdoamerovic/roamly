export type lang ="en"|"ar";
export type localizedText=Record<lang, string>;
export interface Products{
    id:string;
    place:localizedText;
    name:localizedText;
    specialist:localizedText;
    image:string;
    why:localizedText;
    important:localizedText;
    more:localizedText;
    bestTime:localizedText;
    day:localizedText;
    weather:string;
    price:number;
    category:localizedText,
    


}