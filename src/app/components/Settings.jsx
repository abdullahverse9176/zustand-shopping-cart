'use client'

import { useThemeStore } from '@/app/store/useThemeStore'
import { useStore } from '@/app/hooks/useStore'

export default function Settings() {
  // Safe Hydration read for theme
  const isDarkMode = useStore(useThemeStore, (state) => state.isDarkMode) ?? false
  const toggleTheme = useThemeStore((state) => state.toggleTheme)
  
  return (
    <div
      className={`p-6 rounded-lg transition-all duration-300 border shadow-md mt-5 ${
        isDarkMode
          ? 'bg-slate-900 text-white border-slate-700 shadow-slate-900/50'
          : 'bg-white text-slate-800 border-slate-200 shadow-slate-200/50'
      }`}
    >
      <h2 className="font-bold mb-3 text-lg">
        Theme Box (Local Theme)
      </h2>

      <p className="mb-4 text-sm font-medium">
        Box Theme: <strong className="ml-1">{isDarkMode ? 'Dark Mode 🌙' : 'Light Mode ☀️'}</strong>
      </p>

      <div className="flex flex-col gap-3">
        {/* Theme Toggle Button */}
        <button 
          onClick={toggleTheme}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded transition-colors cursor-pointer text-sm"
        >
          Toggle Box Theme
        </button>
      </div>
    </div>
  )
}
