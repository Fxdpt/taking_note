import { useState } from 'react';
import './NoteForm.css';
import { v4 as uuidv4 } from 'uuid';

function NoteForm(props) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const inputIds = {
        title: 'note-title',
        content: 'note-content'
    };

    const handleChange = (event) => {
        if (event.target.id === inputIds.title) {
            setTitle(event.target.value);
        }
        if (event.target.id === inputIds.content) {
            setContent(event.target.value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const noteId = uuidv4();;
        props.submitCallback(noteId, title, content);
    }

    return (
        <div className="note-form">
            <form>
                <div className="note-form-title">
                    <input type="text" id="note-title" placeholder="Note title" onChange={handleChange}/>
                </div>
                <div className="note-form-content">
                    <textarea id="note-content" placeholder="Note..." onChange={handleChange}/>
                </div>
                <button type="submit" onClick={handleSubmit}>Save</button>
            </form>
        </div>
    )
}

export default NoteForm;