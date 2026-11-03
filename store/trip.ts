// store/trip.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

type TripStore = {
  ids: string[];
  add: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
};

export const useTripStore = create<TripStore>()(
  persist(
    (set) => ({
      ids: [],
      add: (id) =>
        set((s) => (s.ids.includes(id) ? s : { ids: [...s.ids, id] })),
      remove: (id) => set((s) => ({ ids: s.ids.filter((x) => x !== id) })),
      clear: () => set({ ids: [] }),
    }),
    { name: "trip", version: 1, skipHydration: true }
  )
);