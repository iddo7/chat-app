import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle as fullCircle } from '@fortawesome/free-solid-svg-icons'
import { faCircle as emptyCircle } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'

export default function RoomsList() {
    const [rooms, setRooms] = useState([])

    return (
        <>
            <div className='container text-white'>
          
                <section className='rooms-list-section'>
                    <div className="d-flex flex-column">
                
                    <Link to='/a'>
                        <div className="room-preview d-flex flex-row align-items-center">            
                        <img className='room-img' src='https://t4.ftcdn.net/jpg/02/01/10/87/360_F_201108775_UMAoFXBAsSKNcr53Ip5CTSy52Ajuk1E4.jpg' />
                        <div className="d-flex flex-column">
                            <h2>Yappertown</h2>
                        </div>
                            <FontAwesomeIcon icon={fullCircle} className='ms-auto icon-core' />
                        </div>
                    </Link>
                
                
                    <div className="room-preview d-flex flex-row align-items-center">            
                        <img className='room-img' src='https://t4.ftcdn.net/jpg/02/01/10/87/360_F_201108775_UMAoFXBAsSKNcr53Ip5CTSy52Ajuk1E4.jpg' />
                        <div className="d-flex flex-column">
                        <h2>jeans koule</h2>
                        </div>
                        <FontAwesomeIcon icon={fullCircle} className='ms-auto' />
                    </div>
                
                    <div className="room-preview d-flex flex-row align-items-center">            
                        <img className='room-img' src='https://t4.ftcdn.net/jpg/02/01/10/87/360_F_201108775_UMAoFXBAsSKNcr53Ip5CTSy52Ajuk1E4.jpg' />
                        <div className="d-flex flex-column">
                        <h2>Jérémy Thibault</h2>
                        </div>
                        <FontAwesomeIcon icon={emptyCircle} className='ms-auto' />
                    </div>
                
                    </div>
                </section>
            
            </div>
        </>
    )
}


