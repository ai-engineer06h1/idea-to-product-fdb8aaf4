import React from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';

const LandingPage = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default LandingPage;