"use client";
import { useEffect } from "react";
import { useTripStore } from "@/store/trip";

export default function TripHydrator() {
  useEffect(() => {
    useTripStore.persist.rehydrate();
  }, []);
  return null;
}