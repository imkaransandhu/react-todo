import { useEffect, useState } from "react";
import Header from "./components/Header";
import TaskField from "./components/TaskField";
import TaskListWrapper from "./components/TaskList/TaskListWrapper";

const App = () => {
  let existingEntries = JSON.parse(localStorage.getItem("allEntries"));
  if (existingEntries === null) existingEntries = [];
  const [tasksArray, setTasksArray] = useState([]);

  useEffect(() => {
    setTasksArray([...existingEntries]);
  }, []);

  function updateLocalStorage(array) {
    localStorage.setItem("allEntries", JSON.stringify(array));
    existingEntries = JSON.parse(localStorage.getItem("allEntries"));
  }

  const addTaskToArray = (task) => {
    localStorage.setItem("entryTask", JSON.stringify(task));
    let newEntrytask = JSON.parse(localStorage.getItem("entryTask"));
    existingEntries.push(newEntrytask);
    localStorage.setItem("allEntries", JSON.stringify(existingEntries));
    setTasksArray([...tasksArray, task]);
  };

  const updateTaskToArray = (task, id) => {
    let newArray = [...tasksArray];
    let index = newArray.findIndex((object) => {
      return object.taskNumber === id;
    });
    newArray[index].taskName = task;

    setTasksArray([...newArray]);
    updateLocalStorage([...newArray]);
  };

  const deleteTask = (e) => {
    let idOflistTodelete = e.currentTarget.parentNode.parentNode.id;
    let customArray = [...tasksArray];
    customArray = customArray.filter(
      (list) => list.taskNumber !== +idOflistTodelete
    );
    setTasksArray([...customArray]);
    updateLocalStorage([...customArray]);
  };

  return (
    <div className="container mx-auto max-w-md p-4 border-2 mt-20">
      <Header />
      <TaskField
        existingEntries={existingEntries}
        addTaskToArray={addTaskToArray}
      />
      <TaskListWrapper
        tasksArray={tasksArray}
        updateTaskToArray={updateTaskToArray}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
