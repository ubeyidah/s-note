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
      <main className=" relative min-h-screen font-serif pb-36">
        <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
          <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
        </div>
        <h1 className="text-center font-karlaB text-4xl text-purple-500 pt-10 pb-2">
          S NOTE APP
        </h1>
        <p className="text-center text-lg font-karla text-slate-600">
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
