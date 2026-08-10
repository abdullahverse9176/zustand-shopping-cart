// src/app/components/Settings.jsx
'use client' // Next.js App Router ke liye important hai

import { useCartStore } from '../store/useCartStore'

export default function Settings() {
  // Store se state aur actions ko destructure karna
  const { isDarkMode, toggleTheme, increaseFontSize, decreaseFontSize, fontSize } = useCartStore()

  return (
    <div
      className={`p-6 rounded-lg transition-all duration-300 border shadow-sm ${
        isDarkMode
          ? 'bg-slate-800 text-slate-50 border-slate-700'
          : 'bg-slate-50 text-slate-800 border-slate-200'
      }`}
    >
      <h2 className="font-bold mb-4">
        UI Settings Controller
      </h2>

      <p className="mb-4">
        Current Theme: <strong>{isDarkMode ? 'Dark Mode 🌙' : 'Light Mode ☀️'}</strong>
      </p>
      <p className="mb-4">
        Current Font Size: <strong>{fontSize}px</strong>
      </p>

      <div className="flex flex-col gap-3">
        {/* Theme Toggle Button */}
        <button 
          onClick={toggleTheme}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Toggle Theme
        </button>

        {/* Font Size Adjusters */}
        <div className="flex gap-2">
          <button 
            onClick={increaseFontSize}
            className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            A+ (Increase Size)
          </button>
          <button 
            onClick={decreaseFontSize}
            className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            A- (Decrease Size)
          </button>
        </div>
      </div>
    </div>
  )
}
