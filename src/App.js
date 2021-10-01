import "./App.css";
import { useEffect, useState } from "react";
import createRequest from "./api/createRequest";
import NoteList from "./components/NoteList/NoteList";
import NoteTitle from "./components/NoteTitle/NoteTitle";
import NoteForm from "./components/NoteForm/NoteForm";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await createRequest({ method: "get" });
      setNotes([...response]);
    };

    fetchData();
  }, []);

  const addNewNotesHandler = async (note) => {
    try {
      const payload = {
        content: note,
      };
      await createRequest({ payload, method: "post" });
      const response = await createRequest({ method: "get" });
      setNotes([...response]);
    } catch (error) {
      return <p>Error: {error}</p>;
    }
  };

  const updateNotesHandler = async () => {
    const response = await createRequest({ method: "get" });
    setNotes([...response]);
  };

  const deleteNoteHandler = async (id) => {
    await createRequest({ id, method: "delete" });
    const response = await createRequest({ method: "get" });
    setNotes([...response]);
  };

  return (
    <div className="container-sm">
      <NoteTitle updateNotes={updateNotesHandler} />
      <NoteList notes={notes} deleteNote={deleteNoteHandler} />
      <NoteForm addNewNotes={addNewNotesHandler} />
    </div>
  );
}

export default App;
