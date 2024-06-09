import React from "react";

const Note = (props) => {
  return (
    <textarea
      className="p-3 bg-[rgba(255,255,255,0.3)] backdrop-blur-lg  h-52 border border-slate-300 rounded-lg shadow-xl resize-none font-karla focus:ring-lime-500 focus:ring-2 outline-none placeholder:text-slate-900"
      onDoubleClick={props.removeNote}
      value={props.content}
      onChange={(e) => props.updateNote(props.id, e.target.value)}
      placeholder="Empty note"
    />
  );
};

export default Note;
