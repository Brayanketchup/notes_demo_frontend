import React, { useState } from 'react';

export const TaskCard = ({ Task }) => {

    const apiUrl = process.env.REACT_APP_API_URL;
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(Task.title);
    const [editedContent, setEditedContent] = useState(Task.content);


    const getDaysAgo = (date) => {
        const now = new Date();
        const created = new Date(date);
        const diffTime = Math.abs(now - created);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        return diffDays === 0 ? 'Today' : `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    };

    const handleSave = async () => {
        try {
            const response = await fetch(`${apiUrl}/api/tasks/${Task._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: editedTitle,
                    content: editedContent,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error updating task:', errorData.error);
                return;
            }

            const updatedTask = await response.json();

            setIsEditing(false);
            window.location.reload();



        } catch (error) {
            console.error('Network or server error while updating:', error);
        }
    };

    const handleCancel = () => {
        setEditedTitle(Task.title);
        setEditedContent(Task.content);
        setIsEditing(false);
    };

    const handleDelete = async () => {
        if (!window.confirm('Are you sure you want to delete this task?')) return;

        try {
            const response = await fetch(`${apiUrl}/api/tasks/${Task._id}`, {
                method: 'DELETE',
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


        <div id={`task-${Task.id}`} className="bg-white shadow-md rounded-lg p-6 mb-4">
            {isEditing ? (
                <>
                    <input
                        type="text"
                        className="w-full border px-3 py-2 rounded-md mb-2"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                    />
                    <textarea
                        className="w-full border px-3 py-2 rounded-md mb-2"
                        value={editedContent}
                        onChange={(e) => setEditedContent(e.target.value)}
                    />
                </>
            ) : (
                <>
                    <h2 className="text-xl font-semibold mb-2">{Task.title}</h2>
                    <p className="text-gray-700">{Task.content}</p>
                </>
            )}

            <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-gray-500">{getDaysAgo(Task.createdAt)}</span>
            </div>

            <div className="mt-4 flex justify-between items-center">
                <a href={`/tasks/${Task.id}`} className="text-blue-500 hover:text-blue-700">View Task</a>
                <div className="flex flex-row gap-2">
                    {isEditing ? (
                        <>
                            <button onClick={handleSave} className="text-green-500 hover:text-green-700">Save</button>
                            <button onClick={handleCancel} className="text-gray-500 hover:text-gray-700">Cancel</button>
                        </>
                    ) : (
                        <button onClick={() => setIsEditing(true)} className="text-yellow-500 hover:text-yellow-700">Edit</button>
                    )}
                    <button
                        onClick={handleDelete}
                        className="text-red-500 hover:text-red-700"
                    >
                        Delete
                    </button>

                </div>
            </div>
        </div>
    );
};
