
import { useContext, createContext, Children } from "react"

const NoteContext = createContext();


const NoteProvider = ({children}) => {
  
  const contextValue = {
    // include state and functions

    

  }

 

  return <NoteContext.Provider value={contextValue}>{children}</NoteContext.Provider>
};

export const useNotes = () => {
  return useContext(NotesContext)
}

export default NotesProvider;