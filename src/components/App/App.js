import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import SideBar from '../SideBar/SideBar';
import NoteForm from '../NoteForm/NoteForm';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <div className="App">
      <SideBar />
      <Routes>
        <Route path="/" element={<Main hasNotes={notes.length > 0} />}/>
        <Route path="new-note" element={<Main newNote={true} />}/>
      </Routes>
    </div>
  );
}

export default App;
