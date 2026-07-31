'use client'

import { useEffect } from 'react'
import { useCartStore } from '@/app/store/useCartStore'

export default function ProductList() {
  // Selectors ke zariye specific state extract kar rahe hain
  const products = useCartStore((state) => state.products)
  const isLoading = useCartStore((state) => state.isLoading)
  const fetchProducts = useCartStore((state) => state.fetchProducts)
  const addToCart = useCartStore((state) => state.addToCart)

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  if (isLoading) return <p style={{ padding: '10px' }}>Loading products...</p>

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
      <h2>Products</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #eee', padding: '10px', borderRadius: '5px' }}>
            <h4 style={{ fontSize: '14px', margin: '5px 0' }}>{product.title.substring(0, 25)}...</h4>
            <p style={{ fontWeight: 'bold' }}>${product.price}</p>
            <button 
              onClick={() => addToCart(product)}
              style={{ background: '#0070f3', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}