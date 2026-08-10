import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useCartStore = create(
  persist(
    (set) => ({
      // Initial State
      cart: [],

      // Cart Actions
      addToCart: (product) =>
        set((state) => ({ cart: [...state.cart, product] })),

      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        })),

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: 'shopping-cart-storage', // LocalStorage Key Name
      storage: createJSONStorage(() => localStorage), // Next.js Safe Storage Bridge
    }
  )
)