
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
  }, [])

  
 

  return (
    <NoteContext.Provider value={{notes}}>{children}</NoteContext.Provider>
  );
};

export const useNotes = () => {
  return useContext(NoteContext)
};

export default NoteProvider;