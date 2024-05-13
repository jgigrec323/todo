"use client";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useAppContext } from "../context/AppContext";

function AddBtn() {
  const [task, setTask] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { onAdd, setOnAdd } = useAppContext();

  const notify = (msg, isSuccess) =>
    isSuccess === true ? toast.success(msg) : toast.error(msg);

  const addTodo = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const response = await axios.post("/api/todo", { task });
    if (response.statusText !== "OK") {
      notify(response.data.message, false);
    }
    notify(response.data.message, true);
    setIsLoading(false);
    setTask("");
    setOnAdd(!onAdd);
  };
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn absolute bottom-5 right-5 rounded-full hover:bg-purple-600 text-white bg-purple-700"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Add Task
      </button>
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box bg-neutral-900">
          <form method="dialog" className="overflow-hidden">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg mb-5">Add Task</h3>
          <form className="flex justify-between">
            <input
              type="text"
              value={task}
              onChange={(e) => {
                setTask(e.target.value);
              }}
              placeholder="Type here"
              className="input input-bordered border-white w-full max-w-xs"
            />
            <button
              onClick={(e) => addTodo(e)}
              className="btn hover:bg-purple-600 text-white bg-purple-700"
            >
              {isLoading ? (
                <span className="loading loading-dots loading-md"></span>
              ) : (
                "Add"
              )}
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default AddBtn;
