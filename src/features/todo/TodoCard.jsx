/* eslint-disable react/prop-types */

const TodoCard = ({ title, body, deadline }) => {
  return (
    <div className="todo-card">
      <h4>{title}</h4>
      <p>{body}</p>
      <span className="bold">By {deadline}</span>
    </div>
  );
};

export default TodoCard;
