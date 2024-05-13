import React from "react";
import TodoList from "./components/TodoList";

function Home() {
  return (
    <div>
      <h2 className="text-xl text-purple-200 mb-3">Home</h2>
      <TodoList todos={[{ id: 1 }, { id: 2 }]}></TodoList>
    </div>
  );
}

export default Home;
