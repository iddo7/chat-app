import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle as fullCircle } from '@fortawesome/free-solid-svg-icons'
import { faCircle as emptyCircle } from '@fortawesome/free-regular-svg-icons'
import { useEffect, useState } from 'react'

export default function RoomsList() {
    const [rooms, setRooms] = useState([])
    const liveReload = false

    useEffect(() => {
        // Fetch the rooms from the server
        const fetchRooms = () => {
            fetch('http://localhost:8081/rooms')
            .then(response => response.json())
            .then(data => {
                setRooms(data)
            })
            .catch(error => {
                console.error(error)
            })
        }

        fetchRooms()

        if (liveReload) {
            // Fetch the rooms from the server every 5 seconds
            const interval = setInterval(fetchRooms, 5000)
            return () => clearInterval(interval)
        }

    }, [])

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
                                <FontAwesomeIcon icon={false ? fullCircle : emptyCircle} className={`ms-auto ${false ? 'iconCore' : ''}`} />
                            </Link>
                        ))}
                
                    </div>
                </section>
            
            </div>
        </>
    )
}


