"use client";
import TodoList from "@/app/components/TodoList";
import { useAppContext } from "@/app/context/AppContext";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

function Starred() {
  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState([]);
  const { onAdd } = useAppContext();

  useEffect(() => {
    const getDatas = async () => {
      const notify = (msg, isSuccess) =>
        isSuccess === true ? toast.success(msg) : toast.error(msg);

      const response = await axios.get("/api/todo/starred");
      if (response.statusText !== "OK") {
        notify(response.data.message, false);
      }
      setTodos(response.data.starredTodo);
      setIsLoading(false);
    };

    getDatas();
  }, [onAdd]);
  return (
    <div className="">
      <h2 className="text-xl text-purple-200 mb-3">Starred</h2>
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

export default Starred;
