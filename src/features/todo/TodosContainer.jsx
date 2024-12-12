/* eslint-disable react/prop-types */
import { useEffect } from "react";
import TodoCard from "./TodoCard";
// import { useSelector, useDispatch } from "react-redux";

const TodosContainer = () => {

  const mappedTodos =
    Array.isArray([]) && [].length > 0 ? (
      [].map((todo) => <TodoCard key={todo.id} {...todo} />)
    ) : (
      <h3>No todos available</h3>
    );

  return (
    <div>
      <h2>Current Todos</h2>
      {mappedTodos}
    </div>
  );
};

export default TodosContainer;