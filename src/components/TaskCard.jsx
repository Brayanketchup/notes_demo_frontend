import React, { useState } from 'react';

export const TaskCard = ({ Task }) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(Task.task);

    const getDaysAgo = (date) => {
        const now = new Date();
        const created = new Date(date);
        const diffTime = Math.abs(now - created);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        return diffDays === 0 ? 'Today' : `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    };

    const formatDeadline = (deadline) => {
        if (!deadline) return 'No deadline';
        const date = new Date(deadline);
        return date.toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    const handleSave = async () => {
        try {
            const response = await fetch(`${apiUrl}/api/tasks/${Task._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ task: editedTask }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error updating task:', errorData.error);
                return;
            }

            await response.json();
            setIsEditing(false);
            window.location.reload();
        } catch (error) {
            console.error('Network or server error while updating:', error);
        }
    };

    const handleCancel = () => {
        setEditedTask(Task.task);
        setIsEditing(false);
    };

    const handleDelete = async () => {
        if (!window.confirm('Are you sure you want to delete this task?')) return;

        try {
            const response = await fetch(`${apiUrl}/api/tasks/${Task._id}/delete`, {
                method: 'PATCH',
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error deleting task:', errorData.error);
                return;
            }
            window.location.reload();
        } catch (error) {
            console.error('Network or server error while deleting:', error);
        }
    };

    return (
        <div id={`task-${Task._id}`} className="bg-white shadow-md rounded-2xl p-6 mb-6 border border-gray-200">
            {isEditing ? (
                <input
                    type="text"
                    className="w-full border px-3 py-2 rounded-md mb-4"
                    value={editedTask}
                    onChange={(e) => setEditedTask(e.target.value)}
                    placeholder="Edit task name..."
                />
            ) : (
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{Task.task}</h2>
            )}

            <div className="text-sm text-gray-500 mb-2">
                Created: {getDaysAgo(Task.createdAt)}
            </div>

            <div className="text-sm text-gray-500 mb-4">
                Deadline: <span className="font-medium text-gray-700">{formatDeadline(Task.deadline)}</span>
            </div>

            <div className="flex justify-between items-center mt-4">
                <a
                    href={`/tasks/${Task._id}`}
                    className="text-sm text-blue-500 hover:underline"
                >
                    View Task
                </a>

                <div className="flex gap-3">
                    {isEditing ? (
                        <>
                            <button
                                onClick={handleSave}
                                className="text-sm px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                            >
                                Save
                            </button>
                            <button
                                onClick={handleCancel}
                                className="text-sm px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-500"
                            >
                                Cancel
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={() => setIsEditing(true)}
                            className="text-sm px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
                        >
                            Edit
                        </button>
                    )}
                    <button
                        onClick={handleDelete}
                        className="text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        Deletec
                    </button>
                </div>
            </div>
        </div>
    );
};
