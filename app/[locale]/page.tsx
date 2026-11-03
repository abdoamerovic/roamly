
import { setRequestLocale } from "next-intl/server";
import Homebage from "@/components/main/Homebage"
import Planning from "@/components/main/planing";
import Journey from "@/components/main/journey";
import FourProduct from "@/components/main/product";

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="flex flex-col flex-1 items-center justify-center  font-sans dark:bg-black bg-third-background">
      <Homebage/>
      <FourProduct/>
      <Journey/>
      <Planning/>
    </div>
  );
}