import { useEffect, useState } from "react";
import { v4 as uuid } from 'uuid';
import { Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Layout from "./Layout";
import Notes from "./Notes"
import NotePage from "./NotePage";
import NoteDisplay from "./NoteDisplay";

function App() {
  const localizeNoteData = (() => {
    const noteData = localStorage.getItem("note");
    return noteData ? JSON.parse(noteData) : []
  })

  const localizeNumData = (() => {
    const numData = localStorage.getItem("num");
    return numData ? Number(numData) : 1
  })

  const [note, setNote] = useState(localizeNoteData());
  const [num, setNum] = useState(localizeNumData());
  const [currentNote, setCurrentNote] = useState(0);

  useEffect(() => {
    localStorage.setItem("note", JSON.stringify(note))
  }, [note]);

  useEffect(() => {
    localStorage.setItem("num", num)
  }, [num]);

  const createNote = () => {

    const newNoteInfo = {
      noteId: uuid(),
      title: "Untitled",
      content: "",
      time: Date.now(),
      noteNum: num
    };

    setNote([...note, newNoteInfo]);
    setNum(num + 1);
  };

  const update = (noteIdentification, newTitle, newContent, newTime) => {
    const upToDateNotes = note.map((note) => {
      if (note.noteNum == noteIdentification) {
        return {
          noteId: note.noteId,
          title: newTitle,
          content: newContent,
          time: newTime,
          noteNum: note.noteNum
        }
      }

      return note;
    })

    setNote(upToDateNotes)
  };

  const deleteNote = (deleteNoteIdentification) => {
    const arrayWithoutDeleted = note.filter((note) => note.noteNum !== deleteNoteIdentification)
    for (let i = 0, j = 1; i < num - 2; i++, j++) {
      arrayWithoutDeleted[i].noteNum = j;
    }

    setNote([...arrayWithoutDeleted])
    setNum(num - 1)
  }


  return (
    <Routes>
      <Route path="/" element={<Navigate to="/notes" replace={true} />}>
      </Route>
      <Route element={<Layout note={note} createNote={createNote} num={num} currentNote={currentNote} setCurrentNote={setCurrentNote} />}>
        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/:noteId/edit" element={<NotePage update={update} num={num} note={note} deleteNote={deleteNote} />}></Route>
        <Route path="/notes/:noteId" element={<NoteDisplay note={note} num={num} deleteNote={deleteNote} />}></Route>
      </Route>
    </Routes>
  )
}
export default App;