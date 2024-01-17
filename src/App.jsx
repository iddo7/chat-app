import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import MessageForm from './Components/MessageForm/MessageForm'

export default function App() {
  const [messages, setMessages] = useState([])

  function createMessage(message) {
    setMessages(currentMessages => {
      return [
        ...currentMessages,
        {
          id: crypto.randomUUID(),
          author: message.author,
          content: message.content,
        }
      ]
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

          <div className='message-group d-flex flex-column'>
            <span className='message-author'>Étienne Bourgeois Frappier</span>

            <div className='message'>
              <p>Sincèrement, ma passion c'est le yapping.</p>
            </div>

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

          {messages.map(message => {
            return (
              <div key={message.id} className='message-group d-flex flex-column'>
                <span className='message-author'>{message.author}</span>
    
                <div className='message'>
                  <p>{message.content}</p>
                </div>
              </div>
            )
          })}

        </section>

        <section className='message-form-section fixed-bottom'>
          <MessageForm onSubmit={createMessage} />
        </section>

      </div>
    </>
  )
}
