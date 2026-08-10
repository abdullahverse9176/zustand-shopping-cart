'use client'

import { useCartStore } from '@/app/store/useCartStore'
import { useStore } from '@/app/hooks/useStore'

export default function Cart() {
  // Safe Hydration: Hooks ke zariye local storage ka state load kar rahe hain
  const cart = useStore(useCartStore, (state) => state.cart) || []
  const removeFromCart = useCartStore((state) => state.removeFromCart)
  const clearCart = useCartStore((state) => state.clearCart)

  // Total Price calculate kar rahe hain
  const totalPrice = cart.reduce((total, item) => total + item.price, 0)

  return (
    <div className="border-2 border-emerald-500 p-4 rounded-lg mt-5 bg-white dark:bg-gray-900 shadow-sm">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
        Shopping Cart ({cart.length})
      </h2>
      {cart.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 py-4 text-center border border-dashed border-gray-300 dark:border-gray-700 rounded-md">
          Your cart is empty.
        </p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex justify-between items-center py-2 px-3 mb-2 bg-gray-50 dark:bg-gray-800 rounded-md border border-gray-100 dark:border-gray-700"
            >
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                {item.title.substring(0, 20)}...
              </span>
              <div className="flex items-center">
                <strong className="font-bold text-emerald-600 dark:text-emerald-400 mr-3 text-sm">
                  ${item.price}
                </strong>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white border-0 py-1 px-2.5 rounded text-xs transition-colors cursor-pointer"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <hr className="my-3 border-gray-200 dark:border-gray-700" />
          <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
            Total: ${totalPrice.toFixed(2)}
          </h3>
          <button
            onClick={clearCart}
            className="w-full bg-gray-700 hover:bg-gray-800 text-white font-medium py-2 px-3 rounded text-sm transition-colors cursor-pointer"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  )
}