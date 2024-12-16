import React from 'react'
import { useState } from 'react'

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
export default function CreateArea() {
  return (
    <form action="submit">
      <input type="text" name='title' onChange={handleChange} value={note.title}/>
      <textarea name="content" onChange={handleChange} value={note.content} rows="3"></textarea>
      <button>Add</button>
    </form>
  )
}
