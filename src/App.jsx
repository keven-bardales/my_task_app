import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { useState, useEffect } from 'react';

function App() {
  //si las tareas no tienen nada no aparece nada en el componente

  return (
    <>
      <TaskForm />
      <TaskList />
    </>
  );
}

export default App;
