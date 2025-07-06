import React from 'react'
import { useState } from 'react';


export const NoteForm = ( { setShowAddNoteForm, notes, setNotes } ) => {


    const [selectedTags, setSelectedTags] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const apiUrl = process.env.REACT_APP_API_URL;


    const handleTagChange = (e) => {
        const selected = Array.from(e.target.selectedOptions, (option) => option.value);
        setSelectedTags(selected);
        console.log("Selected tags:", selected);
    };

    const handleAddNote = async (e) => {
        console.log('posting a noteeeee')
        e.preventDefault();
        if (!title.trim()) return;

        const noteData = { title, content, tags: selectedTags };

        try {
            const res = await fetch(apiUrl + '/api/notes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(noteData),
            });

            const data = await res.json();
            if (res.ok) {
                setNotes([data, ...notes]);
                setTitle('');
                setContent('');
                setSelectedTags([]);
                setShowAddNoteForm(false);
            } else {
                console.error('Failed to add note:', data.error);
            }
        } catch (err) {
            console.error('Error submitting form:', err);
        }
    };




    return (
        <form
            onSubmit={handleAddNote}
            className="bg-white p-6 rounded-lg shadow-md mb-8 mt-6"
        >
            <h2 className="text-xl font-semibold mb-4">New Note</h2>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border px-3 py-2 rounded-md"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Content</label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full border px-3 py-2 rounded-md"
                    rows="4"
                ></textarea>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Tags</label>
                <select
                    multiple
                    value={selectedTags}
                    onChange={handleTagChange}
                    className="w-full border px-3 py-2 rounded-md text-black"
                >
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                    <option value="Urgent">Urgent</option>
                    <option value="Ideas">Ideas</option>
                    <option value="Reference">Reference</option>
                </select>
            </div>

            <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
                Save Note
            </button>
        </form>
    )
}
