"use client";
import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import axios from "axios";
import { toast } from "sonner";
import { useAppContext } from "./context/AppContext";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState([]);
  const { onAdd } = useAppContext();

  useEffect(() => {
    const getDatas = async () => {
      const notify = (msg, isSuccess) =>
        isSuccess === true ? toast.success(msg) : toast.error(msg);

      const response = await axios.get("/api/todo");

      if (response.statusText !== "OK") {
        notify(response.data.message, false);
      }
      setTodos(response.data.todos);
      setIsLoading(false);
    };

    getDatas();
  }, [onAdd]);
  return (
    <div className="h-[32rem]">
      <h2 className="text-xl text-purple-200 mb-3">Home</h2>
      {isLoading ? (
        <span className="loading loading-spinner bg-purple-200 text-primary w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "></span>
      ) : todos.length === 0 ? (
        <p>No task found. Add a new one !</p>
      ) : (
        <TodoList todos={todos}></TodoList>
      )}
    </div>
  );
}

export default Home;
