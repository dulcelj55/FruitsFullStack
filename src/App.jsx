import { useState } from 'react'
import './App.css'
import CreateFruits from './Pages/CreateFruits'
import Fruits from './Pages/Fruits'
import { Link, Route, Routes } from 'react-router-dom'

function App() {


  return (
  
 

 <>
    <nav>
      <Link to="/">
        Home
      </Link>
      <br/>
      <Link to="/create">
        Create
      </Link>
    </nav>
    <Routes>
      <Route path='/' element={<Fruits />} />
      <Route path='/create' element={<CreateFruits />}/>
    </Routes>
    </>
  )
}
export default App
