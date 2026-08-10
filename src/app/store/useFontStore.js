import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";


export const useFontStore = create(persist((set) => ({
  font: 16,
  increaseFontSize: () => set((state) => ({ font: state.font + 1 })),
  decreaseFontSize: () => set((state) => ({ font: state.font - 1 }))

}), {
  name: "font-size",
  storage: createJSONStorage(() => localStorage),
}))