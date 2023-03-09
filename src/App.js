import NotesList from "./components/NotesList";
import { useState } from "react";
import { nanoid } from "nanoid";

const App = () => {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "This is the first note!",
    date: "15/04/2021"
  },
  {
    id: nanoid(),
    text: "This is the 2 note!",
    date: "15/04/2021"
  },
  {
    id: nanoid(),
    text: "This is the 3 note!",
    date: "15/04/2023"
  }
  ]);

  const AddNote = (text) => {
      const date = new Date();
      const newNote = {
        id: nanoid(),
        text: text,
        date: date.toLocaleDateString()
      }
      const newNotes = [...notes, newNote];
      setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id );
    setNotes(newNotes);
  }

  return(<div className="container">
    <NotesList 
      notes={notes} 
      handleAddNote={AddNote}
      handleDeleteNote = {deleteNote}  
    />
  </div>
  );
};

export default App;