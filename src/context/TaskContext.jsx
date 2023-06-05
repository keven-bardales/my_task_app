import { createContext, useState, useEffect } from 'react';

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    task.id = tasks.length + 1;
    setTasks([...tasks, task]);
    localStorage.setItem('tasks', JSON.stringify([...tasks, task]));
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id != id));
    localStorage.setItem(
      'tasks',
      JSON.stringify(tasks.filter((task) => task.id != id))
    );
  }

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem('tasks')) || []);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
