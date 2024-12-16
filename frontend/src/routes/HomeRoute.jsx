
import React from 'react'
import CreateArea from '../components/CreateArea'
import Note from '../components/Note'
import { useNotes } from '../contexts/noteContext'


export default function HomeRoute() {
  const { notes } = useNotes();
  console.log(notes);
  
  
  return (
    <div>
        {/* <CreateArea onAdd={addNote}></CreateArea> */}
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index} // make this id?
              title={noteItem.title}
              content={noteItem.content}
              // onDelete={deleteNote}
            />
          )
        })}
    </div>
  )
}
