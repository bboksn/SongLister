import React from 'react'
import {Routes,Route } from 'react-router-dom'
import Nav from './Nav'
import FormPage from './FormPage'
import Cardspage from './Cardspage'
import About from './About'
export default function App() {
  return (
    <>
    <Nav></Nav>
    <Routes>
      <Route path='/' element={<FormPage/>}/>
      <Route path='Songlist' element={<Cardspage/>}/>
      <Route path='About' element={<About/>}/>
    </Routes>
    </>
  )
}
