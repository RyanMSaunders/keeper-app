
import { useContext, createContext, useState, useEffect } from "react"
import axios from "axios";


const NoteContext = createContext();


const NoteProvider = ({children}) => {
   // include state and functions
  const [notes, setNotes] =  useState([]);
  
  // Fetch Notes

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/notes")
        console.log(response.data.notes);  // Check what is returned
        setNotes(response.data.notes);
      } catch(error) {
        console.log("Error Fetching Notes", error.message);
      }
    }
    fetchNotes();
  }, []);

  const addNote = async (newNote) => {
    try{
      const response = await axios.post("http://localhost:8080/api/notes", newNote);
      console.log('response.data', response.data);
      console.log('response.data.newNote', response.data.newNote );
      

      
      setNotes((prevNotes) => {
        return [...prevNotes, response.data.newNote];
      })
    } catch(error) {
        console.log("error adding note", error.message);
    }
  }

  const deleteNote = async(id) => {
    try{
      const response = await axios.delete(`http://localhost:8080/api/notes/${id}`);
      setNotes((prevNotes) => {
        return prevNotes.filter((note) => note.id !== id )
      })
    } catch(error) {
      console.log("Error Deleting Note", error.message)
    }
  }


  return (
    <NoteContext.Provider value={{notes, addNote, deleteNote}}>{children}</NoteContext.Provider>
  );
};

export const useNotes = () => {
  return useContext(NoteContext)
};

export default NoteProvider;