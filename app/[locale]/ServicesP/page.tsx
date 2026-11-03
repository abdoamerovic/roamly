import Works from "@/components/servics/works";
import Explian from "@/components/servics/explian";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center  font-sans dark:bg-black bg-third-background">
        <Explian/>
        <Works/>
      
    </div>
  );
}