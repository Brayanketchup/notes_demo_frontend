import React from 'react'

export const NoteCard = ({ Note }) => {
    return (
        <div id={`note-${Note.id}`} className="bg-white shadow-md rounded-lg p-6 mb-4">
                <h2 className="text-xl font-semibold mb-2">{Note.title}</h2>
                <p className="text-gray-700">{Note.content}</p>
                <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-gray-500">{Note.createdAt}</span>
                    <span className="text-sm text-gray-500">{Note.dueBy}</span>
                </div>
                <div className="mt-4 flex justify-between items-center">
                    <a href={`/notes/${Note.id}`} className="text-blue-500 hover:text-blue-700">View Note</a>
                    <div className=' flex flex-row gap-2'>
                        <button className="text-yellow-500 hover:text-yellow-700">Edit</button>
                        <button className="text-red-500 hover:text-red-700">Delete</button>
                    </div>
                </div>
        </div>
    )
}
