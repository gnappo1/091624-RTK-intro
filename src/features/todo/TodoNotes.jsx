/* eslint-disable react/prop-types */

import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";

const TodoNotes = () => {
    const [open, setOpen] = useState(false)

    const handleClick = (e) => {
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
                    <span></span><br />
                    {"true" && <button onClick={handleClick}>Reset</button>}
                </>
            )}
        </div>
    );
}

export default TodoNotes