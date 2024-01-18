import Message from "./Message/Message"

export default function MessageGroup({ id, author, messages }) {

    return (
        <>
            <div className='message-group d-flex flex-column'>
                <span className='message-author'>{author}</span>

                {messages.map(message => {
                    return <Message key={message.id} content={message.content} />
                })}
            </div>
        </>
    )
}