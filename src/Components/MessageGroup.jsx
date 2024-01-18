import Message from "./Message/Message"

export default function MessageGroup({ id, author, messages }) {
    let isOwn = author == 'own'

    return (
        <>
            <div className={`message-group ${isOwn ? 'message-group-own' : ''} d-flex flex-column `}>

                {
                    !isOwn && 
                    <span className='message-author'>{author}</span>
                }

                {
                    messages.map(message => {
                        return <Message key={message.id} {...message} />
                    })
                }
            </div>
        </>
    )
}