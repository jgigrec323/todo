import React from "react";
import Todo from "./Todo";

function TodoList({ todos }) {
  return (
    <div className="flex flex-col gap-2">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} /> // Pass todo object as prop
      ))}
    </div>
  );
}

export default TodoList;
