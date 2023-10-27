import { useState } from 'react'
import './App.css'
import CreateFruits from './Pages/CreateFruits'
import Fruits from './Pages/Fruits'
import { Link, Route, Routes } from 'react-router-dom'
import CreateVeggies from './Pages/CreateVeggies'
import Veggies from './Pages/Veggies'

function App() {


  return (
  
 

 <>
    <nav>
      <Link to="/">
        Home
      </Link>
      <br/>
      <Link to="/create">
        Create Fruits
      </Link>
      <br/>
      <Link to="/veggies">
        Veggie
      </Link>
      <br/>
      <Link to="/veggies/create">
        Create Veggies
      </Link>
    </nav>
    <Routes>
      <Route path='/' element={<Fruits />} />
      <Route path='/create' element={<CreateFruits />}/>
      <Route path='/veggies' element={<Veggies />} />
      <Route path='veggies/create' element={<CreateVeggies />}/>
    </Routes>
    </>
  )
}
export default App
