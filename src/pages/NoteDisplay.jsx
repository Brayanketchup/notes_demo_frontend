import React, { useEffect, useState } from 'react'
import { NoteCard, NoteForm, TaskCard } from '../components'
import { fetchNotes, fetchTasks } from '../utils/index.js';
import { Navbar } from '../components';
import { useParams } from 'react-router-dom';

export const NoteDisplay = () => {
  const { noteId } = useParams();

  const [searchTerm, setSearchTerm] = useState('');
  const [showAddNoteForm, setShowAddNoteForm] = useState(false);
  const [notes, setNotes] = useState([]);
  const [tasks, setTasks] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;



  useEffect(() => {
    const loadNotes = async () => {
      const notes = await fetchNotes();
      if (notes) {
        setNotes(notes);
      }
      const tasks = await fetchTasks();

      if (tasks) {
        setTasks(tasks);
      }

    };

    loadNotes();
  }, []);




  return (
    <section className='sectionWithNavbar'>
      <Navbar />
      <div className="container mx-auto px-4">
        <div>
          <h1 className="text-3xl font-bold text-center my-8">Welcome to Your Notes</h1>
          <button
            className="text-blue-500 border-[2px] p-3 rounded-full hover:bg-slate-400"
            onClick={() => setShowAddNoteForm(!showAddNoteForm)}
          >
            Add a Note
          </button>

          {showAddNoteForm && (
            <NoteForm
              setShowAddNoteForm={setShowAddNoteForm}
              notes={notes}
              setNotes={setNotes}
            />

          )}
        </div>
        <div>
          <h1>notes</h1>
          {notes ? notes.map((note, index) => (
            <NoteCard key={index} Note={note} />
          )) : ''}
        </div>
      </div>
    </section>
  );
};

