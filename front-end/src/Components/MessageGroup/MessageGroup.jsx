import Message from "../Message/Message"

export default function MessageGroup({ authorId, messages }) {
    let isOwn = authorId == 'own'

    return (
        <>
            <div className={`message-group ${isOwn ? 'message-group-own' : ''} d-flex flex-column `}>

                {
                    !isOwn && 
                    <span className='message-author'>{authorId}</span>
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