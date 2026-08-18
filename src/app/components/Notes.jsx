'use client'

import React, { useState, useEffect } from 'react'
import { useNotesStore } from '@/app/store/useNotesStore'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [isMounted, setIsMounted] = useState(false)

  const notes = useNotesStore((state) => state.notes)
  const addNote = useNotesStore((state) => state.addNote)
  const deleteNote = useNotesStore((state) => state.deleteNote)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleAddNote = (e) => {
    e.preventDefault()
    if (!title.trim()) return

    addNote({ title: title.trim(), description: description.trim() })
    setTitle('')
    setDescription('')
  }

  if (!isMounted) {
    return (
      <div className="max-w-md mx-auto p-6 bg-slate-900 text-white rounded-2xl border border-slate-800 space-y-6">
        <h2 className="text-2xl font-bold text-center">My Notes</h2>
        <div className="text-center text-xs text-slate-500 py-4">Loading notes...</div>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-slate-900 text-white rounded-2xl shadow-xl border border-slate-800 space-y-6">
      
      {/* Title */}
      <h2 className="text-2xl font-bold text-center">My Notes</h2>

      {/* Add Note Form */}
      <form onSubmit={handleAddNote} className="space-y-3">
        <input
          type="text"
          placeholder="Note title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
          required
        />
        <textarea
          placeholder="Write your note description..."
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm resize-none"
        ></textarea>
        <button
          type="submit"
          className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 font-semibold rounded-xl text-sm transition-colors shadow-lg shadow-indigo-600/30 active:scale-95"
        >
          Add Note
        </button>
      </form>

      {/* Notes List */}
      <div className="space-y-3 pt-2">
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          All Notes ({notes.length})
        </h3>
        
        {notes.length === 0 ? (
          <p className="text-xs text-slate-500 text-center py-4">No notes added yet!</p>
        ) : (
          notes.map((note) => (
            <div
              key={note.id}
              className="p-4 bg-slate-800/80 border border-slate-700/80 rounded-xl flex items-start justify-between gap-3 transition-all"
            >
              <div className="pr-2">
                <h4 className="font-bold text-slate-100 text-sm">{note.title}</h4>
                {note.description && (
                  <p className="text-xs text-slate-300 mt-1 whitespace-pre-line">{note.description}</p>
                )}
              </div>
              <button
                type="button"
                onClick={() => deleteNote(note.id)}
                className="text-xs bg-rose-500/20 text-rose-400 hover:bg-rose-500/30 px-3 py-1.5 rounded-lg font-medium border border-rose-500/30 transition-colors shrink-0"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

    </div>
  )
}

export default Notes