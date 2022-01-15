function NoteForm() {
    return (
        <div className="note-form">
            <form>
                <div className="note-form__title">
                    <label htmlFor="note-title">Title</label>
                    <input type="text" id="note-title" />
                </div>
                <div className="note-form__content">
                    <label htmlFor="note-content">Content</label>
                    <textarea id="note-content" />
                </div>
            </form>
        </div>
    )
}

export default NoteForm;