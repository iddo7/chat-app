
export default function Message({ content, isCore }) {

    return (
        <>
            <div className={`message ${isCore ? 'message-core' : ''}`}>
                <p>{content}</p>
            </div>
        </>
    )
}