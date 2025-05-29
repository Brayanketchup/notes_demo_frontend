import React from 'react'
import { NoteCard } from '../components'
import { NOTES } from '../constants/Notes'

export const Home = () => {
  return (
    <section>
      <div className="container mx-auto px-4">
        {NOTES.map((Note, index) => (
          <NoteCard key={index} Note={Note} />
        ))
        }
      </div>
    </section>
  )
}
