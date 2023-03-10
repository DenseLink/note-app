import NotesList from "./components/NotesList";
import { useState } from "react";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";

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

  const [searchText, setSearchText] = useState('');

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
    <Header/>
    <Search handleSearchNote={setSearchText}/>
    <NotesList 
      notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText))} 
      handleAddNote={AddNote}
      handleDeleteNote = {deleteNote}  
    />
  </div>
  );
};

export default App;