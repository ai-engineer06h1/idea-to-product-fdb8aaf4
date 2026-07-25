import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const history = useHistory();

    const handleAddTask = () => {
        history.push('/add-task');
    };

    const handleCheckTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    const handleDeleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div className="max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Tasks</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className="flex justify-between items-center p-2 border-b">
                        <span className={task.completed ? "line-through" : ""}>{task.title}</span>
                        <div>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => handleCheckTask(index)}
                                className="mr-2"
                            />
                            <button onClick={() => handleDeleteTask(index)} className="text-red-500">
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <button onClick={handleAddTask} className="bg-green-500 text-white p-2 rounded mt-4">
                Add New Task
            </button>
        </div>
    );
};

export default TaskList;
