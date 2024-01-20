import { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import RoomsList from './Components/RoomsList/RoomsList'
import Room from './Components/Room/Room'

export default function App() {

  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RoomsList />} />
          <Route path='room/:id' element={<Room />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
