import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useCartStore = create(
  persist(
    (set, get) => ({
      // 1. Initial State
      cart: [],
      products: [],
      isLoading: false,
      isDarkMode: false,
      fontSize: 16, 

      toggleTheme: () => set((state) => {
        return { isDarkMode: !state.isDarkMode }
      }),

      increaseFontSize: () => set((state) => ({
        fontSize: state.fontSize + 2
      })),
      decreaseFontSize: () => set((state) => ({
        fontSize: state.fontSize - 2
      })),

      // 2. Async Action: Products fetch karne ke liye (Interview Topic: Async Actions)
      fetchProducts: async () => {
        set({ isLoading: true })
        try {
          const res = await fetch('https://fakestoreapi.com/products?limit=6')
          const data = await res.json()
          set({ products: data, isLoading: false })
        } catch (error) {
          console.error('Fetch error:', error)
          set({ isLoading: false })
        }
      },

      // 3. Actions: State update karne ke tarike (Interview Topic: Actions)
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
      partialize: (state) => ({ cart: state.cart }), // Sirf cart data ko persist karna
    }
  )
)