import { createContext, useContext, useEffect, useState } from "react";

const NotesContext = createContext(null);

export function NotesProvider({ children }) {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = ({ title, content, category }) => {
    const newNote = {
      id: Date.now(),
      title,
      content,
      category,
      isPinned: false,
      createdAt: new Date().toLocaleString(),
    };
    setNotes((prev) => [...prev, newNote]);
  };

  const updateNote = (id, { title, content, category }) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, title, content, category } : note,
      ),
    );
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const togglePin = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, isPinned: !note.isPinned } : note,
      ),
    );
  };

  const clearNotes = () => {
    const confirmClear = confirm(
      "Are you sure you want to delete all notes?",
    );
    if (confirmClear) {
      setNotes([]);
    }
  };

  const value = {
    notes,
    addNote,
    updateNote,
    deleteNote,
    togglePin,
    clearNotes,
  };

  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
}

export function useNotes() {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error("useNotes must be used within a NotesProvider");
  }
  return context;
}
