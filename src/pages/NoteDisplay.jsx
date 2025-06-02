import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { NOTES } from '../constants/Notes'
import { NoteCard } from '../components/NoteCard';

export const NoteDisplay = () => {
  const { noteId } = useParams();


  return (
    <div>
      here goes the note display
    </div>
  )
}
