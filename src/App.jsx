import { useEffect, useRef, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import MessageForm from './Components/MessageForm/MessageForm'
import MessageGroup from './Components/MessageGroup/MessageGroup'

export default function App() {
  const [messages, setMessages] = useState([])
  const [messageGroups, setMessageGroups] = useState([])
  const scrollToBottom = useRef(null)

  useEffect(() => {
    setMessageGroups(getMessageGroups())


    if (scrollToBottom.current) {
      scrollToBottom.current.scrollIntoView({ behaviour: 'smooth' })

    }
  }, [messages])



  function getMessageGroups() {
    let newMessageGroups = []
    let lastMessage = null;
    
    if (messages.length === 0) return newMessageGroups

    messages.forEach(message => {

      if (lastMessage != null && message.author === lastMessage.author) {
        newMessageGroups[newMessageGroups.length -1].messages.push(message)
      }
      else {
        let newMessageGroup = {
          id: crypto.randomUUID(),
          author: message.author,
          messages: [message]
        }
        newMessageGroups.push(newMessageGroup)
      }

      lastMessage = message
    })
    
    return newMessageGroups
  }
  

  function createMessage(message) {
    setMessages(currentMessages => {
      return [...currentMessages, message]
    })

  }



  return (
    <>
      <div className='container text-white'>

        <section className='header-section'>
          <div className='d-flex flex-row align-items-center'>
            <img src='https://t4.ftcdn.net/jpg/02/01/10/87/360_F_201108775_UMAoFXBAsSKNcr53Ip5CTSy52Ajuk1E4.jpg' />
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

          <div class='scroll-to-bottom' ref={scrollToBottom}></div>

        </section>

        <section className='message-form-section fixed-bottom'>
          <MessageForm onSubmit={createMessage} />
        </section>

      </div>
    </>
  )
}
