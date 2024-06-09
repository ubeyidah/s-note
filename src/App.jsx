import React, { useState } from "react";
import Note from "./components/Note.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  const [notes, setNotes] = useState(
    () => JSON.parse(localStorage.getItem("s-notes")) || []
  );

  const saveNotes = () => {
    localStorage.setItem("s-notes", JSON.stringify(notes));
  };

  const createNote = () => {
    setNotes((prevNotes) => [
      ...prevNotes,
      { id: crypto.randomUUID(), content: "" },
    ]);
  };

  const removeNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const updateNote = (id, content) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === id ? { ...note, content } : note))
    );
  };

  saveNotes();

  return (
    <>
      <main className="bg-gradient-to-r from-cyan-400 to-cyan-700 min-h-screen font-serif relative pb-36">
        <h1 className="text-center font-karlaB text-4xl text-white pt-10 pb-2">
          S NOTE APP
        </h1>
        <p className="text-center text-lg font-karla text-slate-200">
          duble click on note to delete.
        </p>
        <section className="p-6 grid grid-cols-1 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {notes.map((note) => (
            <Note
              key={note.id}
              content={note.content}
              id={note.id}
              removeNote={() => removeNote(note.id)}
              updateNote={updateNote}
            />
          ))}
          <button
            onClick={createNote}
            className="p-3 bg-[rgba(255,255,255,0.3)] backdrop-blur-lg  h-52 border border-slate-300 rounded-lg shadow-xl resize-none font-karla text-8xl text-slate-500 outline-none focus:ring-lime-500 focus:ring-2 hover:bg-[rgba(255,255,255,0.4)]"
          >
            +
          </button>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default App;
