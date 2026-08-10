'use client'

import { useEffect } from 'react'
import { useThemeStore } from '@/app/store/useThemeStore'
import { useStore } from '@/app/hooks/useStore'

export default function ThemeProvider({ children }) {
  // SSR Hydration Safe: LocalStorage se theme read kar rahe hain
  const isDarkMode = useStore(useThemeStore, (state) => state.isDarkMode) ?? false

  // Global html tag par 'dark' class toggle karna for Tailwind CSS
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <div
      className={
        isDarkMode
          ? 'dark bg-gray-950 text-gray-100 min-h-screen transition-colors duration-300'
          : 'bg-gray-50 text-gray-900 min-h-screen transition-colors duration-300'
      }
    >
      {children}
    </div>
  )
}
