import Home from '../Home/Home';
import NoteForm from '../NoteForm/NoteForm';
import './Main.css'


function Main(props) {
    if (props.newNote) {
        return (
            <div className="main">
                <NoteForm />
            </div>
        )
    } else {
        return (
            <div className="main">
                {!props.hasNotes ? <Home /> : <NoteForm />}
            </div>
        )
    }
}

export default Main;