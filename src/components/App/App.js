import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from '../Main/Main';
import SideBar from '../SideBar/SideBar';
import NoteForm from '../NoteForm/NoteForm';
import Home from '../Home/Home';
import Note from '../Note/Note';

import './App.css';

function App() {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (id, title, content) => {
    setNotes(notes => [...notes, { id, title, content }]);
    localStorage.setItem('notes', JSON.stringify(notes));
  }

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes])

  return (
    <div className="App">
      <SideBar notes={notes} />
      <Routes>
        <Route
          exact path="/"
          element={<Main children={
            notes.length === 0
            ? <Home/>
            : <NoteForm submitCallback={handleAddNote} />
          } />}
        />
        <Route
          path="new-note"
          element={
            <Main ><NoteForm submitCallback={handleAddNote} /></Main>
          }
        />
        {
          notes.map((note) => {
            <Route
              path="/note/:id"
              element={
                <Main children={<Note noteInfo={note}/>} />
              }
            />
          })
        }
      </Routes>
    </div>
  );
}

export default App;
