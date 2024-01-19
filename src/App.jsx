import { useEffect, useRef, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

export default function App() {

  return (
    <>
      <div className='container text-white'>
        
        <section className='rooms-list-section'>
          <div className="d-flex flex-column">

            <div className="room-preview d-flex flex-row align-items-center">            
              <img className='room-img' src='https://t4.ftcdn.net/jpg/02/01/10/87/360_F_201108775_UMAoFXBAsSKNcr53Ip5CTSy52Ajuk1E4.jpg' />
              <h2>Yappertown</h2>
            </div>

            <div className="room-preview d-flex flex-row align-items-center">            
              <img className='room-img' src='https://t4.ftcdn.net/jpg/02/01/10/87/360_F_201108775_UMAoFXBAsSKNcr53Ip5CTSy52Ajuk1E4.jpg' />
              <div className="d-flex flex-column">
                <h2>Yappertown</h2>
                <p>
                  Lorem ipsum bla blu.
                </p>
              </div>
            </div>

          </div>
        </section>

      </div>
    </>
  )
}
