import { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import RoomsList from './Components/RoomsList/RoomsList'
import Room from './Components/Room/Room'
import SignUpForm from './Components/SignUpForm/SignUpForm'

export default function App() {

  return (
    <>
    <div className="container text-white">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUpForm />} />
          <Route path='room/:id' element={<Room />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}
