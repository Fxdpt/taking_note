import Home from '../Home/Home';
import NoteForm from '../NoteForm/NoteForm';
import './Main.css'


function Main(props) {
    return (
        <div className="main">
            {props.children}
        </div>
    )
}

export default Main;