/* eslint-disable react/prop-types */
import { useState } from 'react'
// import { useDispatch } from 'react-redux'

const TodoNoteForm = () => {
    const [note, setNote] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setNote("");
    };

    return (
        <div>
            <h2>Add a temporary note</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="note"
                    id="note"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                />
                <input type="submit" value="Add Note" />
            </form>
        </div>
    );
};

export default TodoNoteForm