import { FaRobot } from 'react-icons/fa6'

interface chatProps {
  question: string
  response: string
}

const Chat = ({ question, response }: chatProps) => {
  return (
    <div>
      <div className='chat chat-end'>
        <div className='chat-image avatar'>
          <div className='w-10 rounded-full'>
            <img
              alt='Tailwind CSS chat bubble component'
              src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
            />
          </div>
        </div>
        <div className='chat-header'>
          You
          <time className='text-xs opacity-50'>12:45</time>
        </div>
        <div className='chat-bubble chat-bubble-primary'>{question}</div>
        <div className='chat-footer opacity-50'>Delivered</div>
      </div>
      <div className='chat chat-start'>
        <div className='chat-image avatar'>
          <div className='w-10 rounded-full flex justify-center items-center'>
            {/* <img
              alt='Tailwind CSS chat bubble component'
              src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
            /> */}
            <FaRobot className='text-4xl' />
          </div>
        </div>
        <div className='chat-header'>
          Quickbot
          <time className='text-xs opacity-50'>12:46</time>
        </div>
        <div className='chat-bubble chat-bubble-secondary'>{response}</div>
        <div className='chat-footer opacity-50'>Seen at 12:46</div>
      </div>
    </div>
  )
}

export default Chat
