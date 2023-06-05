import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import '../styles/TaskCard.css';

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className='task-card'>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button
        className='delete-button'
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        Delete Task
      </button>
    </div>
  );
}

export default TaskCard;
