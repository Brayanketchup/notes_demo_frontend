import React from 'react'
import { useState } from 'react';


export const TaskForm = ({ setShowAddTaskForm, tasks, setTasks }) => {


    const [task, setTask] = useState('');
    const [deadline, setDeadline] = useState('');

    const apiUrl = process.env.REACT_APP_API_URL;



    const handleAddtask = async (e) => {
        e.preventDefault();
        if (!task.trim()) return;

        const taskData = { task, deadline };

        console.log('Submitting task:', taskData);

        try {
            const res = await fetch(apiUrl + '/api/tasks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(taskData),
            });

            const data = await res.json();
            if (res.ok) {
                setTasks([data, ...tasks]);
                setTask('');
                setDeadline('');
                setShowAddTaskForm(false);
            } else {
                console.error('Failed to add task:', data.error);
            }
        } catch (err) {
            console.error('Error submitting form:', err);
        }
    };




    return (
        <form
            onSubmit={handleAddtask}
            className="bg-white p-6 rounded-lg shadow-md mb-8 mt-6"
        >
            <h2 className="text-xl font-semibold mb-4">New task</h2>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Task</label>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className="w-full border px-3 py-2 rounded-md"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Deadline</label>
                <input
                    type="date"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="w-full border px-3 py-2 rounded-md"
                />
            </div>

            <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
                Save task
            </button>
        </form>
    )
}
