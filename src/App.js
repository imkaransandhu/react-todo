import { useState } from "react";
import Header from "./components/Header";
import TaskField from "./components/TaskField";
import TaskListWrapper from "./components/TaskList/TaskListWrapper";

const App = () => {
  const [tasksArray, setTasksArray] = useState([]);
  const addTaskToArray = (task) => {
    setTasksArray([...tasksArray, task]);
  };

  const updateTaskToArray = (task, id) => {
    let oldArray = tasksArray;
    let index = oldArray.findIndex((object) => {
      return object.taskNumber === id;
    });
    oldArray[index].taskName = task;
    setTasksArray(oldArray);
  };

  const deleteTask = (e) => {
    let idOflistTodelete = e.target.parentNode.parentNode.id;
    let customArray = tasksArray;

    customArray = customArray.filter(
      (list) => list.taskNumber !== +idOflistTodelete
    );

    setTasksArray(customArray);
  };
  return (
    <div className="container mx-auto max-w-md p-4 border-2 mt-20">
      <Header />
      <TaskField addTaskToArray={addTaskToArray} />
      <TaskListWrapper
        tasksArray={tasksArray}
        updateTaskToArray={updateTaskToArray}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
