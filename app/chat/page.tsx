import { auth } from '@/auth'
import TemplatePrompts from '@/components/chat/TemplatePrompts'

const ChatPage = async () => {
  const session = await auth()

  return (
    <div className='flex flex-col justify-center items-center h-full'>
      <TemplatePrompts />
    </div>
  )
}

export default ChatPage
