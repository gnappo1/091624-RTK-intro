/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {save} from "./todoSlice"

const TodoNoteForm = () => {
    const [note, setNote] = useState("");
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(save(note))
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