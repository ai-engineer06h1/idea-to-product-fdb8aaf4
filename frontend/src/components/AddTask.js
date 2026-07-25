import React, { useState } from 'react';
import { addTask } from '../api';

const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskTitle)
      .then((newTask) => {
        setTaskTitle('');
        // Handle new task addition, e.g., refresh task list
      })
      .catch(console.error);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Add a new task"
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTask;