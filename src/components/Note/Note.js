const Note = (props) =>{
    return (
        <div className="note">
            <h1>{props.noteInfo.title}</h1>
            <p>{props.noteInfo.content}</p>
        </div>
    )
}

export default Note;