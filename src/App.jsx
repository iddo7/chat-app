import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import MessageForm from './Components/MessageForm/MessageForm'
import MessageGroup from './Components/MessageGroup'

export default function App() {
  const [messages, setMessages] = useState([])
  const [messageGroups, setMessageGroups] = useState([])

  console.log(messageGroups)
  
/*
  function createMessage(message) {
    const message = {
      id: crypto.randomUUID(),
      author: message.author,
      content: message.content,
    }
    setMessages(currentMessages => {
      return [...currentMessages, message]
    })
  }*/

  function createMessageAlt(message) { 
    if (messageGroups.length === 0) {
      setMessageGroups((currentMessageGroups) => {
        return [
          {
            id: crypto.randomUUID(),
            author: message.author,
            messages: [message]
          }
        ]
      })
      return
    }

    setMessageGroups((currentMessageGroups) => {
      return currentMessageGroups.map(messageGroup => {

        if (messageGroup.author === message.author) { 
          // If new message's author is the same as a group's then update it's messages to add the new one
          return {...messageGroup, messages: [...messageGroup.messages, message] }
        }
        else {
          return {
            id: crypto.randomUUID(),
            author: message.author,
            messages: [message]
          }
        }

    })})
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

          <div className='message-group d-flex flex-column'>
            <span className='message-author'>Étienne Bourgeois Frappier</span>

            <div className='message message-core'>
              <p>Ceci est un message important !!</p>
            </div>
          </div>

          <div className='message-group message-group-own ms-auto d-flex flex-column'>
            {/* <span className='message-author'>Étienne Bourgeois Frappier</span> */}
            

            <div className='message'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>




          {messageGroups.map(messageGroup => {
            return (
              <MessageGroup {...messageGroup} key={messageGroup.id} />
            )
          })}

        </section>

        <section className='message-form-section fixed-bottom'>
          <MessageForm onSubmit={createMessageAlt} />
        </section>

      </div>
    </>
  )
}
