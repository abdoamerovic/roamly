import Explore from "@/components/explore/explore";
import Breadcrump from "@/components/explore/breadcramb";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center  font-sans dark:bg-black bg-third-background">
      <Breadcrump  items={[]}/>
      <Explore />
    </div>
  );
}