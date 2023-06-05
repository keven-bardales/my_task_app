import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import '../styles/TaskForm.css';

function TaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form className='task-form' onSubmit={handleSubmit}>
      <h1>Create a new Task</h1>
      <input
        className='task-input'
        placeholder='Write a task'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea
        className='description-input'
        placeholder='Write a description'
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button className='save-button'>Save</button>
    </form>
  );
}

export default TaskForm;
