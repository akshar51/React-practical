import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Admin from './pages/Admin'

const App = () => {
  return (
    <>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </>
  )
}

export default App

