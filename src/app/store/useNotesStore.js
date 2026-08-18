import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useNotesStore = create(
  persist(
    (set) => ({
      notes: [],

      // Add a new note
      addNote: (note) =>
        set((state) => ({
          notes: [...state.notes, { ...note, id: Date.now() }],
        })),

      // Delete a note by id
      deleteNote: (id) =>
        set((state) => ({
          notes: state.notes.filter((note) => note.id !== id),
        })),
    }),
    {
      name: 'quick-notes-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
