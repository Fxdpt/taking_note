import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import SideBar from '../SideBar/SideBar';
import NoteForm from '../NoteForm/NoteForm';
import './App.css';
import Home from '../Home/Home';

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <div className="App">
      <SideBar />
      <Routes>
        <Route
          exact path="/"
          element={ <Main children={Home} /> }
        />
        <Route
          path="new-note"
          element={ <Main children={NoteForm}/> }
        />
      </Routes>
    </div>
  );
}

export default App;
