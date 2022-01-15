import Home from '../Home/Home';
import NoteForm from '../NoteForm/NoteForm';
import './Main.css'


function Main(props) {
    return (
        <div className="main">
            <Home />
            {/* {!props.hasNotes ? <Home /> : <NoteForm />} */}
        </div>
    )
}

export default Main;