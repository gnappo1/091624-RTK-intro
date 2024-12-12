/* eslint-disable react/prop-types */
import { useEffect } from "react";
import TodoCard from "./TodoCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodosAsync, todosSelector } from "./todoSlice";

const TodosContainer = () => {
  const todos = useSelector(todosSelector);
  const status = useSelector((state) => state.todo.status);
  const error = useSelector((state) => state.todo.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodosAsync());
  }, [dispatch]);

  if (status === "loading") {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return (
      <div>
        <h3>Error: {error.message}</h3>
        <p>Status Code: {error.status}</p>
      </div>
    );
  }

  const mappedTodos =
    Array.isArray(todos) && todos.length > 0 ? (
      todos.map((todo) => <TodoCard key={todo.id} {...todo} />)
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