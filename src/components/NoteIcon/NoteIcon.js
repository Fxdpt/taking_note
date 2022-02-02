import { FaRegStickyNote } from "react-icons/fa";

export default function NoteIcon(props) {
    return (
        <div className="note-icon">
            <FaRegStickyNote color="white" fontSize="3em" />
            <p>{props.title}</p>
        </div>
    )
}