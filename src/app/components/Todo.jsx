"use client";
import axios from "axios";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";
import { toast } from "sonner";

function Todo({ todo }) {
  const [isLoading, setIsLoading] = useState(false);
  const { onAdd, setOnAdd } = useAppContext();

  const notify = (msg, isSuccess) =>
    isSuccess === true ? toast.success(msg) : toast.error(msg);

  const updateStarred = async () => {
    setIsLoading(true);
    const response = await axios.patch(
      `/api/todo/${todo.id}`,
      {},
      {
        headers: {
          "update-type": "starred",
        },
      }
    );
    if (response.statusText !== "OK") {
      notify(response.data.message, false);
    }

    setIsLoading(false);
    setOnAdd(!onAdd);
  };
  const updateStatus = async () => {
    setIsLoading(true);
    const response = await axios.patch(
      `/api/todo/${todo.id}`,
      {},
      {
        headers: {
          "update-type": "isCompleted",
        },
      }
    );
    if (response.statusText !== "OK") {
      notify(response.data.message, false);
    }

    setIsLoading(false);
    setOnAdd(!onAdd);
  };

  return (
    <div className="flex items-center justify-between py-1 px-4 rounded-lg bg-neutral-800">
      <div className="flex items-center">
        <span
          onClick={updateStatus}
          className="rounded-full h-3 w-3 border hover:bg-purple-700 cursor-pointer hover:border-purple-700"
        ></span>
        <span className="ml-4">{todo.text}</span>
      </div>
      <div className="cursor-pointer" onClick={updateStarred}>
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
