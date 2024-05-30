import Chat from './Chat'

interface chatProp {
  id: string
  question: string
  response: string
}

const ChatList = ({ data }: { data: chatProp[] }) => {
  return (
    <div className=''>
      {data.map((item: chatProp) => {
        return <Chat key={item.id} {...item} />
      })}
    </div>
  )
}

export default ChatList
