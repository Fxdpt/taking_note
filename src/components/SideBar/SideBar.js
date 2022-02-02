import { Link } from 'react-router-dom';
import './SideBar.css';
import NoteIcon from '../NoteIcon/NoteIcon';

function SideBar(props) {
    return (
        <div className="sidebar">
            {props.notes.map(function(note) {
                return (
                    <Link to="/note/:id">
                        <NoteIcon key={note.id} title={note.title} />
                    </Link>
                )
            })}
        </div>
    )
}

export default SideBar;