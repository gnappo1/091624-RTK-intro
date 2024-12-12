/* eslint-disable react/prop-types */
import TodoNoteForm from "./TodoNoteForm";
import TodoNotes from "./TodoNotes";
import TodosContainer from "./TodosContainer";

const TodoPage = () => {

  return (
    <div>
      <TodoNoteForm />
      <br />
      <TodoNotes />
      <br />
      <hr />
      <TodosContainer />
    </div>
  );
};

export default TodoPage;
