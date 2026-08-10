'use client'

import { useState, useEffect } from 'react'
import { useCartStore } from '@/app/store/useCartStore'

export default function ProductList() {
  // Local state for products and loading
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // Zustand Store se sirf addToCart action le rahe hain
  const addToCart = useCartStore((state) => state.addToCart)

  // Local fetch logic
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products?limit=6')
        const data = await res.json()
        setProducts(data)
      } catch (error) {
        console.error('Fetch error:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (isLoading)
    return (
      <div className="p-6 text-center text-gray-500 font-medium animate-pulse">
        Loading products...
      </div>
    )

  return (
    <div className="border border-gray-200 dark:border-gray-800 p-4 rounded-lg bg-white dark:bg-gray-900 shadow-sm">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
        Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-100 dark:border-gray-800 p-3 rounded-md flex flex-col justify-between bg-gray-50 dark:bg-gray-800/50 hover:shadow-md transition-shadow"
          >
            <div>
              <h4 className="text-sm font-semibold my-1 text-gray-800 dark:text-gray-100 line-clamp-2">
                {product.title.substring(0, 25)}...
              </h4>
              <p className="font-bold text-blue-600 dark:text-blue-400 text-sm my-1">
                ${product.price}
              </p>
            </div>
            <button
              onClick={() => addToCart(product)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-1.5 px-3 rounded text-xs transition-colors cursor-pointer mt-2"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}