import ProductList from '@/app/components/ProductList'
import Cart from '@/app/components/Cart'
import Settings from './components/Settings';
import Notes from './components/Notes';

export default function Home() {
  return (
    <main className="max-w-6xl w-full mx-auto my-8 px-4 font-sans">
      <h1 className="text-center text-2xl md:text-3xl mb-8 font-extrabold tracking-tight text-slate-100">
        Next.js + Zustand Notes App
      </h1>
      <Notes />
    </main>
  );
}
