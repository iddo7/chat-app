import { useState } from "react"

export default function MessageForm({ onSubmit }) {
    const defaultNewMessage = {
        author: 'own', // change later
        content: '',
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
            author: 'own', // change later
            content: e.target.value,
          })
        }
          type='text' 
          id='new-message-input' 
          className='form-control bg-dark text-white' 
        />
      </form>
    )
}