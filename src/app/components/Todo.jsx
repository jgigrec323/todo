"use client";
import React from "react";
import { FaStar } from "react-icons/fa";

function Todo({ todo }) {
  return (
    <div className="flex items-center justify-between py-1 px-4 rounded-lg bg-neutral-800">
      <div className="flex items-center">
        <span className="rounded-full h-3 w-3 border"></span>
        <span className="ml-4">{todo.text}</span>
      </div>
      <div className="cursor-pointer" onClick={() => {}}>
        {todo.isStarred ? (
          <FaStar size={15} color="gold" />
        ) : (
          <FaStar size={15} />
        )}
      </div>
    </div>
  );
}
export default Todo;
