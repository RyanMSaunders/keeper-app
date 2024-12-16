import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { Routes, Route } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeRoute from './routes/HomeRoute'
import NotesProvider from './contexts/noteContext'

function App() {
 

  return (
    <>
      <Header />
      <Routes>
        <NotesProvider>
        <Route path="/" element={< HomeRoute />} />
        </NotesProvider>
      </Routes>
      <Footer />
    </>
  )
}

export default App;
