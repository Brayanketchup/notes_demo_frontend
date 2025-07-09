import React, { useState, useEffect } from 'react'
import { NoteCard, NoteForm } from '../components'
import { NOTES } from '../constants/Notes'
import { fetchNotes } from '../utils/index.js';
import { Navbar } from '../components';

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddNoteForm, setShowAddNoteForm] = useState(false);
  const [notes, setNotes] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;



  useEffect(() => {
  const loadNotes = async () => {
    const data = await fetchNotes(); 
    if (data) {
      setNotes(data);
    }
  };

  loadNotes();
}, []);




  return (
    <section className='sectionWithNavbar'>
      <Navbar/>
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
            setShowAddNoteForm = { setShowAddNoteForm }
            notes = { notes }
            setNotes = { setNotes }
            />
            
          )}
        </div>

        {notes ? notes.map((note, index) => (
          <NoteCard key={index} Note={note} />
        )) : '' }
      </div>
    </section>
  );
};

