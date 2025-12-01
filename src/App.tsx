import { useState, useEffect } from 'react';
import { NoteGrid } from './components/NoteGrid';
import { CreateNote } from './components/CreateNote';
import { type NoteData } from './components/Note';
import './styles/index.css';
import './styles/components.css';

function App() {
  const [notes, setNotes] = useState<NoteData[]>([]);

  // Load from localStorage
  useEffect(() => {
    const savedNotes = localStorage.getItem('nebula-notes');
    if (savedNotes) {
      try {
        setNotes(JSON.parse(savedNotes));
      } catch (e) {
        console.error('Failed to parse notes', e);
      }
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('nebula-notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (title: string, content: string) => {
    const newNote: NoteData = {
      id: Date.now().toString(),
      title,
      content,
    };
    setNotes((prev) => [newNote, ...prev]);
  };

  const updateNote = (id: string, data: Partial<NoteData>) => {
    setNotes((prev) =>
      prev.map((note) => (note.id === id ? { ...note, ...data } : note))
    );
  };

  const deleteNote = (id: string) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Nebula Notes</h1>
      </header>
      <main className="main-content">
        <CreateNote onCreate={addNote} />
        <NoteGrid
          notes={notes}
          onUpdate={updateNote}
          onDelete={deleteNote}
        />
      </main>
    </div>
  );
}

export default App;
