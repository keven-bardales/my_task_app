import TaskCard from './TaskCard';
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import '../styles/TaskList.css';

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className='empty-message'>There are no tasks assigned yet</h1>;
  }

  return (
    <section className='task-list'>
      {tasks.map((task) => {
        return <TaskCard key={task.id} task={task} />;
      })}
    </section>
  );
}

export default TaskList;
