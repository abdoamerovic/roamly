
import Body from "@/components/plan/body";
import { Suspense } from "react";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center  font-sans dark:bg-black bg-third-background">
        
            <Suspense fallback={null}>
              <Body />
            </Suspense>
    </div>
  );
}