import React from "react";
import TaskList from "./TaskList";

const TaskListWrapper = ({ tasksArray, deleteTask, updateTaskToArray }) => {
  return (
    <div className="flex-1">
      {tasksArray.map((task, index) => (
        <TaskList
          updateTaskToArray={updateTaskToArray}
          tasksArray={tasksArray}
          deleteTask={deleteTask}
          key={index}
          index={++index}
          task={task}
        />
      ))}
    </div>
  );
};

export default TaskListWrapper;
