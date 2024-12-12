/* eslint-disable react/prop-types */

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "./todoSlice";

const TodoNotes = () => {
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch();
    const note = useSelector((state) => state.todo.note)

    const handleClick = (e) => {
      dispatch(reset());
      setOpen(false)
    };

    return (
        <div>
            <button onClick={() => setOpen((current) => !current)}>
                {open ? "Hide Note" : "Show Note"}
            </button>
            {open && (
                <>
                    <h2>Temporary Note</h2>
                    <span>{note}</span><br />
                    {note && <button onClick={handleClick}>Reset</button>}
                </>
            )}
        </div>
    );
}

export default TodoNotes