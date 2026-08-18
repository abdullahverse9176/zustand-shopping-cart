'use client'

import React from 'react'
import { useIncrementStore } from '../store/useIncrement'

const IncrementButton = () => {

  const increment = useIncrementStore((state) => state.increment)
  const value = useIncrementStore((state) => state.value)
  const resetCounter = useIncrementStore((state) => state.resetCounter)

  return (
    <div className="max-w-sm mx-auto bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6 text-center text-slate-100">

      {/* Header Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        Counter Demo Component
      </div>

      {/* Counter Number Display */}
      <div className="relative py-8 bg-slate-950/70 border border-slate-800/80 rounded-2xl shadow-inner">
        <span className="text-6xl font-black tracking-tight bg-gradient-to-br from-white via-slate-100 to-emerald-400 bg-clip-text text-transparent drop-shadow-md">
          {value}
        </span>
        <p className="text-[11px] font-medium text-slate-500 uppercase tracking-widest mt-2">
          Current Value
        </p>
      </div>

      {/* Action Buttons Group */}
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={increment}
          type="button"
          className="flex-1 py-3 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-2xl shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/40 active:scale-95 transition-all text-sm flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
          </svg>
          Increment
        </button>

        <button
          onClick={resetCounter}
          type="button"
          className="p-3 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-2xl border border-slate-700/80 active:scale-95 transition-all"
          title="Reset"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>

    </div>
  )
}

export default IncrementButton