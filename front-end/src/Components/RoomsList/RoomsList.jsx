import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle as fullCircle } from '@fortawesome/free-solid-svg-icons'
import { faCircle as emptyCircle } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'

export default function RoomsList() {
    const [rooms, setRooms] = useState([
        {
            id: 1,
            name: 'Yappertown',
            imageUrl: 'https://t4.ftcdn.net/jpg/02/01/10/87/360_F_201108775_UMAoFXBAsSKNcr53Ip5CTSy52Ajuk1E4.jpg', // Add the URL for the room image here
            usersId: [
                'JeTibault',
                'JuFortin',
                'own',
            ]
        },
        {
            id: 2,
            name: 'jeans koule',
            imageUrl: 'https://t4.ftcdn.net/jpg/02/01/10/87/360_F_201108775_UMAoFXBAsSKNcr53Ip5CTSy52Ajuk1E4.jpg', // Add the URL for the room image here
            usersId: [
                'JeTibault',
                'JuFortin',
                'own',
            ]
        },
        {
            id: 3,
            name: 'Jérémy Thibault',
            imageUrl: 'https://t4.ftcdn.net/jpg/02/01/10/87/360_F_201108775_UMAoFXBAsSKNcr53Ip5CTSy52Ajuk1E4.jpg', // Add the URL for the room image here
            usersId: [
                'JeTibault',
                'own',
            ]
        },
    ])

    return (
        <>
            <div className='container text-white'>
          
                <section className='rooms-list-section'>
                    <div className="d-flex flex-column">

                        {rooms.map(room => (
                            <Link 
                                key={room.id}
                                to={{
                                    pathname: `/room/${room.id}`,
                                    state: {
                                        room: room
                                    }
                                }}
                                className="room-preview d-flex flex-row align-items-center" 
                            >            
                                <img className='room-img' src={room.imageUrl} />
                                <div className="d-flex flex-column">
                                    <h2>{room.name}</h2>
                                </div>
                                <FontAwesomeIcon icon={room.usersId.length > 0 ? fullCircle : emptyCircle} className={`ms-auto ${false ? 'iconCore' : ''}`} />
                            </Link>
                        ))}
                
                    </div>
                </section>
            
            </div>
        </>
    )
}


