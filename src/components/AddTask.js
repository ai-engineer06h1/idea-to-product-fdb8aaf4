import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddTask = () => {
    const [taskTitle, setTaskTitle] = useState('');
    const history = useHistory();

    const handleSaveTask = () => {
        // Logic to save the task
        // This example assumes you're adding it to some state or making an API call
        history.push('/tasks');
    };

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold mb-4">Add Task</h2>
            <input
                type="text"
                placeholder="Task Title"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                className="p-2 border rounded mb-4 w-80"
            />
            <button onClick={handleSaveTask} className="bg-blue-500 text-white p-2 rounded">
                Save Task
            </button>
        </div>
    );
};

export default AddTask;
