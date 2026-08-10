import ProductList from '@/app/components/ProductList'
import Cart from '@/app/components/Cart'

export default function Home() {
  return (
    <>
      <main className="max-w-4xl w-full mx-auto mt-5 px-4 font-sans">
        <h1 className="text-center text-2xl mb-5 font-bold">Next.js + Zustand Shopping Cart</h1>
        <div className="flex gap-4 justify-between">
          <div className="w-1/2">
            <ProductList />
          </div>
          <div className="w-1/2">
            <Cart />
          </div>
        </div>
      </main>
    </>
  );
}
