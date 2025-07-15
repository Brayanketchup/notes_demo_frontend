import React, { useState } from 'react';

export const NoteCard = ({ Note }) => {

    const apiUrl = process.env.REACT_APP_API_URL;
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(Note.title);
    const [editedContent, setEditedContent] = useState(Note.content);


    const getDaysAgo = (date) => {
        const now = new Date();
        const created = new Date(date);
        const diffTime = Math.abs(now - created);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        return diffDays === 0 ? 'Today' : `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    };

    const handleSave = async () => {
        try {
            const response = await fetch(`${apiUrl}/api/notes/${Note._id}`, {
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
                console.error('Error updating note:', errorData.error);
                return;
            }

            const updatedNote = await response.json();

            setIsEditing(false);
            window.location.reload();



        } catch (error) {
            console.error('Network or server error while updating:', error);
        }
    };

    const handleCancel = () => {
        setEditedTitle(Note.title);
        setEditedContent(Note.content);
        setIsEditing(false);
    };

    // const handleDelete = async () => {
    //     if (!window.confirm('Are you sure you want to delete this note?')) return;

    //     try {
    //         const response = await fetch(`${apiUrl}/api/notes/${Note._id}`, {
    //             method: 'DELETE',
    //         });

    //         if (!response.ok) {
    //             const errorData = await response.json();
    //             console.error('Error deleting note:', errorData.error);
    //             return;
    //         }

    //         window.location.reload();

    //     } catch (error) {
    //         console.error('Network or server error while deleting:', error);
    //     }
    // };
    const handleDelete = async () => {
        if (!window.confirm('Are you sure you want to delete this note?')) return;

        try {
            const response = await fetch(`${apiUrl}/api/notes/${Note._id}/delete`, {
                method: 'PATCH', 
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error soft-deleting note:', errorData.error);
                return;
            }

            window.location.reload(); 

        } catch (error) {
            console.error('Network or server error while soft-deleting:', error);
        }
    };




    return (


        <div id={`note-${Note.id}`} className="bg-white shadow-md rounded-lg p-6 mb-4">
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
                    <h2 className="text-xl font-semibold mb-2">{Note.title}</h2>
                    <p className="text-gray-700">{Note.content}</p>
                </>
            )}

            <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-gray-500">{getDaysAgo(Note.createdAt)}</span>
            </div>

            <div className="mt-4 flex justify-between items-center">
                <a href={`/notes/${Note.id}`} className="text-blue-500 hover:text-blue-700">View Note</a>
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
