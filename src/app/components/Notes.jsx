'use client'

import React from 'react'

const Notes = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-slate-900 text-white rounded-2xl shadow-xl border border-slate-800 space-y-6">
      
      {/* Title */}
      <h2 className="text-2xl font-bold text-center">My Notes</h2>

      {/* Add Note Form UI */}
      <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
        <input
          type="text"
          placeholder="Note title..."
          className="w-full px-4 py-2 bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
        />
        <textarea
          placeholder="Write your note description..."
          rows={3}
          className="w-full px-4 py-2 bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm resize-none"
        ></textarea>
        <button
          type="button"
          className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 font-semibold rounded-xl text-sm transition-colors shadow-lg shadow-indigo-600/30"
        >
          Add Note
        </button>
      </form>

      {/* Notes List UI */}
      <div className="space-y-3 pt-2">
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">All Notes</h3>
        
        {/* Dummy Note 1 */}
        <div className="p-4 bg-slate-800/80 border border-slate-700/80 rounded-xl flex items-start justify-between gap-3">
          <div>
            <h4 className="font-bold text-slate-100 text-sm">Grocery List</h4>
            <p className="text-xs text-slate-300 mt-1">Buy milk, eggs, coffee, and bread.</p>
          </div>
          <button className="text-xs bg-rose-500/20 text-rose-400 hover:bg-rose-500/30 px-3 py-1.5 rounded-lg font-medium border border-rose-500/30 transition-colors">
            Remove
          </button>
        </div>

        {/* Dummy Note 2 */}
        <div className="p-4 bg-slate-800/80 border border-slate-700/80 rounded-xl flex items-start justify-between gap-3">
          <div>
            <h4 className="font-bold text-slate-100 text-sm">Study Zustand</h4>
            <p className="text-xs text-slate-300 mt-1">Practice store setup, state getters, and actions.</p>
          </div>
          <button className="text-xs bg-rose-500/20 text-rose-400 hover:bg-rose-500/30 px-3 py-1.5 rounded-lg font-medium border border-rose-500/30 transition-colors">
            Remove
          </button>
        </div>
      </div>

    </div>
  )
}

export default Notes