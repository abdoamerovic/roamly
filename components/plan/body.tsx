"use client";
import { useSyncExternalStore } from "react";
import { useTripStore } from "@/store/trip";
import Empty from "./empty";
import Choosing from "./chooing";

const subscribe = () => () => {};

export default function Body() {
  const ids = useTripStore((s) => s.ids);

  // Keep the server and initial client render consistent during hydration.
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  if (!mounted) return null;
  if (ids.length === 0) return <Empty />;

  // ONE planner that receives all the ids
  return <Choosing ids={ids} />;
}
