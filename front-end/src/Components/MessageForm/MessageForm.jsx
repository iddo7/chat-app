import { useState } from "react"
import './MessageForm.scss'

export default function MessageForm({ onSubmit, roomId }) {
    const defaultNewMessage = {
        roomId: roomId, //change later
        authorId: 'own', // change later
        content: '',
        isCore: false,
    }
    const [newMessage, setNewMessage] = useState(defaultNewMessage)

    function handleSubmit(e) {
      e.preventDefault()
      if (newMessage.content === '') return
  
      onSubmit(newMessage)
      setNewMessage(defaultNewMessage)
    }

    return (
        <form onSubmit={handleSubmit}>
        <input 
          value={newMessage.content}
          onChange={e => setNewMessage({
            id: crypto.randomUUID(),
            createdAt: new Date(), // change later use database
            roomId: roomId, //change later
            authorId: 'own', // change later
            content: e.target.value,
            isCore: false,
          })}
          placeholder="Message"
          type='text' 
          id='new-message-input' 
          className='form-control text-white' 
        />
      </form>
    )
}