import React, { useState } from "react";
import ArrowUpdateButton from "./ArrowUpdateButton";
import CrossButton from "./CrossButton";
import EditButton from "./EditButton";

const TaskList = ({ task, index, deleteTask, updateTaskToArray }) => {
  const [reNametask, setRenameTask] = useState(false);
  const [newtask, setNewTask] = useState("");

  const changeReNametask = () => {
    setRenameTask(!reNametask);
    setNewTask("");
  };

  const editTask = (e) => {
    setNewTask(e.target.value);
  };

  const submitEditTask = (e) => {
    e.preventDefault();
    updateTaskToArray(newtask, task.taskNumber);
    setRenameTask(!reNametask);
    setNewTask("");
  };

  return (
    <div
      id={task.taskNumber}
      className="flex flex-row my-2 justify-between items-center font-semibold px-4 bg-gray-200 rounded py-2"
    >
      <div className="self-start">{index}.</div>
      {reNametask ? (
        <form className="flex items-center" onSubmit={submitEditTask}>
          <input
            onChange={editTask}
            type="text"
            placeholder={task.taskName}
            required
            className=" mx-4 list-field border-2 w-full rounded-sm px-4 border-black"
            value={newtask}
          />
          {newtask && <ArrowUpdateButton />}
        </form>
      ) : (
        <p className="px-4 w-full flex flex-wrap">{task.taskName}</p>
      )}

      <div className="flex flex-row">
        {newtask.length === 0 && (
          <EditButton changeReNametask={changeReNametask} />
        )}

        <CrossButton deleteTask={deleteTask} color="text-orange-500" />
      </div>
    </div>
  );
};

export default TaskList;
