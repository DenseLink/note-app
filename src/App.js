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
  return(<div className="container">
    <NotesList notes={notes}/>
  </div>
  );
};

export default App;