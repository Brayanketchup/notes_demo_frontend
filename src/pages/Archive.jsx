import React, { useState, useEffect } from 'react'
import { NoteCard, NoteForm, TaskCard } from '../components'
import { NOTES } from '../constants/Notes'
import { fetchTasks, fetchArchiveNotes, fetchArchiveTasks } from '../utils/index.js';
import { Navbar } from '../components';

export const Archive = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showAddNoteForm, setShowAddNoteForm] = useState(false);
    const [notes, setNotes] = useState([]);
    const [tasks, setTasks] = useState([]);
  
      useEffect(() => {
      const loadNotes = async () => {
        const notes = await fetchArchiveNotes(); 
        if (notes) {
          setNotes(notes);
        }
        const tasks = await fetchArchiveTasks(); 
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
            <h1 className="text-3xl font-bold text-center my-8">Deleted</h1>
          </div>
  
          <div>
            <h1>
              Tasks
            </h1>
            {tasks ? tasks.map((task, index) => (
              <TaskCard key={index} Task={task} />
            )) : ''}
  
          </div>
  
          <div>
            <h1>notes</h1>
            {notes ? notes.map((note, index) => (
              <NoteCard key={index} Note={note} />
            )) : ''}
          </div>
        </div>
      </section>
  
    )
  }
  