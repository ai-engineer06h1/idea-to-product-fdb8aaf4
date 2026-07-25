import React, { useState, useEffect } from 'react';
import { fetchTasks, toggleTask, deleteTask } from '../api';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks().then(setTasks).catch(console.error);
  }, []);

  const handleToggle = (id) => {
    toggleTask(id)
      .then((updatedTask) => {
        setTasks(tasks.map(task => task._id === updatedTask._id ? updatedTask : task));
      })
      .catch(console.error);
  };

  const handleDelete = (id) => {
    deleteTask(id)
      .then(() => {
        setTasks(tasks.filter(task => task._id !== id));
      })
      .catch(console.error);
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id}>
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.title}
          </span>
          <button onClick={() => handleToggle(task._id)}>Toggle</button>
          <button onClick={() => handleDelete(task._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;