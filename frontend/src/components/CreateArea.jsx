import React from 'react'
import { useState } from 'react'
import { useNotes } from '../contexts/noteContext';



export default function CreateArea(props) {
  const { addNote } = useNotes();

  const [note, setNote] = useState({title: "", content: ""});

function handleChange(event) {
  const {name, value} = event.target;
  setNote(prevNote => {
    return {
      ...prevNote,
      [name]: value
    }
  })
}

function submitNote(event) {
  event.preventDefault();
  console.log("CreateArea: submitNote - note to add:", note); // Debug: Log note before adding
  props.onAdd(note)
  setNote({
    title: "",
    content: ""
  })
  
}


  return (
    <form>
      <input type="text" name='title' onChange={handleChange} value={note.title} placeholder='Title'/>
      <textarea name="content" onChange={handleChange} value={note.content} placeholder='Take a note..'rows="3"></textarea>
      <button onClick={submitNote}>Add</button>
    </form>
  )
}
