import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../App.scss'
import MessageForm from '../MessageForm/MessageForm'
import MessageGroup from '../MessageGroup/MessageGroup'

export default function Room() {
  const params = useParams()
  const [messages, setMessages] = useState([])
  const [messageGroups, setMessageGroups] = useState([])
  const scrollToBottom = useRef(null)

  useEffect(() => {
    fetchMessages()
  }, [])

  useEffect(() => {
    setMessageGroups(getMessageGroups())

    if (scrollToBottom.current) {
      scrollToBottom.current.scrollIntoView({ behaviour: 'smooth' })
    }
  }, [messages])

  const fetchMessages = () => {
    fetch(`http://localhost:8081/room/${params.id}/messages`)
    .then(response => response.json())
    .then(data => {
      setMessages(data)
    })
    .catch(error => {
        console.error(error)
    })
  }

  function getMessageGroups() {
    let newMessageGroups = []
    let lastMessage = null;
    
    if (messages.length === 0) return newMessageGroups

    messages.forEach(message => {

      if (lastMessage != null && message.authorId === lastMessage.authorId) {
        newMessageGroups[newMessageGroups.length -1].messages.push(message)
      }
      else {
        let newMessageGroup = {
          id: crypto.randomUUID(),
          authorId: message.authorId,
          messages: [message]
        }
        newMessageGroups.push(newMessageGroup)
      }

      lastMessage = message
    })
    
    return newMessageGroups
  }
  
  console.log(getMessageGroups())

  function createMessage(message) {
    fetch(`http://localhost:8081/room/${params.id}/messages/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    })
    .then(response => response.json())
    .then(data => {
      fetchMessages()
    })
    .catch(error => {
      console.error(error)
    })
    
  }

  return (
    <>
      <div className='container text-white'>

        <section className='header-section sticky-top'>
          <div className='d-flex flex-row align-items-center'>
            <img className='room-img' src='https://t4.ftcdn.net/jpg/02/01/10/87/360_F_201108775_UMAoFXBAsSKNcr53Ip5CTSy52Ajuk1E4.jpg' />
            <h1>Yappertown</h1>
            <div className="form-check form-switch ms-auto">
              <input type='checkbox' className='form-check-input' />
            </div>
          </div>
        </section>

        <section className='messages-section d-flex flex-column'>

          {
            messageGroups.map(messageGroup => {
              return (
                <MessageGroup {...messageGroup} key={messageGroup.id} />
              )
            })
          }

          <div className='scroll-to-bottom' ref={scrollToBottom}></div>

        </section>

        <section className='message-form-section fixed-bottom'>
          <MessageForm onSubmit={createMessage} roomId={params.id} />
        </section>

      </div>
    </>
  )
}
