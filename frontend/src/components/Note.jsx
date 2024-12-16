import React from 'react'
import { useNotes } from '../contexts/noteContext'

export default function Note(props) {
  const {deleteNote} = useNotes();

  function handleClick() {
    deleteNote(props.id)
  }
  return (
    <div className='note'>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>Delete</button>
    </div>
  )
}
