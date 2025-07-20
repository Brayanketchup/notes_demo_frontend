import React, { useState, useEffect } from 'react'
import { NoteCard, NoteForm, TaskCard } from '../components'
import { NOTES } from '../constants/Notes'
import { fetchNotes, fetchTasks } from '../utils/index.js';
import { Navbar } from '../components';

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddNoteForm, setShowAddNoteForm] = useState(false);
  const [notes, setNotes] = useState([]);
  const [tasks, setTasks] = useState([]);

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
        </div>

        <div>
          {tasks >= 1 ? (<h1>Tasks</h1>) : ''}
          {tasks ? tasks.map((task, index) => (<TaskCard key={index} Task={task} />)) : ''}
        </div>

        <div>
          {notes >= 1 ? (<h1>Notes </h1>) : ''}
          {notes ? notes.map((note, index) => (<NoteCard key={index} Note={note} />)) : ''}
        </div>
      </div>
    </section>
  );
};

