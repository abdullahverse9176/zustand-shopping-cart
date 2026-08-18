import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useIncrementStore = create(
  persist(
    (set) => ({
      // Initial State
      value: 0,

      increment: () => set((state) => ({ value: state.value + 1 })),

      // Actions
      // increment: (value) => set((state) => ({ value: state.value + value })),
      // decrement: (value) => set((state) => ({ value: state.value - value })),  
      // reset: () => set({ value: 0 }),
    }),
    {
      name: 'increment-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)