import { useState } from "react";

const TaskField = ({ addTaskToArray, existingEntries }) => {
  const [task, setTask] = useState("");
  const [taskNumber, setTaskNumber] = useState(existingEntries.length);
  const changeTask = (e) => setTask(e.target.value);
  const submitTask = (e) => {
    e.preventDefault();
    let count = taskNumber;
    setTaskNumber(++count);
    addTaskToArray({ taskName: task, taskNumber: taskNumber });
    setTask("");
  };
  return (
    <form onSubmit={submitTask} className="py-2">
      <label className="text-sm font-semibold">
        Task <br />
        <input
          onChange={changeTask}
          placeholder="Add Task"
          type="text"
          value={task}
          required
          className="list-field border-2 w-full rounded-sm py-2 px-4 border-black"
        />
      </label>

      <button className="bg-black text-white py-2 px-4 my-2 w-full rounded">
        Save Task
      </button>
    </form>
  );
};

export default TaskField;
