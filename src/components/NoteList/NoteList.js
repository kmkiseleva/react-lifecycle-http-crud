import NoteItem from "./NoteItem";

const NoteList = ({ notes, deleteNote }) => {
  return (
    <div className="row mb-2">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          text={note.content}
          deleteNote={deleteNote}
        />
      ))}
    </div>
  );
};

export default NoteList;
